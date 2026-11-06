import Link from "next/link";
import Icon from "../components/icons";
import { PageHero, Section, FeatureCards, CheckList, IconList, CtaPanel } from "../components/page-kit";

const CREATE = [
  {
    icon: "visual-production",
    title: "Cinema Film with VFX",
    text: "Standalone film work from cinematography through composited visual effects, with CG elements lit, matched, and blended so they belong in the shot.",
  },
  {
    icon: "spark",
    title: "VFX for Games",
    text: "Visual effects built for games: particles, smoke, fluids, and energy effects, plus composited VFX shots for trailers and marketing.",
  },
  {
    icon: "gamepad",
    title: "Game Cinematography",
    text: "Cutscenes, in-engine cinematics, and trailers with deliberate camera work, lighting, and editing that give real-time worlds a filmic feel.",
  },
  {
    icon: "3d-modeling",
    title: "3D Assets",
    text: "Props, vehicles, creatures, and environments modeled, textured, and optimized: game-ready for real-time engines or film-quality for offline rendering.",
  },
];

const APPROACH = [
  "Cinematography planned around the story: framing, camera movement, and lighting",
  "Composite VFX matched to live footage in light, color, grain, and perspective",
  "Simulation of smoke, fire, fluids, cloth, and particles for believable effects",
  "Game-ready assets with clean topology, PBR textures, LODs, and engine-friendly export",
  "Film-quality versions of the same assets for offline rendering",
  "Physically-based look development for consistent, photoreal results",
  "Script-driven pipelines that scale from a single shot to a full production",
];

const WHY = [
  {
    icon: "rocket",
    title: "Film and Games, One Team",
    text: "No handoffs between a film crew, a VFX house, and a game artist. Cinematography, effects, and assets come from a single, hands-on team.",
  },
  {
    icon: "pipeline",
    title: "End-to-End Pipelines",
    text: "From concept and blocking through final composite or in-engine delivery, modeling, animation, effects, and camera work stay in one coherent pipeline.",
  },
  {
    icon: "layers",
    title: "Assets That Work Twice",
    text: "Build an asset once and use it across film shots, game builds, and marketing renders, so your budget goes further.",
  },
  {
    icon: "spark",
    title: "Open-Source Freedom",
    text: "Free, extensible tools like Blender mean no per-seat licensing costs, so your resources go to creative work instead of software.",
  },
];

export default function ThreeDVfx() {
  return (
    <>
      <title>3D Assets &amp; VFX for Film and Games - Watson Consortia</title>
      <main className="main wc-page">
        <PageHero
          eyebrow="Cinematography · VFX · 3D assets"
          title="Cinematography, VFX & 3D assets for film and games."
          lede="We produce high-quality cinematography with composited visual effects, as standalone films, as VFX inside games, and as game cinematics, and we build the production-ready 3D assets behind all of it."
          art="/assets/3d-spaceship.webp"
          artClassName="wc-page-hero__art--photo"
          primary={{ href: "/contact-us", label: "Get started" }}
          secondary={{ href: "#create", label: "What we create" }}
        />

        <Section
          id="create"
          eyebrow="Capabilities"
          title="What we create."
          lede="Film, games, and everything in between. The same assets, lighting, and look development carry across a cinema screen, a game engine, and a trailer, so the work never has to start over."
        >
          <FeatureCards items={CREATE} />
        </Section>

        <Section
          id="approach"
          tone="soft"
          split
          eyebrow="Approach"
          title="One pipeline, any screen."
          lede="Whether the destination is a theater, a game engine, or a trailer, the work starts the same way: well-built assets, deliberate cinematography, and effects composited to match the scene. Our craft is built on:"
        >
          <CheckList items={APPROACH} />
        </Section>

        <Section id="why" tone="night" split eyebrow="Why us" title="Why build with us?">
          <IconList items={WHY} />
        </Section>

        <Section
          id="related"
          tone="soft"
          eyebrow="Also from us"
          title="Need something you can hold?"
          lede="We also 3D print and CNC machine small-scale prototypes, and can turn your 3D models into physical parts."
        >
          <Link href="/fabrication" className="wc-link">
            Prototyping &amp; Fabrication <Icon name="arrow-right" size={18} stroke={1.75} />
          </Link>
        </Section>

        <CtaPanel
          title="Ready to bring your project to the screen?"
          text="Tell us about your film, game, or trailer, and let's talk about how cinematography, VFX, and 3D assets can bring it to life. Contact us to schedule a consultation."
          label="Get started"
        />
      </main>
    </>
  );
}
