"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const PROJECTS = [
  {
    id: 1,
    name: "Portico by Alveo Land",
    location: "Pasig City",
    year: "2025",
    status: "Complete",
    type: "General Construction",
    image: "/projects/portico1.jpg",
  },
  {
    id: 2,
    name: "Domino's Pizza",
    location: "Taytay, Rizal",
    year: "2025",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/dominos-2.jpg",
  },
  {
    id: 3,
    name: "Dylan Patisserie",
    location: "BF Paranaque",
    year: "2025",
    status: "Complete",
    type: "General Construction",
    image: "/projects/dylan-p-3.jpg",
  },
  {
    id: 4,
    name: "Dylan Patisserie",
    location: "SM North",
    year: "2025",
    status: "Complete",
    type: "Residential",
    image: "/projects/dylan-p-4.jpg",
  },
  {
    id: 5,
    name: "Kenangan Coffee",
    location: "SM Succat Paranaque",
    year: "2025",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/kenangan-1.jpg",
  },
  {
    id: 6,
    name: "Kenangan Coffee",
    location: "SM Laoag, Laoag City Ilocos Norte",
    year: "2025",
    status: "Complete",
    type: "Kiosk",
    image: "/projects/kenangan-2.jpg",
  },
  {
    id: 7,
    name: "Macao Imperial",
    location: "SM BACOOR, Bacoor Cavite",
    year: "2025",
    status: "Complete",
    type: "Kiosk",
    image: "/projects/macao-7.jpg",
  },
  {
    id: 8,
    name: "Macao Imperial",
    location: "SM LAOAG, Laoag City Ilocos Norte",
    year: "2025",
    status: "Complete",
    type: "Kiosk",
    image: "/projects/macao-8.jpg",
  },
  {
    id: 9,
    name: "Plains and Prints",
    location: "SM FAIRVIEW Quezon City",
    year: "2025",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/plainnprints-12.jpg",
  },
  {
    id: 10,
    name: "Shake Shack",
    location: "025 Gateway Mall Cubao QC",
    year: "2025",
    status: "Complete",
    type: "Residential",
    image: "/projects/shakeshack-9.jpg",
  },
  {
    id: 11,
    name: "Moss",
    location: "Solenad Nuvali Sta Rosa Laguna",
    year: "2025",
    status: "Complete",
    type: "Commercial",
    image: "/projects/moss-10.jpg",
  },
  {
    id: 12,
    name: "Spring Oaks Residences",
    location: "Los Banos, Laguna",
    year: "2025",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/oaks11.jpg",
  },
  {
    id: 13,
    name: "Binan Square",
    location: "Binan City Laguna",
    year: "2025",
    status: "Complete",
    type: "General Construction",
    image: "/projects/binan-13.jpg",
  },
  {
    id: 14,
    name: "Dylan Patisserie SM north",
    location: "Quezon City",
    year: "2025",
    status: "Complete",
    type: "Kiosk",
    image: "/projects/dylan-14.jpg",
  },
  {
    id: 15,
    name: "Salad Stop",
    location: "Pasig",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/saladstop-15.jpg",
  },
  {
    id: 16,
    name: "Silk Residence",
    location: "Mesa Quezon City",
    year: "2024",
    status: "Complete",
    type: "Residential",
    image: "/projects/silkresidences-16.jpg",
  },
  {
    id: 17,
    name: "Single Origin",
    location: "Opus Mall Quezon City",
    year: "2024",
    status: "Complete",
    type: "Renovation",
    image: "/projects/singleorigin-17.jpg",
  },
  {
    id: 18,
    name: "Single Origin",
    location: "Makati City",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/singleorigin-18.jpg",
  },
  {
    id: 19,
    name: "Venchi",
    location: "The Podium Mandaluyong City",
    year: "2024",
    status: "Complete",
    type: "Renovation",
    image: "/projects/venchi-19.jpg",
  },
  {
    id: 20,
    name: "Taters",
    location: "SM Marilao Bulacan",
    year: "2024",
    status: "Complete",
    type: "Kiosk",
    image: "/projects/taters-20.jpg",
  },
  {
    id: 21,
    name: "Single Origin",
    location: "Capitol Commons Pasig City",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/single-origin-21.jpg",
  },
  {
    id: 22,
    name: "Chooks To Go",
    location: "SM Cauayan Isabela",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/chookstogo-22.jpg",
  },
  {
    id: 23,
    name: "DC Kidney Care",
    location: "88 Squaremall Paranaque City",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/dckidney-23.jpg",
  },
  {
    id: 24,
    name: "Barcino",
    location: "The 30th Mall, Pasig City",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/barcino-24.jpg",
  },
  {
    id: 25,
    name: "Coco Icihibanya",
    location: "Banawe QC",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/cocoichibanya-25.jpg",
  },
  {
    id: 26,
    name: "Panco Cafe",
    location: "88 Squaremall Paranaque City",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/panco-cafe-26.jpg",
  },
  {
    id: 27,
    name: "UCC Clockwork",
    location: "One Ayala makati City",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
    image: "/projects/ucc-clockwork-27.jpg",
  },
  {
    id: 28,
    name: "Piccola by Plains and Prints",
    location: "Shangrila Mall",
    year: "2024",
    status: "Complete",
    type: "Kiosk",
    image: "/projects/piccola-28.jpg",
  },
  {
    id: 29,
    name: "Venchi Commisary",
    location: "Makati City",
    year: "2024",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 30,
    name: "Suntrust Development Corporation",
    location: "Quezon City",
    year: "2024",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 31,
    name: "Shopee SPX Express",
    location: "Paranaque City",
    year: "2023",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 32,
    name: "House Renovation",
    location: "Tondo Manila",
    year: "2023",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 33,
    name: "UCC Mentore",
    location: "Makati City",
    year: "2023",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 34,
    name: "Zalora",
    location: "Muntinlupa City",
    year: "2023",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 35,
    name: "Ardent Network Inc Office",
    location: "Pasig City",
    year: "2023",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 36,
    name: "BDO Karrivin Manam Office",
    location: "Chino Roces Makati City",
    year: "2023",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 37,
    name: "Dominos Regis",
    location: "Quezon City",
    year: "2023",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 38,
    name: "Ilaoilao",
    location: "SM SouthMall Las Pinas",
    year: "2023",
    status: "Complete",
    type: "Kiosk",
  },
  {
    id: 39,
    name: "Manam",
    location: "Greenhill Mall",
    year: "2023",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 40,
    name: "Manam",
    location: "Greenhill Mall",
    year: "2023",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 41,
    name: "Mang Gerry",
    location: "Makati City",
    year: "2023",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 42,
    name: "Domino's Pizza",
    location: "Regis Mall QC",
    year: "2023",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 43,
    name: "Bathroom Renovation",
    location: "Quezon City",
    year: "2023",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 44,
    name: "BOUNTY FRESH FOOD INC",
    location: "INOZA TOWER Taguig",
    year: "2023",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 45,
    name: "JJ3 OFFICE",
    location: "Warehouse Bulacan",
    year: "2023",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 46,
    name: "Bathroom Renovation",
    location: "Malate Manila",
    year: "2023",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 47,
    name: "Rooftop Repair",
    location: "Quezon City",
    year: "2023",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 48,
    name: "Hex Coffee",
    location: "Taguig City",
    year: "2023",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 49,
    name: "Heritage Park",
    location: "Taguig City",
    year: "2023",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 50,
    name: "Executive Optical",
    location: "Robinsons Marasbaras Tacloban",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 51,
    name: "Strata Buildings",
    location: "Manila",
    year: "2022",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 52,
    name: "Shakas Cafe",
    location: "Leviste Makati",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 53,
    name: "Two Storey House",
    location: "Nasugbu Batangas",
    year: "2022",
    status: "Complete",
    type: "Designs",
  },
  {
    id: 54,
    name: "Balai Pandesal",
    location: "San Pedro Laguna",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 55,
    name: "South Supermaket",
    location: "Sto. Tomas Batangas",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 56,
    name: "Lifestyle Style mall",
    location: "Greenhills San Juan",
    year: "2022",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 57,
    name: "Core Pacific Money Exchange",
    location: "Lotus Mall Imus Cavite",
    year: "2022",
    status: "Complete",
    type: "Kiosk",
  },
  {
    id: 58,
    name: "Core Pacific Money Exchange",
    location: "Lumina Mal Imus Canote",
    year: "2022",
    status: "Complete",
    type: "Kiosk",
  },
  {
    id: 59,
    name: "Din Tai Fung",
    location: "Rockwell Makati",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 60,
    name: "Batangas State University",
    location: "Batangas, Batangas City",
    year: "2022",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 61,
    name: "Executive Optical",
    location: "Gaisano Grand Mall, Mactan Cebu",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 62,
    name: "Executive Optical",
    location: "Ok Bazaar Mall Zamboanga",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 63,
    name: "Executive Optical",
    location: "Gaisano Mall Pagadian",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 64,
    name: "Flood Control Project",
    location: "Ajuy Iloilo",
    year: "2022",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 65,
    name: "Flood Control Project",
    location: "Ajuy Iloilo Category",
    year: "2022",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 66,
    name: "Golden Gibbon",
    location: "Leviste Makati",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 67,
    name: "Jamaica",
    location: "The 30th Mall Pasig",
    year: "2022",
    status: "Complete",
    type: "Kiosk",
  },
  {
    id: 68,
    name: "JJ3 Trading Office",
    location: "Kingspoint QC",
    year: "2022",
    status: "Complete",
    type: "Designs",
  },
  {
    id: 69,
    name: "Krispy Kreme",
    location: "Mall of Asia, Pasay City",
    year: "2022",
    status: "Complete",
    type: "Kiosk",
  },
  {
    id: 70,
    name: "Megaworld",
    location: "Lafayette Park Square, Iloilo",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 71,
    name: "AMSI Doctors",
    location: "Calamba Laguna",
    year: "2022",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 72,
    name: "DNTC COCKPIT ARENA",
    location: "Sta. Ana Cagayan",
    year: "2022",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 73,
    name: "RideMaster Ph",
    location: "Malate Manila",
    year: "2021",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 74,
    name: "Sancha",
    location: "Mandaluyong City",
    year: "2021",
    status: "Complete",
    type: "Renovation",
  },
  {
    id: 75,
    name: "Sealed Air Philippines",
    location: "Cavite",
    year: "2021",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 76,
    name: "Sealed Air Philippines",
    location: "Silang Cavite",
    year: "2021",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 77,
    name: "Kitchen Design and Renovation",
    location: "Tandang Sora QC",
    year: "2021",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 78,
    name: "134 Jupiter Bldg",
    location: "Makati",
    year: "2021",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 79,
    name: "Core Pacific Money Exchange",
    location: "Aseo De Blas Makati",
    year: "2021",
    status: "Complete",
    type: "Kiosk",
  },
  {
    id: 80,
    name: "Core Pacific Money Exchange",
    location: "Robinson Place Lipa, Lipa Batangas",
    year: "2021",
    status: "Complete",
    type: "Kiosk",
  },
  {
    id: 81,
    name: "Core Pacific Money Exchange",
    location: "The Outlets Lipa batangas Category",
    year: "2021",
    status: "Complete",
    type: "Kiosk",
  },
  {
    id: 82,
    name: "Core Pacific Money Exchange",
    location: "Waltermart Cavite",
    year: "2021",
    status: "Complete",
    type: "Kiosk",
  },
  {
    id: 83,
    name: "Ducati Philippines",
    location: "Quezon City",
    year: "2021",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 84,
    name: "Altura Market",
    location: "Sta. Mesa, Quezon City",
    year: "2021",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 85,
    name: "Goldshine Pharceutical",
    location: "Quezon City",
    year: "2021",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 86,
    name: "TKHS Group",
    location: "Aseana2 Bldg Paranaque City",
    year: "2021",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 87,
    name: "Goldshine Pharmaceutical",
    location: "Quezon City",
    year: "2021",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 88,
    name: "Fursys Philippines (Hyundai Office)",
    location: "The Finance Center taguig",
    year: "2021",
    status: "Complete",
    type: "General Construction",
  },
  {
    id: 89,
    name: "California Garden Square",
    location: "Mandaluyong City",
    year: "2021",
    status: "Complete",
    type: "Fit-out",
  },
  {
    id: 90,
    name: "MGS",
    location: "Cavite City",
    year: "2021",
    status: "Complete",
    type: "General Construction",
  },
];

