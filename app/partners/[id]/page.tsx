import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { PARTNERS } from "../data";

async function resolveValue<T>(value: T | Promise<T> | undefined) {
  if (value === undefined) {
    return undefined;
  }

  return await value;
}

export default async function PartnerDetailPage({
  params,
  searchParams,
}: {
  params?: { id?: string } | Promise<{ id?: string }>;
  searchParams?:
    | { page?: string | string[] }
    | Promise<{ page?: string | string[] }>;
}) {
  const resolvedParams = await resolveValue(params);
  const resolvedSearchParams = await resolveValue(searchParams);
  const safeId = Number.parseInt(resolvedParams?.id ?? "", 10);
  const rawPage = resolvedSearchParams?.page;
  const firstPageValue = Array.isArray(rawPage) ? rawPage[0] : rawPage;
  const parsedPage = Number.parseInt(firstPageValue ?? "", 10);
  const returnPage =
    Number.isInteger(parsedPage) && parsedPage > 1 ? parsedPage : 1;

  if (!Number.isInteger(safeId)) {
    notFound();
  }

  const partner = PARTNERS.find((item) => item.id === safeId);

  if (!partner) {
    notFound();
  }

  return (
    <main className="project-detail partner-detail-page">
      <Link
        href={returnPage > 1 ? `/partners?page=${returnPage}` : "/partners"}
        className="project-back"
        aria-label="Back to partners and clients"
      >
        &laquo;
      </Link>

      <div className="project-detail-inner partner-detail-inner">
        <div className="partner-detail-media" aria-label="Partner logo">
          {partner.logo ? (
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              width={560}
              height={220}
              sizes="(max-width: 768px) 85vw, 560px"
              className="partner-detail-image"
              style={
                {
                  "--partner-logo-max-width":
                    partner.logoMaxWidth ?? "calc(100% - 2.3rem)",
                  "--partner-logo-max-height":
                    partner.logoMaxHeight ?? "calc(100% - 2.3rem)",
                } as CSSProperties
              }
            />
          ) : (
            <div className="partner-detail-placeholder" aria-hidden="true" />
          )}
        </div>

        <h1 className="partner-detail-title">{partner.name}</h1>

        <div className="partner-detail-info-grid">
          <div>
            <h2>Industries</h2>
            <p>{partner.industries}</p>
          </div>
          <div>
            <h2>Services</h2>
            <p>{partner.services}</p>
          </div>
        </div>

        <div className="project-detail-body partner-detail-body">
          <div className="project-detail-copy">
            <p>{partner.details}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
