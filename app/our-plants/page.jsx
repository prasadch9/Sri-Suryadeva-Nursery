"use client";

import { useState } from "react";
import {
  FiArrowUpRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiX,
} from "react-icons/fi";

const categories = [
  "Palms",
  "Ground Covers",
  "Bamboos",
  "Fruits",
  "Avenues",
  "Bonsai",
  "Tapiaries",
  "Olives",
  "Shrubs",
  "Ornamental Plants",
];

const plants = {
  Palms: [
    ["Licuala Spinosa", "/plants/palms/licuala spinosa.jpg"],
    ["Pritchardia Pacifica", "/plants/palms/pritchardia pacifica.webp"],
    ["Ravenala Madagascariensis (Traveller Palm)", "/plants/palms/ravenala madagascariensis (traveller palm).jpg"],
    ["Ravenea Rivularis (Ravenea Palm)", "/plants/palms/ravenea rivularis (ravenea palm).jpg"],
    ["Red Neck Palm", "/plants/palms/red neck palm.jpeg"],
    ["Red Wax Sealing Palm", "/plants/palms/red wax sealing palm.jpg"],
    ["Rhapis Excelsa", "/plants/palms/rhapis excelsa.webp"],
    ["Roystonea Regia (Royal Palam)", "/plants/palms/roystonea regia (Royal Palam).jpg"],
    ["Veitchia Merrillii Golden", "/plants/palms/veitchia merrillii golden.jpg"],
    ["Veitchia Merrillii Green", "/plants/palms/veitchia merrillii green.jpg"],
    ["Washingtonia Filifera", "/plants/palms/washingtonia filifera.jpg"],
    ["Wodyetia Bifurcata(Foxtail Palm)", "/plants/palms/wodyetia bifurcata(foxtail palm).jpg"],
  ],

  "Ground Covers": [
    ["Boston Fern", "/plants/ground-covers/boston fern.jpg"],
    ["Cymbopogon Citratrs (Lemon Grass)", "/plants/ground-covers/cymbopogon citratrs (lemon grass).jpg"],
    ["Dianella Variegated", "/plants/ground-covers/dianella variegated.jpg"],
    ["Golden Fern", "/plants/ground-covers/golden fern.jpg"],
    ["Mexican Grass", "/plants/ground-covers/mexican grass.jpeg"],
    ["Mondo Grass", "/plants/ground-covers/mondo grass.jpg"],
    ["Ophiopogon Japonicus variegated", "/plants/ground-covers/ophiopogon japonicus variegated.webp"],
    ["Oxalis Triangularis", "/plants/ground-covers/oxalis triangularis.webp"],
    ["Portulaca Grandiflora", "/plants/ground-covers/portulaca grandiflora.jpg"],
    ["Ruellia", "/plants/ground-covers/ruellia.webp"],
    ["Sansevieria Plants", "/plants/ground-covers/sansevieria plants image.webp"],
    ["Wedelia Trilobata", "/plants/ground-covers/wedelia trilobata.jpg"],
  ],

  Bamboos: [
    ["Bambusa Multiplex Gold", "/plants/bamboos/bambusa multiplex gold.webp"],
    ["Bambusa Variegated", "/plants/bamboos/bambusa variegated plant images.webp"],
    ["Bambusa Ventricosa", "/plants/bamboos/bambusa ventricosa.jpg"],
    ["Bambusa Vulgaris(Golden Bamboo)", "/plants/bamboos/bambusa vulgaris(golden bamboo).jpg"],
    ["Blue Pine Bamboo", "/plants/bamboos/blue pine bamboo.webp"],
    ["Dendrocalamus Giganteus(Gaint Bamboo)", "/plants/bamboos/dendrocalamus giganteus(gaint bamboo).webp"],
    ["Equisetum Hyemale", "/plants/bamboos/equisetum hyemale.jpg"],
    ["Green Bamboo", "/plants/bamboos/green bamboo.webp"],
    ["Painting Bamboo.", "/plants/bamboos/painting bamboo.webp"],
    ["Phyllostachys Nigra (Black Bamboo)", "/plants/bamboos/phyllostachys nigra (black bamboo).webp"],
    ["Schizostachyum Brachycladum", "/plants/bamboos/schizostachyum brachycladum.jpg"],
    ["White Bamboo", "/plants/bamboos/white bamboo.jpg"],
  ],

  Fruits: [
    ["Guava - Psidium Guajava", "/plants/fruits/guava - psidium guajava.jpg"],
    ["Hylocereus Undatus-Dragon Fruit", "/plants/fruits/hylocereus undatus- dragon fruit.JPG"],
    ["Laxmanphal-Annona Muricate", "/plants/fruits/laxmanphal - annona muricate.jpg"],
    ["Mango- Mangifera Indica", "/plants/fruits/mango- mangifera indica.jpg"],
    ["Pomegranate-Punica Granatum", "/plants/fruits/pomegranate- punica granatum.png"],
    ["Pomelo- Citrus Maxima", "/plants/fruits/pomelo- citrus maxima.jpg"],
    ["Ramphal- Annona Reticulata", "/plants/fruits/ramphal- annona reticulata.webp"],
    ["Starfruit- Averrhoa Carambola", "/plants/fruits/starfruit- averrhoa carambola.webp"],
    ["Tamarind-Tamarindus Indica", "/plants/fruits/tamarind- tamarindus indica.jpg"],
    ["Thai Mango", "/plants/fruits/thai mango.jpeg"],
    ["Water Apple-Syzygium Samarangense", "/plants/fruits/water apple -syzygium samarangense.jpg"],
    ["White Jamoon-Syzygium Cumini White", "/plants/fruits/white jamoon - syzygium cumini white.webp"],
  ],

  Avenues: [
    ["Bolusanthus Speciosus", "/plants/avenues/bolusanthus speciosus.jpg"],
    ["Brachychiton Acerifolius", "/plants/avenues/brachychiton acerifolius.webp"],
    ["Brassia Actinophylla", "/plants/avenues/brassia actinophylla.jpg"],
    ["Chorisia", "/plants/avenues/chorisia plant image.webp"],
    ["Ficus Lyrata", "/plants/avenues/ficus lyrata.jpg"],
    ["Michelia Champaca", "/plants/avenues/michelia champaca plant image.webp"],
    ["Moringa Druhardi", "/plants/avenues/moringa druhardi.jpeg"],
    ["Podocarpus Gracilior", "/plants/avenues/podocarpus gracilior.jpg"],
    ["Polyalthia Pendula", "/plants/avenues/polyalthia pendula.jpeg"],
    ["Schizolobum Parahyba (Tower Tree)", "/plants/avenues/schizolobum parahyba (tower tree).jpg"],
    ["Terminalia Mantaly Green", "/plants/avenues/terminalia mantaly green.jpg"],
    ["Terminalia Mantaly Variegated", "/plants/avenues/terminalia mantaly variegated.jpg"],
  ],

  Bonsai: [
    ["Bonsai 1", "/plants/bonsai/images 1.jpg"],
    ["Bonsai 2", "/plants/bonsai/bonsai 2.jpg"],
    ["Bonsai 3", "/plants/bonsai/bonsai 3.jpg"],
    ["Bonsai 4", "/plants/bonsai/bonsai 4.jpg"],
    ["Bonsai 5", "/plants/bonsai/bonsai 5.jpeg"],
    ["Bonsai 6", "/plants/bonsai/bonsai 6.jpg"],
    ["Bonsai 7", "/plants/bonsai/bonsai 7.jpg"],
    ["Bonsai 8", "/plants/bonsai/bonsai 8.jpg"],
    ["Bonsai 9", "/plants/bonsai/bonsai 9.jpg"],
    ["Bonsai 10", "/plants/bonsai/bonsai 10.jpg"],
    ["Bonsai 11", "/plants/bonsai/bonsai 11.webp"],
    ["Bonsai 12", "/plants/bonsai/bonsai 12.jpeg"],
  ],

  Tapiaries: [
    ["Bougainvillea", "/plants/topiaries/bougainvillea.jpeg"],
    ["Clusia Rosea", "/plants/topiaries/clusia rosea.webp"],
    ["Ficus Mircocarpa", "/plants/topiaries/ficus mircocarpa.jpeg"],
    ["Ficus Nuda", "/plants/topiaries/ficus nuda.webp"],
    ["Ficus Panda Multiheads", "/plants/topiaries/ficus panda multiheads.webp"],
    ["Ficus Panda", "/plants/topiaries/ficus panda.jpg"],
    ["Ficus Reginald", "/plants/topiaries/ficus reginald.jpg"],
    ["Ficus Starlight", "/plants/topiaries/ficus starlight.webp"],
    ["Ficus Triangular", "/plants/topiaries/ficus triangular.jpg"],
    ["Malpighia", "/plants/topiaries/malpighia.webp"],
    ["Multicoloured Bougainvillea", "/plants/topiaries/multicoloured bougainvillea.webp"],
    ["Syzygium Myrtifolium Dwarf", "/plants/topiaries/syzygium myrtifolium dwarf.jpg"],
  ],

  Olives: [
    ["Olive 1", "/plants/olives/olives 1.jpg"],
    ["Olive 2", "/plants/olives/olives 2.jpg"],
    ["Olive 3", "/plants/olives/olives 3.jpg"],
    ["Olive 4", "/plants/olives/olives 4.jpeg"],
    ["Olive 5", "/plants/olives/olives 5.jpg"],
    ["Olive 6", "/plants/olives/olives 6.jpg"],
    ["Olive 7", "/plants/olives/olives 7.jpg"],
    ["Olive 8", "/plants/olives/olives 8.jpeg"],
    ["Olive 9", "/plants/olives/olives 9.jpg"],
    ["Olive 10", "/plants/olives/olives 10.jpg"],
    ["Olive 11", "/plants/olives/olives 11.webp"],
    ["Olive 12", "/plants/olives/olives 12.jpg"],
  ],

  Shrubs: [
    ["Leucophyllum Frutescens", "/plants/shrubs/leucophyllum frutescens.webp"],
    ["Mussaenda Species", "/plants/shrubs/mussaenda species.webp"],
    ["Plumbago Auriculata", "/plants/shrubs/plumbago auriculata.jpg"],
    ["Ravenia Spectabilis Veriegated (Lemonia)", "/plants/shrubs/ravenia spectabilis veriegated (lemonia).jpg"],
    ["Russelia Equisetiformis", "/plants/shrubs/russelia equisetiformis.jpg"],
    ["Schefflera Variegated", "/plants/shrubs/schefflera variegated.jpg"],
    ["Tabernaemontana Divaricata Variegata", "/plants/shrubs/tabernaemontana divaricata variegata.jpg"],
    ["Tabernaemontana Divaricata", "/plants/shrubs/tabernaemontana divaricata.jpg"],
    ["Tecoma Capensis Orange", "/plants/shrubs/tecoma capensis orange.webp"],
    ["Tecoma Capensis Purple", "/plants/shrubs/tecoma capensis purple.jpg"],
    ["Tecoma Gaudichaudi", "/plants/shrubs/tecoma gaudichaudi.jpg"],
    ["Thevetia Neriifolia", "/plants/shrubs/thevetia neriifolia.jpg"],
  ],

 "Ornamental Plants": [
  ["Plumeria Pudica", "/plants/ornamental-plants/plumeria pudica.webp"],
  ["Plumeria Rubra", "/plants/ornamental-plants/plumeria rubra.webp"],
  ["Plumeria Singaporensis", "/plants/ornamental-plants/plumeria singaporensis.webp"],
  ["Radern Machera", "/plants/ornamental-plants/radern machera.jpeg"],
  ["Strelitzia Reginea(Bird of Paradise)", "/plants/ornamental-plants/strelitzia reginea(bird of paradise).webp"],
  ["Thai Cypress", "/plants/ornamental-plants/thai cypress.webp"],
  ["Yucca Elephantipes - Silver Star", "/plants/ornamental-plants/yucca elephantipes - silver star.jpg"],
  ["Yucca Elephantipes", "/plants/ornamental-plants/yucca elephantipes.jpg"],
  ["Yucca Rostrata", "/plants/ornamental-plants/yucca rostrata.jpeg"],
  ["Zamia Furfuracea", "/plants/ornamental-plants/zamia furfuracea.jpg"],
  ["Zamia Integrifolia", "/plants/ornamental-plants/zamia integrifolia.jpg"],
  ["Zamioculcas Zamifolia", "/plants/ornamental-plants/zamioculcas zamifolia.jpg"],
],
};

