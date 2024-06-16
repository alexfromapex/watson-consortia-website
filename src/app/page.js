"use client";
import {useEffect} from "react";
import styles from "./home.module.css";

export default function Home() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <main className="main">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center py-3">
            <div className={`row ${styles.hero} justify-content-end`}>
              <div className="jumbotron p-5 justify-content-center align-items-end d-flex flex-column col-md-6 col-sm-2">
                <h1 className="mx-5 text-primary fade-in-right" data-mdb-animation-start="onLoad">Transform your business</h1>
                <div className="mx-5">
                  <h4 className="fade-in-right">beat the competition with cutting-edge digital solutions</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="container-fluid row col-md-12 px-5 fade-in-top">
          <h1 className="col-md-6 my-5">Watson Consortia is your <span className="text-primary">enterprise-level</span> provider of professional <span className="text-secondary">software &amp; data services</span></h1>
          <div className="row justify-content-end">
            <p className="col-md-6">
              As the pace of technological innovation accelerates, businesses like yours are facing unprecedented challenges. With data-driven decision-making at the forefront, you need a trusted partner to help you harness the power of software, data, machine learning, AI, and data science.
            </p>
          </div>
          <div className="row">
            <p className="col-md-6">
              At Watson Consortia, we&apos;re committed to empowering your organization with tailored professional services that drive results. Our team of experts has a deep understanding of the latest trends and technologies, ensuring that our solutions are always ahead of the curve.
            </p>
          </div>
        </div>

      </main>

    </>
  );
}
