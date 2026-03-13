import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container services-hero-inner">
          <h1 className="services-title">Services</h1>
          <p className="services-subtitle">
            Trusted by leading organizations across various industries
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container services-grid">
          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M4 11l8-7 8 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M6 10v10h12V10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M10 20v-5h4v5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <h2>Residential Construction</h2>
            <p>
              Building durable, elegant homes tailored to your family's needs
              and dreams.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <rect
                  x="3"
                  y="8"
                  width="18"
                  height="11"
                  rx="1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M9 8V6h6v2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M3 12h18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <h2>Commercial Projects</h2>
            <p>
              Creating commercial spaces that are both functional and
              impressive.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <Image
                src="/services/clipboard-list-svgrepo-com.png"
                alt=""
                width={30}
                height={30}
                className="service-icon-image"
              />
            </span>
            <h2>Project Management</h2>
            <p>
              From planning to execution, we ensure your project stays on time
              and on budget.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <Image
                src="/services/interior-fit-outs.png"
                alt=""
                width={30}
                height={30}
                className="service-icon-image"
              />
            </span>
            <h2>Interior Fit-outs</h2>
            <p>
              Transforming your space with modern, efficient, and stylish
              upgrades.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <Image
                src="/services/architectural-designs.png"
                alt=""
                width={30}
                height={30}
                className="service-icon-image"
              />
            </span>
            <h2>Architectural Designs</h2>
            <p>
              Crafting innovative and sustainable designs to bring your vision
              to life.
            </p>
          </article>

          <article className="service-card">
            <span className="service-icon" aria-hidden="true">
              <Image
                src="/services/engineering-designing.png"
                alt=""
                width={30}
                height={30}
                className="service-icon-image"
              />
            </span>
            <h2>Engineering Designing</h2>
            <p>
              Ensuring safety, strength, and integrity across all our builds.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
