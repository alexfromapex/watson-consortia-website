"use client";
import "./software.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchway, faBolt, faBrain, faCode, faCloud, faSync, faDatabase, faUsers, faShield } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useEffect } from'react';
import { usePathname } from 'next/navigation';

export default function Software() {

  const path = usePathname();

  useEffect(() => {
    if (path.includes('software')) {
      document.documentElement.style.setProperty('--hero-before-bg', 'url("/assets/software_img.svg")');
    } else {
      document.documentElement.style.setProperty('--hero-before-bg', '');
    }

    return () => document.documentElement.style.setProperty('--hero-before-bg', '');
  }, path);

  const TechnologyCard = ({ icon, title, description }) => (
    <div className="col-md-6 col-lg-3">
      <div className="card h-100">
        <div className="card-body text-center">
          <FontAwesomeIcon icon={icon} size="3x" className="text-primary mb-3" />
          <h3 className="card-title h5">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
  
  const ListItem = ({ text }) => (
    <li className="list-group-item">
      <FontAwesomeIcon icon={faCode} className="text-primary me-2" />
      {text}
    </li>
  );
  
  const FeatureCard = ({ title, description }) => (
    <div className="col-md-6">
      <div className="card h-100">
        <div className="card-body">
          <h3 className="card-title h5">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
  
  const ArchitectureFeature = ({ icon, title, description }) => (
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
      <title>Software Engineering - Watson Consortia</title>
      <main className="main">
        <div className="container-fluid">
          <div className="row pb-3">
            <div className={`row hero align-items-center justify-content-end`}>
              <h1 className="col-xl-6 fade-in-right">Building Robust, Scalable, and Efficient Software Systems</h1>
            </div>
          </div>
        </div>
        <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">Advanced Software Engineering Solutions</h1>
        <p className="lead text-muted">Building Robust, Scalable, and Efficient Software Systems</p>
      </header>

      <main>
        <section className="mb-5">
          <h2 className="h2 mb-4">Cutting-Edge Software Engineering</h2>
          <p className="mb-4">
            We specialize in developing high-performance, scalable software solutions using the latest technologies and best practices. Our expertise in Python 3.12 and modern software architecture ensures that your systems are built for the future.
          </p>
          <div className="row g-4">
            <TechnologyCard
              icon={faCode}
              title="Python 3.12 Development"
              description="Leverage the latest features of Python 3.12 for improved performance, better error handling, and enhanced developer productivity."
            />
            <TechnologyCard
              icon={faArchway}
              title="Modern Architecture Design"
              description="Create scalable, maintainable systems using microservices, serverless architectures, and cloud-native technologies."
            />
            <TechnologyCard
              icon={faShield}
              title="Security-First Approach"
              description="Implement robust security measures and follow best practices to protect your software and data from threats."
            />
            <TechnologyCard
              icon={faBolt}
              title="High-Performance Systems"
              description="Optimize your software for speed and efficiency, ensuring it can handle high loads and complex operations."
            />
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h2 mb-4">Our Software Engineering Best Practices</h2>
          <p className="mb-4">
            We adhere to industry-leading best practices to ensure the highest quality, maintainability, and scalability of your software:
          </p>
          <ul className="list-group mb-4">
            <ListItem text="Test-Driven Development (TDD) for robust and reliable code" />
            <ListItem text="Continuous Integration and Continuous Deployment (CI/CD) for rapid, safe releases" />
            <ListItem text="Code reviews and pair programming for knowledge sharing and quality assurance" />
            <ListItem text="Comprehensive documentation for maintainability and ease of onboarding" />
            <ListItem text="Agile methodologies for flexible, iterative development" />
            <ListItem text="DevOps practices for seamless integration of development and operations" />
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="h2 mb-4">Python 3.12 Advantages</h2>
          <p className="mb-4">
            As experts in Python 3.12, we harness its latest features to bring numerous benefits to your projects:
          </p>
          <div className="row g-4">
            <FeatureCard
              title="Enhanced Performance"
              description="Utilize Python 3.12&apos;s optimized interpreter and improved memory management for faster execution times."
            />
            <FeatureCard
              title="Advanced Error Handling"
              description="Leverage new exception groups and improved error messages for more efficient debugging and issue resolution."
            />
            <FeatureCard
              title="Type Hinting Enhancements"
              description="Take advantage of more expressive type hints for better code clarity and IDE support."
            />
            <FeatureCard
              title="Improved Concurrency"
              description="Benefit from enhancements to asyncio and multiprocessing for better parallel processing capabilities."
            />
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h2 mb-4">Our Architectural Approach</h2>
          <p className="mb-4">
            We design software architectures that are scalable, maintainable, and aligned with your business goals:
          </p>
          <div className="row g-4">
            <ArchitectureFeature
              icon={faSync}
              title="Microservices Architecture"
              description="Design loosely coupled, independently deployable services for improved scalability and easier maintenance."
            />
            <ArchitectureFeature
              icon={faCloud}
              title="Cloud-Native Design"
              description="Leverage cloud services and containerization for flexible, scalable, and cost-effective solutions."
            />
            <ArchitectureFeature
              icon={faDatabase}
              title="Data-Centric Architecture"
              description="Build systems that efficiently handle, process, and analyze large volumes of data."
            />
            <ArchitectureFeature
              icon={faUsers}
              title="Event-Driven Architecture"
              description="Create responsive, scalable systems that efficiently handle asynchronous operations and real-time updates."
            />
          </div>
        </section>

        <section>
          <h2 className="h2 mb-4">Ready to Elevate Your Software Engineering?</h2>
          <p className="mb-4">
            Let&apos;s discuss how our advanced software engineering solutions can transform your business. Contact us today to explore how we can build robust, scalable, and efficient systems tailored to your needs.
          </p>
          <Link href="/contact-us">
            <button className="btn btn-primary btn-lg">
              Start Your Project
            </button>
          </Link>
        </section>
      </main>
    </div>
      </main>
    </>
  );
}
