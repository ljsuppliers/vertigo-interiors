"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Areas", href: "/areas" },
    { name: "Blog", href: "/blog" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/95 backdrop-blur-sm">
      <nav className="content-wide flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="font-display text-2xl tracking-wide">Vertigo</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-warm-gray)]">Interiors</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-[2px] w-full bg-[var(--color-charcoal)] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`block h-[2px] w-full bg-[var(--color-charcoal)] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-full bg-[var(--color-charcoal)] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-cream)] border-t border-[var(--color-charcoal)]/10">
          <div className="content-wide py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
