export const siteConfig = {
  name: "Consorcio Terravía",
  description: "Inteligencia Inmobiliaria, Diseño y Rentabilidad.",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "584228787012",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  navLinks: [
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Inversión', href: '/inversion' },
    { label: 'Constructores', href: '/constructores' },
    { label: 'Portal', href: '/portal' },
  ],
  trustedLogos: [
    { src: "/logo-1.svg", alt: "CBRE" },
    { src: "/logo-2.svg", alt: "JLL" },
    { src: "/logo-3.svg", alt: "Savills" }
  ],
  portfolioImages: [
    "/property-1.jpg",
    "/property-2.jpg",
    "/property-3.jpg"
  ],
  images: {
    heroBg: "/hero-bg.jpg",
    ecosystem: "/ecosystem-interior.jpg",
    logo: "/terravia-logo.jpeg"
  }
};
