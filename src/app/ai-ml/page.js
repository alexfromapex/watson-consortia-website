"use client";
import "./aiml.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faBolt, faChartLine, faDatabase, faCode, faShare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect } from'react';
import { usePathname } from 'next/navigation';

export default function AIML() {

  const path = usePathname();

  useEffect(() => {
    if (path.includes('ai-ml')) {
      document.documentElement.style.setProperty('--hero-before-bg', 'url("/assets/AI_img.svg")');
    } else {
      document.documentElement.style.setProperty('--hero-before-bg', '');
    }

    return () => document.documentElement.style.setProperty('--hero-before-bg', '');
  }, path);

  const ExpertiseCard = ({ icon, title, description }) => (
    <div className="col-md-6 col-lg-3 mb-4">
      <h4 className="mb-3">{title}</h4>
      <div className="d-flex align-items-start">
        <FontAwesomeIcon icon={icon} size="2x" className="text-primary me-3" />
        <p>{description}</p>
      </div>
    </div>
  );
  
  const ListItem = ({ text }) => (
    <li className="list-group-item">
      <FontAwesomeIcon icon={faChartLine} className="text-primary me-2" />
      {text}
    </li>
  );
  
  const ValueProposition = ({ icon, title, description }) => (
    <div className="col-md-6">
      <div className="d-flex">
        <div className="flex-shrink-0">
          <FontAwesomeIcon icon={icon} size="2x" className="text-primary me-3" />
        </div>
        <div>
          <h3 className="h5">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
  

  return (
    <>
      <title>AI &amp; Machine Learning - Watson Consortia</title>
      <main className="main">
        <div className="container-fluid">
          <div className="row pb-3">
            <div className={`row hero align-items-center justify-content-end`}>
              <h1 className="col-xl-6 fade-in-right">Empowering Your Business with Cutting-Edge AI Technologies</h1>
            </div>
          </div>
        </div>
        <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">AI & Machine Learning Solutions</h1>
        <p className="lead text-muted">Empowering Your Business with Cutting-Edge AI Technologies</p>
      </header>

      <main>
        <section className="mb-5">
          <h2 className="h2 mb-4">Our AI & ML Expertise</h2>
          <p className="mb-4">
            With a deep understanding of the latest advancements in Artificial Intelligence and Machine Learning, we offer tailored solutions that drive innovation, efficiency, and competitive advantage for your business.
          </p>
          <div className="row g-4">
            <ExpertiseCard
              icon={faBrain}
              title="Deep Learning"
              description="Harness the power of neural networks for complex pattern recognition and decision-making processes."
            />
            <ExpertiseCard
              icon={faBolt}
              title="Natural Language Processing"
              description="Unlock insights from text data and enable human-like interactions with advanced NLP techniques."
            />
            <ExpertiseCard
              icon={faChartLine}
              title="Predictive Analytics"
              description="Forecast trends and make data-driven decisions with our advanced predictive models."
            />
            <ExpertiseCard
              icon={faDatabase}
              title="Big Data Integration"
              description="Seamlessly integrate AI solutions with your existing big data infrastructure for maximum impact."
            />
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h2 mb-4">Our AI & ML Approach</h2>
          <p className="mb-4">
            We combine cutting-edge AI technologies with a deep understanding of your business needs to deliver solutions that create real-world impact. Our approach is rooted in:
          </p>
          <ul className="list-group mb-4">
            <ListItem text="Custom model development using PyTorch and TensorFlow" />
            <ListItem text="Integration of large language models for advanced NLP tasks" />
            <ListItem text="Scalable ML pipelines using cloud services like AWS SageMaker and Azure ML" />
            <ListItem text="Ethical AI practices ensuring fairness, transparency, and privacy" />
            <ListItem text="Continuous learning and adaptation of models to maintain peak performance" />
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h2 mb-4">Why Choose Us for AI & ML?</h2>
          <div className="row g-4">
            <ValueProposition
              icon={faCode}
              title="Proven Expertise"
              description="With experience in developing AI-driven data mining solutions for clinical trials and other complex domains, we bring a wealth of practical knowledge to your projects."
            />
            <ValueProposition
              icon={faShare}
              title="End-to-End Solutions"
              description="From data preparation and model development to deployment and monitoring, we offer comprehensive AI & ML solutions tailored to your specific needs."
            />
            <ValueProposition
              icon={faDatabase}
              title="Scalable Architecture"
              description="Our solutions are built on scalable, cloud-native architectures, ensuring they can grow with your business and handle increasing data volumes and complexity."
            />
            <ValueProposition
              icon={faBrain}
              title="Continuous Innovation"
              description="We stay at the forefront of AI & ML advancements, continuously integrating new techniques and technologies to give you a competitive edge."
            />
          </div>
        </section>

        <section>
          <h2 className="h2 mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="mb-4">
            Let&apos;s discuss how our AI & Machine Learning solutions can drive innovation and efficiency in your organization. Contact us today to schedule a consultation and explore the possibilities of AI for your business.
          </p>
          <Link href="/contact-us">
            <button className="btn btn-primary btn-lg">
              Get Started
            </button>
          </Link>
        </section>
      </main>
    </div>
      </main>
    </>
  );
}
