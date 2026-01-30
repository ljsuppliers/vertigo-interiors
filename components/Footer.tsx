import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="content-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-display text-2xl tracking-wide">Vertigo</span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-warm-gray)]">Interiors</span>
            </Link>
            <p className="text-sm text-[var(--color-warm-gray)] leading-relaxed">
              Creating sophisticated, timeless spaces that reflect your lifestyle and aspirations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[var(--color-gold)]">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services#kitchen" className="text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                  Kitchen Design
                </Link>
              </li>
              <li>
                <Link href="/services#bathroom" className="text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                  Bathroom Design
                </Link>
              </li>
              <li>
                <Link href="/services#living" className="text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                  Living Spaces
                </Link>
              </li>
              <li>
                <Link href="/services#bedroom" className="text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                  Bedroom Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[var(--color-gold)]">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-[var(--color-gold)]">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-[var(--color-warm-gray)]">
              <li>
                <a href="mailto:hello@vertigo-interiors.com" className="hover:text-[var(--color-cream)] transition-colors">
                  hello@vertigo-interiors.com
                </a>
              </li>
              <li>London & South East</li>
              <li>Available Nationwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-warm-gray)]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-warm-gray)]">
            © {currentYear} Vertigo Interiors. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/sitemap.xml" className="text-[var(--color-warm-gray)] hover:text-[var(--color-cream)] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
