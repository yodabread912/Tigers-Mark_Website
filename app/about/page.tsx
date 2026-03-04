import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-page" aria-labelledby="about-heading">
      <section className="about-top">
        <div className="container about-top-inner">
          <h1 id="about-heading" className="about-title">
            Building Vision
            <br />
            Across the
            <br />
            Philippines
          </h1>
          <p className="about-intro">
            Established in 2020, Tiger&apos;s Mark Corporation has been raising
            construction standards through quality workmanship, innovative
            solutions, and reliable service. Led by experienced professionals,
            we deliver excellence across diverse projects and supply top-tier
            materials and equipment nationwide. Guided by professionalism,
            integrity, and customer satisfaction, we strive to exceed
            expectations while helping build a stronger, more sustainable future
            for the Philippines.
          </p>
        </div>
      </section>

      <section className="about-mission-wrap" aria-label="Vision and Mission">
        <div className="container about-mission-panel">
          <article className="about-item">
            <span className="about-item-icon" aria-hidden="true">
              <Image
                src="/about/vision.png"
                alt=""
                width={32}
                height={32}
                className="about-item-icon-image"
              />
            </span>
            <div>
              <h2 className="about-item-title">Vision</h2>
              <p className="about-item-text">
                Tiger&apos;s Mark Corporation is resolute in providing
                value-added construction and procurement services to our
                customers by providing quality workmanship, customer service and
                maintaining the highest level of professionalism and fairness in
                our relationships with our customers, vendors and employees. We
                seek to become a valued supply partner of global brands to
                bridge the gap of construction materials and equipment locally.
              </p>
            </div>
          </article>

          <article className="about-item">
            <span className="about-item-icon" aria-hidden="true">
              <Image
                src="/about/mission.png"
                alt=""
                width={32}
                height={32}
                className="about-item-icon-image"
              />
            </span>
            <div>
              <h2 className="about-item-title">Mission</h2>
              <p className="about-item-text">
                Tiger&apos;s Mark Corporation aims to become the preferred
                construction partner in the industry, and ultimately in building
                the future of the Philippines. We seek to be the premier
                organization with the ability to supply in all kinds of
                construction materials and equipment with our own logistics
                nationwide.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="core-values" aria-labelledby="core-values-heading">
        <div className="container core-values-inner">
          <h2 id="core-values-heading" className="core-values-title">
            Core Values
          </h2>
          <div className="core-values-grid">
            <article className="core-value-card">
              <span className="core-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 21h10l-1-6H8l-1 6z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <h3>Excellence</h3>
              <p>
                We are passionate about being the best in everything we do,
                relentlessly pursuing continuous improvement and research.
              </p>
            </article>

            <article className="core-value-card">
              <span className="core-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <h3>Integrity</h3>
              <p>
                We seek to act with integrity and accountability for our
                actions.
              </p>
            </article>

            <article className="core-value-card">
              <span className="core-value-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M12 3l2.2 4.6L19 8l-3.5 3.4.9 4.9L12 13.8 7.6 16.3l.9-4.9L5 8l4.8-.4L12 3z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <h3>Innovation</h3>
              <p>
                We are innovators. We instill idea generation in our culture,
                and foster creativity in the workplace.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
