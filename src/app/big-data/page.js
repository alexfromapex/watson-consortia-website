"use client";
import "./big-data.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCloud, faBolt, faChevronRight, faCompass, faLayerGroup, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
// import { useLayoutEffect } from 'react';
// import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function BigData() {

  // const path = usePathname();

  return (
     <>
       <title>Big Data - Watson Consortia</title>
       <main className="main">
         <div className="container-fluid mx-0 px-0">
           <div className="row pb-3 pr-3">
             <div className="hero big-data row align-items-center justify-content-end px-5">
               <h1 className="p-3 col-xl-6 fade-in-right">Transforming Big Data Challenges into Opportunities</h1>
             </div>
           </div>
         </div>

         <div className="container py-5">

           <p className="lead mb-5">
             In today&apos;s data-driven world, harnessing the power of Big Data is crucial for business success. Our consulting services bring Fortune 10 expertise to your organization, helping you unlock the full potential of your data assets — and, just as importantly, helping you choose the <em className="text-primary">right</em> technologies to get there.
           </p>

           <div className="row g-4 mb-5">
             <div className="col-md-6">
               <div className="card h-100">
                 <div className="card-body">
                   <h2 className="card-title h4 mb-3">
                     <FontAwesomeIcon icon={faDatabase} className="me-2 text-primary" /> Big Data Architecture
                   </h2>
                   <p className="card-text">
                     Design and implement scalable, efficient data architectures tailored to your specific needs. Leverage experience with massive data pipelines from Fortune 10 companies to ensure your infrastructure can handle petabyte-scale processing, in-memory data grids, and real-time analytics without compromise.
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
                     Harness the power of cloud platforms to build flexible, cost-effective data solutions. Benefit from hands-on experience in migrating and optimizing large-scale data workflows — from serverless orchestration to distributed, in-memory computing clusters — in modern cloud environments.
                   </p>
                 </div>
               </div>
             </div>
           </div>

           <h2 className="h2 fw-bold mb-4">Our Expertise</h2>
           <ul className="list-unstyled mb-5">
             {[
               "Enterprise workflow orchestration — DAG-based pipeline design, version management, and operational best practices",
               "Distributed and in-memory data processing at petabyte scale",
               "Large-scale analytics engines with fault-tolerant, elastic compute",
               "Data warehouse design and optimization",
               "End-to-end ETL/ELT pipeline development, monitoring, and maintenance",
               "Machine Learning and AI integration with real-time and batch data systems"
             ].map((item, index) => (
               <li key={index} className="mb-2">
                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                 {item}
               </li>
             ))}
           </ul>

           <div className="rounded mb-5">
             <h2 className="h4 fw-bold mb-3">
               <FontAwesomeIcon icon={faCompass} className="me-2 text-primary" /> Technology Advisory
             </h2>
             <p className="mb-3">
               The landscape of data engineering tools moves fast. Every few months a new framework, a new version, a new paradigm promises to be the one true answer. Most teams don&apos;t need that — they need someone to cut through the noise and tell them *which* tools actually fit *their* data, *their* scale, and *their* team&apos;s skill set.
             </p>
             <p className="mb-3">
               We work across the full spectrum of modern data-platform technologies — workflow orchestration frameworks, distributed compute engines, in-memory data grids, stream processing, and cloud-native storage layers — and we&apos;ve deployed them at Fortune 100 scale. Our role isn&apos;t to push a single product; it&apos;s to architect the right combination for you, validate it against your workloads, and get your team confident enough to own it.
             </p>
             <ul className="list-unstyled">
               <li className="mb-2"><FontAwesomeIcon icon={faNetworkWired} className="me-2 text-primary" /> <strong>Orchestration &amp; Scheduling</strong> — DAG-based workflow engines with version migration, idempotency guarantees, and multi-environment promotion</li>
               <li className="mb-2"><FontAwesomeIcon icon={faBolt} className="me-2 text-primary" /> <strong>Distributed &amp; In-Memory Compute</strong> — Fault-tolerant, elastic processing of terabyte-to-petabyte datasets with sub-second query latency</li>
               <li className="mb-2"><FontAwesomeIcon icon={faLayerGroup} className="me-2 text-primary" /> <strong>Storage &amp; Data Modeling</strong> — Columnar, partitioned, and lakehouse architectures that balance cost, freshness, and query performance</li>
             </ul>
             <p className="mb-0">
               Not sure which tools to evaluate? That&apos;s exactly why you call us. We&apos;ll bring the evaluation matrix, the reference architectures, and the hard-won war stories so your team can skip the months of trial and error.
             </p>
           </div>

           <div className="rounded mb-5">
             <h2 className="h4 fw-bold mb-3">
               <FontAwesomeIcon icon={faBolt} className="me-2 text-primary" /> High-Performance Solutions
             </h2>
             <p className="mb-3">
               With a track record of success working with industry Fortune 500 giants, we bring unparalleled expertise to your Big Data challenges. Our experience includes:
             </p>
             <ul className="list-unstyled">
               <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="me-2" />Managing billion-dollar data platforms</li>
               <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="me-2" />Implementing microservice architectures for real-time data mining</li>
               <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="me-2" />Leading technology selection and migration programs for global teams</li>
               <li className="mb-2"><FontAwesomeIcon icon={faChevronRight} className="me-2" />Developing AI/ML-powered data analysis solutions</li>
             </ul>
           </div>

           <p className="lead">
             Ready to unlock the full potential of your data — and to know exactly which technologies to build on? Contact us today to discuss how we can elevate your data strategy and drive your business forward.
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