import { Metadata } from "next";
import Link from "next/link";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Interior Design by Location",
  description: "Vertigo Interiors provides bespoke interior design services across London and the UK. Find interior designers in your area.",
};

// Major UK cities for programmatic SEO
const featuredAreas = [
  { name: "London", region: "Greater London" },
  { name: "Manchester", region: "North West" },
  { name: "Birmingham", region: "West Midlands" },
  { name: "Edinburgh", region: "Scotland" },
  { name: "Bristol", region: "South West" },
  { name: "Cambridge", region: "East" },
  { name: "Oxford", region: "South East" },
  { name: "Bath", region: "South West" },
  { name: "Brighton", region: "South East" },
  { name: "Leeds", region: "Yorkshire" },
];

export default function AreasPage() {
  const areas = getContentByType('areas');
  
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="content-narrow text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Where We Work</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            Interior Design Across the UK
          </h1>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            While we're based in London, we work with clients across the country. Find out more about our interior design services in your area.
          </p>
          <div className="accent-line mx-auto mt-8" />
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding pt-0">
        <div className="content-wide">
          {areas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <Link 
                  key={area.slug} 
                  href={`/areas/${area.slug}`}
                  className="group p-8 border border-[var(--color-charcoal)]/10 hover:border-[var(--color-gold)] transition-colors"
                >
                  <h2 className="text-xl mb-2 group-hover:text-[var(--color-terracotta)] transition-colors">
                    {area.title}
                  </h2>
                  <p className="text-[var(--color-warm-gray)] text-sm">
                    {area.description}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-center text-[var(--color-warm-gray)] mb-12">
                Explore interior design services in these popular locations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredAreas.map((area) => (
                  <div 
                    key={area.name}
                    className="p-8 border border-[var(--color-charcoal)]/10"
                  >
                    <h2 className="text-xl mb-2">
                      Interior Design in {area.name}
                    </h2>
                    <p className="text-[var(--color-warm-gray)] text-sm">
                      {area.region}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="content-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Not in These Areas?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-8 max-w-2xl mx-auto leading-relaxed">
            We regularly travel for exceptional projects. If you're outside our usual areas, get in touch anyway—we'd love to hear about your space and see if we can help.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
