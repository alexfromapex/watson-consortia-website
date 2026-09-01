"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import "./home.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faCloud,
  faDatabase,
  faCode,
  faArrowRight,
  faMicroscope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const FADE_MS = 700; // must match the CSS transition duration above

function HeroVideo() {
  const videoRef = useRef(null);
  const [canPlay, setCanPlay] = useState(false); // video has enough data
  const [fading, setFading] = useState(false);   // cross-fade in progress
  const [hideSkeleton, setHideSkeleton] = useState(false);

  // Safety net: if the video never reports canPlay, reveal it anyway.
  useEffect(() => {
    if (canPlay) return;
    const t = setTimeout(() => setCanPlay(true), 1500);
    return () => clearTimeout(t);
  }, [canPlay]);

  // Once it can play: run the cross-fade, then (only after it finishes)
  // start playback and drop the skeleton from the DOM.
  useEffect(() => {
    if (!canPlay) return;
    const raf = requestAnimationFrame(() => setFading(true)); // fade video in + skeleton out
    const t = setTimeout(() => {
      videoRef.current?.play().catch(() => {});  // starts AFTER the fade
      setHideSkeleton(true);
    }, FADE_MS);
    return () => { cancelAnimationFrame(raf); clearTimeout(t); };
  }, [canPlay]);

  return (
    <div className="herobg ratio">
      {/* Skeleton and video are both mounted so they can cross-fade */}
      {!hideSkeleton && (
        <div
          className={"skel skel-hero herobg-video hero-skeleton" + (fading ? " is-hidden" : "")}
          aria-hidden="true"
        />
      )}
      <video
        ref={videoRef}
        className={"herobg-video hero-video" + (fading ? " is-visible" : "")}
        muted
        playsInline
        onCanPlay={() => setCanPlay(true)}
      >
        <source src="/assets/hero.webm" type="video/webm" />
      </video>
    </div>
  );
}

/* ─── Lazy-loading section ──────────────────────────────────────────
 *
 * Three-phase lifecycle per section:
 *
 *   1. Off-screen  → element is invisible; observer is watching.
 *   2. In view     → skeleton shows immediately; a timer starts.
 *   3. Ready       → after minSkeletonMs the real content fades in.
 *
 * The IntersectionObserver uses rootMargin "0px 0px -50vh 0px" so the
 * element "enters" when its top edge crosses the 50%-down mark, matching
 * the old react-waypoint offset="-50vh" behaviour.  We fire once and
 * disconnect, same as Waypoint's onEnter-only semantics.
 *
 * In a real app you'd kick off a data fetch in phase 2 and call
 * `onData` when it resolves; the skeleton stays up until BOTH the data
 * has arrived AND the minimum time has elapsed.
 */
function useLazySection(offset = "-50%", minSkeletonMs = 1000) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  // Phase 1 – watch for intersection
  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: `0px 0px ${offset} 0px`,
        threshold: 0,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [offset, inView]);

  // Phase 2 – enforce minimum skeleton display time
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setReady(true), minSkeletonMs);
    return () => clearTimeout(t);
  }, [inView, minSkeletonMs]);

  return { ref, inView, ready };
}

function LazySection({
  offset = "-50%",
  minTime = 1000,
  skeleton,
  className = "",
  children,
}) {
  const { ref, inView, ready } = useLazySection(offset, minTime);

  return (
    <section
      ref={ref}
      className={`${className} ${ready ? "fade-in-top" : ""}`}
      style={{
        // keep the element in the layout tree so the observer can measure it,
        // but hide it until it's actually scrolled into view
        visibility: inView ? "visible" : "hidden",
      }}
    >
      {ready ? (
        <div className="lazy-content">{children}</div>
      ) : (
        skeleton
      )}
    </section>
  );
}

/* ─── Skeletons ─────────────────────────────────────────────────────
 * Each skeleton is a fragment of shape-matching placeholders.  The
 * outer layout classes (col-*, big-margins, etc.) live on the
 * LazySection wrapper, not on the skeleton itself, so the skeleton
 * and the real content share the exact same box.
 */

// Full-bleed black skeleton for the hero / video area
const HeroLoadingCard = () => (
  <div className="skel skel-hero herobg-video" aria-hidden="true" />
);

// Gray skeleton that mirrors the ExpertiseCard structure
const SkeletonCard = ({ reverse }) => (
  <div
    className="my-2 card p-3 flex-stretch flex-fill d-flex flex-col"
    style={reverse ? { flexDirection: "row-reverse" } : undefined}
    aria-hidden="true"
  >
    <div className="skel sk-title" />
    <div className="p-6 gap-3 d-flex align-items-center flex-grow-1">
      <div className="skel sk-icon" />
      <div className="d-flex flex-column gap-2 px-2 my-4 flex-grow-1">
        <div className="skel sk-line" />
        <div className="skel sk-line" />
        <div className="skel sk-line-short" />
      </div>
    </div>
    <div className="flex-row d-flex flex-shrink-1 justify-content-end mb-2 mt-4">
      <div className="skel sk-btn" />
    </div>
  </div>
);

