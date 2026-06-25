"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ProposalSwitcher() {
  const pathname = usePathname();
  const isDark = pathname === "/" || pathname === "";
  const isLight = pathname.startsWith("/propuesta-2");

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-black/80 backdrop-blur-sm border border-white/10 p-1 shadow-2xl">
      <Link
        href="/"
        className={`px-4 py-2 font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
          isDark
            ? "bg-[#FF7F00] text-white"
            : "text-white/50 hover:text-white"
        }`}
      >
        Propuesta 1 — Oscura
      </Link>
      <Link
        href="/propuesta-2"
        className={`px-4 py-2 font-[family-name:var(--font-barlow)] text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
          isLight
            ? "bg-[#FF7F00] text-white"
            : "text-white/50 hover:text-white"
        }`}
      >
        Propuesta 2 — Clara
      </Link>
    </div>
  );
}
