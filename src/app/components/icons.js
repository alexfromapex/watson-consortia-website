// Watson Consortia icon family.
// Construction: 24 x 24 grid, 2-unit live-area margin, 1.5 stroke, round caps and joins.
// Product icons carry exactly one filled accent node (.wc-icon__node), colored by --wc-node.
// Interface glyphs (arrow-right, chevron-down, mail) stay monochrome.

const PATHS = {
  "ai-ml": (
    <>
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M9.5 3v3M14.5 3v3M9.5 18v3M14.5 18v3M3 9.5h3M3 14.5h3M18 9.5h3M18 14.5h3" />
      <circle className="wc-icon__node" cx="12" cy="12" r="2" />
    </>
  ),
  "big-data": (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" />
      <path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
      <circle className="wc-icon__node" cx="12" cy="6" r="1.2" />
    </>
  ),
  "software": (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="3" />
      <path d="M3 9.5h18" />
      <path d="M8 12.75l2.5 2.25L8 17.25" />
      <path d="M13.5 17h3" />
      <circle className="wc-icon__node" cx="6.5" cy="7" r="0.9" />
    </>
  ),
  "3d-modeling": (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
      <circle className="wc-icon__node" cx="12" cy="12" r="1.7" />
    </>
  ),
  "fabrication": (
    <>
      <path d="M4 20.5h16" />
      <path d="M5 6h14" />
      <rect x="9.5" y="6" width="5" height="4.2" rx="1.2" />
      <path d="M12 10.2v2" />
      <path d="M7 20.5v-4.5h10v4.5" />
      <circle className="wc-icon__node" cx="12" cy="14.2" r="1.2" />
    </>
  ),
  "healthcare": (
    <>
      <path d="M9.5 3.5h5v6h6v5h-6v6h-5v-6h-6v-5h6z" />
      <circle className="wc-icon__node" cx="12" cy="12" r="1.6" />
    </>
  ),
  "finance": (
    <>
      <path d="M3.5 9.5L12 4l8.5 5.5z" />
      <path d="M6.5 12.5v5M12 12.5v5M17.5 12.5v5" />
      <path d="M4 20.5h16" />
      <circle className="wc-icon__node" cx="12" cy="7.3" r="1" />
    </>
  ),
  "life-sciences": (
    <>
      <path d="M9.5 3.5h5" />
      <path d="M10.5 3.5v5.4L5.2 17.9a1.8 1.8 0 0 0 1.55 2.7h10.5a1.8 1.8 0 0 0 1.55-2.7L13.5 8.9V3.5" />
      <path d="M7.7 14.2h8.6" />
      <circle className="wc-icon__node" cx="12" cy="17.4" r="1.1" />
    </>
  ),
  "construction": (
    <>
      <path d="M8 21V4.5" />
      <path d="M3.5 6.5h17" />
      <path d="M5 21h6" />
      <path d="M17 6.5v5.5" />
      <rect x="3.8" y="7.4" width="2.6" height="2.4" rx="0.6" />
      <circle className="wc-icon__node" cx="17" cy="13.6" r="1.6" />
    </>
  ),
  "visual-production": (
    <>
      <rect x="3" y="5" width="18" height="12.5" rx="3" />
      <path d="M10.5 8.8v4.9l4-2.45z" />
      <path d="M8.5 21h7M12 17.5V21" />
      <circle className="wc-icon__node" cx="17.7" cy="8.4" r="1" />
    </>
  ),
  "energy": (
    <>
      <path d="M5.5 9h13l2.5 7.5H3z" />
      <path d="M12 9v7.5M4.2 12.75h15.6M12 16.5v4M8.5 20.5h7" />
      <circle className="wc-icon__node" cx="18.5" cy="4.2" r="1.6" />
    </>
  ),
  "manufacturing": (
    <>
      <path d="M3.5 20.5V11.5l5 3v-3l5 3V5.5h5v15z" />
      <path d="M2.5 20.5h19M6.5 17.5h1.5M10.5 17.5h1.5" />
      <circle className="wc-icon__node" cx="16" cy="9" r="1.3" />
    </>
  ),
  "biometrics": (
    <>
      <path d="M3.5 8V6.5a3 3 0 0 1 3-3H8M16 3.5h1.5a3 3 0 0 1 3 3V8M20.5 16v1.5a3 3 0 0 1-3 3H16M8 20.5H6.5a3 3 0 0 1-3-3V16" />
      <path d="M10 9.5v1.5M14 9.5v1.5M9.6 14.2a3.4 3.4 0 0 0 4.8 0" />
      <circle className="wc-icon__node" cx="12" cy="3.5" r="1.3" />
    </>
  ),
  "pipeline": (
    <>
      <path d="M6.8 11L10.5 7.3M6.8 13L10.5 16.7M13.5 7.3L17.2 11M13.5 16.7L17.2 13" />
      <circle className="wc-icon__dot" cx="5" cy="12" r="1.9" />
      <circle className="wc-icon__dot" cx="12" cy="6" r="1.9" />
      <circle className="wc-icon__dot" cx="12" cy="18" r="1.9" />
      <circle className="wc-icon__node" cx="19" cy="12" r="2.2" />
    </>
  ),
  "cloud": (
    <>
      <path d="M7.5 18.5h9.2a4 4 0 0 0 .9-7.9 5.6 5.6 0 0 0-10.9 1.3A3.3 3.3 0 0 0 7.5 18.5z" />
      <circle className="wc-icon__node" cx="12" cy="14.6" r="1.4" />
    </>
  ),
  "eye": (
    <>
      <path d="M2.8 12C5 7.8 8.2 5.8 12 5.8S19 7.8 21.2 12c-2.2 4.2-5.4 6.2-9.2 6.2S5 16.2 2.8 12z" />
      <circle className="wc-icon__node" cx="12" cy="12" r="2.7" />
    </>
  ),
  "shield": (
    <>
      <path d="M12 3.2l7.2 2.8v5.4c0 4.3-3 7.4-7.2 9.4-4.2-2-7.2-5.1-7.2-9.4V6z" />
      <circle className="wc-icon__node" cx="12" cy="11.4" r="1.7" />
    </>
  ),
  "deep-learning": (
    <>
      <path d="M4.5 8.5H12M4.5 15.5H12M4.5 8.5L12 15.5M4.5 15.5L12 8.5M12 8.5L19.5 12M12 15.5L19.5 12" />
      <circle className="wc-icon__dot" cx="4.5" cy="8.5" r="1.9" />
      <circle className="wc-icon__dot" cx="4.5" cy="15.5" r="1.9" />
      <circle className="wc-icon__dot" cx="12" cy="8.5" r="1.9" />
      <circle className="wc-icon__dot" cx="12" cy="15.5" r="1.9" />
      <circle className="wc-icon__node" cx="19.5" cy="12" r="2.1" />
    </>
  ),
  "nlp": (
    <>
      <path d="M6 4.5h12a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-6.5L7 20.5v-4H6A2.5 2.5 0 0 1 3.5 14V7A2.5 2.5 0 0 1 6 4.5z" />
      <path d="M8 9h8M8 12.2h4" />
      <circle className="wc-icon__node" cx="15" cy="12.2" r="1.1" />
    </>
  ),
  "predictive": (
    <>
      <path d="M3.5 17.5c2.7 0 3.4-6 6.5-6s3 3 5.2 3" />
      <path d="M15.2 14.5c2.2 0 2.9-5.2 5.3-8.5" strokeDasharray="0.01 3.3" />
      <circle className="wc-icon__node" cx="20.3" cy="6.2" r="1.7" />
    </>
  ),
  "integration": (
    <>
      <path d="M3.5 6.5H8c3.2 0 4 2.2 5 5.5M3.5 17.5H8c3.2 0 4-2.2 5-5.5" />
      <path d="M13 12h7.5M17.8 9.2L20.6 12l-2.8 2.8" />
      <circle className="wc-icon__node" cx="13" cy="12" r="1.7" />
    </>
  ),
  "layers": (
    <>
      <path d="M12 3.5l8.5 4.5L12 12.5 3.5 8z" />
      <path d="M3.5 12l8.5 4.5 8.5-4.5" />
      <path d="M3.5 16l8.5 4.5 8.5-4.5" />
      <circle className="wc-icon__node" cx="12" cy="8" r="1.4" />
    </>
  ),
  "bolt": (
    <>
      <path d="M13.2 2.8L5.6 13.2h6.1l-1 8 7.6-10.4h-6.1z" />
      <circle className="wc-icon__node" cx="18.8" cy="4.8" r="1.3" />
    </>
  ),
  "code": (
    <>
      <path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5" />
      <circle className="wc-icon__node" cx="12" cy="12" r="1.8" />
    </>
  ),
  "spark": (
    <>
      <path d="M11 4.5Q11.8 12.2 19.5 13Q11.8 13.8 11 21.5Q10.2 13.8 2.5 13Q10.2 12.2 11 4.5z" />
      <circle className="wc-icon__node" cx="18.6" cy="5.4" r="1.4" />
    </>
  ),
  "compass": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.2 8.8l-1.9 4.5-4.5 1.9 1.9-4.5z" />
      <circle className="wc-icon__node" cx="12" cy="12" r="1.1" />
    </>
  ),
  "services": (
    <>
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.8" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.8" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.8" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.8" />
      <circle className="wc-icon__node" cx="16.75" cy="16.75" r="1.5" />
    </>
  ),
  "event": (
    <>
      <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2" />
      <circle className="wc-icon__node" cx="12" cy="12" r="2" />
    </>
  ),
  "gamepad": (
    <>
      <path d="M7.6 7.5h8.8a4.4 4.4 0 0 1 4.3 3.5l.9 4.9a2.5 2.5 0 0 1-4.3 2.1L15.6 16H8.4l-1.7 2a2.5 2.5 0 0 1-4.3-2.1l.9-4.9a4.4 4.4 0 0 1 4.3-3.5z" />
      <path d="M8 10.3v3.4M6.3 12h3.4" />
      <circle className="wc-icon__dot" cx="15.3" cy="10.9" r="0.9" />
      <circle className="wc-icon__node" cx="17.4" cy="13.1" r="1.1" />
    </>
  ),
  "bulb": (
    <>
      <path d="M8.9 14.6a6 6 0 1 1 6.2 0c-.7.5-1 1.2-1 2v.9H9.9v-.9c0-.8-.3-1.5-1-2z" />
      <path d="M10 20.5h4" />
      <circle className="wc-icon__node" cx="12" cy="9.5" r="1.6" />
    </>
  ),
  "rocket": (
    <>
      <path d="M12 2.8c3 2.2 4.5 5.3 4.5 9.2v4.5h-9V12c0-3.9 1.5-7 4.5-9.2z" />
      <path d="M7.5 12.5l-3 3v3.5l3-1.5M16.5 12.5l3 3v3.5l-3-1.5" />
      <path d="M10.3 19.5l1.7 2 1.7-2" />
      <circle className="wc-icon__node" cx="12" cy="10" r="1.7" />
    </>
  ),
  "badge": (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.6 13.3L7 21l5-2.5 5 2.5-1.6-7.7" />
      <circle className="wc-icon__node" cx="12" cy="9" r="1.8" />
    </>
  ),
  "check": (
    <>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </>
  ),
  "chevron-down": (
    <>
      <path d="M6 9l6 6 6-6" />
    </>
  ),
  "mail": (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="3" />
      <path d="M3.8 8l8.2 6 8.2-6" />
    </>
  ),
  "cookie": (
    <>
      <path d="M12 3.5A8.5 8.5 0 1 0 20.5 12 3.2 3.2 0 0 1 16.8 8.8 3.6 3.6 0 0 1 12 3.5z" />
      <circle className="wc-icon__dot" cx="9" cy="9.6" r="0.9" />
      <circle className="wc-icon__dot" cx="8.6" cy="14.6" r="0.9" />
      <circle className="wc-icon__node" cx="13.6" cy="15.4" r="1" />
    </>
  ),
};

export const ICON_NAMES = Object.keys(PATHS);

/**
 * <Icon name="ai-ml" size={44} stroke={1.25} />
 * Decorative by default (aria-hidden). Pass `title` to expose it to assistive tech.
 * Suggested stroke by size: 16-24px -> 1.5, 32px -> 1.25, 44px+ -> 1.25 or 1.
 */
export default function Icon({ name, size = 24, stroke = 1.5, title, className = "", style }) {
  const body = PATHS[name];
  if (!body) return null;
  const labelled = Boolean(title);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`wc-icon ${className}`.trim()}
      style={style}
      focusable="false"
      aria-hidden={labelled ? undefined : true}
      role={labelled ? "img" : undefined}
    >
      {labelled ? <title>{title}</title> : null}
      {body}
    </svg>
  );
}