const ITEMS_PER_PAGE = 6;
const PAGE_WINDOW_SIZE = 5;

export default function ProjectsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [projectType, setProjectType] = useState("All Projects");

  const projectTypes = useMemo(
    () => [
      "All Projects",
      ...Array.from(new Set(PROJECTS.map((project) => project.type))),
    ],
    [],
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return PROJECTS.filter((project) => {
      const matchesType =
        projectType === "All Projects" || project.type === projectType;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        project.name.toLowerCase().includes(normalizedQuery) ||
        project.location.toLowerCase().includes(normalizedQuery);

      return matchesType && matchesQuery;
    });
  }, [projectType, searchQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / ITEMS_PER_PAGE),
  );

  const safeCurrentPage = useMemo(() => {
    const page = Number(searchParams.get("page") ?? "1");

    if (!Number.isFinite(page) || page < 1) {
      return 1;
    }

    return Math.min(page, totalPages);
  }, [searchParams, totalPages]);

  const changePage = (nextPage: number) => {
    const boundedPage = Math.min(Math.max(1, nextPage), totalPages);
    const params = new URLSearchParams(searchParams.toString());

    if (boundedPage === 1) {
      params.delete("page");
    } else {
      params.set("page", String(boundedPage));
    }

    const query = params.toString();
    const nextUrl = query ? `${pathname}?${query}` : pathname;

    // Keep pagination in URL so browser back/forward restores the same page.
    router.replace(nextUrl, { scroll: false });
  };

  const visibleProjects = useMemo(() => {
    const start = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, safeCurrentPage]);

  const paginationWindowStart =
    Math.floor((safeCurrentPage - 1) / PAGE_WINDOW_SIZE) * PAGE_WINDOW_SIZE + 1;

  const pageNumbers = useMemo(() => {
    const windowEnd = Math.min(
      totalPages,
      paginationWindowStart + PAGE_WINDOW_SIZE - 1,
    );

    return Array.from(
      { length: windowEnd - paginationWindowStart + 1 },
      (_, index) => paginationWindowStart + index,
    );
  }, [paginationWindowStart, totalPages]);

  const hasPreviousWindow = paginationWindowStart > 1;
  const hasNextWindow = paginationWindowStart + PAGE_WINDOW_SIZE <= totalPages;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="projects" aria-labelledby="projects-heading">
        <div className="container projects-inner">
          <h1 id="projects-heading" className="projects-title">
            Projects
          </h1>
          <p className="projects-subtitle">
            Showcasing our portfolio of successful construction projects across
            the Philippines
          </p>

          <div className="projects-toolbar">
            <div className="projects-search-wrap">
              <input
                type="text"
                placeholder="Search Projects"
                className="projects-search"
                aria-label="Search projects"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  changePage(1);
                }}
              />
            </div>
            <select
              className="projects-filter"
              aria-label="Filter projects"
              value={projectType}
              onChange={(event) => {
                setProjectType(event.target.value);
                changePage(1);
              }}
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <Link
                key={project.id}
                href={{
                  pathname: `/projects/${project.id}`,
                  query: {
                    page: String(safeCurrentPage),
                    name: project.name,
                    location: project.location,
                    year: project.year,
                    type: project.type,
                    status: project.status,
                    image: project.image ?? "",
                    images: project.image ?? "",
                  },
                }}
                className="project-card project-card-link"
              >
                <div className="project-thumb">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="project-thumb-image"
                      loading="lazy"
                    />
                  ) : null}
                </div>
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p className="project-location">
                    Location: {project.location}
                  </p>
                  <p className="project-year">Year: {project.year}</p>
                  <span className="project-status">{project.status}</span>
                </div>
              </Link>
            ))}
          </div>

          <nav className="projects-pagination" aria-label="Projects pagination">
            <button
              type="button"
              className="pager-link"
              disabled={!hasPreviousWindow}
              onClick={() =>
                changePage(
                  Math.max(1, paginationWindowStart - PAGE_WINDOW_SIZE),
                )
              }
            >
              Previous
            </button>

            {pageNumbers.map((page) => (
              <button
                key={page}
                type="button"
                className={`pager-number ${safeCurrentPage === page ? "active" : ""}`}
                onClick={() => changePage(page)}
                aria-current={safeCurrentPage === page ? "page" : undefined}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              className="pager-link"
              disabled={!hasNextWindow}
              onClick={() =>
                changePage(
                  Math.min(
                    totalPages,
                    paginationWindowStart + PAGE_WINDOW_SIZE,
                  ),
                )
              }
            >
              Next
            </button>
          </nav>
        </div>
      </section>
    </main>
  );
}
