"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";

const WHY_CHOOSE_US = [
  {
    icon: "🛡️",
    title: "Safety First",
    description:
      "Stringent safety protocols and zero-compromise approach to worker and site safety.",
  },
  {
    icon: "🏅",
    title: "Industry Recognition",
    description:
      "Multiple awards and certifications recognizing our commitment to excellence.",
  },
  {
    icon: "🕒",
    title: "On-time Delivery",
    description:
      "99% of our projects completed on or ahead of schedule with meticulous planning.",
  },
  {
    icon: "👍",
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage ensuring superior construction standards.",
  },
  {
    icon: "🧰",
    title: "Expert Team",
    description:
      "Highly skilled engineers, architects, and construction professionals at your service.",
  },
  {
    icon: "✅",
    title: "On-time Delivery",
    description:
      "13+ years of successful project delivery across diverse construction sectors.",
  },
];

const OUR_PROCESS = [
  {
    icon: "📋",
    title: "Feasibility Study",
    description:
      "We assess your vision, requirements, and budget to determine the project's viability.",
  },
  {
    icon: "✏️",
    title: "Design Development",
    description:
      "Our team prepares detailed plans and 3D visualizations to bring your ideas to life.",
  },
  {
    icon: "👷",
    title: "LGU Permit",
    description:
      "We manage all local government permits and approvals to ensure full compliance.",
  },
  {
    icon: "🏠",
    title: "Construction Phase",
    description:
      "Our skilled professionals deliver high-quality workmanship with precision and care.",
  },
  {
    icon: "🔑",
    title: "Project Handover",
    description:
      "We conduct final inspections to guarantee quality before officially turning over the project.",
  },
  {
    icon: "🛠️",
    title: "Post-Construction",
    description:
      "We provide ongoing assistance and maintenance to ensure long-term satisfaction.",
  },
];

const PROJECTS = [
  {
    id: 1,
    name: "Project Name",
    location: "Location",
    area: "20m²",
    status: "Complete",
  },
  {
    id: 2,
    name: "Project Name",
    location: "Location",
    area: "20m²",
    status: "Complete",
  },
  {
    id: 3,
    name: "Project Name",
    location: "Location",
    area: "20m²",
    status: "Complete",
  },
  {
    id: 4,
    name: "Project Name",
    location: "Location",
    area: "20m²",
    status: "Complete",
  },
  {
    id: 5,
    name: "Project Name",
    location: "Location",
    area: "20m²",
    status: "Complete",
  },
  {
    id: 6,
    name: "Project Name",
    location: "Location",
    area: "20m²",
    status: "Complete",
  },
];

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const showSectionFromHash = () => {
      if (window.location.hash === "#projects") {
        setShowProjects(true);
      }
    };

    showSectionFromHash();
    window.addEventListener("hashchange", showSectionFromHash);

    return () => {
      window.removeEventListener("hashchange", showSectionFromHash);
    };
  }, []);

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
                  {item.icon}
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
                  {step.icon}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {showProjects && (
        <section
          id="projects"
          className="projects"
          aria-labelledby="projects-heading"
        >
          <div className="container projects-inner">
            <h2 id="projects-heading" className="projects-title">
              Projects
            </h2>
            <p className="projects-subtitle">
              Showcasing our portfolio of successful construction projects
              across the Philippines
            </p>

            <div className="projects-toolbar">
              <div className="projects-search-wrap">
                <input
                  type="text"
                  placeholder="Search Projects"
                  className="projects-search"
                  aria-label="Search projects"
                />
                <span className="projects-search-icon" aria-hidden="true">
                  ⌕
                </span>
              </div>
              <select className="projects-filter" aria-label="Filter projects">
                <option>All Projects</option>
              </select>
            </div>

            <div className="projects-grid">
              {PROJECTS.map((project) => (
                <article key={project.id} className="project-card">
                  <div className="project-thumb" aria-hidden="true" />
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p className="project-location">◉ {project.location}</p>
                    <p className="project-area">{project.area}</p>
                    <span className="project-status">{project.status}</span>
                  </div>
                </article>
              ))}
            </div>

            <nav
              className="projects-pagination"
              aria-label="Projects pagination"
            >
              <button type="button" className="pager-link">
                ← Previous
              </button>
              <button
                type="button"
                className="pager-number active"
                aria-current="page"
              >
                1
              </button>
              <button type="button" className="pager-number">
                2
              </button>
              <button type="button" className="pager-number">
                3
              </button>
              <span className="pager-ellipsis">…</span>
              <button type="button" className="pager-link">
                Next →
              </button>
            </nav>
          </div>
        </section>
      )}
    </main>
  );
}
