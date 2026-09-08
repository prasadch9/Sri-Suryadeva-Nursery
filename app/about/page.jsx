import Link from "next/link";
import { FiArrowUpRight, FiHeart, FiFeather, FiTarget } from "react-icons/fi";

export default function About() {
  return (
    <div className="page-shell">
      <section className="inner-hero">
        <div className="container">
          <p className="kicker">About Sri Suryadeva</p>
          <h1>Rooted in nature,<br /><span>grown with care.</span></h1>
          <p className="lead">A green destination in Kadiyam for people who want to bring more life, colour and freshness into their spaces.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split-story">
          <div className="story-image"><img src="/unnamed (18).webp" alt="Plants at a nursery" /></div>
          <div className="story-copy">
            <p className="kicker">Our story</p>
            <h2>Growing more than plants — growing possibilities.</h2>
            <p>
              Sri Suryadeva Nursery is built around a simple idea: healthy plants can transform
              the way a place looks and feels. From a balcony corner to a large landscape, we help
              you find plants that suit your vision.
            </p>
            <p>
              Based in Kadiyam, our nursery experience is designed to feel fresh, welcoming and
              practical — so you can explore greenery, compare choices and take home something
              that fits your space.
            </p>
            <Link href="/contact" className="btn btn-primary">Plan a visit <FiArrowUpRight /></Link>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container values-grid">
          {[
            [FiFeather, "Nature First", "We celebrate greenery in every part of the experience — from the plants we showcase to the visual identity of our nursery."],
            [FiHeart, "Grown with Care", "We present plants with attention to freshness, appearance and the needs of the spaces they are going to."],
            [FiTarget, "Right Plant, Right Space", "Our goal is to make plant selection easier and more enjoyable for homes, gardens and commercial spaces."],
          ].map(([Icon, title, text]) => (
            <div className="value-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </section>
    </div>
  );
}