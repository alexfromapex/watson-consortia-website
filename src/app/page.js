"use client";
import { useEffect, useState } from "react";
import './home.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrochip,
  faCloud,
  faDatabase,
  faCode,
  faArrowRight,
  faMicroscope,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { Waypoint } from 'react-waypoint';

const ProfessionalServices = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter =  () => setOpacity(1);
  return (
    <Waypoint onEnter={handleEnter} offset='-50vh'>
      <section className={`col-xs-12 col-md-12 col-lg-12 col-xl-10 mx-auto big-margins ${ opacity ? 'fade-in-top' : ''}`} style={{ opacity }}>
      <h1 className="my-5">We offer a variety of <span className="text-primary">professional services</span>. </h1>
      <p className="my-5">
        As the pace of innovation accelerates, businesses like yours are facing unprecedented challenges. With the right technology and expertise, you can transform your business.
      </p>
    </section>
    </Waypoint>
  );
};

const OurExpertise = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = () => setOpacity(1);

  return (
    <Waypoint onEnter={handleEnter} offset='-50vh'>
      <section className={`col-xs-12 col-md-12 col-lg-12 col-xl-10 big-margins mx-auto ${opacity ? 'fade-in-top': ''}`} style={{ opacity }}>
        <h2 className="my-4">Our Expertise</h2>
        <div className="d-flex conditional-flexing justify-content-between gap-3">
          <ExpertiseCard
            icon={<FontAwesomeIcon icon={faDatabase} size="6x" style={{"color":"var(--bs-primary)"}} />}
            title="Big Data"
            description="Harness the power of your data with our advanced analytics and data engineering solutions."
            link="/big-data"
          />
          <ExpertiseCard
            icon={<FontAwesomeIcon icon={faCode} size="6x" style={{"color":"var(--bs-primary)"}} />}
            title="Software Engineering"
            description="Build robust, scalable, and efficient software systems tailored to your business needs."
            reverse
            link="/software"
          />
          <ExpertiseCard
            icon={<FontAwesomeIcon icon={faMicrochip} size="6x" style={{"color":"var(--bs-primary)", "flexShrink": ""}} />}
            title="AI & Machine Learning"
            description="Leverage cutting-edge AI and ML technologies to drive innovation and automate processes."
            link="ai-ml"
          />
        </div>
      </section>
    </Waypoint>
  )
};

const WhyChooseUs = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = () => setOpacity(1);

  return (
    <Waypoint onEnter={handleEnter} offset='-50vh'>
      <section className={`col-xs-12 col-md-12 col-lg-12 col-xl-10 big-margins mx-auto ${opacity ? 'fade-in-top' : ''}`}>
        <h2 className="my-4">Why Choose Us?</h2>
        <ul className="list-unstyled">
          <ListItem text="Proven track record in developing AI-driven data mining solutions" />
          <ListItem text="Expertise in cloud services including AWS and Azure for scalable and secure deployments" />
          <ListItem text="Deep understanding of healthcare regulations, including US &amp; EU regulatory frameworks" />
          <ListItem text="Experience with cutting-edge technologies such as PyTorch, TensorFlow, and large language models" />
          <ListItem text="Proficiency in building secure microservices architectures and data pipelines for enterprise-grade applications" />
        </ul>
      </section>
    </Waypoint>
  )
};

