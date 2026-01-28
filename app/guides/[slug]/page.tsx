import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllSlugs, getRelatedContent } from "@/lib/content";
import { markdownToHtml } from "@/lib/markdown";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('guides');
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getContentBySlug('guides', slug);
  
  if (!guide) {
    return { title: 'Not Found' };
  }
  
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      images: guide.image ? [guide.image] : [],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getContentBySlug('guides', slug);
  
  if (!guide) {
    notFound();
  }
  
  const relatedGuides = getRelatedContent('guides', slug, 3);
  
  // Convert markdown to HTML
  const contentHtml = markdownToHtml(guide.content);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="content-narrow">
          <Link 
            href="/guides" 
            className="inline-flex items-center gap-2 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)] mb-8"
          >
            ← Back to Guides
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
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
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            {guide.title}
          </h1>
          
          <p className="text-lg text-[var(--color-warm-gray)] mb-8">
            {guide.description}
          </p>
          
          <div className="accent-line" />
        </div>
      </section>

      {/* Featured Image */}
      {guide.image && (
        <section className="pb-12">
          <div className="content-wide">
            <div className="aspect-[21/9] relative">
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding pt-0">
        <div className="content-narrow">
          <article 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="section-padding bg-white">
          <div className="content-wide">
            <h2 className="text-2xl mb-8">More Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedGuides.map((related) => (
                <Link 
                  key={related.slug} 
                  href={`/guides/${related.slug}`}
                  className="group card-hover"
                >
                  {related.image && (
                    <div className="img-zoom aspect-[16/10] relative mb-5">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-lg group-hover:text-[var(--color-terracotta)] transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="content-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Need Professional Help?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-10 max-w-2xl mx-auto">
            Sometimes a project needs more than a guide. We're here when you're ready for bespoke design support.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
