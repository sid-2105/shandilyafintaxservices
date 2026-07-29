"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b border-paper-line" : "bg-transparent"
      }`}
    >
      <div className="section">
        <div className="section-inner flex items-center justify-between h-20">
          <a href="#top" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Shandilya Fintax Services LLP — A Complete Accounting Solution"
              width={488}
              height={142}
              priority
              className="h-11 md:h-12 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] tracking-widest2 uppercase text-slate hover:text-emerald transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden lg:inline-flex btn-primary">
            Book a Consultation
          </a>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-end justify-center"
          >
            <span
              className={`h-px bg-ink transition-all duration-300 ${
                open ? "w-6 translate-y-[3px] rotate-45" : "w-6"
              }`}
            />
            <span
              className={`h-px bg-ink transition-all duration-300 ${
                open ? "w-6 -translate-y-[3px] -rotate-45" : "w-4"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-paper border-b border-paper-line ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="section section-inner flex flex-col gap-5 py-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-widest2 uppercase text-slate hover:text-emerald"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
            Book a Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
