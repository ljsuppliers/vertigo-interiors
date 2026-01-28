import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllSlugs, getRelatedContent } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('news');
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getContentBySlug('news', slug);
  
  if (!article) {
    return { title: 'Not Found' };
  }
  
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: article.image ? [article.image] : [],
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getContentBySlug('news', slug);
  
  if (!article) {
    notFound();
  }
  
  const relatedNews = getRelatedContent('news', slug, 3);
  
  // Simple markdown to HTML conversion
  const contentHtml = article.content
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
            href="/news" 
            className="inline-flex items-center gap-2 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)] mb-8"
          >
            ← Back to News
          </Link>
          
          {article.date && (
            <p className="text-sm text-[var(--color-warm-gray)] mb-4">
              {new Date(article.date).toLocaleDateString('en-GB', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          )}
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            {article.title}
          </h1>
          
          <p className="text-lg text-[var(--color-warm-gray)] mb-8">
            {article.description}
          </p>
          
          <div className="accent-line" />
        </div>
      </section>

      {/* Featured Image */}
      {article.image && (
        <section className="pb-12">
          <div className="content-wide">
            <div className="aspect-[21/9] relative">
              <Image
                src={article.image}
                alt={article.title}
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

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="section-padding bg-white">
          <div className="content-wide">
            <h2 className="text-2xl mb-8">More News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((related) => (
                <Link 
                  key={related.slug} 
                  href={`/news/${related.slug}`}
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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-10 max-w-2xl mx-auto">
            Let's discuss how we can transform your space.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
