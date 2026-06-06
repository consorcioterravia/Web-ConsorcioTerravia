import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center px-margin-mobile md:px-margin-desktop pt-xl pb-xl bg-surface-container-lowest overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          alt="Minimalist industrial architecture" 
          className="object-cover grayscale opacity-90" 
          src={siteConfig.images.heroBg} 
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-surface-container-lowest/60 to-surface-container-lowest/90 backdrop-blur-[2px]">
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto w-full flex flex-col gap-xl relative z-10 mt-12">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center gap-md max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-sm shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase font-bold drop-shadow-sm">Consorcio Terravia</span>
          </div>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface font-extrabold tracking-tight drop-shadow-sm leading-tight">
            El futuro de los bienes raíces:<br />
            <span className="text-primary italic font-semibold">Diseño y tecnología</span> en un solo lugar.
          </h1>
        </div>

        {/* Two Columns Focus Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg w-full max-w-6xl mx-auto mt-4">
          
          {/* Card: Vender (Captación) */}
          <div className="group relative flex flex-col justify-between bg-surface/80 backdrop-blur-md border border-outline-variant/50 hover:border-primary/50 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="material-symbols-outlined text-[80px] text-primary">real_estate_agent</span>
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <h2 className="font-display-sm text-headline-sm md:text-headline-md font-bold text-on-surface">
                ¿Quieres vender tu propiedad <span className="text-primary">de forma inmediata?</span>
              </h2>
              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                Compramos tu inmueble de forma directa. Olvídate de meses de espera, comisiones ocultas y papeleo interminable. Recibe una oferta justa en tiempo récord.
              </p>
            </div>
            <div className="mt-10 relative z-10">
              <Link
                href="/vender"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-lg text-label-lg rounded-DEFAULT hover:bg-primary-container transition-colors uppercase tracking-wider shadow-lg shadow-primary/20 group-hover:shadow-primary/40">
                Vender mi propiedad
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card: Comprar (Catálogo) */}
          <div className="group relative flex flex-col justify-between bg-surface/80 backdrop-blur-md border border-outline-variant/50 hover:border-primary/50 rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
             <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
               <span className="material-symbols-outlined text-[80px] text-primary">apartment</span>
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <h2 className="font-display-sm text-headline-sm md:text-headline-md font-bold text-on-surface">
                ¿Buscas comprar o invertir <span className="text-primary">de forma rápida?</span>
              </h2>
              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                Explora nuestro portafolio de propiedades listas para habitar o rentabilizar. Diseño de vanguardia, tecnología y una transacción transparente sin complicaciones.
              </p>
            </div>
            <div className="mt-10 relative z-10">
              <Link
                href="/invertir"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-surface/50 backdrop-blur-sm border-2 border-primary text-primary font-label-lg text-label-lg rounded-DEFAULT hover:bg-primary/5 transition-colors uppercase tracking-wider group-hover:shadow-lg">
                Ver catálogo disponible
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Trusted Logos Section */}
        <div className="mt-xl pt-xl border-t border-outline-variant/60 w-full flex flex-col items-center gap-md">
          <p className="font-label-md text-caption text-primary uppercase tracking-widest font-bold text-center bg-surface/60 px-4 py-1 rounded-full backdrop-blur-sm">
            Confían en nosotros
          </p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center w-full bg-surface-container-lowest/40 p-4 rounded-xl backdrop-blur-sm">
            {siteConfig.trustedLogos.map((logo, i) => (
              <div key={i} className="relative h-12 w-32 filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer mix-blend-multiply flex-shrink-0">
                <Image alt={logo.alt} src={logo.src} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Abstract background element */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-full bg-primary/10 transform rotate-12 origin-center border-l border-primary/20 mix-blend-overlay"></div>
        <div className="absolute -left-1/4 bottom-0 w-1/3 h-1/2 bg-primary/10 transform -rotate-12 origin-center border-r border-t border-primary/20 mix-blend-overlay"></div>
      </div>
    </section>
  );
}
