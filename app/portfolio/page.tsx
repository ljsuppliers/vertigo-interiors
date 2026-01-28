import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our portfolio of interior design projects - from contemporary London apartments to traditional family homes across the UK.",
};

const projects = [
  {
    id: "hampstead-family-home",
    title: "Hampstead Family Home",
    location: "Hampstead, London",
    type: "Full Home Design",
    description: "A complete transformation of a Victorian family home, balancing period features with contemporary living. The clients wanted spaces that could handle three children, two dogs, and regular entertaining—without feeling like a compromise.",
    scope: ["Living room", "Kitchen & dining", "Master suite", "Three children's bedrooms", "Two bathrooms"],
    image: "/images/portfolio/project-1.jpg",
  },
  {
    id: "chelsea-apartment",
    title: "Chelsea Apartment",
    location: "Chelsea, London",
    type: "Living & Kitchen",
    description: "A pied-à-terre for a couple downsizing from the countryside. Every square foot had to earn its place. We created a sophisticated space that feels much larger than its footprint, with hidden storage and dual-purpose furniture.",
    scope: ["Open-plan living and kitchen", "Built-in storage solutions", "Lighting design"],
    image: "/images/portfolio/project-2.jpg",
  },
  {
    id: "richmond-townhouse",
    title: "Richmond Townhouse",
    location: "Richmond, Surrey",
    type: "Master Suite",
    description: "A boutique-hotel-inspired master suite carved from two smaller bedrooms. Complete with a walk-in wardrobe, spa-like en-suite, and a private reading nook with views over the garden.",
    scope: ["Master bedroom", "Walk-in wardrobe", "En-suite bathroom", "Reading area"],
    image: "/images/portfolio/project-3.jpg",
  },
  {
    id: "notting-hill-kitchen",
    title: "Notting Hill Kitchen",
    location: "Notting Hill, London",
    type: "Kitchen Design",
    description: "A passionate home cook's dream kitchen. We designed around a central island with integrated prep sink, professional-grade appliances, and a pantry large enough to accommodate bulk buying and preserving hobbies.",
    scope: ["Full kitchen redesign", "Butler's pantry", "Utility room"],
    image: "/images/portfolio/project-4.jpg",
  },
  {
    id: "cambridge-new-build",
    title: "Cambridge New Build",
    location: "Cambridge",
    type: "Full Home Design",
    description: "Interior design for a newly constructed family home. Working with a blank canvas, we created a warm, layered interior that felt established from day one—avoiding the stark newness that plagues many new builds.",
    scope: ["All living spaces", "Four bedrooms", "Three bathrooms", "Home office"],
    image: "/images/portfolio/project-5.jpg",
  },
  {
    id: "bath-georgian-townhouse",
    title: "Bath Georgian Townhouse",
    location: "Bath, Somerset",
    type: "Living Spaces",
    description: "Sensitive restoration and redesign of a Grade II listed Georgian townhouse. We honoured the building's heritage while creating comfortable spaces for 21st-century living, navigating planning requirements with care.",
    scope: ["Drawing room", "Dining room", "Study", "Principal bedroom"],
    image: "/images/portfolio/project-6.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="content-narrow text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Our Work</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            Portfolio
          </h1>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            Each project tells a story—of the people who live there, the challenges we solved together, and the details that made it uniquely theirs.
          </p>
          <div className="accent-line mx-auto mt-8" />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-0">
        <div className="content-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((project, index) => (
              <article key={project.id} className="group">
                <div className="img-zoom aspect-[4/3] relative mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-2">
                      {project.type}
                    </p>
                    <h2 className="text-2xl">{project.title}</h2>
                  </div>
                  <p className="text-sm text-[var(--color-warm-gray)]">{project.location}</p>
                </div>
                <p className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span 
                      key={item} 
                      className="text-xs px-3 py-1 bg-[var(--color-charcoal)]/5 text-[var(--color-warm-gray)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Note */}
      <section className="section-padding bg-white">
        <div className="content-narrow text-center">
          <div className="text-[var(--color-gold)] text-5xl mb-6">"</div>
          <p className="testimonial-quote text-2xl mb-8">
            We don't show every project in our portfolio. We show the ones that represent the breadth of what we do—and more importantly, the depth of our partnerships with our clients.
          </p>
          <p className="text-[var(--color-warm-gray)]">
            Each project you see here was a collaboration. The best results happen when clients trust us with their vision and we trust them with ours.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="content-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            See Yourself Here?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-10 max-w-2xl mx-auto">
            Your project could be our next case study. Let's talk about what you're envisioning for your space.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
