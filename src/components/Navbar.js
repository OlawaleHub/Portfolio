// src/components/Navbar.js
"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled ? "glass shadow-glow py-3" : "bg-transparent py-2"
        }`}
      >
        {/* Logo — Sulphate brand */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-glow text-sm font-bold text-white shadow-glow">
            {profile.initials}
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight text-white group-hover:text-gradient transition-colors">
            {profile.brand}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-brand-400 after:to-cyan-glow hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-glow"
        >
          Let's talk
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-xl glass text-white"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-6 mt-2 glass rounded-2xl p-4">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-glow text-white font-medium text-center mt-2"
              >
                Let's talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}