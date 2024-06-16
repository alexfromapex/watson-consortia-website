"use client";
import {useEffect, useRef} from "react";
import styles from "./contact-us.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {

  let smtp = null;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const fromRef = useRef();
  const callbackNumberRef = useRef();
  const subjectRef = useRef()
  const msgRef = useRef();

  const sendMail = () => {
    let newWindow = window.open(
      `mailto:watsonconsortiallc@protonmail.com?from=` +
      `${encodeURIComponent(fromRef.current.value)}` +
      `&subject=${encodeURIComponent(subjectRef.current.value)}` +
      `&body=${encodeURIComponent(
        msgRef.current.value +
        "\n\n\n\nCallback number: " + callbackNumberRef.current.value
      )}`
    );

    newWindow.close();
  }

  return (
    <>
      <script async src="https://unpkg.com/smtp.js/dist/smtp.min.js"></script>
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
      <div className="container-fluid px-5 justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mt-5 mb-5">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="me-3" />Contact Us</h1>
          </div>
        </div>
        <form className="needs-validation form-horizontal" onSubmit={(e) => e.preventDefault()}>
        <div className="row">
            <div className="col-md-2">
              <label htmlFor="from" className="form-label pe-3 col-form-label">Your E-mail Address:</label>
            </div>
            <div className="col-md-10 d-flex mb-3">
              <input ref={fromRef} pattern=".+@.+" type="email" id="from" name="from" className="form-control" placeholder="Enter your e-mail address, e.g. you@gmail.com" required />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <label htmlFor="phone" className="form-label pe-3 col-form-label">Your Phone Number (optional):</label>
            </div>
            <div className="col-md-10 d-flex mb-3">
              <input ref={callbackNumberRef} type="phone" id="phone" name="phone" className="form-control" placeholder="Enter your phone number, e.g. 999-8765" />
            </div>
          </div>
          <div className="row">
              <div className="col-md-2">
                <label htmlFor="subject" className="form-label pe-3 col-form-label">Subject:</label>
              </div>
              <div className="col-md-10 d-flex mb-3">
                <input ref={subjectRef} type="text" id="subject" name="subject" className="form-control" placeholder="Enter subject" />
              </div>
          </div>
          <div className="row">
              <div className="col-md-2">
                <label htmlFor="message" className="form-label pe-3 col-form-label">Message:</label>
              </div>
              <div className="col-md-10 d-flex mb-3">
                <textarea required ref={msgRef} id="message" name="message" className="form-control mb-3" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <div className="col-md-2 p-0">
                <button type="submit" className="btn btn-primary" onClick={() => sendMail()}>Send Message</button>
              </div>
          </div>
        </form>
      </div>
    </>
  );
}
