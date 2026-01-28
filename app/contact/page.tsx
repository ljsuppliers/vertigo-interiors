import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vertigo Interiors. We'd love to hear about your project and discuss how we can help transform your space.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="content-narrow text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            Let's Start a Conversation
          </h1>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            Every great project begins with a simple hello. Tell us about your space, your ideas, your challenges—we're listening.
          </p>
          <div className="accent-line mx-auto mt-8" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding pt-0">
        <div className="content-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-2xl mb-8">How to Reach Us</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm tracking-[0.15em] uppercase text-[var(--color-terracotta)] mb-3">Email</h3>
                  <a 
                    href="mailto:hello@vertigo-interiors.com" 
                    className="text-xl hover:text-[var(--color-terracotta)] transition-colors"
                  >
                    hello@vertigo-interiors.com
                  </a>
                  <p className="text-[var(--color-warm-gray)] mt-2 text-sm">
                    We typically respond within 24-48 hours
                  </p>
                </div>

                <div>
                  <h3 className="text-sm tracking-[0.15em] uppercase text-[var(--color-terracotta)] mb-3">Location</h3>
                  <p className="text-lg">London & South East</p>
                  <p className="text-[var(--color-warm-gray)] mt-2 text-sm">
                    We work primarily across London, the Home Counties, and the South East. For exceptional projects, we're happy to travel further.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm tracking-[0.15em] uppercase text-[var(--color-terracotta)] mb-3">Working Hours</h3>
                  <p className="text-lg">Monday – Friday</p>
                  <p className="text-[var(--color-warm-gray)] text-sm">9:00 – 18:00</p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-[var(--color-charcoal)] text-[var(--color-cream)]">
                <h3 className="text-xl mb-4">Ready to Get Started?</h3>
                <p className="text-[var(--color-warm-gray)] mb-6 leading-relaxed">
                  Drop us an email with a brief description of your project. Include:
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-warm-gray)]">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-gold)]">•</span>
                    The space(s) you're looking to transform
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-gold)]">•</span>
                    Your approximate timeline
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-gold)]">•</span>
                    A rough idea of your budget range
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-gold)]">•</span>
                    Any inspiration images or ideas you have
                  </li>
                </ul>
                <a 
                  href="mailto:hello@vertigo-interiors.com?subject=New%20Project%20Enquiry"
                  className="btn-primary mt-8 bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold)]"
                >
                  Send Us an Email
                </a>
              </div>
            </div>

            {/* Right: FAQs */}
            <div>
              <h2 className="text-2xl mb-8">Common Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg mb-3">How much does interior design cost?</h3>
                  <p className="text-[var(--color-warm-gray)] leading-relaxed">
                    Every project is different. We work with a range of budgets and can adapt our involvement accordingly. A single-room consultation starts from £500, while comprehensive design and project management for larger projects is typically calculated as a percentage of the total project budget. We'll always give you a clear quote before we begin.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-3">How long does a project take?</h3>
                  <p className="text-[var(--color-warm-gray)] leading-relaxed">
                    A single room typically takes 6-10 weeks from initial consultation to completion. Full home projects can range from 4-12 months depending on scope and complexity. We'll provide realistic timelines at the outset and keep you updated throughout.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-3">Do you only work in London?</h3>
                  <p className="text-[var(--color-warm-gray)] leading-relaxed">
                    Our core area is London and the South East, but we regularly take on projects across the UK. For projects outside our usual area, we simply factor travel time into our fees. We've worked in Bath, Cambridge, the Cotswolds, and as far as Edinburgh.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-3">Can you work with our existing furniture?</h3>
                  <p className="text-[var(--color-warm-gray)] leading-relaxed">
                    Absolutely. Many clients have pieces they love or that hold sentimental value. We're experts at integrating existing items into a new scheme. We'll be honest if something isn't working, but the final decision is always yours.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-3">Do you manage contractors?</h3>
                  <p className="text-[var(--color-warm-gray)] leading-relaxed">
                    Yes, if you'd like us to. We have trusted relationships with builders, electricians, plumbers, and specialists across our working area. We can manage the entire project on your behalf, or simply design and hand over to your own team.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-3">What if we don't like the design?</h3>
                  <p className="text-[var(--color-warm-gray)] leading-relaxed">
                    We work collaboratively, so it's rare for clients to be unhappy with our proposals—we've been listening carefully throughout. But design is subjective, and revisions are a normal part of the process. We include revision rounds in all our packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
        <div className="content-narrow text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6">No Obligation</p>
          <h2 className="text-3xl md:text-4xl mb-6">
            Not Ready to Commit?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-8 max-w-2xl mx-auto">
            Browse our design guides for inspiration and practical advice. When you're ready to talk, we'll be here.
          </p>
          <Link href="/guides" className="btn-outline border-[var(--color-cream)] text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)]">
            Explore Our Guides
          </Link>
        </div>
      </section>
    </>
  );
}
