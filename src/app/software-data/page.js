"use client";
import {useEffect} from "react";
import styles from "./software.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCloud, faDatabase, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <main className="main">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center py-3 hero-container">
            <div className={`row ${styles.hero} fade-in-bg`}>
              <div className="jumbotron p-5 justify-content-end d-flex">
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container px-3 justify-content-center">
        <h1 className="mt-3 mb-5 fade-in-top">Software &amp; Data Services</h1>
        <div className="row my-5 align-items-center">
          <h2 className="mt-3 mb-5 fade-in-top">Our Expertise</h2>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faBrain} size="10x" color="var(--bs-primary)" className="fade-in-left" />
          </div>
          <div className="col-md-8">
            <ul className="fa-ul fade-in-right">
              <li><strong>Artificial Intelligence and Machine Learning</strong>: Our team is well-versed in AI and ML libraries like PyTorch, TensorFlow, Keras, MLFlow, Scikit-learn, and NLTK, allowing us to develop intelligent systems that drive business insights.</li>
              <li><strong>Data Engineering</strong>: We design and develop scalable data pipelines, leveraging technologies like PySpark, Airflow, and Kubernetes to ensure seamless data flow.</li>
              <li><strong>API Development</strong>: Our expertise in Python and Rust FFI, combined with libraries like FastAPI, Flask, and OpenCV, enables us to craft robust APIs that meet the needs of your business.</li>
              <li><strong>Web and Microservices Development</strong>: We utilize frameworks like Django, Flask, and React to build scalable web applications, while also developing microservices using Kubernetes, Docker, and Podman.</li>
            </ul>
          </div>
        </div>
        <div className="row my-5 align-items-center">
          <h2 className="mt-3 mb-5">Specialties</h2>
          <div className="col-md-8">
            <ul>
              <li><strong>Data Gathering and Analysis</strong>: We extract valuable insights from large datasets using tools like Pandas, NumPy, and Sympy.</li>
              <li><strong>Database Design and Visualization</strong>: Our experts create data visualizations and design databases using technologies like Matplotlib, Gensim, and Boto3.</li>
              <li><strong>LLM Fine-Tuning and Deep Learning Models</strong>: We fine-tune language models and develop deep learning models using PyTorch, TensorFlow, and Scikit-learn.</li>
              <li><strong>Rust Development</strong>: Our team is well-versed in Rust development, for projects that need extreme speed and/or safety.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faDatabase} size="10x" color="var(--bs-primary)" />
          </div>
        </div>
        <div className="row my-5 align-items-center">
          <h2 className="mt-3 mb-5">Additional Expertise</h2>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faCloud} size="10x" color="var(--bs-primary)" />
          </div>
          <div className="col-md-8">
            <ul>
              <li><span className="fa-li"><i className="fa-solid fa-check-square"></i></span><strong>GPU Computing</strong>: We leverage GPU computing to accelerate complex computations and optimize performance for your AI and machine learning projects.</li>
              <li><strong>Python and Rust APIs</strong>: Our experts design and develop APIs using Python and Rust, ensuring seamless integration with your existing systems.</li>
              <li><strong>Cloud Services</strong>: We&apos;re proficient in cloud services like AWS, S3, EC2, ECS, EKS, IAM, OpenID Connect, OAuth 2.0, TLS/SSL, and MongoDB.</li>
              <li><strong>Database Management</strong>: Our team has experience working with databases like Oracle Database, MySQL, and PostgreSQL.</li>
            </ul>
          </div>
        </div>
        <div className="row my-5 align-items-center">
          <h2 className="mt-3 mb-5">Certifications and Regulations</h2>
          <div className="col-md-8">
            <ul>
              <li><strong>ISO Regulations</strong>: We&apos;re familiar with ISO regulations for software development and quality assurance.</li>
              <li><strong>HIPPA and GDPR</strong>: Our experts understand the importance of HIPAA and GDPR compliance in healthcare and finance industries.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faShieldAlt} size="10x" color="var(--bs-primary)" />
          </div>
        </div>
      </div>
    </>
  );
}
