"use client";
import "./3d-modeling.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCubes,
  faWandMagicSparkles,
  faGamepad,
  faLightbulb,
  faRocket,
  faPuzzlePiece,
  faGears,
  faStar,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ThreeDModeling() {


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
      <FontAwesomeIcon icon={faCheck} className="text-primary me-2" />
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
      <title>3D, Visual Effects &amp; Game Engines - Watson Consortia</title>
      <main className="main">
        <div className="container-fluid">
          <div className="row pb-3">
            <div className="row hero three-d-modeling align-items-center justify-content-end">
              <h1 className="col-xl-6 fade-in-right px-5">3D, Visual Effects &amp; Game Engines</h1>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <header className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">3D Creation, Visual Effects &amp; Game Development</h1>
            <p className="lead text-muted">
              From a fully open-source 3D suite to cinematic visual effects and modern,
              free game engines — we help you craft immersive content that moves
              audiences and players alike.
            </p>
          </header>

          <main>
            <section className="mb-5">
              <h2 className="h2 mb-4">What We Create</h2>
              <p className="mb-4">
                We work across the full 3D and interactive content pipeline, blending
                open-source creativity with production-grade results. Every project is
                built on free, extensible tools so you keep maximum control and minimum
                licensing cost.
              </p>
              <div className="row g-4">
                <ExpertiseCard
                  icon={faCubes}
                  title="Open-Source 3D Creation"
                  description="A complete, free 3D pipeline — modeling, sculpting, rigging, animation, and physically-based rendering — with no licensing fees and a huge global community."
                />
                <ExpertiseCard
                  icon={faWandMagicSparkles}
                  title="Visual Effects & Compositing"
                  description="Particle, fluid, and smoke simulations paired with node-based compositing for cinematic effects and photoreal look development."
                />
                <ExpertiseCard
                  icon={faGamepad}
                  title="Open-Source Game Engines"
                  description="Build 2D and 3D games on a free, modular engine built around a clean scene graph and a lightweight, Python-flavored scripting language."
                />
                <ExpertiseCard
                  icon={faLightbulb}
                  title="Lighting & Look Dev"
                  description="Physically-based rendering, HDRI lighting, and real-time shading to make every scene and character feel believable and cinematic."
                />
              </div>
            </section>

            <section className="mb-5">
              <h2 className="h2 mb-4">Our Approach</h2>
              <p className="mb-4">
                We connect modeling, animation, effects, and real-time systems into one
                coherent pipeline tailored to your goals. Our craft is built on:
              </p>
              <ul className="list-group mb-4">
                <ListItem text="Rigging, skinning, and non-linear animation for characters and creatures" />
                <ListItem text="Node-based compositing and look development for photoreal results" />
                <ListItem text="Simulation of fluids, cloth, hair, and rigid bodies for believable effects" />
                <ListItem text="Real-time rendering and level design for interactive 2D & 3D experiences" />
                <ListItem text="Script-driven asset pipelines that scale from a single shot to full productions" />
              </ul>
            </section>

            <section className="mb-5">
              <h2 className="h2 mb-4">Why Build With Us?</h2>
              <div className="row g-4">
                <ValueProposition
                  icon={faRocket}
                  title="Speed & Freedom"
                  description="Free, open-source tooling means no per-seat licensing and the momentum of active community development — so your resources go to creativity, not software costs."
                />
                <ValueProposition
                  icon={faPuzzlePiece}
                  title="End-to-End Pipelines"
                  description="From concept and blocking to final render and interactive delivery, we unify modeling, animation, effects, and real-time game systems."
                />
                <ValueProposition
                  icon={faGears}
                  title="Scalable Production"
                  description="Our modular, script-driven workflows let a single character or scene grow into a full production without rebuilding the toolchain."
                />
                <ValueProposition
                  icon={faStar}
                  title="Creative Quality"
                  description="Physically-based and real-time techniques let us deliver high-fidelity offline renders and smooth interactive experiences from the very same assets."
                />
              </div>
            </section>

            <section>
              <h2 className="h2 mb-4">Ready to Build Your Next World?</h2>
              <p className="mb-4">
                Let&apos;s discuss how open-source 3D creation, visual effects, and
                real-time game engines can bring your vision to life. Contact us today
                to schedule a consultation.
              </p>
              <Link href="/contact-us">
                <button className="btn btn-primary btn-lg">Get Started</button>
              </Link>
            </section>
          </main>
        </div>
      </main>
    </>
  );
}