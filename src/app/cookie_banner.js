"use client";
import {useEffect, useState} from "react";
import {getCookie, setCookie} from "./utils";


const CookieBanner = () => {
    let cookieBanner = getCookie("wc_cookie_banner");
    useEffect(() => {
        if (cookieBanner) {
            setShowBanner(false);
        }
    }, [cookieBanner])
    const [showBanner, setShowBanner] = useState(true);

    const bannerClose = () => {
        setShowBanner(false);
        setCookie("wc_cookie_banner", "true", 365);
    }
    return (
        <div id="cb-cookie-banner" className={`alert text-center mb-0 fixed-bottom ${showBanner ? '' : 'd-none'}`} role="alert">
        &#x1F36A; This website uses cookies to ensure you get the best experience on our website.
        <a href="https://www.cookiesandyou.com/" target="blank">Learn more</a>
        <button type="button" className="btn btn-primary btn-sm ms-3" onClick={() => bannerClose()}>
            I Got It
        </button>
        </div>
    );
};

export default CookieBanner;