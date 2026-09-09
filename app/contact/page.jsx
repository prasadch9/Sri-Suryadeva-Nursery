 "use client";

import { useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="page-shell">
      <section className="inner-hero compact">
        <div className="container">
          <p className="kicker">Contact us</p>
          <h1>Let’s make your space <span>greener.</span></h1>
          <p className="lead">Have a plant in mind, want to visit the nursery, or need help choosing greenery? Get in touch.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <div className="contact-card">
              <FiMapPin />
              <div><span>Visit us</span><b>Kadiyam, Andhra Pradesh, India</b></div>
            </div>
            <div className="contact-card">
              <FiPhone />
              <div><span>Call / WhatsApp</span><b>9948574718</b></div>
            </div>
            <div className="contact-card">
              <FiMail />
              <div><span>Email</span><b>Add business email</b><p>Use your official nursery email address.</p></div>
            </div>
            <div className="contact-card">
              <FiClock />
              <div><span>Opening hours</span><b>Mon – Sun</b><p>Add your actual opening and closing times.</p></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="kicker">Send an enquiry</p>
            <h2>Tell us what you’re looking for.</h2>
            <label>Name<input required name="name" placeholder="Your name" /></label>
            <label>Phone<input required name="phone" placeholder="Mobile number" /></label>
            <label>Email<input type="email" name="email" placeholder="Email address" /></label>
            <label>What plants are you interested in?<textarea name="message" rows="5" placeholder="Tell us about your space or plant requirement..." /></label>
            <button className="btn btn-primary" type="submit">{sent ? "Enquiry noted ✓" : "Send enquiry"} <FiSend /></button>
          </form>
        </div>
      </section>
    </div>
  );
}