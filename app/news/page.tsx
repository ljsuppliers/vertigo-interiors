import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Trends",
  description: "Stay updated with the latest interior design trends, industry news, and insights from Vertigo Interiors.",
};

export default function NewsPage() {
  const news = getContentByType('news');

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="content-narrow text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Stay Informed</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            News & Trends
          </h1>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            The latest in interior design—trends worth noting, industry updates, and our thoughts on what's shaping the spaces of tomorrow.
          </p>
          <div className="accent-line mx-auto mt-8" />
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding pt-0">
        <div className="content-wide">
          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <Link 
                  key={item.slug} 
                  href={`/news/${item.slug}`}
                  className="group card-hover"
                >
                  {item.image && (
                    <div className="img-zoom aspect-[16/10] relative mb-5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    {item.date && (
                      <span className="text-xs text-[var(--color-warm-gray)]">
                        {new Date(item.date).toLocaleDateString('en-GB', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl mb-3 group-hover:text-[var(--color-terracotta)] transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-[var(--color-warm-gray)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-[var(--color-warm-gray)] mb-4">
                Our news section is launching soon.
              </p>
              <p className="text-[var(--color-warm-gray)]">
                In the meantime, explore our <Link href="/guides" className="text-[var(--color-terracotta)] hover:underline">design guides</Link> for expert advice.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
        <div className="content-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Stay in the Loop
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-8 max-w-2xl mx-auto">
            Get design insights and industry updates delivered to your inbox monthly.
          </p>
          <a 
            href="mailto:hello@vertigo-interiors.com?subject=Newsletter%20Signup"
            className="btn-primary bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold)]"
          >
            Subscribe
          </a>
        </div>
      </section>
    </>
  );
}
