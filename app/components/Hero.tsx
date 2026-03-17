import Link from "next/link";

const HERO_STATS = [
  { value: "3,188+", label: "Visitors" },
  { value: "13+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-slide hero-bg-slide-1" />
        <div className="hero-bg-slide hero-bg-slide-2" />
        <div className="hero-bg-slide hero-bg-slide-3" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-content">
            <h1 id="hero-heading" className="hero-title">
              <span className="line-1">Engineering your dreams</span>
              <span className="accent">BUILDING the future</span>
            </h1>
            <p className="lead">
              Trusted construction solutions for commercial, residential, and
              industrial projects. Quality that lasts.
            </p>
          </div>
          <div className="hero-ctas">
            <Link
              href="/projects"
              className="btn btn-primary hero-cta-button hero-cta-button-primary"
            >
              Explore Our Projects
            </Link>
            <a
              href="#contact-us"
              className="btn btn-ghost hero-cta-button hero-cta-button-secondary"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-stats" aria-label="Company highlights">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <p className="hero-stat-value">{stat.value}</p>
              <p className="hero-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
