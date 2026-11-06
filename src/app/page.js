import Link from "next/link";
import "./home.css";
import HeroVideo from "./components/hero-video";
import Icon from "./components/icons";

const PROOF = [
  {
    title: "Fortune 500",
    text: "Technology selection and data strategy drawn from Fortune 500 engagements.",
  },
  {
    title: "Petabyte scale",
    text: "Distributed and in-memory architectures built for real-time analytics.",
  },
  {
    title: "Complex data",
    text: "AI-driven data mining for clinical trials and other complex domains.",
  },
];

const SERVICES = [
  {
    icon: "ai-ml",
    title: "AI & Machine Learning",
    text: "Custom models in PyTorch and TensorFlow, large language model integration, and scalable ML pipelines on AWS SageMaker and Azure ML.",
    href: "/ai-ml",
  },
  {
    icon: "big-data",
    title: "Big Data",
    text: "Petabyte-scale architectures, real-time analytics, and cloud data platforms, from DAG-based orchestration to distributed in-memory compute.",
    href: "/big-data",
  },
  {
    icon: "software",
    title: "Software Engineering",
    text: "Microservice, serverless, and cloud-native systems, built security-first with continuous integration, code review, and thorough documentation.",
    href: "/software",
  },
  {
    icon: "3d-modeling",
    title: "3D Assets & VFX",
    text: "Cinematography with composited visual effects for film and games, plus game-ready and film-quality 3D assets, built on open-source tools.",
    href: "/3d-vfx",
  },
  {
    icon: "fabrication",
    title: "Prototyping & Fabrication",
    text: "In-house 3D printing and CNC for small-scale prototypes, custom STL models built to your specifications, and practical fabrication consulting.",
    href: "/fabrication",
  },
];

const APPROACH = [
  {
    icon: "pipeline",
    title: "Data to deployment",
    text: "Data preparation, model development, deployment, and monitoring, handled by one accountable team.",
  },
  {
    icon: "cloud",
    title: "Cloud-native by default",
    text: "Scalable architectures that grow with your data volumes and complexity.",
  },
  {
    icon: "eye",
    title: "Responsible AI",
    text: "Fairness, transparency, and privacy are designed into every model.",
  },
  {
    icon: "shield",
    title: "Security first",
    text: "Software and data protected by design, from architecture through release.",
  },
];

const INDUSTRIES = [
  { icon: "healthcare", title: "Healthcare" },
  { icon: "life-sciences", title: "Life Sciences" },
  { icon: "biometrics", title: "Biometrics" },
  { icon: "finance", title: "Finance" },
  { icon: "energy", title: "Energy" },
  { icon: "manufacturing", title: "Manufacturing" },
  { icon: "construction", title: "Construction" },
  { icon: "visual-production", title: "3D Services" },
];

export default function Home() {
  return (
    <>
      <title>Watson Consortia</title>
      <main className="main wc-home">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="wc-hero wc-night" id="top">
          <div className="wc-container wc-hero__intro">
            <p className="wc-eyebrow">Software · Machine learning · Data engineering</p>
            <h1 className="wc-hero__title">Engineering intelligence for the enterprise.</h1>
            <p className="wc-hero__lede">
              Software, machine learning, and data platforms, built by practitioners with
              Fortune 500 experience and engineered to scale.
            </p>
            <div className="wc-hero__actions">
              <Link href="/contact-us" className="btn btn-primary wc-btn">
                Start a conversation
              </Link>
              <a href="#services" className="wc-link wc-link--light">
                Explore services <Icon name="arrow-right" size={18} stroke={1.75} />
              </a>
            </div>
          </div>

          <HeroVideo />

          <div className="wc-container">
            <ul className="wc-proof">
              {PROOF.map((p) => (
                <li key={p.title}>
                  <p className="wc-proof__title">{p.title}</p>
                  <p className="wc-proof__text">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section className="wc-section wc-light" id="services" aria-labelledby="services-title">
          <div className="wc-container">
            <div className="wc-section__head">
              <p className="wc-eyebrow">Services</p>
              <h2 className="wc-section__title" id="services-title">
                Five disciplines. One engineering standard.
              </h2>
              <p className="wc-section__lede">
                From architecture through deployment and monitoring, every engagement is
                delivered end to end.
              </p>
            </div>

            <div className="wc-services">
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} className="wc-tile">
                  <span className="wc-tile__watermark" aria-hidden="true">
                    <Icon name={s.icon} size={300} stroke={0.5} />
                  </span>
                  <Icon name={s.icon} size={44} stroke={1.25} />
                  <span className="wc-tile__body">
                    <span className="wc-tile__title">{s.title}</span>
                    <span className="wc-tile__text">{s.text}</span>
                    <span className="wc-link">
                      Learn more <Icon name="arrow-right" size={18} stroke={1.75} />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Approach ─────────────────────────────────────────── */}
        <section className="wc-section wc-night" id="approach" aria-labelledby="approach-title">
          <div className="wc-container wc-approach">
            <div className="wc-approach__head">
              <p className="wc-eyebrow">Approach</p>
              <h2 className="wc-section__title" id="approach-title">
                Built to last, from the first dataset to production.
              </h2>
              <p className="wc-section__lede">
                The same principles guide every engagement, whatever the technology.
              </p>
            </div>
            <ul className="wc-approach__list">
              {APPROACH.map((a) => (
                <li key={a.title} className="wc-approach__item">
                  <Icon name={a.icon} size={36} stroke={1.25} />
                  <div>
                    <h3 className="wc-approach__title">{a.title}</h3>
                    <p className="wc-approach__text">{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Industries ───────────────────────────────────────── */}
        <section className="wc-section wc-light wc-section--tight-bottom" id="industries" aria-labelledby="industries-title">
          <div className="wc-container">
            <div className="wc-section__head">
              <p className="wc-eyebrow">Industries</p>
              <h2 className="wc-section__title" id="industries-title">
                Built for industries that run on complex data.
              </h2>
            </div>
            <ul className="wc-industries">
              {INDUSTRIES.map((i) => (
                <li key={i.title} className="wc-industry">
                  <Icon name={i.icon} size={36} stroke={1.25} />
                  <span className="wc-industry__title">{i.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section className="wc-light wc-contact" id="contact" aria-labelledby="contact-title">
          <div className="wc-container">
            <div className="wc-contact__panel wc-night">
              <img className="wc-contact__art" src="/assets/hero-still.jpg" alt="" aria-hidden="true" />
              <div className="wc-contact__body">
                <h2 className="wc-contact__title" id="contact-title">
                  Let’s talk about what you’re building.
                </h2>
                <p className="wc-contact__text">Contact us to schedule a consultation.</p>
                <Link href="/contact-us" className="btn btn-primary wc-btn">
                  Start a conversation
                </Link>
                <p className="wc-contact__assurance">
                  <Icon name="shield" size={18} stroke={1.5} />
                  We carry Errors &amp; Omissions insurance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
