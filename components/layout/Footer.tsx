import Image from "next/image";
import Link from "next/link";

const services = [
  { href: "/servicios/corte-laser", label: "Corte Láser" },
  { href: "/servicios/corte-plasma-cnc", label: "Corte Plasma CNC" },
  { href: "/servicios/doblez-cnc", label: "Doblez CNC" },
  { href: "/servicios/corte-guillotina", label: "Corte Guillotina" },
  { href: "/servicios/corte-pantografo", label: "Corte Pantógrafo" },
  { href: "/servicios/rolado", label: "Rolado" },
];

const links = [
  { href: "/portafolio", label: "Portafolio" },
  { href: "/blog", label: "Blog" },
  { href: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-[#071422] border-t border-[#1A4070]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo-aamsa.png"
                alt="AAMSA — Abastecedora de Aceros y Maquilas"
                width={200}
                height={220}
                className="h-24 w-auto"
              />
            </Link>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#7A9CC0] leading-relaxed mb-6 max-w-xs">
              Abastecedora de Aceros y Maquilas S.A. de C.V. — más de 45 años
              al servicio de la industria del noreste de México.
            </p>
            {/* Certifications */}
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/iso-9001-lrqa.webp"
                alt="LRQA Certified ISO 9001"
                width={80}
                height={80}
                className="h-16 w-auto"
              />
              <Image
                src="/qr-aamsa.webp"
                alt="Código QR AAMSA"
                width={80}
                height={80}
                className="h-16 w-auto"
              />
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/AAMSA.MX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Aamsa"
                className="w-9 h-9 bg-[#0F2440] border border-[#1A4070] flex items-center justify-center text-[#7A9CC0] hover:text-[#FF7F00] hover:border-[#FF7F00]/40 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/AAMSAmx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Aamsa"
                className="w-9 h-9 bg-[#0F2440] border border-[#1A4070] flex items-center justify-center text-[#7A9CC0] hover:text-[#FF7F00] hover:border-[#FF7F00]/40 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00] mb-5">
              Servicios
            </div>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="font-[family-name:var(--font-inter)] text-sm text-[#7A9CC0] hover:text-[#FF7F00] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <div className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00] mb-5">
              Empresa
            </div>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-[family-name:var(--font-inter)] text-sm text-[#7A9CC0] hover:text-[#FF7F00] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-[family-name:var(--font-barlow)] text-sm font-bold uppercase tracking-[0.14em] text-[#FF7F00] mb-5">
              Contacto
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0] uppercase tracking-wider mb-1">
                  Teléfono
                </div>
                <a href="tel:80011acero" className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] hover:text-[#FF7F00] transition-colors block">
                  800 11 Acero
                </a>
                <a href="tel:8183600414" className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] hover:text-[#FF7F00] transition-colors block">
                  8183600414
                </a>
              </li>
              <li>
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0] uppercase tracking-wider mb-1">
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/528115115660"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] hover:text-[#FF7F00] transition-colors"
                >
                  8115115660
                </a>
              </li>
              <li>
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0] uppercase tracking-wider mb-1">
                  Email
                </div>
                <a href="mailto:ventas@aamsa.com" className="font-[family-name:var(--font-inter)] text-sm text-[#B0C4DE] hover:text-[#FF7F00] transition-colors">
                  ventas@aamsa.com
                </a>
              </li>
              <li>
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0] uppercase tracking-wider mb-1">
                  Dirección
                </div>
                <address className="font-[family-name:var(--font-inter)] text-sm text-[#7A9CC0] not-italic leading-relaxed">
                  Av. Benito Juárez Km 7.5
                  <br />
                  Guadalupe, N.L. 67188
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1A4070]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0]">
            © {new Date().getFullYear()} Aamsa — Abastecedora de Aceros y
            Maquilas S.A. de C.V. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacidad"
              className="font-[family-name:var(--font-inter)] text-xs text-[#7A9CC0] hover:text-[#FF7F00] transition-colors"
            >
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
