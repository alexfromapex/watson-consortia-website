import Link from "next/link";
import Icon from "./icons";
import "./page-kit.css";

/* Building blocks shared by the homepage and the inner pages.
 * Tones: "light" (page), "soft" (grey band), "night" (always dark).
 */

export function PageHero({ eyebrow, title, lede, art, artClassName = "", primary, secondary }) {
  return (
    <section className="wc-page-hero wc-night">
      {art ? (
        <img className={`wc-page-hero__art ${artClassName}`.trim()} src={art} alt="" aria-hidden="true" />
      ) : null}
      <div className="wc-container wc-page-hero__inner">
        {eyebrow ? <p className="wc-eyebrow">{eyebrow}</p> : null}
        <h1 className="wc-page-hero__title">{title}</h1>
        {lede ? <p className="wc-page-hero__lede">{lede}</p> : null}
        {primary || secondary ? (
          <div className="wc-page-hero__actions">
            {primary ? (
              <Link href={primary.href} className="btn btn-primary wc-btn">
                {primary.label}
              </Link>
            ) : null}
            {secondary ? (
              <a href={secondary.href} className="wc-link wc-link--light">
                {secondary.label} <Icon name="arrow-right" size={18} stroke={1.75} />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function Section({ id, tone = "light", eyebrow, title, lede, split = false, children, className = "" }) {
  const titleId = id && title ? `${id}-title` : undefined;
  const hasHead = Boolean(eyebrow || title || lede);
  const head = hasHead ? (
    <div className="wc-section__head">
      {eyebrow ? <p className="wc-eyebrow">{eyebrow}</p> : null}
      {title ? (
        <h2 className="wc-section__title" id={titleId}>
          {title}
        </h2>
      ) : null}
      {lede ? <div className="wc-section__lede">{lede}</div> : null}
    </div>
  ) : null;
  return (
    <section
      id={id}
      className={`wc-section wc-${tone} ${className}`.trim()}
      aria-labelledby={titleId}
    >
      <div className={`wc-container${split ? " wc-split" : ""}`}>
        {split ? (
          <>
            <div className="wc-split__head">{head}</div>
            <div className="wc-split__body">{children}</div>
          </>
        ) : (
          <>
            {head}
            <div className={hasHead ? "wc-section__body" : undefined}>{children}</div>
          </>
        )}
      </div>
    </section>
  );
}

export function FeatureCards({ items, wide = false }) {
  return (
    <ul className={`wc-cards${wide ? " wc-cards--wide" : ""}`}>
      {items.map((item) => (
        <li key={item.title} className="wc-card">
          {item.icon ? <Icon name={item.icon} size={wide ? 44 : 36} stroke={1.25} /> : null}
          <div>
            <h3 className="wc-card__title">{item.title}</h3>
            <p className="wc-card__text">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="wc-checks">
      {items.map((item) => (
        <li key={typeof item === "string" ? item : item.key} className="wc-checks__item">
          <Icon name="check" size={20} stroke={1.75} className="wc-checks__icon" />
          <span>{typeof item === "string" ? item : item.content}</span>
        </li>
      ))}
    </ul>
  );
}

export function IconList({ items }) {
  return (
    <ul className="wc-ilist">
      {items.map((item) => (
        <li key={item.title} className="wc-ilist__item">
          <Icon name={item.icon} size={36} stroke={1.25} />
          <div>
            <h3 className="wc-ilist__title">{item.title}</h3>
            <p className="wc-ilist__text">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function CtaPanel({ id = "contact", title, text, label = "Start a conversation", href = "/contact-us" }) {
  return (
    <section className="wc-light wc-cta" id={id} aria-labelledby={`${id}-title`}>
      <div className="wc-container">
        <div className="wc-cta__panel wc-night">
          <img className="wc-cta__art" src="/assets/hero-still.jpg" alt="" aria-hidden="true" />
          <div className="wc-cta__body">
            <h2 className="wc-cta__title" id={`${id}-title`}>
              {title}
            </h2>
            {text ? <p className="wc-cta__text">{text}</p> : null}
            <Link href={href} className="btn btn-primary wc-btn">
              {label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
