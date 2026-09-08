import Link from "next/link";
import { FiArrowUpRight, FiDroplet, FiSun } from "react-icons/fi";

const plants = [
  ["Areca Palm", "Palms", "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=900&q=85", "A graceful tropical choice for bright spaces and landscape styling."],
  ["Bird of Paradise", "Tropical", "https://images.unsplash.com/photo-1614594575924-9f5f6b5f9f9c?auto=format&fit=crop&w=900&q=85", "Bold foliage that brings a resort-like feel to modern gardens."],
  ["Flowering Greens", "Flowering", "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=85", "Colour and texture for balconies, patios and garden beds."],
  ["Fiddle Leaf Fig", "Indoor", "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=85", "A sculptural indoor favourite with large, expressive leaves."],
  ["Ornamental Foliage", "Ornamental", "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85", "Layer different shades of green for a rich, natural look."],
  ["Garden Palms", "Landscape", "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=900&q=85", "Create a tropical landscape with strong, architectural silhouettes."],
];

export default function OurPlants() {
  return (
    <div className="page-shell">
      <section className="inner-hero compact">
        <div className="container">
          <p className="kicker">Our plants</p>
          <h1>A collection of <span>living beauty.</span></h1>
          <p className="lead">Explore a visual selection of plants and use it as inspiration for your next green space.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="plant-catalog">
            {plants.map(([name, category, image, text]) => (
              <article className="catalog-card" key={name}>
                <div className="catalog-image"><img src={image} alt={name} /></div>
                <div className="catalog-body">
                  <span className="tag">{category}</span>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <div className="plant-meta"><span><FiSun /> Light-friendly</span><span><FiDroplet /> Care guidance</span></div>
                  <Link href="/contact" className="small-link">Enquire <FiArrowUpRight /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="catalog-note">
            <b>Looking for something specific?</b>
            <span>Plant availability can change with season and stock. Contact the nursery for the latest collection.</span>
            <Link href="/contact" className="btn btn-primary">Ask the nursery <FiArrowUpRight /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}