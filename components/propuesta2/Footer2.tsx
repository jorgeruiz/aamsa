import Image from "next/image";
import Link from "next/link";

export function Footer2() {
  return (
    <footer className="bg-[#0D0F1A] border-t border-[#252940]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/propuesta-2" className="inline-block mb-4">
              <Image
                src="/logo-aamsa.png"
                alt="AAMSA — Abastecedora de Aceros y Maquilas"
                width={200}
                height={220}
                className="h-14 w-auto"
              />
            </Link>
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#606888] leading-relaxed max-w-xs">
              Abastecedora de Aceros y Maquilas S.A. de C.V. Guadalupe, Nuevo León.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00] mb-4">
              Servicios
            </div>
            <ul className="flex flex-col gap-2">
              {["Corte Láser", "Corte Plasma CNC", "Doblez CNC", "Corte Guillotina", "Rolado"].map((s) => (
                <li key={s}>
                  <span className="font-[family-name:var(--font-inter)] text-xs text-[#606888]">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00] mb-4">
              Empresa
            </div>
            <ul className="flex flex-col gap-2">
              {["Portafolio", "Blog", "Preguntas Frecuentes", "Contacto"].map((l) => (
                <li key={l}>
                  <span className="font-[family-name:var(--font-inter)] text-xs text-[#606888]">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-[0.18em] text-[#FF7F00] mb-4">
              Contacto
            </div>
            <div className="flex flex-col gap-2">
              <a href="tel:8001122376" className="font-[family-name:var(--font-inter)] text-xs text-[#606888] hover:text-[#FF7F00] transition-colors">800 112 2376</a>
              <a href="mailto:ventas@aamsa.com" className="font-[family-name:var(--font-inter)] text-xs text-[#606888] hover:text-[#FF7F00] transition-colors">ventas@aamsa.com</a>
              <address className="font-[family-name:var(--font-inter)] text-xs text-[#606888] not-italic">Guadalupe, N.L. 67188</address>
            </div>
          </div>
        </div>

        <div className="border-t border-[#252940] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#606888]">
            © {new Date().getFullYear()} Aamsa — Todos los derechos reservados.
          </p>
          <Link href="/privacidad" className="font-[family-name:var(--font-inter)] text-xs text-[#606888] hover:text-[#FF7F00] transition-colors">
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
