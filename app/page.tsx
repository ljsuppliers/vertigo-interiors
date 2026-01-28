import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Kitchen Design",
    description: "The heart of every home deserves thoughtful design. We create kitchens that balance beauty with functionality, tailored to how you actually cook and live.",
    image: "/images/services/kitchen-design.jpg",
    href: "/services#kitchen",
  },
  {
    title: "Bathroom Design",
    description: "Transform your bathroom into a sanctuary. From compact en-suites to luxurious spa-inspired spaces, we design bathrooms that inspire daily rituals.",
    image: "/images/services/bathroom-design.jpg",
    href: "/services#bathroom",
  },
  {
    title: "Living Spaces",
    description: "Where memories are made. We design living rooms, dining areas, and family spaces that bring people together while reflecting your unique style.",
    image: "/images/services/living-spaces.jpg",
    href: "/services#living",
  },
  {
    title: "Bedroom Design",
    description: "Your personal retreat. We create bedrooms that promote rest and rejuvenation, with considered lighting, textures, and layouts that feel immediately calming.",
    image: "/images/services/bedroom-design.jpg",
    href: "/services#bedroom",
  },
];

const portfolioPreview = [
  { title: "Hampstead Family Home", category: "Full Home", image: "/images/portfolio/project-1.jpg" },
  { title: "Chelsea Apartment", category: "Living & Kitchen", image: "/images/portfolio/project-2.jpg" },
  { title: "Richmond Townhouse", category: "Bedroom Suite", image: "/images/portfolio/project-3.jpg" },
];

const testimonials = [
  {
    quote: "Vertigo Interiors understood exactly what we needed before we could even articulate it. Our home feels like us, but better.",
    author: "Sarah & James M.",
    location: "Hampstead",
  },
  {
    quote: "The attention to detail is extraordinary. Every corner of our apartment has been considered, and the result is a space we never want to leave.",
    author: "Michael T.",
    location: "Chelsea",
  },
  {
    quote: "Working with the Vertigo team was a joy from start to finish. They made a potentially stressful renovation into an exciting journey.",
    author: "Emma & David L.",
    location: "Richmond",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/hero/hero-living-room.jpg"
          alt="Elegant living room designed by Vertigo Interiors"
          fill
          className="object-cover"
          priority
        />
        <div className="image-overlay" />
        <div className="relative z-10 text-center text-[var(--color-cream)] px-6 max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase mb-6 text-[var(--color-cream)]/80">
            Bespoke Interior Design
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
            Spaces That Tell
            <br />
            <em className="italic">Your Story</em>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-[var(--color-cream)]/90">
            Bespoke interior design in London and the South East. We create sophisticated, timeless spaces that reflect how you live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="btn-primary bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold)]">
              View Our Work
            </Link>
            <Link href="/contact" className="btn-outline border-[var(--color-cream)] text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)]">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="content-narrow text-center">
          <div className="accent-line mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl mb-8">
            Design With Intention
          </h2>
          <p className="text-lg leading-relaxed text-[var(--color-warm-gray)] max-w-3xl mx-auto">
            Based in London, we work with homeowners across the capital and South East England to create interiors that truly reflect who they are. 
            We take time to understand your lifestyle, your routines, your aesthetic preferences, then translate 
            these into spaces that feel instinctively right. No trends for trends' sake. No cookie-cutter solutions. 
            Just thoughtful design that stands the test of time.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="content-wide">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group card-hover">
                <div className="img-zoom aspect-[4/3] relative mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl mb-3 group-hover:text-[var(--color-terracotta)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--color-warm-gray)] leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding">
        <div className="content-wide">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">Selected Projects</p>
              <h2 className="text-3xl md:text-4xl">Recent Work</h2>
            </div>
            <Link href="/portfolio" className="btn-outline">
              View All Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioPreview.map((project) => (
              <Link key={project.title} href="/portfolio" className="group img-zoom">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--color-charcoal)]/0 group-hover:bg-[var(--color-charcoal)]/40 transition-colors flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-[var(--color-cream)]">
                      <p className="text-xs tracking-[0.2em] uppercase mb-2">{project.category}</p>
                      <h3 className="text-xl">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
        <div className="content-wide">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4">Client Stories</p>
            <h2 className="text-3xl md:text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div className="text-[var(--color-gold)] text-5xl mb-6">"</div>
                <p className="testimonial-quote mb-8">
                  {testimonial.quote}
                </p>
                <p className="text-sm">
                  <span className="text-[var(--color-cream)]">{testimonial.author}</span>
                  <span className="text-[var(--color-warm-gray)]"> — {testimonial.location}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <Image
          src="/images/hero/hero-kitchen.jpg"
          alt="Beautiful kitchen interior"
          fill
          className="object-cover"
        />
        <div className="image-overlay" />
        <div className="relative z-10 content-narrow text-center text-[var(--color-cream)]">
          <h2 className="text-3xl md:text-5xl mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-10 text-[var(--color-cream)]/90 max-w-2xl mx-auto">
            Every great project starts with a conversation. Tell us about your vision, 
            and we'll show you what's possible.
          </p>
          <Link href="/contact" className="btn-primary bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-gold)]">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
