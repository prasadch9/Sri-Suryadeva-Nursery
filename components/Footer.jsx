import Link from "next/link";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img
                src="/logoo.jpg"
                alt="Sri Suryadeva Nursery"
              />
            </Link>

            <p>
              Bringing nature closer to your home with beautiful,
              healthy and garden-ready plants from Kadiyam.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram">
                <FiInstagram />
              </a>

              <a href="#" aria-label="Facebook">
                <FiFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/our-plants">Our Plants</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* Plants */}
          <div className="footer-column">
            <h3>Our Plants</h3>

            <Link href="/our-plants">Palms & Tropical</Link>
            <Link href="/our-plants">Flowering Plants</Link>
            <Link href="/our-plants">Indoor Plants</Link>
            <Link href="/our-plants">Ornamental Plants</Link>
            <Link href="/our-plants">Garden Plants</Link>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Visit Our Nursery</h3>

            <div>
              <FiMapPin />
              <span>
                Kadiyam, Rajahmundry,
                <br />
                Andhra Pradesh, India
              </span>
            </div>

            <div>
              <FiPhone />
              <a href="tel:+9194931 12522">
                +91 94931 12522
              </a>
            </div>

            <div>
              <FiMail />
              <a href="mailto:info@srisuryadevanursery.com">
                info@srisuryadevanursery.com
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <span>GROW SOMETHING BEAUTIFUL</span>
            <h2>Let your space breathe.</h2>
          </div>

          <Link
            href="/contact"
            className="footer-cta-button"
          >
            Visit Nursery
            <FiArrowUpRight />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Sri Suryadeva Nursery.
            All rights reserved.
          </p>

          <p>
            Rooted in Kadiyam 🌿
          </p>
        </div>
      </div>
    </footer>
  );
}