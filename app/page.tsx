import Hero from "./components/Hero";
import ActivitiesCarousel from "./components/ActivitiesCarousel";
import Image from "next/image";

const WHY_CHOOSE_US = [
  {
    icon: "safety",
    title: "Safety First",
    description:
      "Stringent safety protocols and zero-compromise approach to worker and site safety.",
  },
  {
    icon: "recognition",
    title: "Industry Recognition",
    description:
      "Multiple awards and certifications recognizing our commitment to excellence.",
  },
  {
    icon: "time",
    title: "On-time Delivery",
    description:
      "99% of our projects completed on or ahead of schedule with meticulous planning.",
  },
  {
    icon: "quality",
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage ensuring superior construction standards.",
  },
  {
    icon: "team",
    title: "Expert Team",
    description:
      "Highly skilled engineers, architects, and construction professionals at your service.",
  },
  {
    icon: "success",
    title: "Proven Track Record",
    description:
      "13+ years of successful project delivery across diverse construction sectors.",
  },
];

function WhyChooseIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "safety":
      return (
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <path
            d="M12 3l7 3v5c0 4.4-2.9 8.3-7 9.6C7.9 19.3 5 15.4 5 11V6l7-3z"
            fill="none"
            stroke="#f15a2a"
            strokeWidth="2"
          />
        </svg>
      );
    case "recognition":
      return (
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <circle
            cx="12"
            cy="8"
            r="4"
            fill="none"
            stroke="#f15a2a"
            strokeWidth="2"
          />
          <path
            d="M9 12.5l-1 7 4-2.2 4 2.2-1-7"
            fill="none"
            stroke="#f15a2a"
            strokeWidth="2"
          />
        </svg>
      );
    case "time":
      return (
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="#f15a2a"
            strokeWidth="2"
          />
          <path d="M12 7v5l3 2" fill="none" stroke="#f15a2a" strokeWidth="2" />
        </svg>
      );
    case "quality":
      return (
        <Image
          src="/home/quality-assurance.png"
          alt=""
          width={34}
          height={34}
          className="why-choose-icon-image"
        />
      );
    case "team":
      return (
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <rect
            x="3"
            y="7"
            width="18"
            height="13"
            rx="2"
            fill="none"
            stroke="#f15a2a"
            strokeWidth="2"
          />
          <path d="M9 7V5h6v2" fill="none" stroke="#f15a2a" strokeWidth="2" />
          <path d="M3 13h18" fill="none" stroke="#f15a2a" strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="#f15a2a"
            strokeWidth="2"
          />
          <path
            d="M8 12l2.6 2.6L16 9"
            fill="none"
            stroke="#f15a2a"
            strokeWidth="2"
          />
        </svg>
      );
  }
}

const OUR_PROCESS = [
  {
    icon: "feasibility",
    title: "Feasibility Study",
    description:
      "We assess your vision, requirements, and budget to determine the project's viability.",
  },
  {
    icon: "design",
    title: "Design Development",
    description:
      "Our team prepares detailed plans and 3D visualizations to bring your ideas to life.",
  },
  {
    icon: "permit",
    title: "LGU Permit",
    description:
      "We manage all local government permits and approvals to ensure full compliance.",
  },
  {
    icon: "construction",
    title: "Construction Phase",
    description:
      "Our skilled professionals deliver high-quality workmanship with precision and care.",
  },
  {
    icon: "handover",
    title: "Project Handover",
    description:
      "We conduct final inspections to guarantee quality before officially turning over the project.",
  },
  {
    icon: "post",
    title: "Post-Construction",
    description:
      "We provide ongoing assistance and maintenance to ensure long-term satisfaction.",
  },
];

function ProcessIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "feasibility":
      return (
        <Image
          src="/home/feasibility-study.png"
          alt=""
          width={36}
          height={36}
          className="process-icon-image"
        />
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <path
            d="M4 16.5L15.7 4.8l3.5 3.5L7.5 20H4v-3.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M13.7 6.8l3.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "permit":
      return (
        <Image
          src="/home/lgu-permit.png"
          alt=""
          width={36}
          height={36}
          className="process-icon-image"
        />
      );
    case "construction":
      return (
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
            d="M10 20v-6h4v6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "handover":
      return (
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <circle
            cx="8"
            cy="12"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M11 12h8M16 12v2M18 12v2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "post":
      return (
        <Image
          src="/home/post-construction.png"
          alt=""
          width={36}
          height={36}
          className="process-icon-image"
        />
      );
    default:
      return (
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <circle
            cx="12"
            cy="12"
            r="8.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 8v5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle
            cx="12"
            cy="16.8"
            r="0.6"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      );
  }
}

const FAQ_ITEMS = [
  {
    question: "What is Tiger’s Mark Corporation?",
    answer:
      "Tiger’s Mark Corporation is a premier Philippine construction firm specializing in end-to-end construction services and premium material supply. We engineer dreams and build legacies — transforming blueprints into enduring structures with precision, integrity, and innovation.",
  },
  {
    question: "What Construction services does tiger’s mark corporation offer?",
    answer:
      "We provide end-to-end services including planning, design coordination, permit processing, construction execution, and post-construction support for residential and commercial developments.",
  },
  {
    question: "What types of Construction projects do you Undertake?",
    answer:
      "We undertake residential homes, commercial spaces, fit-outs, structural upgrades, and design-build projects across multiple sectors.",
  },
  {
    question: "What Construction Materials do you supply?",
    answer:
      "We supply selected construction materials aligned with project specifications, quality standards, and budget requirements.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. Our team handles both residential and commercial projects, with solutions tailored to each project’s scope and technical requirements.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "You can request a quote through our Contact Us section by sending your project details, location, and target timeline so our team can prepare a proposal.",
  },
  {
    question: "What types of Construction projects do you Undertake?",
    answer:
      "We can support new builds, renovations, and specialized construction packages depending on project needs.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      '"Reliable construction partner with strong safety protocols. Their expertise in commercial projects is evident in the final results."',
    name: "J** M******",
    company: "S******* Holdings",
  },
  {
    quote:
      '"From planning to turnover, the team remained professional and transparent. Quality and schedule were both delivered beyond expectations."',
    name: "A*** D*****",
    company: "R**** Development",
  },
  {
    quote:
      '"Excellent coordination and workmanship across every phase. We appreciated their responsiveness and commitment to long-term value."',
    name: "M**** P******",
    company: "C****** Group",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      {/* add next sections here */}
      <section className="why-choose" aria-labelledby="why-choose-heading">
        <div className="container why-choose-inner">
          <h2
            id="why-choose-heading"
            className="section-title text-[clamp(2.5rem,6vw,3.5rem)] leading-[1.1] font-extrabold text-[#0b1f44]"
          >
            Why Choose Us
          </h2>
          <p className="section-subtitle text-[1.125rem] leading-[1.4] text-[#3f5068]">
            Trusted by leading organizations across various industries
          </p>

          <div className="why-choose-grid">
            {WHY_CHOOSE_US.map((item) => (
              <article
                key={item.title + item.description}
                className="why-choose-card"
              >
                <span className="why-choose-icon" aria-hidden="true">
                  <WhyChooseIcon icon={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process" aria-labelledby="process-heading">
        <div className="container process-inner">
          <h2
            id="process-heading"
            className="section-title text-[clamp(2.5rem,6vw,3.5rem)] leading-[1.1] font-extrabold text-[#0b1f44]"
          >
            Our Process of Excellence
          </h2>
          <p className="section-subtitle text-[1.125rem] leading-[1.4] text-[#3f5068]">
            We follow a meticulous process to ensure every project is completed
            to the highest standards
          </p>
          <div className="process-grid">
            {OUR_PROCESS.map((step) => (
              <article key={step.title} className="process-card">
                <span className="process-icon" aria-hidden="true">
                  <ProcessIcon icon={step.icon} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="activities" aria-labelledby="activities-heading">
        <div className="container activities-inner">
          <h2 id="activities-heading" className="activities-title">
            Activities
          </h2>
          <p className="activities-subtitle">
            Experience Tigers Mark in action through our project highlights and
            team moments
          </p>

          <ActivitiesCarousel />
        </div>
      </section>

      <section className="home-faq" aria-labelledby="faq-heading">
        <div className="container home-faq-inner">
          <h2 id="faq-heading" className="home-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="home-faq-subtitle">
            Find answers to common questions about our services and company
          </p>

          <div className="home-faq-list">
            {FAQ_ITEMS.map((item, index) => (
              <details
                key={`${item.question}-${index}`}
                className="home-faq-item"
                open={index === 0}
              >
                <summary>
                  <span className="home-faq-left">
                    <span className="home-faq-icon" aria-hidden="true">
                      ?
                    </span>
                    <span className="home-faq-question">{item.question}</span>
                  </span>
                  <span className="home-faq-chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path
                        d="M6 9l6 6 6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-testimonials"
        aria-labelledby="testimonials-heading"
      >
        <div className="container home-testimonials-inner">
          <h2 id="testimonials-heading" className="home-testimonials-title">
            Client Testimonials
          </h2>
          <p className="home-testimonials-subtitle">
            What our clients say about working with Tigers Mark Corporation
          </p>

          <div className="home-testimonials-slider">
            <input
              className="home-testimonial-input"
              type="radio"
              name="home-testimonial"
              id="testimonial-1"
              defaultChecked
            />
            <input
              className="home-testimonial-input"
              type="radio"
              name="home-testimonial"
              id="testimonial-2"
            />
            <input
              className="home-testimonial-input"
              type="radio"
              name="home-testimonial"
              id="testimonial-3"
            />

            <div className="home-testimonial-panels">
              {TESTIMONIALS.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="home-testimonial-card"
                >
                  <p className="home-testimonial-stars" aria-label="Five stars">
                    ★★★★★
                  </p>
                  <p className="home-testimonial-quote">{item.quote}</p>
                  <p className="home-testimonial-name">{item.name}</p>
                  <p className="home-testimonial-company">{item.company}</p>
                </article>
              ))}
            </div>

            <div
              className="home-testimonial-nav"
              aria-label="Previous and next testimonial"
            >
              <label
                className="home-testimonial-btn prev prev-1"
                htmlFor="testimonial-3"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M15 6l-6 6 6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </label>
              <label
                className="home-testimonial-btn next next-1"
                htmlFor="testimonial-2"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M9 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </label>

              <label
                className="home-testimonial-btn prev prev-2"
                htmlFor="testimonial-1"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M15 6l-6 6 6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </label>
              <label
                className="home-testimonial-btn next next-2"
                htmlFor="testimonial-3"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M9 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </label>

              <label
                className="home-testimonial-btn prev prev-3"
                htmlFor="testimonial-2"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M15 6l-6 6 6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </label>
              <label
                className="home-testimonial-btn next next-3"
                htmlFor="testimonial-1"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path
                    d="M9 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                </svg>
              </label>
            </div>

            <div
              className="home-testimonial-dots"
              aria-label="Testimonial navigation"
            >
              <label htmlFor="testimonial-1" aria-label="Show testimonial 1" />
              <label htmlFor="testimonial-2" aria-label="Show testimonial 2" />
              <label htmlFor="testimonial-3" aria-label="Show testimonial 3" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-us"
        className="contact-section"
        aria-labelledby="contact-heading"
      >
        <div className="container contact-inner">
          <div className="contact-header">
            <h2 id="contact-heading">Contact Us</h2>
            <p>Visit us at our headquarters or get in touch with our team</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path
                      d="M12 3c-3.3 0-6 2.7-6 6 0 4.6 6 12 6 12s6-7.4 6-12c0-3.3-2.7-6-6-6z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <h3>Address</h3>
                <p>
                  Tigers Mark Corporation Building
                  <br />
                  17, Road 10 Visayas Ave, Quezon City,
                  <br />
                  1128 Metro Manila Philippines
                </p>
              </div>

              <div className="contact-card">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path
                      d="M6 3h12v18H6z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 7h4M10 11h4M10 15h4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <h3>Phone</h3>
                <p>0917 623 1675</p>
              </div>

              <div className="contact-card">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <h3>Email</h3>
                <p>sales@tigersmarkcorp.com</p>
              </div>

              <div className="contact-card">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 7v5l3 2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <h3>Business Hours</h3>
                <p>
                  Monday - Saturday: 8:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="contact-map">
              <div className="map-frame" role="img" aria-label="Map preview" />
              <div className="contact-socials" aria-label="Social links">
                <span className="social-icon">X</span>
                <span className="social-icon">IG</span>
                <span className="social-icon">FB</span>
                <span className="social-icon">IN</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
