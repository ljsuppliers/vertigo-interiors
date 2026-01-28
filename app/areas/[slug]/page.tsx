import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllSlugs, getRelatedContent } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('areas');
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getContentBySlug('areas', slug);
  
  if (!area) {
    return { title: 'Not Found' };
  }
  
  return {
    title: area.title,
    description: area.description,
    openGraph: {
      title: area.title,
      description: area.description,
      images: area.image ? [area.image] : [],
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getContentBySlug('areas', slug);
  
  if (!area) {
    notFound();
  }
  
  const relatedAreas = getRelatedContent('areas', slug, 3);
  
  // Simple markdown to HTML conversion
  const contentHtml = area.content
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('## ')) {
        return `<h2>${paragraph.slice(3)}</h2>`;
      }
      if (paragraph.startsWith('### ')) {
        return `<h3>${paragraph.slice(4)}</h3>`;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(item => `<li>${item.slice(2)}</li>`).join('');
        return `<ul>${items}</ul>`;
      }
      if (paragraph.startsWith('1. ')) {
        const items = paragraph.split('\n').map((item) => `<li>${item.slice(3)}</li>`).join('');
        return `<ol>${items}</ol>`;
      }
      return `<p>${paragraph}</p>`;
    })
    .join('\n');

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="content-narrow">
          <Link 
            href="/areas" 
            className="inline-flex items-center gap-2 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)] mb-8"
          >
            ← All Areas
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            {area.title}
          </h1>
          
          <p className="text-lg text-[var(--color-warm-gray)] mb-8">
            {area.description}
          </p>
          
          <div className="accent-line" />
        </div>
      </section>

      {/* Featured Image */}
      {area.image && (
        <section className="pb-12">
          <div className="content-wide">
            <div className="aspect-[21/9] relative">
              <Image
                src={area.image}
                alt={area.title}
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

      {/* Related Areas */}
      {relatedAreas.length > 0 && (
        <section className="section-padding bg-white">
          <div className="content-wide">
            <h2 className="text-2xl mb-8">Other Areas We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedAreas.map((related) => (
                <Link 
                  key={related.slug} 
                  href={`/areas/${related.slug}`}
                  className="group p-8 border border-[var(--color-charcoal)]/10 hover:border-[var(--color-gold)] transition-colors"
                >
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
      <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
        <div className="content-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-10 max-w-2xl mx-auto">
            Get in touch to discuss your project. We'd love to hear about your vision.
          </p>
          <Link href="/contact" className="btn-primary bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold)]">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
