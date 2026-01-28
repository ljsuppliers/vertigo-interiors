import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Vertigo Interiors - our philosophy, our approach to design, and what makes us different from other interior designers.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="content-narrow text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Our Story</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            Design That Listens
          </h1>
          <div className="accent-line mx-auto" />
        </div>
      </section>

      {/* Main Story */}
      <section className="section-padding pt-0">
        <div className="content-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/5] relative img-zoom">
              <Image
                src="/images/portfolio/project-1.jpg"
                alt="Vertigo Interiors studio work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-8">
                We Believe Homes Should Feel Like Home
              </h2>
              <div className="space-y-6 text-[var(--color-warm-gray)] leading-relaxed">
                <p>
                  Vertigo Interiors was founded on a simple premise: interior design should serve the people who live in the space, not the other way around. Too often, we've seen beautifully designed rooms that feel cold, impractical, or simply "off"—spaces that look good in photographs but don't work for real life.
                </p>
                <p>
                  We take a different approach. Before sketching a single line or suggesting a colour palette, we listen. We want to know how you start your mornings, where you dump your keys, whether you prefer reading in bed or on the sofa. These details matter. They're the difference between a house and a home.
                </p>
                <p>
                  Our team brings together decades of experience across architecture, interior design, and project management. But what truly sets us apart is our commitment to collaboration. We don't impose our aesthetic on you; we help you discover and refine your own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="content-wide">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl">The Vertigo Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-[var(--color-gold)] rounded-full flex items-center justify-center">
                <span className="text-2xl text-[var(--color-gold)]">01</span>
              </div>
              <h3 className="text-xl mb-4">Listen First</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed">
                Every project begins with conversation. We ask questions others don't think to ask, because the best designs emerge from truly understanding how you live.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-[var(--color-gold)] rounded-full flex items-center justify-center">
                <span className="text-2xl text-[var(--color-gold)]">02</span>
              </div>
              <h3 className="text-xl mb-4">Design With Intention</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed">
                Every choice has purpose. We don't follow trends blindly or add elements for decoration's sake. Each decision enhances your daily experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 border border-[var(--color-gold)] rounded-full flex items-center justify-center">
                <span className="text-2xl text-[var(--color-gold)]">03</span>
              </div>
              <h3 className="text-xl mb-4">Build to Last</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed">
                We choose quality over quick fixes. Our designs are timeless, not trendy—spaces you'll love not just next month, but for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="section-padding">
        <div className="content-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl mb-8">
                What We Don't Do
              </h2>
              <div className="space-y-6 text-[var(--color-warm-gray)] leading-relaxed">
                <p>
                  We don't believe in cookie-cutter solutions. You won't find us recommending the same grey-on-grey palette that's in every other home right now. Your space should be as individual as you are.
                </p>
                <p>
                  We don't rush. Good design takes time—time to understand, to explore options, to get the details right. If you need a room finished by next week, we're probably not the right fit.
                </p>
                <p>
                  We don't disappear. Once we start working together, you'll have direct access to the designer leading your project. No gatekeepers, no endless email chains.
                </p>
                <p>
                  And we definitely don't believe in "rules" that don't serve you. If you love bold colour, we'll embrace it. If you want to put the TV above the fireplace, we'll make it work beautifully.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 aspect-[4/5] relative img-zoom">
              <Image
                src="/images/portfolio/project-4.jpg"
                alt="Detail of interior design work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Working With Us */}
      <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
        <div className="content-wide">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4">The Process</p>
            <h2 className="text-3xl md:text-4xl">Working With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l border-[var(--color-gold)] pl-6">
              <h3 className="text-xl mb-4">Discovery</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed text-sm">
                An initial consultation to understand your space, your vision, and your lifestyle. We discuss budget, timeline, and what success looks like for you.
              </p>
            </div>
            <div className="border-l border-[var(--color-gold)] pl-6">
              <h3 className="text-xl mb-4">Design</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed text-sm">
                We develop concepts, mood boards, and detailed plans. You'll see 3D visualisations before anything is ordered or built.
              </p>
            </div>
            <div className="border-l border-[var(--color-gold)] pl-6">
              <h3 className="text-xl mb-4">Delivery</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed text-sm">
                We manage every aspect—contractors, suppliers, deliveries. You don't need to chase anyone; that's our job.
              </p>
            </div>
            <div className="border-l border-[var(--color-gold)] pl-6">
              <h3 className="text-xl mb-4">Handover</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed text-sm">
                A final walkthrough to ensure everything is perfect. We don't consider a project complete until you're completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="content-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Let's Create Something Beautiful
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-10 max-w-2xl mx-auto">
            Every project begins with a conversation. We'd love to hear about your space and your vision.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