const ProfessionalServicesSkeleton = () => (
  <div aria-hidden="true">
    <div className="skel sk-h1" />
    <div className="skel sk-para" />
    <div className="skel sk-para" />
    <div className="skel sk-para-short" />
  </div>
);

const OurExpertiseSkeleton = () => (
  <div aria-hidden="true">
    <div className="skel sk-title" style={{ width: "40%" }} />
    <div className="d-flex conditional-flexing justify-content-between gap-3 mt-4">
      <SkeletonCard />
      <SkeletonCard reverse />
      <SkeletonCard />
    </div>
  </div>
);

const WhyChooseUsSkeleton = () => (
  <div aria-hidden="true">
    <div className="skel sk-title" style={{ width: "50%" }} />
    <div className="mt-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="sk-list-row" key={i}>
          <div className="skel sk-bullet" />
          <div className="skel sk-list-line" />
        </div>
      ))}
    </div>
  </div>
);

const OurApproachSkeleton = () => (
  <div aria-hidden="true">
    <div className="skel sk-title" style={{ width: "35%" }} />
    <div className="mt-3">
      <div className="skel sk-para" />
      <div className="skel sk-para" />
      <div className="skel sk-para-short" />
    </div>
    <div className="mt-5 d-flex justify-content-between align-items-center px-5 approach">
      <div className="skel sk-approach-circle" />
      <div className="skel sk-approach-arrow" />
      <div className="skel sk-approach-circle" />
      <div className="skel sk-approach-arrow" />
      <div className="skel sk-approach-circle" />
      <div className="skel sk-approach-arrow" />
      <div className="skel sk-approach-circle" />
      <div className="skel sk-approach-arrow" />
      <div className="skel sk-approach-circle" />
    </div>
  </div>
);

const NeedHelpSkeleton = () => (
  <div className="row w-100" aria-hidden="true">
    {/* image side */}
    <div className="col-xs-6 col-sm-6 col-md-12 col-lg-6">
      <div className="skel sk-image" />
    </div>

    {/* text + CTA side */}
    <div className="col-xs-6 col-sm-6 col-md-12 col-lg-6 p-5">
      <div className="d-flex flex-row flex-wrap text-center
                      justify-content-center align-items-center">
        <div className="skel sk-h3" />
        <div className="skel sk-para"
             style={{ maxWidth: "80%", margin: "0.5rem auto" }} />
        <div className="skel btn col-md-6 mx-3 mt-4"
             style={{ height: "2.75rem" }} />
      </div>
    </div>
  </div>
);

/* ─── Real content ──────────────────────────────────────────────────
 * Plain components; the LazySection wrapper supplies the outer layout
 * classes, so each section is just its inner content.
 */

const ProfessionalServices = () => (
  <>
    <h1 className="my-5">
      We offer a variety of{" "}
      <span className="text-primary">professional services</span>.
    </h1>
    <p className="my-5">
      As the pace of innovation accelerates, businesses like yours are facing
      unprecedented challenges. With the right technology and expertise, you can
      transform your business.
    </p>
  </>
);

const OurExpertise = () => (
  <>
    <h2 className="my-4">Our Expertise</h2>
    <div className="d-flex conditional-flexing justify-content-between gap-3">
      <ExpertiseCard
        icon={
          <FontAwesomeIcon icon={faDatabase} size="6x" style={{ color: "var(--bs-primary)" }} />
        }
        title="Big Data"
        description="Harness the power of your data with our advanced analytics and data engineering solutions."
        link="/big-data"
      />
      <ExpertiseCard
        icon={
          <FontAwesomeIcon icon={faCode} size="6x" style={{ color: "var(--bs-primary)" }} />
        }
        title="Software Engineering"
        description="Build robust, scalable, and efficient software systems tailored to your business needs."
        reverse
        link="/software"
      />
      <ExpertiseCard
        icon={
          <FontAwesomeIcon
            icon={faMicrochip}
            size="6x"
            style={{ color: "var(--bs-primary)", flexShrink: "" }}
          />
        }
        title="AI & Machine Learning"
        description="Leverage cutting-edge AI and ML technologies to drive innovation and automate processes."
        link="/ai-ml"
      />
    </div>
  </>
);

const WhyChooseUs = () => (
  <>
    <h2 className="my-4">Why Choose Us?</h2>
    <ul className="list-unstyled">
      <ListItem text="Proven track record in developing AI-driven data mining solutions" />
      <ListItem text="Expertise in cloud services including AWS and Azure for scalable and secure deployments" />
      <ListItem text="Deep understanding of healthcare regulations, including US & EU regulatory frameworks" />
      <ListItem text="Experience with cutting-edge technologies such as PyTorch, TensorFlow, and large language models" />
      <ListItem text="Proficiency in building secure microservices architectures and data pipelines for enterprise-grade applications" />
    </ul>
  </>
);

