"use client";
import "./cookie_banner.css";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "./utils";
import Icon from "./components/icons";

const CookieBanner = () => {
  // Hidden until mounted, so returning visitors never see it flash.
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!getCookie("wc_cookie_banner")) {
      setShowBanner(true);
    }
  }, []);

  const bannerClose = () => {
    setShowBanner(false);
    setCookie("wc_cookie_banner", "true", 365);
  };

  if (!showBanner) return null;

  return (
    <div id="cb-cookie-banner" className="wc-cookie" role="region" aria-label="Cookie notice">
      <div className="wc-cookie__row">
        <span className="wc-cookie__icon">
          <Icon name="cookie" size={26} />
        </span>
        <p className="wc-cookie__text">
          This website uses cookies to ensure you get the best experience on our website.
        </p>
      </div>
      <div className="wc-cookie__actions">
        <button type="button" className="btn wc-cookie__btn" onClick={bannerClose}>
          I got it
        </button>
        <a className="wc-cookie__link" href="https://www.cookiesandyou.com/" target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default CookieBanner;