export default function OurPlants() {
  const [activeCategory, setActiveCategory] = useState("Palms");
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <div className="page-shell">

      {/* HEADER */}
      <section className="plants-hero">
        <div className="container">
          <p className="kicker">Sri Suryadeva Nursery</p>

          <h1>
            Explore our <span>plants.</span>
          </h1>

          <p className="lead">
            Discover a beautiful collection of plants for homes,
            gardens, landscapes and commercial spaces.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section plants-section">
        <div className="container">

          <div className="plant-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "category-btn active"
                    : "category-btn"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PLANTS */}
          <div className="plants-heading">
            <div>
              <p className="kicker">{activeCategory}</p>
              <h2>Our {activeCategory}</h2>
            </div>

            <span className="plant-count">
              {plants[activeCategory].length} Plants
            </span>
          </div>

          <div className="plant-grid">
            {plants[activeCategory].map(([name, image], index) => (
              <article className="plant-card" key={name}>

                <div className="plant-image">
                  <img src={image} alt={name} />

                  <span className="plant-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="plant-card-body">

                  <p className="plant-category">
                    {activeCategory}
                  </p>

                  <h3>{name}</h3>

                  <button
                    className="details-btn"
                    onClick={() =>
                      setSelectedPlant({
                        name,
                        image,
                        category: activeCategory,
                      })
                    }
                  >
                    Get Details
                    <FiArrowUpRight />
                  </button>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT POPUP */}
      {selectedPlant && (
        <div
          className="plant-modal"
          onClick={() => setSelectedPlant(null)}
        >
          <div
            className="plant-contact-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedPlant(null)}
            >
              <FiX />
            </button>

            <div className="modal-image">
              <img
                src={selectedPlant.image}
                alt={selectedPlant.name}
              />
            </div>

            <div className="modal-content">

              <p className="kicker">
                {selectedPlant.category}
              </p>

              <h2>{selectedPlant.name}</h2>

              <p>
                Interested in this plant? Contact Sri Suryadeva
                Nursery for availability, pricing and more details.
              </p>

              <div className="contact-details">

                <a href="tel:+919948574718">
                  <FiPhone />
                  <span>
                    <small>Call Us</small>
                    +91 99485 74718
                  </span>
                </a>

                <a href="mailto:info@srisuryadevanursery.com">
                  <FiMail />
                  <span>
                    <small>Email</small>
                    info@srisuryadevanursery.com
                  </span>
                </a>

                <div>
                  <FiMapPin />
                  <span>
                    <small>Visit Us</small>
                    Kadiyam, Andhra Pradesh
                  </span>
                </div>

              </div>

              <a
                href="/contact"
                className="btn btn-primary modal-contact-btn"
              >
                Contact Nursery
                <FiArrowUpRight />
              </a>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}