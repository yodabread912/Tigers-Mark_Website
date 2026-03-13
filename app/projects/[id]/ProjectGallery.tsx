"use client";

import { useEffect, useMemo, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  projectName: string;
};

export default function ProjectGallery({
  images,
  projectName,
}: ProjectGalleryProps) {
  const safeImages = useMemo(
    () => images.map((image) => image.trim()).filter(Boolean),
    [images],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const total = safeImages.length;
  const hasMultipleImages = total > 1;
  const activeImage = safeImages[activeIndex] ?? "";

  const showPreviousImage = () => {
    if (total === 0) {
      return;
    }

    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const showNextImage = () => {
    if (total === 0) {
      return;
    }

    setActiveIndex((current) => (current + 1) % total);
  };

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousImage();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isLightboxOpen]);

  return (
    <>
      <div className="project-gallery">
        <button
          className="project-gallery-nav left"
          type="button"
          aria-label="Previous image"
          onClick={showPreviousImage}
          disabled={!hasMultipleImages}
        >
          &lsaquo;
        </button>

        <div className="project-gallery-frame" aria-label="Project images">
          {activeImage ? (
            <button
              type="button"
              className="project-gallery-image-trigger"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Open image in full size"
            >
              <img
                src={activeImage}
                alt={projectName}
                className="project-gallery-image"
              />
            </button>
          ) : null}
        </div>

        <button
          className="project-gallery-nav right"
          type="button"
          aria-label="Next image"
          onClick={showNextImage}
          disabled={!hasMultipleImages}
        >
          &rsaquo;
        </button>
      </div>

      <div className="project-dots" aria-label="Project image navigation">
        {safeImages.map((_, index) => (
          <button
            key={`${projectName}-${index}`}
            type="button"
            aria-label={`View image ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={index === activeIndex ? "is-active" : undefined}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {isLightboxOpen && activeImage ? (
        <div
          className="project-media-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} gallery preview`}
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="project-media-modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="project-media-modal-close"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close project preview"
            >
              ×
            </button>

            <div className="project-media-modal-frame">
              <button
                className="project-media-modal-nav left"
                type="button"
                aria-label="Previous image"
                onClick={showPreviousImage}
                disabled={!hasMultipleImages}
              >
                <svg
                  className="project-media-modal-nav-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M15 5L8 12L15 19" />
                </svg>
              </button>

              <img
                src={activeImage}
                alt={projectName}
                className="project-media-modal-image"
              />

              <button
                className="project-media-modal-nav right"
                type="button"
                aria-label="Next image"
                onClick={showNextImage}
                disabled={!hasMultipleImages}
              >
                <svg
                  className="project-media-modal-nav-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 5L16 12L9 19" />
                </svg>
              </button>
            </div>

            <h3 className="project-media-modal-title">{projectName}</h3>
          </div>
        </div>
      ) : null}
    </>
  );
}
