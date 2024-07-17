"use client";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '@formspree/react';
import styles from "./contact-us.module.css";

export default function ContactUs() {
  const formRef = useRef();
  const fromRef = useRef();
  const callbackNumberRef = useRef();
  const subjectRef = useRef();
  const msgRef = useRef();
  const [formDisabled, setFormDisabled] = useState(true);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const checkFormValidity = () => {
    const formIsValid =
      fromRef.current?.validity.valid &&
      subjectRef.current?.validity.valid &&
      msgRef.current?.validity.valid;
  
    setFormDisabled(!formIsValid);
  };

  const [formState, handleSubmit] = useForm("xpwazbqq");
  if (formState.succeeded) {
      return (
      <div className="container">
        <div className="col-xl-6">
          <p className="text-success">Your message was sent! We will respond as soon as possible.</p>
        </div>
      </div>
      );
  }

  if (formState.errors) {
    return (
      <div className="container">
        <div className="col-xl-6">
          <p className="text-danger">There was a problem submitting the form. Please try again.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <title>Contact Us - Watson Consortia</title>
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
      <div className="container px-5 justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mt-5 mb-5">
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="me-3" />Contact Us
            </h1>
          </div>
        </div>
        <form className="needs-validation form-horizontal" onSubmit={handleSubmit} ref={formRef}>
          <div className="row">
            <div className="col-md-2">
              <label htmlFor="from" className="form-label required pe-3 col-form-label">
                Your E-mail Address:
              </label>
            </div>
            <div className="col-md-10 d-flex mb-3">
              <input
                ref={fromRef}
                pattern=".+@.+"
                type="email"
                id="from"
                name="from"
                className="form-control"
                placeholder="Enter your e-mail address, e.g. you@gmail.com"
                required
                onChange={checkFormValidity}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <label htmlFor="phone" className="form-label pe-3 col-form-label">
                Your Phone Number (optional):
              </label>
            </div>
            <div className="col-md-10 d-flex mb-3">
              <input
                ref={callbackNumberRef}
                type="phone"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number, e.g. 999-8765"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <label htmlFor="subject" className="form-label required pe-3 col-form-label">
                Subject:
              </label>
            </div>
            <div className="col-md-10 d-flex mb-3">
              <input
                ref={subjectRef}
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Enter subject"
                required
                onChange={checkFormValidity}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <label htmlFor="message" className="form-label required pe-3 col-form-label">
                Message:
              </label>
            </div>
            <div className="col-md-10 d-flex mb-3">
              <textarea
                ref={msgRef}
                id="message"
                name="message"
                className="form-control mb-3"
                rows="5"
                placeholder="Enter your message"
                required
                onChange={checkFormValidity}
              ></textarea>
            </div>
            <div className="col-md-2 p-0">
              <input
                disabled={formDisabled || formState.submitting}
                type="submit"
                className="btn btn-primary"
                value="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}