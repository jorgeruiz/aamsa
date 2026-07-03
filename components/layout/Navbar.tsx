"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const serviciosLinks = [
  { href: "/servicios/corte-laser", label: "Corte Laser" },
  { href: "/servicios/corte-plasma-cnc", label: "Corte Plasma CNC" },
  { href: "/servicios/corte-pantografo", label: "Corte Pantografo" },
  { href: "/servicios/corte-guillotina", label: "Corte Guillotina" },
  { href: "/servicios/doblez-cnc", label: "Doblez CNC" },
  { href: "/servicios/rolado", label: "Rolado" },
];

const productosLinks = [
  { href: "/productos/lamina", label: "Lamina" },
  { href: "/productos/placa", label: "Placa" },
];

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

function DropdownMenu({
  label,
  items,
  open,
  onToggle,
}: {
  label: string;
  items: { href: string; label: string }[];
  open: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (open) onToggle();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onToggle]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="font-[family-name:var(--font-inter)] text-sm font-medium text-[#B0C4DE] hover:text-[#FF7F00] transition-colors duration-200 flex items-center gap-1"
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-3 bg-[#1B4375]/95 backdrop-blur-md border border-[#2261AE] min-w-[220px] py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onToggle}
              className="block px-5 py-2.5 font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] hover:text-[#FF7F00] hover:bg-[#153460] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1B4375]/95 backdrop-blur-md border-b border-[#2261AE]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo + Razon Social */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo-aamsa.png"
              alt="AAMSA -- Abastecedora de Aceros y Maquilas"
              width={200}
              height={220}
              className="h-24 w-auto"
              priority
            />
            <span className="hidden sm:block font-[family-name:var(--font-barlow)] text-base font-semibold uppercase tracking-wide text-[#B0C4DE] leading-tight max-w-[240px]">
              Abastecedora de Aceros y Maquilas, S.A. de C.V.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <DropdownMenu
                label="Servicios"
                items={serviciosLinks}
                open={openDropdown === "servicios"}
                onToggle={() =>
                  setOpenDropdown(openDropdown === "servicios" ? null : "servicios")
                }
              />
              <DropdownMenu
                label="Productos"
                items={productosLinks}
                open={openDropdown === "productos"}
                onToggle={() =>
                  setOpenDropdown(openDropdown === "productos" ? null : "productos")
                }
              />
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
                href="tel:80011acero"
                className="font-[family-name:var(--font-inter)] text-sm font-medium text-[#B0C4DE] hover:text-white transition-colors"
              >
                800 11 Acero
              </a>
              <a
                href="https://wa.me/528115115660?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar cotizacion por WhatsApp"
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
            aria-label="Abrir menu de navegacion"
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
          menuOpen ? "max-h-[600px] border-b border-[#2261AE]" : "max-h-0"
        }`}
      >
        <nav className="bg-[#1B4375] px-6 py-4 flex flex-col gap-2">
          {/* Servicios accordion */}
          <button
            onClick={() =>
              setMobileExpanded(mobileExpanded === "servicios" ? null : "servicios")
            }
            className="flex items-center justify-between font-[family-name:var(--font-inter)] text-base font-medium text-[#B0C4DE] hover:text-[#FF7F00] transition-colors py-2"
          >
            Servicios
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-200 ${mobileExpanded === "servicios" ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {mobileExpanded === "servicios" && (
            <div className="pl-4 flex flex-col gap-1 mb-2">
              {serviciosLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-sm text-[#7A9CC0] hover:text-[#FF7F00] transition-colors py-1.5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Productos accordion */}
          <button
            onClick={() =>
              setMobileExpanded(mobileExpanded === "productos" ? null : "productos")
            }
            className="flex items-center justify-between font-[family-name:var(--font-inter)] text-base font-medium text-[#B0C4DE] hover:text-[#FF7F00] transition-colors py-2"
          >
            Productos
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-200 ${mobileExpanded === "productos" ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {mobileExpanded === "productos" && (
            <div className="pl-4 flex flex-col gap-1 mb-2">
              {productosLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-inter)] text-sm text-[#7A9CC0] hover:text-[#FF7F00] transition-colors py-1.5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-inter)] text-base font-medium text-[#B0C4DE] hover:text-[#FF7F00] transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/528115115660?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar cotizacion por WhatsApp"
            className="mt-2 bg-[#FF7F00] text-white font-[family-name:var(--font-barlow)] text-base font-bold uppercase tracking-widest px-6 py-3 text-center"
          >
            Solicitar Cotizacion
          </a>
          <a
            href="tel:80011acero"
            className="font-[family-name:var(--font-inter)] text-sm text-center text-[#7A9CC0]"
          >
            800 11 Acero
          </a>
        </nav>
      </div>
    </header>
  );
}
