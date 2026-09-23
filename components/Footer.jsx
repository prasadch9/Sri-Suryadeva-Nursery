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
                src="/3fcb0d3a-8329-4270-9257-8e33cb188e40.jpg"
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

             <a
  href="https://www.facebook.com/share/1FSXgR7ded/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
>
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

            {/* Location */}
            <div className="footer-contact-item">
              <FiMapPin />
              <span>
                Kadiyam, Rajahmundry,
                <br />
                Andhra Pradesh, India
              </span>
            </div>

            {/* Phone 1 */}
            <div className="footer-contact-item">
              <FiPhone />
              <a href="tel:+919948574718">
                +91 99485 74718
              </a>
            </div>

            {/* Phone 2 */}
            <div className="footer-contact-item">
              <FiPhone />
              <a href="tel:+919395353377">
                +91 93953 53377
              </a>
            </div>

            {/* Phone 3 */}
            <div className="footer-contact-item">
              <FiPhone />
              <a href="tel:+919948574718">
                +91 99485 74718
              </a>
            </div>

            {/* Email */}
            <div className="footer-contact-item">
              <FiMail />
              <a href="mailto:srisuryadevanursery@gmail.com">
                srisuryadevanursery@gmail.com
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

