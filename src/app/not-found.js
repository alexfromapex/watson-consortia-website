import Link from "next/link";
import Icon from "./components/icons";
import "./components/page-kit.css";

export default function NotFound() {
  return (
    <main className="main wc-page">
      <section className="wc-page-hero wc-night wc-notfound">
        <div className="wc-container wc-page-hero__inner">
          <p className="wc-eyebrow">404</p>
          <h1 className="wc-page-hero__title">This page could not be found.</h1>
          <p className="wc-page-hero__lede">
            The link may be out of date, or the page may have moved.
          </p>
          <div className="wc-page-hero__actions">
            <Link href="/" className="btn btn-primary wc-btn">
              Go to the homepage
            </Link>
            <Link href="/contact-us" className="wc-link wc-link--light">
              Contact us <Icon name="arrow-right" size={18} stroke={1.75} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
