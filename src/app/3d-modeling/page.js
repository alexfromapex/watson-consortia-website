import { PageHero, Section, FeatureCards, CheckList, IconList, CtaPanel } from "../components/page-kit";

const CREATE = [
  {
    icon: "3d-modeling",
    title: "Open-Source 3D Creation",
    text: "A complete, free 3D pipeline — modeling, sculpting, rigging, animation, and physically-based rendering — with no licensing fees and a huge global community.",
  },
  {
    icon: "spark",
    title: "Visual Effects & Compositing",
    text: "Particle, fluid, and smoke simulations paired with node-based compositing for cinematic effects and photoreal look development.",
  },
  {
    icon: "gamepad",
    title: "Open-Source Game Engines",
    text: "Build 2D and 3D games on a free, modular engine built around a clean scene graph and a lightweight, Python-flavored scripting language.",
  },
  {
    icon: "bulb",
    title: "Lighting & Look Dev",
    text: "Physically-based rendering, HDRI lighting, and real-time shading to make every scene and character feel believable and cinematic.",
  },
];

const APPROACH = [
  "Rigging, skinning, and non-linear animation for characters and creatures",
  "Node-based compositing and look development for photoreal results",
  "Simulation of fluids, cloth, hair, and rigid bodies for believable effects",
  "Real-time rendering and level design for interactive 2D & 3D experiences",
  "Script-driven asset pipelines that scale from a single shot to full productions",
];

const WHY = [
  {
    icon: "rocket",
    title: "Speed & Freedom",
    text: "Free, open-source tooling means no per-seat licensing and the momentum of active community development — so your resources go to creativity, not software costs.",
  },
  {
    icon: "pipeline",
    title: "End-to-End Pipelines",
    text: "From concept and blocking to final render and interactive delivery, we unify modeling, animation, effects, and real-time game systems.",
  },
  {
    icon: "layers",
    title: "Scalable Production",
    text: "Our modular, script-driven workflows let a single character or scene grow into a full production without rebuilding the toolchain.",
  },
  {
    icon: "spark",
    title: "Creative Quality",
    text: "Physically-based and real-time techniques let us deliver high-fidelity offline renders and smooth interactive experiences from the very same assets.",
  },
];

export default function ThreeDModeling() {
  return (
    <>
      <title>3D, Visual Effects &amp; Game Engines - Watson Consortia</title>
      <main className="main wc-page">
        <PageHero
          eyebrow="3D, Visual Effects & Game Engines"
          title="3D creation, visual effects & game development."
          lede="From a fully open-source 3D suite to cinematic visual effects and modern, free game engines — we help you craft immersive content that moves audiences and players alike."
          art="/assets/3d-spaceship.webp"
          artClassName="wc-page-hero__art--photo"
          primary={{ href: "/contact-us", label: "Get started" }}
          secondary={{ href: "#create", label: "What we create" }}
        />

        <Section
          id="create"
          eyebrow="Capabilities"
          title="What we create."
          lede="We work across the full 3D and interactive content pipeline, blending open-source creativity with production-grade results. Every project is built on free, extensible tools so you keep maximum control and minimum licensing cost."
        >
          <FeatureCards items={CREATE} />
        </Section>

        <Section
          id="approach"
          tone="soft"
          split
          eyebrow="Approach"
          title="Our approach."
          lede="We connect modeling, animation, effects, and real-time systems into one coherent pipeline tailored to your goals. Our craft is built on:"
        >
          <CheckList items={APPROACH} />
        </Section>

        <Section id="why" tone="night" split eyebrow="Why us" title="Why build with us?">
          <IconList items={WHY} />
        </Section>

        <CtaPanel
          title="Ready to build your next world?"
          text="Let's discuss how open-source 3D creation, visual effects, and real-time game engines can bring your vision to life. Contact us today to schedule a consultation."
          label="Get started"
        />
      </main>
    </>
  );
}
