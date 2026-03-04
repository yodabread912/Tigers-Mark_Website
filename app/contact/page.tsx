"use client";

import { useState } from "react";

const QUOTE_PRODUCTS = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  name: `Product Name ${String(index + 1).padStart(2, "0")}`,
  badge: "Lorem",
}));

const ITEMS_PER_PAGE = 6;

export default function QuotePage() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(QUOTE_PRODUCTS.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = QUOTE_PRODUCTS.slice(start, start + ITEMS_PER_PAGE);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div className="quote-page">
      <section className="quote-hero">
        <div className="container quote-hero-inner">
          <h1 className="quote-title">Get a Quote</h1>
          <p className="quote-subtitle">
            Quality construction materials and supplies for every project
          </p>
          <button
            className="quote-cta"
            type="button"
            onClick={() => setOpen(true)}
          >
            Request a Quote
          </button>
        </div>
      </section>

      <section className="quote-catalog">
        <div className="container quote-grid">
          {visibleProducts.map((product) => (
            <article className="quote-card" key={`product-${product.id}`}>
              <div className="quote-thumb">
                <span className="quote-badge">{product.badge}</span>
              </div>
              <div className="quote-content">
                <h2 className="quote-name">{product.name}</h2>
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

        <div className="container projects-pagination">
          <button
            className="pager-link"
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`pager-number ${currentPage === page ? "active" : ""}`}
              type="button"
              onClick={() => setCurrentPage(page)}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          ))}

          <button
            className="pager-link"
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>

      {open ? (
        <div
          className="quote-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
        >
          <div className="quote-modal-card">
            <button
              className="quote-modal-close"
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <h2 id="quote-modal-title">Request a Quote</h2>
            <p className="quote-modal-subtitle">
              Fill out the form below and we will get back to you as soon as
              possible.
            </p>
            <form
              className="quote-form"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label>
                <span className="quote-label-text">
                  Name <span className="required">*</span>
                </span>
                <input type="text" placeholder="John Doe" />
              </label>
              <label>
                <span className="quote-label-text">
                  Email Address <span className="required">*</span>
                </span>
                <input type="email" placeholder="john@example.com" />
              </label>
              <label>
                <span className="quote-label-text">
                  Phone Number <span className="required">*</span>
                </span>
                <input type="tel" placeholder="**********" />
              </label>
              <label>
                <span className="quote-label-text">
                  Subject <span className="required">*</span>
                </span>
                <select defaultValue="General Inquiry">
                  <option>General Inquiry</option>
                  <option>For Products</option>
                  <option>For Services</option>
                  <option>Partnership Opportunity</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                <span className="quote-label-text">
                  Your Message <span className="required">*</span>
                </span>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                />
              </label>
              <label className="quote-checkbox">
                <input type="checkbox" />I agree to the terms and conditions and
                privacy policy. I consent to Tigers Mark Corporation contacting
                me about my inquiry.
              </label>
              <div className="quote-form-actions">
                <button
                  type="button"
                  className="quote-btn ghost"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="quote-btn primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
