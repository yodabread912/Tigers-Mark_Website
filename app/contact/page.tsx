export default function QuotePage() {
  return (
    <div className="quote-page">
      <section className="quote-hero">
        <div className="container quote-hero-inner">
          <h1 className="quote-title">Get a Quote</h1>
          <p className="quote-subtitle">
            Quality construction materials and supplies for every project
          </p>
          <button className="quote-cta" type="button">
            Request a Quote
          </button>
        </div>
      </section>

      <section className="quote-catalog">
        <div className="container quote-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <article className="quote-card" key={`product-${index}`}>
              <div className="quote-thumb">
                <span className="quote-badge">Lorem</span>
              </div>
              <div className="quote-content">
                <h2 className="quote-name">Product Name</h2>
                <p className="quote-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <ul className="quote-list">
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="container quote-pagination">
          <button className="quote-page-btn" type="button">
            &lt; Previous
          </button>
          <button className="quote-page-btn is-active" type="button">
            1
          </button>
          <button className="quote-page-btn" type="button">
            2
          </button>
          <button className="quote-page-btn" type="button">
            3
          </button>
          <span className="quote-page-dots">...</span>
          <button className="quote-page-btn" type="button">
            Next &gt;
          </button>
        </div>
      </section>
    </div>
  );
}
