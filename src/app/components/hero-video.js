"use client";
import { useEffect, useRef } from "react";

/**
 * Full-width band for the hero video.
 * - The poster (the video's first frame) shows immediately, so playback
 *   starting is seamless and there is never an empty box.
 * - Muted, inline and looping so browsers allow autoplay.
 * - Visitors who prefer reduced motion keep the still poster.
 * - The frame crops the video with object-position (see home.css), so a
 *   re-rendered video can replace /assets/hero.mp4 and hero.webm as-is.
 */
export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // React does not always reflect `muted` to the DOM, which can block autoplay.
    video.muted = true;
    video.defaultMuted = true;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (motion.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    apply();
    motion.addEventListener("change", apply);
    return () => motion.removeEventListener("change", apply);
  }, []);

  return (
    <div className="wc-hero__media" aria-hidden="true">
      <video
        ref={videoRef}
        className="wc-hero__video"
        poster="/assets/hero-poster.jpg"
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
        <source src="/assets/hero.webm" type="video/webm" />
      </video>
    </div>
  );
}
