"use client";
import {useCallback, useEffect, useMemo, useState} from "react";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import CookieBanner from "./cookie_banner";
import Nav from "./nav";

export const App = ({ inter, children }) => {

    let _window = useMemo(() => typeof(window) === "undefined" ? function() {} : window, []);

    const matchMedia = useCallback((query) => {
        if(typeof(window) !== "undefined") {
            return _window?.matchMedia(query);
        }
        return {
            matches : false,
            addListener : function() {},
            removeListener: function() {}
        };
    }, [_window]);

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    useEffect(() => {
        if(matchMedia("(prefers-color-scheme: dark)").matches == false) {
            setDarkMode("light");
        } else {
            setDarkMode("dark");
        }
    }, [_window, _window?.matchMedia, matchMedia], matchMedia('(prefers-color-scheme: dark)'));

    const pathname = usePathname()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [darkMode, setDarkMode] = useState("auto");
    
    return (
        <html lang="en" data-bs-theme={darkMode}>
        <body className={`${inter.className} body`}>
          <Nav/>
          {children}
          <CookieBanner />
          <Footer />
        </body>
      </html>
    )
};

export default App;