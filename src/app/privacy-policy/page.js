import Link from "next/link";
import "../components/page-kit.css";
import "./privacy-policy.css";

const PrivacyPolicy = () => {
  const currentDate = new Date().toDateString();

  return (
    <main className="main wc-page">
      <section className="wc-page-hero wc-night wc-legal-hero">
        <div className="wc-container wc-page-hero__inner">
          <p className="wc-eyebrow">Legal</p>
          <h1 className="wc-page-hero__title">Privacy Policy for Watson Consortia, LLC</h1>
          <p className="wc-page-hero__lede">Last updated: {currentDate}</p>
        </div>
      </section>

      <section className="wc-light wc-legal">
        <div className="wc-container">
          <article className="wc-prose">
            <p className="wc-prose__intro">
              At Watson Consortia, LLC, we are committed to protecting your privacy and ensuring the security of
              your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data
              when you visit our website (www.watsonconsortia.com) or use our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information that you provide directly to us, such as your name, email
              address, and any other information you choose to provide when contacting us or using our services.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate
              with you, and to comply with legal obligations.
            </p>

            <h2>3. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>

            <h2>4. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also have the
              right to restrict or object to certain processing of your data.
            </p>

            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page.
            </p>

            <h2>6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <address className="wc-prose__address">
              Watson Consortia, LLC
              <br />
              1391 Kildaire Farm Rd #1041
              <br />
              Cary, NC 27511
              <br />
              Website: www.watsonconsortia.com
              <br />
              E-mail: <a href="mailto:support@watsonconsortia.com">support@watsonconsortia.com</a>
              <br />
              Web Form: <Link href="/contact-us">Contact</Link>
            </address>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
