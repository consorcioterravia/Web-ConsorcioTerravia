import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Consorcio Terravía",
  description: "Inteligencia Inmobiliaria, Diseño y Rentabilidad. Plataforma integral para gestión de activos y arquitectura de autor.",
  openGraph: {
    title: "Consorcio Terravía",
    description: "Inteligencia Inmobiliaria, Diseño y Rentabilidad.",
    url: "https://terravia.com",
    siteName: "Consorcio Terravía",
    images: [
      {
        url: "/hero-bg.jpg", // En el futuro reemplazar con una imagen OG específica de 1200x630
        width: 1200,
        height: 630,
        alt: "Consorcio Terravía Preview",
      }
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consorcio Terravía",
    description: "Inteligencia Inmobiliaria, Diseño y Rentabilidad.",
    images: ["/hero-bg.jpg"], // En el futuro reemplazar con una imagen de Twitter específica
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
