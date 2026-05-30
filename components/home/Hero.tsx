import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center px-margin-mobile md:px-margin-desktop pt-xl pb-xl bg-surface-container-lowest">
      <div className="absolute inset-0 z-0">
        <Image 
          alt="Minimalist industrial architecture" 
          className="object-cover grayscale opacity-90" 
          src={siteConfig.images.heroBg} 
          fill
          priority
        />
        {/* Adjusted gradient for better contrast against higher opacity image */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/60 via-surface-container-lowest/30 to-surface-container-lowest/85">
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        <div className="lg:col-span-8 lg:col-start-3 text-center flex flex-col items-center gap-lg z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 border border-primary/30 rounded-full backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase font-bold drop-shadow-sm">Industrial Minimalism in PropTech</span>
          </div>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface font-extrabold tracking-tighter drop-shadow-sm">
            Más que metros cuadrados:<br />
            <span className="text-primary italic font-semibold">Inteligencia Inmobiliaria, Diseño y Rentabilidad</span>
          </h1>
          <p className="font-body-lg text-xl md:text-2xl text-gray-900 max-w-3xl leading-relaxed drop-shadow-md font-medium">
            Plataforma integral para gestión de activos, proyectos de arquitectura de autor y revalorización
            estratégica (Smart Flipping). Elevando el estándar del desarrollo inmobiliario.
          </p>

          <div className="flex flex-col sm:flex-row gap-md items-center mt-md w-full sm:w-auto">
            <Link
              href="/proyectos"
              className="group w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-DEFAULT hover:bg-primary-container transition-all flex items-center justify-center gap-3 uppercase tracking-wider shadow-lg shadow-primary/20">
              Explorar Ecosistema
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <a
              href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-surface/90 backdrop-blur-md border-2 border-primary/40 text-on-surface font-label-md text-label-md rounded-DEFAULT hover:border-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-3 uppercase tracking-wider">
              <span className="material-symbols-outlined text-[20px] text-primary">chat</span>
              Asesoría WhatsApp
            </a>
          </div>
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
      </div>
      {/*  Abstract background element  */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-full bg-primary/10 transform rotate-12 origin-center border-l border-primary/20">
        </div>
        <div className="absolute -left-1/4 bottom-0 w-1/3 h-1/2 bg-primary/10 transform -rotate-12 origin-center border-r border-t border-primary/20">
        </div>
      </div>
    </section>
  );
}
