import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheck,
  FiFeather,
  FiMapPin,
  FiSun,
} from "react-icons/fi";

const plantImages = {
  palms: "/unnamed (12).webp",
  flowering: "/unnamed (2).webp",
  indoor: "/unnamed (3).webp",
  fruit: "/hylocereus undatus- dragon fruit.JPG",
};

export default function Home() {
  return (
    <>
                   {/* Hero Image Container */}
  <div className="hero-top-image">
    <img
      src="/home image logo.jpg"
      alt="Sri Suryadeva Nursery"
    />
  </div>
      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
    
            <h1>
              Bring <span>nature</span> home.
            </h1>

            <p>
              Discover beautiful palms, flowering plants, ornamental greens
              and garden-ready plants, carefully nurtured at Sri Suryadeva
              Nursery.
            </p>

            <div className="hero-actions">
              <Link
                href="/our-plants"
                className="btn btn-primary"
              >
                Explore Our Plants <FiArrowUpRight />
              </Link>

              <Link
                href="/contact"
                className="btn btn-ghost"
              >
                Visit Nursery
              </Link>
            </div>

            <div className="hero-points">
              <span>
                <FiCheck /> Healthy plants
              </span>

              <span>
                <FiCheck /> Garden-ready choices
              </span>

              <span>
                <FiCheck /> Kadiyam nursery
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-visual">
            <div className="plant-card main-plant-card">
              <img
                src="/zam.webp"
                alt="Sri Suryadeva Nursery plants"
              />

              <div className="floating-label">
                <FiSun /> Grown with care
              </div>
            </div>

            <div className="mini-card mini-top">
              <strong>Fresh greens</strong>
              <span>For homes & gardens</span>
            </div>

            <div className="mini-card mini-bottom">
              <FiMapPin />
              <span>Kadiyam</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PLANT COLLECTION
      ========================= */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="kicker">Explore our collection</p>

              <h2>
                Plants that make spaces feel alive.
              </h2>
            </div>

            <Link
              href="/our-plants"
              className="text-link"
            >
              View all plants <FiArrowUpRight />
            </Link>
          </div>

          <div className="plant-grid">
            {[
              [
                "Palms & Tropical",
                plantImages.palms,
                "Statement plants for entrances, landscapes and open spaces.",
              ],
              [
                "Flowering Plants",
                plantImages.flowering,
                "Colourful blooms to add warmth and seasonal beauty.",
              ],
              [
                "Indoor & Ornamental",
                plantImages.indoor,
                "Easy-to-style greens for homes, offices and interiors.",
              ],
              [
                "Fruit Plants",
                plantImages.fruit,
                "Freshness that grows into flavour.",
              ],
            ].map(([title, image, text]) => (
              <article
                className="plant-tile"
                key={title}
              >
                <div className="image-wrap">
                  <img
                    src={image}
                    alt={title}
                  />
                </div>

                <div className="tile-content">
                  <h3>{title}</h3>

                  <p>{text}</p>

                  <Link
                    href="/our-plants"
                    className="circle-arrow"
                    aria-label={`View ${title}`}
                  >
                    <FiArrowUpRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          NATURE BANNER
      ========================= */}
      <section className="nature-banner">
        <div className="container nature-banner-inner">
          <div>
            <p className="kicker">
              A greener way of living
            </p>

            <h2>
              From a single plant to a complete garden.
            </h2>
          </div>

          <Link
            href="/about"
            className="btn btn-light"
          >
            Know our story <FiArrowUpRight />
          </Link>
        </div>
      </section>

      {/* =========================
          WHY CHOOSE US
      ========================= */}
      <section className="section">
        <div className="container feature-grid">
          <div className="feature-copy">
            <p className="kicker">
              Why Sri Suryadeva
            </p>

            <h2>
              Nature-first. Fresh. Beautiful.
            </h2>

            <p>
              We believe a good nursery is more than a place to buy plants.
              It is a place where people discover ideas for greener homes,
              gardens and outdoor spaces.
            </p>

            <div className="feature-list">
              <div>
                <span>01</span>

                <div>
                  <b>Healthy selection</b>

                  <p>
                    Plants presented with care and ready for your next
                    green project.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <b>Wide variety</b>

                  <p>
                    Explore palms, flowering plants, ornamental greens
                    and more.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <b>Garden inspiration</b>

                  <p>
                    Choose plants that fit your space, style and
                    landscape vision.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Image */}
          <div className="feature-image">
            <img
              src="/unnamed (4).webp"
              alt="Green plants at Sri Suryadeva Nursery"
            />

            <div className="glass-note">
              <FiFeather />

              <b>Grow something beautiful.</b>

              <span>
                Start your green journey at Kadiyam.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}