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
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer */}
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 py-16">
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
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#5a7a9c] leading-relaxed mb-1 max-w-xs font-semibold">
              Abastecedora de Aceros y Maquilas S.A. de C.V.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#5a7a9c] leading-relaxed mb-6 max-w-xs">
              Centro de servicio acero
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
                className="w-9 h-9 bg-gray-100 border border-gray-200 flex items-center justify-center text-[#5a7a9c] hover:text-[#FF7F00] hover:border-[#FF7F00]/40 transition-colors"
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
                className="w-9 h-9 bg-gray-100 border border-gray-200 flex items-center justify-center text-[#5a7a9c] hover:text-[#FF7F00] hover:border-[#FF7F00]/40 transition-colors"
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
                    className="font-[family-name:var(--font-inter)] text-sm text-[#5a7a9c] hover:text-[#FF7F00] transition-colors"
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
                    className="font-[family-name:var(--font-inter)] text-sm text-[#5a7a9c] hover:text-[#FF7F00] transition-colors"
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
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#5a7a9c] uppercase tracking-wider mb-1">
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/528115115660"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp"
                  className="font-[family-name:var(--font-inter)] text-sm text-[#1B4375] hover:text-[#FF7F00] transition-colors inline-flex items-center gap-1.5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-green-600 flex-shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  +52 81-1511-5660
                </a>
              </li>
              <li>
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#5a7a9c] uppercase tracking-wider mb-1">
                  Teléfono
                </div>
                <a href="tel:8183600414" className="font-[family-name:var(--font-inter)] text-sm text-[#1B4375] hover:text-[#FF7F00] transition-colors block">
                  +52 81-8360-0414
                </a>
                <a href="tel:80011acero" className="font-[family-name:var(--font-inter)] text-sm text-[#1B4375] hover:text-[#FF7F00] transition-colors block">
                  +52 800-11 ACERO
                </a>
              </li>
              <li>
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#5a7a9c] uppercase tracking-wider mb-1">
                  Email
                </div>
                <a href="mailto:ventas@aamsa.com" className="font-[family-name:var(--font-inter)] text-sm text-[#1B4375] hover:text-[#FF7F00] transition-colors">
                  ventas@aamsa.com
                </a>
              </li>
              <li>
                <div className="font-[family-name:var(--font-inter)] text-xs text-[#5a7a9c] uppercase tracking-wider mb-1">
                  Dirección
                </div>
                <address className="font-[family-name:var(--font-inter)] text-sm text-[#5a7a9c] not-italic leading-relaxed">
                  Av. Benito Juárez Km 7.5
                  <br />
                  Guadalupe, N.L. 67188, México
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#5a7a9c]">
            © {new Date().getFullYear()} Aamsa — Abastecedora de Aceros y
            Maquilas S.A. de C.V. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacidad"
              className="font-[family-name:var(--font-inter)] text-xs text-[#5a7a9c] hover:text-[#FF7F00] transition-colors"
            >
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