const OurApproach = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = () => setOpacity(1);

  return (
    <Waypoint onEnter={handleEnter} offset='-50vh'>
      <section className={`col-xs-12 col-md-12 col-lg-12 col-xl-10 big-margins mx-auto pb-5 ${opacity ? 'fade-in-top' : ''}`}>
          <h2 className="my-4">Our Approach</h2>
          <p>
            We combine deep technical expertise with a thorough understanding of business processes to deliver tailored solutions that drive real-world impact. Our approach is rooted in Agile methodologies, ensuring rapid delivery and continuous improvement.
          </p>
          <div className="mt-5 d-flex justify-content-between align-items-center px-5 approach">
            <FontAwesomeIcon icon={faUser} style={{ "color": "var(--bs-primary)" }}/>
            <FontAwesomeIcon icon={faArrowRight} />
            <FontAwesomeIcon icon={faDatabase} style={{ "color": "var(--bs-primary)" }} />
            <FontAwesomeIcon icon={faArrowRight} />
            <FontAwesomeIcon icon={faMicroscope} style={{ "color": "var(--bs-primary)" }} />
            <FontAwesomeIcon icon={faArrowRight} />
            <FontAwesomeIcon icon={faMicrochip} style={{ "color": "var(--bs-primary)" }} />
            <FontAwesomeIcon icon={faArrowRight} />
            <FontAwesomeIcon icon={faCloud} style={{ "color": "var(--bs-primary)" }}/>
          </div>
        </section>
    </Waypoint>
  )
}

const ExpertiseCard = ({ icon, title, description, reverse, link }) => (
  <div className="my-2 card p-3 flex-stretch flex-fill d-flex flex-col">
    <h4 className="flex-grow-1">{title}</h4>
    <div className={`p-6 gap-3 d-flex align-items-center flex-grow-1`}>
      <div className={`flex-shrink justify-center my-4`}>{icon}</div>
      <p className="px-2 flex-shrink align-self-stretch my-4">{description}</p>
    </div>
    <div className={`flex-row d-flex flex-shrink-1 justify-content-end mb-2 mt-4`}>
      <Link href={link}><button type="button" className="btn btn-primary flex-shrink">Learn More</button></Link>
    </div>
  </div>
);

const ListItem = ({ text }) => {
  return (
  <li className="flex items-start">
    <FontAwesomeIcon
      icon={faArrowRight}
      className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink text-primary pe-2"
    />
    <span>{text}</span>
  </li>
  );
};

const NeedHelp = () => {
  const [opacity, setOpacity] = useState(0);
  const handleEnter = () => setOpacity(1);

  return (
    <Waypoint onEnter={handleEnter} offset='-60vh'>
      <section className={`col-xs-12 col-md-12 col-lg-12 col-xl-10 d-flex flex-row flex-wrap container big-margins mb-3 mx-auto mt-5 pb-5 align-items-center ${opacity ? 'fade-in-top' : ''}`}>
        <div className="col-xs-6 col-sm-6 col-md-12 col-lg-6">
          <img className="img-fluid w-100" src="assets/send-mail.jpg" alt="" />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-12 col-lg-6 p-5">
          <div className="d-flex flex-row flex-wrap text-center justify-content-center align-items-center">
            <h3>Need help with something?</h3><p>We offer no cost consultations, feel free to contact us today.</p>
            <Link className="btn btn-primary col-md-6 mx-3" href="/contact-us">Get Started</Link>
          </div>
        </div>
      </section>
    </Waypoint>
  )
};

export default function Home() {

  /* Bootstrap */

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
      <>
        <title>Watson Consortia</title>
        <main className="main">
          <div className="container-fluid px-0">
            <div className="row align-items-center justify-content-center pb-3">
              <div className="row justify-content-end">

                <div className="herobg ratio">
                  {/* <video id="bg_vid" ref={videoRef} playsInline="playsinline" loop="loop" muted autoPlay="autoplay" disablePictureInPicture poster="assets/cover_image.jpg">
                    <source src="assets/purple-transform-video.mp4" type="video/mp4" />
                  </video> */}

                  <div className="p-5 full-height crunch justify-content-center align-items-center d-flex flex-column col-xl-12 col-sm-12 col-md-12">
                    <h1 className="mx-5 text-primary fade-in text-center">Transform your business</h1>
                    <div className="mx-5">
                      <h4 className="fade-in text-white">beat the competition with cutting-edge solutions</h4>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
            <div className="container align-items-center px-5 fade-in-top pb-5 justify-content-center">
{/* BEGIN */}
                {<ProfessionalServices />}
                {<OurExpertise />}
                {<WhyChooseUs />}
                {<OurApproach />}

{/* END */}

                {<NeedHelp />}

            </div>
        </main>
      </>
  );
}
