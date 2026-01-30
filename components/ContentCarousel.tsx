"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface ContentItem {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  image?: string;
  category?: string;
  readTime?: string;
}

interface ContentCarouselProps {
  items: ContentItem[];
  type: "blog" | "news";
  title: string;
  subtitle: string;
  viewAllHref: string;
  viewAllText: string;
}

export default function ContentCarousel({
  items,
  type,
  title,
  subtitle,
  viewAllHref,
  viewAllText,
}: ContentCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (items.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="content-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">
              {subtitle}
            </p>
            <h2 className="text-3xl md:text-4xl">{title}</h2>
          </div>
          <div className="flex items-center gap-4">
            {/* Navigation Arrows */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-[var(--color-charcoal)]/20 flex items-center justify-center hover:bg-[var(--color-charcoal)] hover:text-[var(--color-cream)] transition-colors"
                aria-label="Scroll left"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-[var(--color-charcoal)]/20 flex items-center justify-center hover:bg-[var(--color-charcoal)] hover:text-[var(--color-cream)] transition-colors"
                aria-label="Scroll right"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <Link href={viewAllHref} className="btn-outline">
              {viewAllText}
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 md:-mx-0 md:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${type}/${item.slug}`}
              className="group flex-shrink-0 w-[85vw] md:w-[380px] snap-start"
            >
              <div className="card-hover h-full">
                {item.image && (
                  <div className="img-zoom aspect-[16/10] relative mb-5 rounded-sm overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-3 mb-3">
                  {type === "blog" && item.category && (
                    <span className="text-xs tracking-[0.15em] uppercase text-[var(--color-terracotta)]">
                      {item.category}
                    </span>
                  )}
                  {type === "blog" && item.readTime && (
                    <span className="text-xs text-[var(--color-warm-gray)]">
                      {item.readTime}
                    </span>
                  )}
                  {type === "news" && item.date && (
                    <span className="text-xs text-[var(--color-warm-gray)]">
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>
                <h3 className="text-xl mb-3 group-hover:text-[var(--color-terracotta)] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-[var(--color-warm-gray)] text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