const OurApproach = () => (
  <>
    <h2 className="my-4">Our Approach</h2>
    <p>
      We combine deep technical expertise with a thorough understanding of
      business processes to deliver tailored solutions that drive real-world
      impact. Our approach is rooted in Agile methodologies, ensuring rapid
      delivery and continuous improvement.
    </p>
    <div className="mt-5 d-flex justify-content-between align-items-center px-5 approach">
      <FontAwesomeIcon icon={faUser} style={{ color: "var(--bs-primary)" }} />
      <FontAwesomeIcon icon={faArrowRight} />
      <FontAwesomeIcon icon={faDatabase} style={{ color: "var(--bs-primary)" }} />
      <FontAwesomeIcon icon={faArrowRight} />
      <FontAwesomeIcon icon={faMicroscope} style={{ color: "var(--bs-primary)" }} />
      <FontAwesomeIcon icon={faArrowRight} />
      <FontAwesomeIcon icon={faMicrochip} style={{ color: "var(--bs-primary)" }} />
      <FontAwesomeIcon icon={faArrowRight} />
      <FontAwesomeIcon icon={faCloud} style={{ color: "var(--bs-primary)" }} />
    </div>
  </>
);

const ExpertiseCard = ({ icon, title, description, reverse, link }) => (
  <div className="my-2 card p-3 flex-stretch flex-fill d-flex flex-col">
    <h4 className="flex-grow-1">{title}</h4>
    <div className="p-6 gap-3 d-flex align-items-center flex-grow-1">
      <div className="flex-shrink justify-center my-4">{icon}</div>
      <p className="px-2 flex-shrink align-self-stretch my-4">{description}</p>
    </div>
    <div className="flex-row d-flex flex-shrink-1 justify-content-end mb-2 mt-4">
      <Link href={link}>
        <button type="button" className="btn btn-primary flex-shrink">
          Learn More
        </button>
      </Link>
    </div>
  </div>
);

const ListItem = ({ text }) => (
  <li className="flex items-start">
    <FontAwesomeIcon
      icon={faArrowRight}
      className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink text-primary pe-2"
    />
    <span>{text}</span>
  </li>
);

const NeedHelp = () => (
  <div className="row w-100">
    <div className="col-xs-6 col-sm-6 col-md-12 col-lg-6">
      <img className="img-fluid w-100" src="assets/send-mail.jpg" alt="" />
    </div>
    <div className="col-xs-6 col-sm-6 col-md-12 col-lg-6 p-5">
      <div className="d-flex flex-row flex-wrap text-center justify-content-center align-items-center">
        <h3>Need help with something?</h3>
        <p>We offer no cost consultations, feel free to contact us today.</p>
        <Link className="btn btn-primary col-md-6 mx-3" href="/contact-us">
          Get Started
        </Link>
      </div>
    </div>
  </div>
);

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    // Fallback so we never get stuck on the hero skeleton if the video
    // never fires canPlay
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <title>Watson Consortia</title>
      <main className="main">
        <div className="container-fluid px-0">
          <div className="row align-items-center justify-content-center pb-3">
            <div className="row justify-content-end">
              <HeroVideo />            {/* replaces the old loading ? <HeroLoadingCard/> : <video/> */}
            </div>
          </div>
        </div>

        <div className="container align-items-center px-5 pb-5 justify-content-center">
          <LazySection
            offset="-50%"
            minTime={1000}
            className="col-xs-12 col-md-12 col-lg-12 col-xl-10 mx-auto big-margins"
            skeleton={<ProfessionalServicesSkeleton />}
          >
            <ProfessionalServices />
          </LazySection>

          <LazySection
            offset="-50%"
            minTime={1000}
            className="col-xs-12 col-md-12 col-lg-12 col-xl-10 big-margins mx-auto"
            skeleton={<OurExpertiseSkeleton />}
          >
            <OurExpertise />
          </LazySection>

          <LazySection
            offset="-50%"
            minTime={1000}
            className="col-xs-12 col-md-12 col-lg-12 col-xl-10 big-margins mx-auto"
            skeleton={<WhyChooseUsSkeleton />}
          >
            <WhyChooseUs />
          </LazySection>

          <LazySection
            offset="-50%"
            minTime={1000}
            className="col-xs-12 col-md-12 col-lg-12 col-xl-10 big-margins mx-auto pb-5"
            skeleton={<OurApproachSkeleton />}
          >
            <OurApproach />
          </LazySection>

          <LazySection
            offset="-60%"
            minTime={1000}
            className="col-xs-12 col-md-12 col-lg-12 col-xl-10 d-flex flex-row flex-wrap container big-margins mb-3 mx-auto mt-5 pb-5 align-items-center"
            skeleton={<NeedHelpSkeleton />}
          >
            <NeedHelp />
          </LazySection>
        </div>
      </main>
    </>
  );
}