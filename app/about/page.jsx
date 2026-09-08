import Link from "next/link";
import {
  FiArrowUpRight,
  FiHeart,
  FiFeather,
  FiTarget,
  FiCompass,
} from "react-icons/fi";

export default function About() {
  return (
    <div className="page-shell">
      {/* =========================
          INNER HERO
      ========================= */}
      <section className="inner-hero">
        <div className="container">
          <p className="kicker">About Sri Suryadeva</p>

          <h1>
            Rooted in nature,
            <br />
            <span>grown with care.</span>
          </h1>

          <p className="lead">
            A green destination in Kadiyam for people who want to bring more
            life, colour and freshness into their spaces.
          </p>
        </div>
      </section>

      {/* =========================
          OUR STORY
      ========================= */}
      <section className="section">
        <div className="container split-story">
          <div className="story-image">
            <img
              src="/unnamed (18).webp"
              alt="Plants at Sri Suryadeva Nursery"
            />
          </div>

          <div className="story-copy">
            <p className="kicker">Our story</p>

            <h2>
              Growing more than plants — growing possibilities.
            </h2>

            <p>
              Sri Suryadeva Nursery is built around a simple idea: healthy
              plants can transform the way a place looks and feels. From a
              balcony corner to a large landscape, we help you find plants
              that suit your vision.
            </p>

            <p>
              Based in Kadiyam, our nursery experience is designed to feel
              fresh, welcoming and practical — so you can explore greenery,
              compare choices and take home something that fits your space.
            </p>

            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Plan a visit <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          OUR MISSION & VISION
      ========================= */}
      <section className="section mission-vision-section">
        <div className="container">

          <div className="section-heading mission-heading">
            <div>
              <p className="kicker">What drives us</p>

              <h2>
                Our Mission & Our Vision
              </h2>
            </div>
          </div>

          <div className="mission-vision-grid">

            {/* Mission */}
            <div className="mission-card">
              <div className="mission-icon">
                <FiTarget />
              </div>

              <div className="mission-number">01</div>

              <p className="kicker">Our Mission</p>

              <h3>
                Making every space greener and more beautiful.
              </h3>

              <p>
                Our mission is to provide healthy, beautiful and diverse
                plants that help people create greener homes, gardens and
                outdoor spaces. We aim to make choosing and caring for plants
                a simple, enjoyable and rewarding experience.
              </p>
            </div>

            {/* Vision */}
            <div className="vision-card">
              <div className="mission-icon">
                <FiCompass />
              </div>

              <div className="mission-number">02</div>

              <p className="kicker">Our Vision</p>

              <h3>
                To inspire a greener future, one plant at a time.
              </h3>

              <p>
                Our vision is to become a trusted destination for quality
                plants in Kadiyam and beyond, inspiring more people to bring
                nature into their everyday lives and creating spaces where
                greenery can thrive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          OUR VALUES
      ========================= */}
      <section className="section soft-section">
        <div className="container values-grid">
          {[
            [
              FiFeather,
              "Nature First",
              "We celebrate greenery in every part of the experience — from the plants we showcase to the visual identity of our nursery.",
            ],
            [
              FiHeart,
              "Grown with Care",
              "We present plants with attention to freshness, appearance and the needs of the spaces they are going to.",
            ],
            [
              FiTarget,
              "Right Plant, Right Space",
              "Our goal is to make plant selection easier and more enjoyable for homes, gardens and commercial spaces.",
            ],
          ].map(([Icon, title, text]) => (
            <div
              className="value-card"
              key={title}
            >
              <Icon />

              <h3>{title}</h3>

              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}