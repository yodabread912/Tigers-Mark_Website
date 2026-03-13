"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { PARTNERS } from "./data";

const ITEMS_PER_PAGE = 12;

export default function PartnersPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(PARTNERS.length / ITEMS_PER_PAGE);

  const currentPage = useMemo(() => {
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

    // Keep pagination state in the URL so browser back/forward returns to the same page.
    router.replace(nextUrl, { scroll: false });
  };

  const visiblePartners = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return PARTNERS.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  const pageNumbers = useMemo(
    () => Array.from({ length: totalPages }, (_, index) => index + 1),
    [totalPages],
  );

  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="container partners-hero-inner">
          <h1 className="partners-title">Partners and Clients</h1>
          <p className="partners-subtitle">
            Trusted by leading organizations across various industries
          </p>
        </div>
      </section>

      <section className="partners-grid-wrap">
        <div className="container partners-grid">
          {visiblePartners.map((partner) => (
            <article className="partner-card" key={`partner-${partner.id}`}>
              <div className="partner-logo">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="partner-logo-img"
                    sizes="(max-width: 768px) 42vw, (max-width: 1200px) 220px, 260px"
                  />
                ) : null}
              </div>
              <Link
                href={{
                  pathname: `/partners/${partner.id}`,
                  ...(currentPage > 1
                    ? { query: { page: String(currentPage) } }
                    : {}),
                }}
                className="partner-name-link"
              >
                <p className="partner-name">{partner.name}</p>
              </Link>
            </article>
          ))}
        </div>

        <div className="container projects-pagination">
          <button
            className="pager-link"
            type="button"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`pager-number ${currentPage === page ? "active" : ""}`}
              type="button"
              onClick={() => changePage(page)}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          ))}

          <button
            className="pager-link"
            type="button"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
