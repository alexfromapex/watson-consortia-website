import { PageHero, Section, FeatureCards, CheckList, IconList, CtaPanel } from "../components/page-kit";

const EXPERTISE = [
  {
    icon: "deep-learning",
    title: "Deep Learning",
    text: "Harness the power of neural networks for complex pattern recognition and decision-making processes.",
  },
  {
    icon: "nlp",
    title: "Natural Language Processing",
    text: "Unlock insights from text data and enable human-like interactions with advanced NLP techniques.",
  },
  {
    icon: "predictive",
    title: "Predictive Analytics",
    text: "Forecast trends and make data-driven decisions with our advanced predictive models.",
  },
  {
    icon: "integration",
    title: "Big Data Integration",
    text: "Seamlessly integrate AI solutions with your existing big data infrastructure for maximum impact.",
  },
];

const APPROACH = [
  "Custom model development using PyTorch and TensorFlow",
  "Integration of large language models for advanced NLP tasks",
  "Scalable ML pipelines using cloud services like AWS SageMaker and Azure ML",
  "Ethical AI practices ensuring fairness, transparency, and privacy",
  "Continuous learning and adaptation of models to maintain peak performance",
];

const WHY = [
  {
    icon: "badge",
    title: "Proven Expertise",
    text: "With experience in developing AI-driven data mining solutions for clinical trials and other complex domains, we bring a wealth of practical knowledge to your projects.",
  },
  {
    icon: "pipeline",
    title: "End-to-End Solutions",
    text: "From data preparation and model development to deployment and monitoring, we offer comprehensive AI & ML solutions tailored to your specific needs.",
  },
  {
    icon: "cloud",
    title: "Scalable Architecture",
    text: "Our solutions are built on scalable, cloud-native architectures, ensuring they can grow with your business and handle increasing data volumes and complexity.",
  },
  {
    icon: "spark",
    title: "Continuous Innovation",
    text: "We stay at the forefront of AI & ML advancements, continuously integrating new techniques and technologies to give you a competitive edge.",
  },
];

export default function AIML() {
  return (
    <>
      <title>AI &amp; Machine Learning - Watson Consortia</title>
      <main className="main wc-page">
        <PageHero
          eyebrow="AI & Machine Learning"
          title="Empowering your business with cutting-edge AI technologies."
          lede="With a deep understanding of the latest advancements in Artificial Intelligence and Machine Learning, we offer tailored solutions that drive innovation, efficiency, and competitive advantage for your business."
          art="/assets/bigdata.png"
          artClassName="wc-page-hero__art--lines"
          primary={{ href: "/contact-us", label: "Get started" }}
          secondary={{ href: "#expertise", label: "Our expertise" }}
        />

        <Section id="expertise" eyebrow="Expertise" title="Our AI & ML expertise.">
          <FeatureCards items={EXPERTISE} />
        </Section>

        <Section
          id="approach"
          tone="soft"
          split
          eyebrow="Approach"
          title="Our AI & ML approach."
          lede="We combine cutting-edge AI technologies with a deep understanding of your business needs to deliver solutions that create real-world impact. Our approach is rooted in:"
        >
          <CheckList items={APPROACH} />
        </Section>

        <Section id="why" tone="night" split eyebrow="Why us" title="Why choose us for AI & ML?">
          <IconList items={WHY} />
        </Section>

        <CtaPanel
          title="Ready to transform your business with AI?"
          text="Let's discuss how our AI & Machine Learning solutions can drive innovation and efficiency in your organization. Contact us today to schedule a consultation and explore the possibilities of AI for your business."
          label="Get started"
        />
      </main>
    </>
  );
}
