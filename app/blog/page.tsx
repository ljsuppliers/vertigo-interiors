import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Interior Design Blog",
  description: "Interior design inspiration, trends, and ideas for London and South East homes. Expert advice from Vertigo Interiors.",
};

export default function BlogPage() {
  const posts = getContentByType('blog');

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="content-narrow text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Inspiration</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            Our Blog
          </h1>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            Design inspiration, trends, and ideas for creating beautiful spaces in London and the South East.
          </p>
          <div className="accent-line mx-auto mt-8" />
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding pt-0">
        <div className="content-wide">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group card-hover"
                >
                  {post.image && (
                    <div className="img-zoom aspect-[16/10] relative mb-5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    {post.category && (
                      <span className="text-xs tracking-[0.15em] uppercase text-[var(--color-terracotta)]">
                        {post.category}
                      </span>
                    )}
                    {post.readTime && (
                      <span className="text-xs text-[var(--color-warm-gray)]">
                        {post.readTime}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl mb-3 group-hover:text-[var(--color-terracotta)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[var(--color-warm-gray)] text-sm leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-[var(--color-warm-gray)] mb-4">
                Blog posts coming soon.
              </p>
              <p className="text-[var(--color-warm-gray)]">
                Check out our <Link href="/guides" className="text-[var(--color-terracotta)] hover:underline">design guides</Link> in the meantime.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
        <div className="content-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your London or South East home.
          </p>
          <Link 
            href="/contact"
            className="btn-primary bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold)]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
