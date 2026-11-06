import { PageHero, Section, FeatureCards, CheckList, IconList, CtaPanel } from "../components/page-kit";

const OFFERINGS = [
  {
    icon: "layers",
    title: "Big Data Architecture",
    text: "Design and implement scalable, efficient data architectures tailored to your specific needs. Leverage experience with massive data pipelines from Fortune 500 companies to ensure your infrastructure can handle petabyte-scale processing, in-memory data grids, and real-time analytics without compromise.",
  },
  {
    icon: "cloud",
    title: "Cloud Data Solutions",
    text: "Harness the power of cloud platforms to build flexible, cost-effective data solutions. Benefit from hands-on experience in migrating and optimizing large-scale data workflows — from serverless orchestration to distributed, in-memory computing clusters — in modern cloud environments.",
  },
];

const EXPERTISE = [
  "Enterprise workflow orchestration — DAG-based pipeline design, version management, and operational best practices",
  "Distributed and in-memory data processing at petabyte scale",
  "Large-scale analytics engines with fault-tolerant, elastic compute",
  "Data warehouse design and optimization",
  "End-to-end ETL/ELT pipeline development, monitoring, and maintenance",
  "Machine Learning and AI integration with real-time and batch data systems",
];

const ADVISORY = [
  {
    icon: "pipeline",
    title: "Orchestration & Scheduling",
    text: "DAG-based workflow engines with version migration, idempotency guarantees, and multi-environment promotion.",
  },
  {
    icon: "bolt",
    title: "Distributed & In-Memory Compute",
    text: "Fault-tolerant, elastic processing of terabyte-to-petabyte datasets with sub-second query latency.",
  },
  {
    icon: "layers",
    title: "Storage & Data Modeling",
    text: "Columnar, partitioned, and lakehouse architectures that balance cost, freshness, and query performance.",
  },
];

const HIGH_PERFORMANCE = [
  "Managing billion-dollar data platforms",
  "Implementing microservice architectures for real-time data mining",
  "Leading technology selection and migration programs for global teams",
  "Developing AI/ML-powered data analysis solutions",
];

export default function BigData() {
  return (
    <>
      <title>Big Data - Watson Consortia</title>
      <main className="main wc-page">
        <PageHero
          eyebrow="Big Data"
          title="Transforming big data challenges into opportunities."
          lede={
            <>
              In today&apos;s data-driven world, harnessing the power of Big Data is crucial for business
              success. Our consulting services bring Fortune 500 expertise to your organization, helping you
              unlock the full potential of your data assets — and, just as importantly, helping you choose
              the <em>right</em> technologies to get there.
            </>
          }
          art="/assets/bigdata.png"
          artClassName="wc-page-hero__art--lines"
          primary={{ href: "/contact-us", label: "Get started" }}
          secondary={{ href: "#advisory", label: "Technology advisory" }}
        />

        <Section id="services">
          <FeatureCards items={OFFERINGS} wide />
        </Section>

        <Section id="expertise" tone="soft" split eyebrow="Expertise" title="Our expertise.">
          <CheckList items={EXPERTISE} />
        </Section>

        <Section
          id="advisory"
          tone="night"
          split
          eyebrow="Advisory"
          title="Technology advisory."
          lede={
            <>
              <p>
                The landscape of data engineering tools moves fast. Every few months a new framework, a new
                version, a new paradigm promises to be the one true answer. Most teams don&apos;t need that —
                they need someone to cut through the noise and tell them which tools actually fit their
                data, their scale, and their team&apos;s skill set.
              </p>
              <p>
                We work across the full spectrum of modern data-platform technologies — workflow
                orchestration frameworks, distributed compute engines, in-memory data grids, stream
                processing, and cloud-native storage layers — and we&apos;ve deployed them at Fortune 10
                scale. Our role isn&apos;t to push a single product; it&apos;s to architect the right
                combination for you, validate it against your workloads, and get your team confident enough
                to own it.
              </p>
            </>
          }
        >
          <IconList items={ADVISORY} />
          <p className="wc-note">
            Not sure which tools to evaluate? That&apos;s exactly why you call us. We&apos;ll bring the
            evaluation matrix, the reference architectures, and the hard-won war stories so your team can
            skip the months of trial and error.
          </p>
        </Section>

        <Section
          id="high-performance"
          split
          eyebrow="Track record"
          title="High-performance solutions."
          lede="With a track record of success working with industry Fortune 500 giants, we bring unparalleled expertise to your Big Data challenges. Our experience includes:"
        >
          <CheckList items={HIGH_PERFORMANCE} />
        </Section>

        <CtaPanel
          title="Ready to unlock the full potential of your data?"
          text="Contact us today to discuss how we can elevate your data strategy and drive your business forward."
          label="Get started"
        />
      </main>
    </>
  );
}
