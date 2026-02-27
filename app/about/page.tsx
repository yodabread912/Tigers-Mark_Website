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
              ◎
            </span>
            <div>
              <h2 className="about-item-title">Vision</h2>
              <p className="about-item-text">
                Tiger&apos;s Mark Corporation is resolute in providing value-added
                construction and procurement services to our customers by
                providing quality workmanship, customer service and maintaining
                the highest level of professionalism and fairness in our
                relationships with our customers, vendors and employees. We seek
                to become a valued supply partner of global brands to bridge the
                gap of construction materials and equipment locally.
              </p>
            </div>
          </article>

          <article className="about-item">
            <span className="about-item-icon" aria-hidden="true">
              ◎
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
    </main>
  );
}
