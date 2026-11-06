"use client";
import "./footer.css";
import Link from "next/link";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { href: "/3d-vfx", label: "3D Assets & VFX" },
      { href: "/fabrication", label: "Prototyping & Fabrication" },
      { href: "/ai-ml", label: "AI & Machine Learning" },
      { href: "/big-data", label: "Big Data" },
      { href: "/software", label: "Software Engineering" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/contact-us", label: "Contact Us" },
    ],
  },
  {
    title: "Legal",
    links: [{ href: "/privacy-policy", label: "Privacy Policy" }],
  },
];

const Footer = () => {
  return (
    <footer className="wc-footer">
      <div className="wc-container">
        <div className="wc-footer__top">
          <div className="wc-footer__brand">
            <Link href="/" className="wc-footer__logo-link">
              <img className="wc-footer__logo wc-footer__logo--light" src="/assets/logo-wordmark.svg" alt="Watson Consortia" width="120" height="32" />
              <img className="wc-footer__logo wc-footer__logo--dark" src="/assets/logo-wordmark-reversed.svg" alt="Watson Consortia" width="120" height="32" />
            </Link>
            <p className="wc-footer__tagline">
              Software engineering, machine learning, AI, and data engineering consulting.
            </p>
          </div>
          <nav className="wc-footer__cols" aria-label="Footer">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="wc-footer__heading">{col.title}</h2>
                <ul className="wc-footer__list">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="wc-footer__link">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="wc-footer__legal">
          &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Watson Consortia, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
