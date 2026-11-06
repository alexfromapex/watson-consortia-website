import { PageHero, Section, FeatureCards, CheckList, IconList, CtaPanel } from "../components/page-kit";

const TECHNOLOGY = [
  {
    icon: "code",
    title: "Python 3.15 Development",
    text: "Leverage the latest features of Python 3.15 for improved performance, better error handling, and enhanced developer productivity.",
  },
  {
    icon: "layers",
    title: "Modern Architecture Design",
    text: "Create scalable, maintainable systems using microservices, serverless architectures, and cloud-native technologies.",
  },
  {
    icon: "shield",
    title: "Security-First Approach",
    text: "Implement robust security measures and follow best practices to protect your software and data from threats.",
  },
  {
    icon: "bolt",
    title: "High-Performance Systems",
    text: "Optimize your software for speed and efficiency, ensuring it can handle high loads and complex operations.",
  },
];

const PRACTICES = [
  "Test-Driven Development (TDD) for robust and reliable code",
  "Continuous Integration and Continuous Deployment (CI/CD) for rapid, safe releases",
  "Code reviews and pair programming for knowledge sharing and quality assurance",
  "Comprehensive documentation for maintainability and ease of onboarding",
  "Agile methodologies for flexible, iterative development",
  "DevOps practices for seamless integration of development and operations",
];

const PYTHON = [
  {
    title: "Enhanced Performance",
    text: "Utilize Python 3.15's further optimized interpreter and refined garbage collection for even faster execution times.",
  },
  {
    title: "Advanced Error Handling",
    text: "Leverage refined exception groups, improved stack traces, and richer error context for more efficient debugging and issue resolution.",
  },
  {
    title: "Type Hinting Enhancements",
    text: "Take advantage of a more expressive type system with improved inline annotations and better IDE/static analysis support.",
  },
  {
    title: "Improved Concurrency",
    text: "Benefit from continued enhancements to the async runtime and multiprocessing primitives for better parallel processing capabilities.",
  },
];

const ARCHITECTURE = [
  {
    icon: "services",
    title: "Microservices Architecture",
    text: "Design loosely coupled, independently deployable services for improved scalability and easier maintenance.",
  },
  {
    icon: "cloud",
    title: "Cloud-Native Design",
    text: "Leverage cloud services and containerization for flexible, scalable, and cost-effective solutions.",
  },
  {
    icon: "big-data",
    title: "Data-Centric Architecture",
    text: "Build systems that efficiently handle, process, and analyze large volumes of data.",
  },
  {
    icon: "event",
    title: "Event-Driven Architecture",
    text: "Create responsive, scalable systems that efficiently handle asynchronous operations and real-time updates.",
  },
];

export default function Software() {
  return (
    <>
      <title>Software Engineering - Watson Consortia</title>
      <main className="main wc-page">
        <PageHero
          eyebrow="Software Engineering"
          title="Building robust, scalable, and efficient software systems."
          lede="We specialize in developing high-performance, scalable software solutions using the latest technologies and best practices. Our expertise in Python 3.15 and modern cloud software architecture ensures that your systems are built for the future."
          art="/assets/bigdata.png"
          artClassName="wc-page-hero__art--lines"
          primary={{ href: "/contact-us", label: "Start your project" }}
          secondary={{ href: "#engineering", label: "What we build" }}
        />

        <Section id="engineering" eyebrow="Engineering" title="Cutting-edge software engineering.">
          <FeatureCards items={TECHNOLOGY} />
        </Section>

        <Section
          id="practices"
          tone="soft"
          split
          eyebrow="Best practices"
          title="Our software engineering best practices."
          lede="We adhere to industry-leading best practices to ensure the highest quality, maintainability, and scalability of your software:"
        >
          <CheckList items={PRACTICES} />
        </Section>

        <Section
          id="python"
          eyebrow="Python 3.15"
          title="Python 3.15 advantages."
          lede="As experts in Python 3.15, we harness its latest features to bring numerous benefits to your projects:"
        >
          <FeatureCards items={PYTHON} />
        </Section>

        <Section
          id="architecture"
          tone="night"
          split
          eyebrow="Architecture"
          title="Our architectural approach."
          lede="We design software architectures that are scalable, maintainable, and aligned with your business goals:"
        >
          <IconList items={ARCHITECTURE} />
        </Section>

        <CtaPanel
          title="Ready to elevate your software engineering?"
          text="Let's discuss how our advanced software engineering solutions can transform your business. Contact us today to explore how we can build robust, scalable, and efficient systems tailored to your needs."
          label="Start your project"
        />
      </main>
    </>
  );
}
