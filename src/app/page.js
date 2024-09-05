"use client";
import { useEffect, useRef, useLayoutEffect } from "react";
import './home.css';
import Link from 'next/link';

export default function Home() {

  const videoRef = useRef(null);

  /* Bootstrap */

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  /* Video */

  useLayoutEffect(() => {

    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
      <>
        <title>Watson Consortia</title>
        <main className="main">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center py-3">
              <div className="row justify-content-end">

                <div className="videobg">
                  <video id="bg_vid" ref={videoRef} playsInline="playsinline" loop="loop" muted autoPlay="autoplay" disablePictureInPicture poster="assets/cover_image.jpg">
                    <source src="assets/purple-transform-video.mp4" type="video/mp4" />
                  </video>

                  <div className="jumbotron p-5 justify-content-center align-items-start d-flex flex-column col-xl-6">
                    <h1 className="mx-5 text-primary brighten fade-in-right">Transform your business</h1>
                    <div className="mx-5">
                      <h4 className="fade-in-right text-white">beat the competition with cutting-edge solutions</h4>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="row justify-content-center">
            <div className="container align-items-center col-xl-6 px-5 fade-in-top pb-5">
              <div className="row">
              <h1 className="col-xl-6 my-5">We offer a variety of professional services. </h1>
              <div className="row justify-content-end">
                <p className="col-xl-6">
                  As the pace of innovation accelerates, businesses like yours are facing unprecedented challenges. With the right technology and expertise, you can transform your business.
                </p>
              </div>
              </div>
              <div className="row">
                <p className="col-xl-6">
                  At Watson Consortia, we&apos;re committed to empowering your organization with tailored professional services that drive results. Our team of experts has a deep understanding of the latest trends and technologies, ensuring that our solutions are always ahead of the curve.
                </p>
              </div>
              <div className="row my-5">
                <div className="col-md-6">
                  <img className="img-fluid w-100" src="assets/send-mail.jpg" alt="" />
                </div>
                <div className="d-flex col-md-6 align-items-center p-5">
                  <div className="row flex-row justify-content-start">
                    <h3>Need help with something?</h3><p>We offer no cost consultations, feel free to contact us today.</p>
                    <Link className="btn btn-primary col-md-4" href="/contact-us">Get Started</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </>
  );
}
