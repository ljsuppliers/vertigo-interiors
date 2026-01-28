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
  const slugs = getAllSlugs('blog');
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getContentBySlug('blog', slug);
  
  if (!post) {
    return { title: 'Not Found' };
  }
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getContentBySlug('blog', slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedContent('blog', slug, 3);
  const contentHtml = markdownToHtml(post.content);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="content-narrow">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)] mb-8"
          >
            ← Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
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
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            {post.title}
          </h1>
          
          <p className="text-lg text-[var(--color-warm-gray)] mb-8">
            {post.description}
          </p>
          
          <div className="accent-line" />
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="pb-12">
          <div className="content-wide">
            <div className="aspect-[21/9] relative">
              <Image
                src={post.image}
                alt={post.title}
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="content-wide">
            <h2 className="text-2xl mb-8">More from Our Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link 
                  key={related.slug} 
                  href={`/blog/${related.slug}`}
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
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-10 max-w-2xl mx-auto">
            Let's discuss your interior design project in London or the South East.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
