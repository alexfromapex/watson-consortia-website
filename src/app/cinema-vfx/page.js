"use client";
import {useEffect} from "react";
import styles from "./cinema.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faFilm, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function Cinema() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <main className="main">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center py-3">
            <div className={`row ${styles.hero}`}>
              <div className="jumbotron p-5 justify-content-end d-flex">
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container px-3 fade-in-top justify-content-center">
        <h2 className="py-4">Film Industry Expertise</h2>
        <div className="row my-5">
          <div className="col-md-4">
            <FontAwesomeIcon icon={faClapperboard} size="10x" color="var(--bs-primary)" />
          </div>
          <ul className="col-md-8">
            <li><strong>Video Editing</strong>: From concept to completion, we&apos;ll craft a compelling narrative that resonates with your target audience.</li>
            <li><strong>VFX Design and 3D Rendering</strong>: Unleash the power of CGI and create immersive experiences that transport viewers to new worlds.</li>
            <li><strong>Audio Editing</strong>: Our ears are attuned to detail, ensuring every sound design and mix is polished and professional.</li>
            <li><strong>Cinematography</strong>: We&apos;ll bring your vision to life with expert camera work, lighting design, and production expertise.</li>
          </ul>
        </div>
        <div className="row justify-content-flex-end my-5">
          <ul className="col-md-8">
            <li><strong>Video Editing</strong>: From concept to completion, we&apos;ll craft a compelling narrative that resonates with your target audience.</li>
            <li><strong>VFX Design and 3D Rendering</strong>: Unleash the power of CGI and create immersive experiences that transport viewers to new worlds.</li>
            <li><strong>Audio Editing</strong>: Our ears are attuned to detail, ensuring every sound design and mix is polished and professional.</li>
            <li><strong>Cinematography</strong>: We&apos;ll bring your vision to life with expert camera work, lighting design, and production expertise.</li>
          </ul>
          <div className="col-md-4">
            <FontAwesomeIcon icon={faFilm} size="10x" color="var(--bs-primary)" />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-4">
            <FontAwesomeIcon icon={faVideo} size="10x" color="var(--bs-primary)" />
          </div>
          <div className="col-md-8">
            <ul>
              <li><strong>Video:</strong> State-of-the-art cameras and equipment for capturing stunning footage.</li>
              <li><strong>Audio</strong>: Professional audio recording gear for crisp, clear sound design and mixing.</li>
              <li><strong>3D Rendering &amp; VFX</strong>: Cutting-edge software like Blender and Unreal Engine 5 for creating breathtaking CGI sequences.</li>
              <li><strong>Audio Mixing</strong>: Top-notch mixing consoles and expertise for crafting balanced and engaging audio tracks.</li>
              <li><strong>Sound Studio</strong>: Our acoustically designed studio is equipped with the latest tools for recording, editing, and post-production.</li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
}
