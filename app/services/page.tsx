import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Our interior design services: kitchen design, bathroom design, living spaces, and bedroom design. Bespoke solutions for every room in your home.",
};

const services = [
  {
    id: "kitchen",
    title: "Kitchen Design",
    subtitle: "The Heart of Your Home",
    description: `A kitchen is where life happens. It's where you prepare meals, host friends, supervise homework, and have those late-night conversations that matter. We design kitchens that work as hard as you do.

Our approach considers everything: how you cook, how many people typically gather, where the morning light falls, and yes, where you'll put the bins. We balance aesthetics with ergonomics, because a beautiful kitchen that's frustrating to cook in isn't really beautiful at all.

Whether you're dreaming of a sleek contemporary space with handleless cabinets and hidden appliances, or a warm traditional kitchen with a statement range cooker and open shelving, we'll help you realise your vision while solving problems you didn't know you had.`,
    image: "/images/services/kitchen-design.jpg",
    details: [
      "Full space planning and layout optimisation",
      "Custom cabinetry design and specification",
      "Appliance selection and integration",
      "Lighting design (task, ambient, and accent)",
      "Material and finish selection",
      "Contractor coordination and project management",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom Design",
    subtitle: "Your Personal Sanctuary",
    description: `The bathroom is where you begin and end each day. It should be more than functional—it should be a space that sets you up for what's ahead and helps you unwind when it's over.

We design bathrooms that feel effortlessly luxurious, whether you have a compact en-suite or a spacious family bathroom. We consider water pressure, natural light, storage needs, and how the space will age with you.

From walk-in showers with rainfall heads to freestanding baths positioned to catch the view, from heated towel rails to underfloor heating, we think through every detail. The result? A bathroom that feels like a retreat, not just a room you rush through.`,
    image: "/images/services/bathroom-design.jpg",
    details: [
      "Layout planning for optimal flow",
      "Sanitaryware selection and specification",
      "Bespoke vanity and storage design",
      "Tile and material specification",
      "Wet room and walk-in shower design",
      "Lighting and ventilation planning",
    ],
  },
  {
    id: "living",
    title: "Living Spaces",
    subtitle: "Where Life Unfolds",
    description: `Living rooms, dining areas, family rooms—these are the spaces where your story plays out. Movie nights, Sunday lunches, quiet afternoons with a book. They need to flex between different modes while always feeling like home.

We design living spaces that accommodate real life. That means considering where the TV goes without it dominating the room, creating conversation areas that actually encourage conversation, and choosing furniture that's as comfortable as it is beautiful.

We'll help you find the balance between "show home" and "lived-in", creating spaces that photograph well but, more importantly, feel wonderful to inhabit. Whether your style leans minimal or maximalist, traditional or contemporary, we'll translate it into a cohesive design that's unmistakably yours.`,
    image: "/images/services/living-spaces.jpg",
    details: [
      "Space planning and furniture layouts",
      "Furniture selection and bespoke commissions",
      "Colour scheme development",
      "Window treatment design",
      "Art and accessory curation",
      "Built-in storage and media solutions",
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom Design",
    subtitle: "Rest, Renewed",
    description: `Your bedroom should be a refuge from the world—a space that promotes genuine rest and makes you feel calm the moment you walk in.

We design bedrooms with sleep science in mind. That means considering blackout solutions, choosing colour palettes that promote relaxation, and planning lighting that supports your natural rhythms. But we don't forget the practical: adequate storage, a comfortable reading nook, space for that morning yoga routine.

From master suites with dressing areas and boutique-hotel vibes to guest rooms that make visitors feel genuinely welcome, we create bedrooms that are private, personal, and perfectly attuned to how you rest.`,
    image: "/images/services/bedroom-design.jpg",
    details: [
      "Bed positioning and room flow",
      "Wardrobes and dressing area design",
      "Bedding and soft furnishing specification",
      "Layered lighting schemes",
      "Blackout and privacy solutions",
      "Bedside and storage planning",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="content-narrow text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-warm-gray)] mb-4">What We Do</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
            Our Services
          </h1>
          <p className="text-lg text-[var(--color-warm-gray)] max-w-2xl mx-auto">
            From single rooms to complete home transformations, we bring the same attention to detail and commitment to excellence to every project.
          </p>
          <div className="accent-line mx-auto mt-8" />
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : ''}`}
        >
          <div className="content-wide">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`aspect-[4/3] relative img-zoom ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-terracotta)] mb-4">
                  {service.subtitle}
                </p>
                <h2 className="text-3xl md:text-4xl mb-6">{service.title}</h2>
                <div className="prose mb-8">
                  {service.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-[var(--color-warm-gray)] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="border-t border-[var(--color-charcoal)]/10 pt-6">
                  <h4 className="text-sm tracking-[0.15em] uppercase mb-4">What's Included</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-warm-gray)]">
                        <span className="text-[var(--color-gold)] mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-[var(--color-charcoal)] text-[var(--color-cream)]">
        <div className="content-wide">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4">Beyond Single Rooms</p>
            <h2 className="text-3xl md:text-4xl">Additional Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[var(--color-warm-gray)]/30 p-8">
              <h3 className="text-xl mb-4">Full Home Design</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed text-sm">
                Comprehensive design for your entire home, ensuring every room flows together while maintaining its own character. Ideal for new builds or complete renovations.
              </p>
            </div>
            <div className="border border-[var(--color-warm-gray)]/30 p-8">
              <h3 className="text-xl mb-4">Consultation Only</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed text-sm">
                A focused session to help you solve specific design challenges, choose paint colours, plan furniture layouts, or simply validate your own ideas.
              </p>
            </div>
            <div className="border border-[var(--color-warm-gray)]/30 p-8">
              <h3 className="text-xl mb-4">Project Management</h3>
              <p className="text-[var(--color-warm-gray)] leading-relaxed text-sm">
                Already have a design? We can manage the execution—coordinating contractors, overseeing quality, and ensuring your project stays on track and on budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="content-narrow text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-lg text-[var(--color-warm-gray)] mb-10 max-w-2xl mx-auto">
            That's completely fine. Get in touch and we'll help you work out the best approach for your space, timeline, and budget.
          </p>
          <Link href="/contact" className="btn-primary">
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  );
}
