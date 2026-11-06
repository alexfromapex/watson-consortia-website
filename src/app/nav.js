"use client";
import "./nav.css";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "./components/icons";

const SERVICES = [
  { href: "/3d-vfx", icon: "3d-modeling", title: "3D Assets & VFX", text: "For film and game production" },
  { href: "/fabrication", icon: "fabrication", title: "Prototyping & Fabrication", text: "3D printing, CNC & custom models" },
  { href: "/ai-ml", icon: "ai-ml", title: "AI & Machine Learning", text: "Models, LLMs, and ML pipelines" },
  { href: "/big-data", icon: "big-data", title: "Big Data", text: "Petabyte-scale platforms" },
  { href: "/software", icon: "software", title: "Software Engineering", text: "Cloud-native, security-first systems" },
];

const Nav = () => {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const bootstrapRef = useRef(null);

  useEffect(() => {
    bootstrapRef.current = require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after choosing a link.
  const closeMenu = () => {
    const menu = document.getElementById("wcNavMenu");
    if (menu?.classList.contains("show")) {
      const Collapse = bootstrapRef.current?.Collapse;
      if (Collapse) Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
    }
  };

  const solid = scrolled || path !== "/";

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top wc-nav${solid ? " is-solid" : ""}`}
      aria-label="Primary"
    >
      <div className="wc-container wc-nav__inner">
        <Link href="/" className="navbar-brand wc-nav__brand" onClick={closeMenu}>
          <img
            className="wc-nav__logo"
            src="/assets/logo-wordmark-reversed.svg"
            alt="Watson Consortia"
            width="135"
            height="36"
          />
        </Link>

        <button
          className="navbar-toggler wc-nav__toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#wcNavMenu"
          aria-controls="wcNavMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse wc-nav__menu" id="wcNavMenu">
          <ul className="navbar-nav wc-nav__links">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle wc-nav__link"
                href="#"
                id="wcServicesMenu"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu wc-menu" aria-labelledby="wcServicesMenu">
                <p className="wc-menu__label">Services</p>
                {SERVICES.map((s) => (
                  <Link key={s.href} className="dropdown-item wc-menu__item" href={s.href} onClick={closeMenu}>
                    <span className="wc-menu__icon">
                      <Icon name={s.icon} size={24} />
                    </span>
                    <span>
                      <span className="wc-menu__title">{s.title}</span>
                      <span className="wc-menu__text">{s.text}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link wc-nav__link" href="/#approach" onClick={closeMenu}>Approach</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link wc-nav__link" href="/#industries" onClick={closeMenu}>Industries</Link>
            </li>
          </ul>
          <Link href="/contact-us" className="btn btn-primary wc-btn wc-btn--sm wc-nav__cta" onClick={closeMenu}>
            Contact us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
