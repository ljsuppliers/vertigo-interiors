import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Design Guides",
  description: "Expert interior design advice, tips, and inspiration. Learn how to transform your home with our comprehensive guides.",
};

export default function GuidesPage() {
  const guides = getContentByType('guides');

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="content-narrow text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Learn</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            Design Guides
          </h1>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            Practical advice and inspiration to help you create spaces you'll love. Whether you're DIY-ing or preparing for a professional redesign.
          </p>
          <div className="accent-line mx-auto mt-8" />
        </div>
      </section>

      {/* Guides Grid */}
      <section className="section-padding pt-0">
        <div className="content-wide">
          {guides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <Link 
                  key={guide.slug} 
                  href={`/guides/${guide.slug}`}
                  className="group card-hover"
                >
                  {guide.image && (
                    <div className="img-zoom aspect-[16/10] relative mb-5">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    {guide.category && (
                      <span className="text-xs tracking-[0.15em] uppercase text-[var(--color-terracotta)]">
                        {guide.category}
                      </span>
                    )}
                    {guide.readTime && (
                      <span className="text-xs text-[var(--color-warm-gray)]">
                        {guide.readTime}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl mb-3 group-hover:text-[var(--color-terracotta)] transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-[var(--color-warm-gray)] text-sm leading-relaxed">
                    {guide.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-[var(--color-warm-gray)] mb-4">
                Our design guides are coming soon.
              </p>
              <p className="text-[var(--color-warm-gray)]">
                In the meantime, <Link href="/contact" className="text-[var(--color-terracotta)] hover:underline">get in touch</Link> for personalised advice.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
        <div className="content-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Want Design Tips in Your Inbox?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-8 max-w-2xl mx-auto">
            We share our best insights monthly—no spam, just thoughtful advice on creating spaces you'll love.
          </p>
          <a 
            href="mailto:hello@vertigo-interiors.com?subject=Newsletter%20Signup"
            className="btn-primary bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold)]"
          >
            Join Our List
          </a>
        </div>
      </section>
    </>
  );
}
