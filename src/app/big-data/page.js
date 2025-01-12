"use client";
import "./big-data.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCloud, faBolt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BigData() {

  const path = usePathname();

  useEffect(() => {
    if (path.includes('big-data')) {
      document.documentElement.style.setProperty('--hero-before-bg', 'url("/assets/big_data_img.svg")');
    } else {
      document.documentElement.style.setProperty('--hero-before-bg', '');
    }

    return () => document.documentElement.style.setProperty('--hero-before-bg', '');
  }, [path]);

  return (
    <>
      <title>Big Data - Watson Consortia</title>
      <main className="main">
        <div className="container-fluid mx-0 px-0">
          <div className="row pb-3 pr-3">
            <div className={`hero row align-items-center justify-content-end px-5`}>
              <h1 className="p-3 col-xl-6 fade-in-right">Transforming Big Data Challenges into Opportunities</h1>
            </div>
          </div>
        </div>

        <div className="container py-5">

        <p className="lead mb-5">
          In today&apos;s data-driven world, harnessing the power of Big Data is crucial for business success. Our consulting services bring Fortune 10 expertise to your organization, helping you unlock the full potential of your data assets.
        </p>
        
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title h4 mb-3">
                  <FontAwesomeIcon icon={faDatabase} className="me-2 text-primary" /> Big Data Architecture
                </h2>
                <p className="card-text">
                  Design and implement scalable, efficient Big Data architectures tailored to your specific needs. Leverage experience with massive data pipelines from Fortune 10 companies to ensure your infrastructure can handle petabyte-scale data processing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title h4 mb-3">
                  <FontAwesomeIcon icon={faCloud} className="me-2 text-primary" /> Cloud Data Solutions
                </h2>
                <p className="card-text">
                  Harness the power of cloud platforms like AWS to build flexible, cost-effective Big Data solutions. Benefit from hands-on experience in migrating and optimizing large-scale data workflows in cloud environments.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="h2 fw-bold mb-4">Our Expertise</h2>
        
        <ul className="list-unstyled mb-5">
          {[
            "Apache Airflow orchestration, including version upgrades and best practices",
            "Hadoop ecosystem and distributed computing",
            "PySpark for large-scale data processing",
            "Data warehouse design and optimization",
            "ETL pipeline development and maintenance",
            "Machine Learning and AI integration with Big Data systems"
          ].map((item, index) => (
            <li key={index} className="mb-2">
              <FontAwesomeIcon icon={faChevronRight} className="me-2" />
              {item}
            </li>
          ))}
        </ul>
        
        <div className="rounded mb-5">
          <h2 className="h4 fw-bold mb-3">
            <FontAwesomeIcon icon={faBolt} className="me-2 text-primary" /> High-Performance Solutions
          </h2>
          <p className="mb-3">
            With a track record of success working with industry Fortune 500 giants, we bring unparalleled expertise to your Big Data challenges. Our experience includes:
          </p>
          <ul className="list-unstyled">
            <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="me-2" />Managing billion-dollar data platforms</li>
            <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="me-2" />Implementing microservice architectures for data mining</li>
            <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="me-2" />Agile &amp; Scrum for global teams</li>
            <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="me-2" />Developing AI/ML-powered data analysis solutions</li>
          </ul>
        </div>
        
        <p className="lead">
          Ready to unlock the full potential of your data? Contact us today to discuss how we can elevate your Big Data strategies and drive your business forward.
        </p>
        <Link href="/contact-us">
          <button className="btn btn-primary btn-lg">
            Get Started
          </button>
        </Link>
     </div>

      </main>
    </>
  );
}
