import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Corte Láser, Plasma CNC y Doblez de Acero en Monterrey | Aamsa",
  description:
    "Más de 40 años ofreciendo servicios de corte láser, corte plasma CNC, doblez CNC y distribución de lámina y acero en Nuevo León. Solicita cotización hoy.",
  keywords: [
    "corte laser monterrey",
    "corte plasma cnc nuevo leon",
    "doblez cnc",
    "servicio corte lamina acero",
    "maquiladora acero guadalupe nl",
  ],
  openGraph: {
    siteName: "Aamsa",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
