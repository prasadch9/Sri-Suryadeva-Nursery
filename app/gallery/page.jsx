const gallery = [
  "/unnamed (12).webp",
  "/unnamed (2).webp",
  "/unnamed (3).webp",
  "/unnamed (4).webp",
  "/unnamed (5).webp",
  "/unnamed (7).webp",
  "/unnamed (8).webp",
  "/unnamed (9).webp",
  "/unnamed (10).webp",
  "/unnamed (1).webp",
  "/unnamed (11).webp",
  "/unnamed (13).webp",
  "/unnamed (14).webp",
  "/unnamed (15).webp",
  "/unnamed (16).webp",
  "/unnamed (17).webp",
  "/unnamed (21).webp",
  "/unnamed (19).webp",
  "/unnamed (20).webp",
  "/unnamed (22).webp",
  "/unnamed (23).webp",
  "/unnamed (24).webp",
];

export default function Gallery() {
  return (
    <div className="page-shell">

      {/* Gallery Hero */}
      <section className="inner-hero compact">
        <div className="container">
          <p className="kicker">Sri Suryadeva Nursery</p>

          <h1>
            A little <span>green inspiration.</span>
          </h1>

          <p className="lead">
            Explore the beauty of plants, greenery and nature from
            Sri Suryadeva Nursery, Kadiyam.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">

          <div className="gallery-heading">
            <div>
              <p className="kicker">Our Gallery</p>
              <h2>Where nature meets beauty.</h2>
            </div>

            <p>
              Take a glimpse into our collection of beautiful plants,
              greenery and nursery spaces.
            </p>
          </div>

          <div className="modern-gallery">
            {gallery.map((image, i) => (
              <figure
                className={`modern-gallery-item item-${i + 1}`}
                key={image}
              >
                <img
                  src={image}
                  alt={`Sri Suryadeva Nursery ${i + 1}`}
                />

                <div className="gallery-overlay">
                  <span>0{i + 1}</span>
                  <div className="gallery-line"></div>
                  <p>Sri Suryadeva Nursery</p>
                </div>
              </figure>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}