import Image from "next/image";
import Link from "next/link";

export default function Inversion() {
  const data = [
    { id: 1, title: "Oportunidades Early Bird", description: "Invierte en las etapas iniciales para maximizar tu ROI.", img: "/property-2.jpg" },
    { id: 2, title: "Rendimiento Inteligente", description: "Plataforma Proptech para el monitoreo de tus inversiones.", img: "/hero-bg.jpg" },
    { id: 3, title: "Gestión Patrimonial", description: "Tu capital protegido en bienes raíces de alta plusvalía.", img: "/ecosystem-interior.jpg" },
  ];

  return (
    <div className="bg-surface-container-lowest min-h-screen flex flex-col" style={{ animation: 'fadeIn 0.8s ease-out' }}>
      {/* Header */}
      <nav className="w-full z-50 bg-white shadow-sm border-b border-primary/10">
          <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto h-20">
              <div className="flex items-center">
                  <div className="relative h-12 w-40 md:h-20 md:w-64">
                      <Image src="/terravia-logo.jpeg" alt="Terravía Logo" fill className="object-contain mix-blend-multiply" />
                  </div>
              </div>
              <Link href="/" className="flex items-center gap-2 px-6 py-2 bg-transparent border border-primary text-primary font-label-md text-label-md rounded-DEFAULT hover:bg-primary/5 transition-colors uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  <span className="hidden md:inline">Volver al Inicio</span>
              </Link>
          </div>
      </nav>

      <main className="flex-grow">
        <section className="py-20 px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h1 className="font-display-lg text-display-lg font-black tracking-tighter text-on-surface mb-4">Inversión</h1>
            <p className="font-body-lg text-on-surface-variant max-w-2xl">
              Rentabilidad asegurada a través de un enfoque basado en datos. Nuestra plataforma Proptech garantiza un flujo de información constante y transparente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {data.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative w-full h-[400px] mb-6 overflow-hidden bg-surface-container-low">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="font-body-md text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-inverse-surface py-12 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center bg-white rounded-md p-2 shadow-sm border border-white/10">
              <div className="relative h-10 w-32">
                  <Image src="/terravia-logo.jpeg" alt="Terravía Logo" fill className="object-contain" />
              </div>
          </div>
          <p className="font-caption text-xs text-white/50 uppercase tracking-wider">© 2024 Consorcio Terravía.</p>
        </div>
      </footer>
    </div>
  );
}
