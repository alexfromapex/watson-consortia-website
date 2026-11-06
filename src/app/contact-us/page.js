"use client";
import { useRef, useState } from "react";
import { useForm } from "@formspree/react";
import Icon from "../components/icons";
import "../components/page-kit.css";
import "./contact-us.css";

function ContactHero() {
  return (
    <section className="wc-page-hero wc-night wc-contact-hero">
      <div className="wc-container wc-page-hero__inner">
        <p className="wc-eyebrow">Contact</p>
        <h1 className="wc-page-hero__title">Contact us.</h1>
        <p className="wc-page-hero__lede">
          Tell us about your project and we will respond as soon as possible.
        </p>
      </div>
    </section>
  );
}

export default function ContactUs() {
  const formRef = useRef();
  const fromRef = useRef();
  const callbackNumberRef = useRef();
  const subjectRef = useRef();
  const msgRef = useRef();
  const [formDisabled, setFormDisabled] = useState(true);

  const checkFormValidity = () => {
    const formIsValid =
      fromRef.current?.validity.valid &&
      subjectRef.current?.validity.valid &&
      msgRef.current?.validity.valid;

    setFormDisabled(!formIsValid);
  };

  const [formState, handleSubmit] = useForm("xpwazbqq");

  return (
    <>
      <title>Contact Us - Watson Consortia</title>
      <main className="main wc-page">
        <ContactHero />

        <section className="wc-light wc-contact-body">
          <div className="wc-container">
            <div className="wc-form-card">
              {formState.succeeded ? (
                <div className="wc-form-status wc-form-status--ok" role="status">
                  <span className="wc-form-status__icon">
                    <Icon name="check" size={24} stroke={1.75} />
                  </span>
                  <div>
                    <h2 className="wc-form-status__title">Message sent</h2>
                    <p className="wc-form-status__text">
                      Your message was sent! We will respond as soon as possible.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="wc-form-card__head">
                    <span className="wc-form-card__icon">
                      <Icon name="mail" size={24} />
                    </span>
                    <div>
                      <h2 className="wc-form-card__title">Send a message</h2>
                      <p className="wc-form-card__hint">
                        Fields marked <span aria-hidden="true">*</span>
                        <span className="visually-hidden">with an asterisk</span> are required.
                      </p>
                    </div>
                  </div>

                  {formState.errors ? (
                    <p className="wc-form-error" role="alert">
                      There was a problem submitting the form. Please try again.
                    </p>
                  ) : null}

                  <form className="wc-form" onSubmit={handleSubmit} ref={formRef}>
                    <div className="wc-field">
                      <label htmlFor="from" className="wc-field__label">
                        Your e-mail address <span className="wc-field__req" aria-hidden="true">*</span>
                      </label>
                      <input
                        ref={fromRef}
                        pattern=".+@.+"
                        type="email"
                        id="from"
                        name="from"
                        className="form-control wc-input"
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                        onChange={checkFormValidity}
                      />
                    </div>

                    <div className="wc-field">
                      <label htmlFor="phone" className="wc-field__label">
                        Your phone number <span className="wc-field__opt">(optional)</span>
                      </label>
                      <input
                        ref={callbackNumberRef}
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control wc-input"
                        placeholder="e.g. 999-8765"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="wc-field wc-field--full">
                      <label htmlFor="subject" className="wc-field__label">
                        Subject <span className="wc-field__req" aria-hidden="true">*</span>
                      </label>
                      <input
                        ref={subjectRef}
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control wc-input"
                        placeholder="What can we help with?"
                        required
                        onChange={checkFormValidity}
                      />
                    </div>

                    <div className="wc-field wc-field--full">
                      <label htmlFor="message" className="wc-field__label">
                        Message <span className="wc-field__req" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        ref={msgRef}
                        id="message"
                        name="message"
                        className="form-control wc-input wc-input--area"
                        rows="6"
                        placeholder="Tell us about your project"
                        required
                        onChange={checkFormValidity}
                      ></textarea>
                    </div>

                    <div className="wc-field--full wc-form__actions">
                      <button
                        type="submit"
                        disabled={formDisabled || formState.submitting}
                        className="btn btn-primary wc-btn"
                      >
                        {formState.submitting ? "Sending…" : "Send message"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
