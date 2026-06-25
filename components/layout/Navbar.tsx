"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1A2E]/95 backdrop-blur-md border-b border-[#1A4070]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo + Razón Social */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo-aamsa.png"
              alt="AAMSA — Abastecedora de Aceros y Maquilas"
              width={200}
              height={220}
              className="h-20 w-auto"
              priority
            />
            <span className="hidden sm:block font-[family-name:var(--font-barlow)] text-sm font-semibold uppercase tracking-wide text-[#B0C4DE] leading-tight max-w-[220px]">
              Abastecedora de Aceros y Maquilas, S.A. de C.V.
            </span>
          </Link>

          {/* Desktop Nav — aligned right */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-sm font-medium text-[#B0C4DE] hover:text-[#FF7F00] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <a
                href="tel:8001122376"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-[#B0C4DE] hover:text-white transition-colors"
              >
                800 112 2376
              </a>
              <a
                href="https://wa.me/528183600414?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar cotización por WhatsApp"
                className="bg-[#FF7F00] hover:bg-[#CC6600] text-white font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-widest px-6 py-2.5 transition-colors duration-200"
              >
                Cotizar
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Abrir menú de navegación"
          >
            <span
              className={`block w-6 h-0.5 bg-[#F0F2FF] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#F0F2FF] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#F0F2FF] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 border-b border-[#1A4070]" : "max-h-0"
        }`}
      >
        <nav className="bg-[#0A1A2E] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-inter)] text-base font-medium text-[#B0C4DE] hover:text-[#FF7F00] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/528183600414?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar cotización por WhatsApp"
            className="mt-2 bg-[#FF7F00] text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-6 py-3 text-center"
          >
            Solicitar Cotización
          </a>
          <a
            href="tel:8001122376"
            className="font-[family-name:var(--font-inter)] text-sm text-center text-[#7A9CC0]"
          >
            800 112 2376
          </a>
        </nav>
      </div>
    </header>
  );
}
