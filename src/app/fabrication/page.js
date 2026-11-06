import Link from "next/link";
import Icon from "../components/icons";
import { PageHero, Section, FeatureCards, CheckList, IconList, CtaPanel } from "../components/page-kit";

const OFFER = [
  {
    icon: "3d-modeling",
    title: "Custom STL & 3D Models",
    text: "Models built from your sketches, measurements, reference parts, or written specifications, delivered as STL files ready for printing and prototyping.",
  },
  {
    icon: "layers",
    title: "3D Printing",
    text: "Prototype parts printed in-house on our own printer, from first form studies to fit checks and functional test pieces.",
  },
  {
    icon: "manufacturing",
    title: "CNC Machining",
    text: "Small parts and one-off prototypes cut in-house on our own CNC machine, for when a printed part isn't the right fit.",
  },
  {
    icon: "compass",
    title: "Fabrication Consulting",
    text: "Straight answers on how to make something: which process fits, what to design differently, and what a prototype can and can't tell you.",
  },
];

const PROCESS = [
  "You share a sketch, measurements, a reference part, or a written specification",
  "We ask the questions that matter for fit, function, and material before modeling anything",
  "We model the part and send you an STL to review",
  "We print or machine a prototype, or hand off the files so you can make it yourself",
  "We refine the design based on what the physical part shows you",
];

const SCOPE = [
  {
    icon: "bulb",
    title: "Right-Sized by Design",
    text: "We work at a very small scale: one-offs and test pieces. That keeps projects fast, flexible, and affordable for people who just need a prototype.",
  },
  {
    icon: "pipeline",
    title: "Modeling and Making Together",
    text: "The person modeling your part is the person printing or cutting it, so designs account for how the part will actually be made.",
  },
  {
    icon: "compass",
    title: "Honest Guidance",
    text: "If your idea needs a different process or a larger shop, we'll say so and help you plan the next step.",
  },
];

export default function Fabrication() {
  return (
    <>
      <title>Prototyping &amp; Fabrication - Watson Consortia</title>
      <main className="main wc-page">
        <PageHero
          eyebrow="3D printing · CNC · Prototyping"
          title="3D printing, CNC & prototyping, built to your specs."
          lede="Small-scale prototyping and fabrication consulting. We model custom parts to your specifications, then print or machine them in-house, or help you understand what it will take to make your idea real."
          art="/assets/wind-turbine-xray.webp"
          artClassName="wc-page-hero__art--xray"
          primary={{ href: "/contact-us", label: "Get started" }}
          secondary={{ href: "#offer", label: "What we offer" }}
        />

        <Section
          id="offer"
          eyebrow="Capabilities"
          title="What we offer."
          lede="A hands-on, right-sized practice for people who need a prototype but can't build one themselves, or who have questions about 3D fabrication and modeling."
        >
          <FeatureCards items={OFFER} />
        </Section>

        <Section
          id="process"
          tone="soft"
          split
          eyebrow="Process"
          title="How a prototype comes together."
          lede="Most projects follow the same short loop, and you can join at any step, from a napkin sketch to a finished model that just needs printing."
        >
          <CheckList items={PROCESS} />
        </Section>

        <Section id="scope" tone="night" split eyebrow="Scope" title="Built for prototypes, not production.">
          <IconList items={SCOPE} />
        </Section>

        <Section
          id="related"
          tone="soft"
          eyebrow="Also from us"
          title="Need 3D content for film or games?"
          lede="We also produce cinematography, composited VFX, and game-ready 3D assets."
        >
          <Link href="/3d-vfx" className="wc-link">
            3D Assets &amp; VFX <Icon name="arrow-right" size={18} stroke={1.75} />
          </Link>
        </Section>

        <CtaPanel
          title="Have a part to make, or a question about fabrication?"
          text="Tell us what you're trying to build. Contact us to schedule a consultation."
          label="Get started"
        />
      </main>
    </>
  );
}
