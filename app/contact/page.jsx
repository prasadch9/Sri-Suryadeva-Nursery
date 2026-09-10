"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="page-shell">

      {/* =========================================
          HERO
      ========================================= */}
      <section className="inner-hero compact">
        <div className="container">
          <p className="kicker">Contact us</p>

          <h1>
            Let’s make your space <span>greener.</span>
          </h1>

          <p className="lead">
            Have a plant in mind, want to visit the nursery, or need help
            choosing greenery? Get in touch with Sri Suryadeva Nursery.
          </p>
        </div>
      </section>


      {/* =========================================
          CONTACT DETAILS + FORM
      ========================================= */}
      <section className="section contact-main-section">
        <div className="container">

          <div className="contact-grid">

            {/* LEFT - CONTACT DETAILS */}
            <div className="contact-details">

              {/* Address */}
              <div className="contact-card">
                <FiMapPin />

                <div>
                  <span>Visit us</span>

                  <b>
                    Sri Suryadeva Nursery
                    <br />
                    Kadiyam, Andhra Pradesh, India
                  </b>
                </div>
              </div>


              {/* Phone */}
              <div className="contact-card">
                <FiPhone />

                <div>
                  <span>Call / WhatsApp</span>

                  <a href="tel:+919948574718">
                    <b>9948574718</b>
                  </a>

                  <p>
                    Call us for plant availability, pricing and enquiries.
                  </p>
                </div>
              </div>


              {/* Email */}
              <div className="contact-card">
                <FiMail />

                <div>
                  <span>Email</span>

                  <b>Add business email</b>

                  <p>
                    Send us your plant requirements and enquiries.
                  </p>
                </div>
              </div>


              {/* Opening Hours */}
              <div className="contact-card">
                <FiClock />

                <div>
                  <span>Opening hours</span>

                  <b>Mon – Sun</b>

                  <p>
                    Visit us during our nursery working hours.
                  </p>
                </div>
              </div>


              {/* Help Box */}
              <div className="contact-mini-box">
                <FiCheck />

                <div>
                  <b>Need help choosing plants?</b>

                  <p>
                    Tell us about your garden, home or landscape space.
                    Our team can help you choose suitable plants.
                  </p>
                </div>
              </div>

            </div>


            {/* RIGHT - ENQUIRY FORM */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <p className="kicker">Send an enquiry</p>

              <h2>
                Tell us what you’re looking for.
              </h2>

              <p className="form-intro">
                Looking for a particular plant or planning a new garden?
                Send us your requirements and we’ll get back to you.
              </p>


              <label>
                Name

                <input
                  required
                  name="name"
                  placeholder="Your name"
                />
              </label>


              <label>
                Phone

                <input
                  required
                  name="phone"
                  placeholder="Mobile number"
                />
              </label>


              <label>
                Email

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                />
              </label>


              <label>
                What plants are you interested in?

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell us about your space or plant requirement..."
                />
              </label>


              <button
                className="btn btn-primary"
                type="submit"
              >
                {sent ? "Enquiry noted ✓" : "Send enquiry"}

                <FiSend />
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* =========================================
          WHY VISIT US
      ========================================= */}
      <section className="section contact-story-section">
        <div className="container">

          <div className="contact-story-grid">

            {/* IMAGE */}
            <div className="contact-story-image">

              <img
                src="/unnamed (9).webp"
                alt="Sri Suryadeva Nursery plants"
              />

              <div className="contact-image-badge">
                <span>01</span>

                <p>
                  Growing
                  <br />
                  with nature
                </p>
              </div>

            </div>


            {/* CONTENT */}
            <div className="contact-story-content">

              <p className="kicker">
                Why visit us
              </p>

              <h2>
                Bring more
                <span> greenery </span>
                into your life.
              </h2>

              <p>
                Sri Suryadeva Nursery offers a wide collection of plants
                for homes, gardens, landscapes and outdoor spaces.
                From beautiful palms and flowering plants to fruit plants,
                ornamental plants and bonsai, we help you find greenery
                that suits your space.
              </p>

              <p>
                Whether you are creating a new garden, adding plants to
                your home or planning a larger landscape project, our
                nursery is here to help you choose the right plants.
              </p>


              {/* BENEFITS */}
              <div className="contact-benefits">

                <div>
                  <FiCheck />
                  <span>Wide variety of plants</span>
                </div>

                <div>
                  <FiCheck />
                  <span>Plants for gardens & landscapes</span>
                </div>

                <div>
                  <FiCheck />
                  <span>Helpful plant guidance</span>
                </div>

                <div>
                  <FiCheck />
                  <span>Quality greenery</span>
                </div>

              </div>


              <Link
                href="/our-plants"
                className="btn btn-primary"
              >
                Explore Our Plants
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          VISIT OUR NURSERY
      ========================================= */}
      <section className="section visit-section">
        <div className="container">

          <div className="visit-grid">

            {/* IMAGE */}
            <div className="visit-image">

              <img
                src="/unnamed (23).webp"
                alt="Sri Suryadeva Nursery Kadiyam"
              />

              <div className="visit-image-label">
                <span>SRI SURYADEVA</span>
                <b>NURSERY</b>
              </div>

            </div>


            {/* CONTENT */}
            <div className="visit-content">

              <p className="kicker">
                Visit our nursery
              </p>

              <h2>
                Discover the beauty of
                <span> living greenery.</span>
              </h2>

              <p>
                Step into a world of plants, trees and natural beauty at
                Sri Suryadeva Nursery. Located in Kadiyam, our nursery
                offers a wide collection of plants for homes, gardens,
                landscapes and outdoor spaces.
              </p>

              <p>
                Whether you are looking for flowering plants, palms,
                fruit plants, ornamental plants, bonsai or shrubs, we
                are here to help you find the right greenery for your
                space.
              </p>


              {/* POINTS */}
              <div className="visit-points">

                <div>
                  <FiCheck />
                  <span>Wide collection of plants</span>
                </div>

                <div>
                  <FiCheck />
                  <span>Plants for homes & gardens</span>
                </div>

                <div>
                  <FiCheck />
                  <span>Landscape & outdoor plants</span>
                </div>

                <div>
                  <FiCheck />
                  <span>Friendly plant guidance</span>
                </div>

              </div>


              {/* ADDRESS */}
              <div className="visit-address">

                <FiMapPin />

                <div>
                  <small>Our Nursery</small>

                  <strong>
                    Sri Suryadeva Nursery
                  </strong>

                  <span>
                    Kadiyam, Andhra Pradesh, India
                  </span>
                </div>

              </div>


              {/* PHONE BUTTON */}
              <a
                href="tel:+919948574718"
                className="btn btn-primary"
              >
                Call / WhatsApp
                <FiPhone />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}
      <section className="section contact-cta-section">
        <div className="container">

          <div className="contact-cta">

            <div>

              <p className="kicker">
                Let’s grow together
              </p>

              <h2>
                Your next
                <span> green space </span>
                starts here.
              </h2>

              <p>
                Have questions about plants, pricing or availability?
                We would love to hear from you.
              </p>

            </div>


            <div className="cta-actions">

              <a
                href="tel:+919948574718"
                className="btn btn-primary"
              >
                Call Us
                <FiPhone />
              </a>


              <Link
                href="/our-plants"
                className="btn btn-outline"
              >
                View Plants
                <FiArrowUpRight />
              </Link>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}