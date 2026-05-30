import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function PortfolioSection() {
  return (
    <section id="portafolio" className="py-xl px-margin-mobile md:px-margin-desktop bg-surface border-y border-outline-variant/30 relative">
      <div className="absolute inset-0 concrete-texture opacity-50 pointer-events-none"></div>
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="text-center mb-xl">
          <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-sm tracking-tight">
            Portafolio Exclusivo
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-md"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Propiedades seleccionadas bajo los más altos estándares de diseño arquitectónico y rentabilidad.
          </p>
        </div>
        {/*  Tabs  */}
        <div className="flex justify-center gap-md mb-lg">
          <button className="px-6 py-3 bg-primary text-on-primary font-label-md text-label-md rounded-none border border-primary uppercase tracking-wider">
            Alquiler Premium
          </button>
          <button className="px-6 py-3 bg-surface text-on-surface-variant font-label-md text-label-md rounded-none border border-outline-variant hover:border-primary hover:text-primary transition-colors uppercase tracking-wider">
            Casas en Venta
          </button>
        </div>
        {/*  Gallery Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/*  Property 1  */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-variant rounded-sm shadow-sm group-hover:shadow-2xl transition-all duration-700">
              <Image alt="Loft Industrial Valencia"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                src={siteConfig.portfolioImages[0]} fill />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              <div className="absolute top-4 left-4 transform transition-transform duration-700 group-hover:-translate-y-1">
                <span className="px-3 py-1 bg-primary text-on-primary font-caption text-caption rounded-none uppercase tracking-wider text-xs shadow-lg">Alquiler</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-lg transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
                <h3 className="font-headline-md text-headline-md text-white mb-1 group-hover:text-primary transition-colors duration-500">Loft Industrial 01</h3>
                <p className="font-body-md text-sm text-white/70 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Zona Norte, Valencia
                </p>
                
                {/* Micro-icons */}
                <div className="flex gap-4 mb-4 text-white/60">
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Habitaciones">
                    <span className="material-symbols-outlined text-[14px]">bed</span>
                    <span className="text-[11px] font-label-md">3</span>
                  </div>
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Baños">
                    <span className="material-symbols-outlined text-[14px]">shower</span>
                    <span className="text-[11px] font-label-md">3.5</span>
                  </div>
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Estacionamiento">
                    <span className="material-symbols-outlined text-[14px]">directions_car</span>
                    <span className="text-[11px] font-label-md">2</span>
                  </div>
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Área">
                    <span className="material-symbols-outlined text-[14px]">straighten</span>
                    <span className="text-[11px] font-label-md">150m²</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="font-headline-md text-headline-md text-white font-bold">$2,500 <span className="text-xs font-normal text-white/50 uppercase tracking-widest">/ mes</span></span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <span className="material-symbols-outlined text-white text-[18px] group-hover:translate-x-1 transition-transform duration-500">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/*  Property 2  */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-variant rounded-sm shadow-sm group-hover:shadow-2xl transition-all duration-700">
              <Image alt="Residencia Terra Caracas"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                src={siteConfig.portfolioImages[1]} fill />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              <div className="absolute top-4 left-4 transform transition-transform duration-700 group-hover:-translate-y-1">
                <span className="px-3 py-1 bg-primary text-on-primary font-caption text-caption rounded-none uppercase tracking-wider text-xs shadow-lg">Venta</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-lg transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
                <h3 className="font-headline-md text-headline-md text-white mb-1 group-hover:text-primary transition-colors duration-500">Residencia Terra</h3>
                <p className="font-body-md text-sm text-white/70 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Urb. Altamira, Caracas
                </p>
                
                {/* Micro-icons */}
                <div className="flex gap-4 mb-4 text-white/60">
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Habitaciones">
                    <span className="material-symbols-outlined text-[14px]">bed</span>
                    <span className="text-[11px] font-label-md">4</span>
                  </div>
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Baños">
                    <span className="material-symbols-outlined text-[14px]">shower</span>
                    <span className="text-[11px] font-label-md">4.5</span>
                  </div>
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Estacionamiento">
                    <span className="material-symbols-outlined text-[14px]">directions_car</span>
                    <span className="text-[11px] font-label-md">3</span>
                  </div>
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Área">
                    <span className="material-symbols-outlined text-[14px]">straighten</span>
                    <span className="text-[11px] font-label-md">280m²</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="font-headline-md text-headline-md text-white font-bold">$320,000</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <span className="material-symbols-outlined text-white text-[18px] group-hover:translate-x-1 transition-transform duration-500">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/*  Property 3  */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-variant rounded-sm shadow-sm group-hover:shadow-2xl transition-all duration-700">
              <Image alt="Penthouse Vértice Caracas"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                src={siteConfig.portfolioImages[2]} fill />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              <div className="absolute top-4 left-4 transform transition-transform duration-700 group-hover:-translate-y-1">
                <span className="px-3 py-1 bg-primary text-on-primary font-caption text-caption rounded-none uppercase tracking-wider text-xs shadow-lg">Alquiler</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-lg transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
                <h3 className="font-headline-md text-headline-md text-white mb-1 group-hover:text-primary transition-colors duration-500">Penthouse Vértice</h3>
                <p className="font-body-md text-sm text-white/70 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">location_on</span> Centro Histórico, Caracas
                </p>
                
                {/* Micro-icons */}
                <div className="flex gap-4 mb-4 text-white/60">
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Habitaciones">
                    <span className="material-symbols-outlined text-[14px]">bed</span>
                    <span className="text-[11px] font-label-md">2</span>
                  </div>
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Baños">
                    <span className="material-symbols-outlined text-[14px]">shower</span>
                    <span className="text-[11px] font-label-md">2.5</span>
                  </div>
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Estacionamiento">
                    <span className="material-symbols-outlined text-[14px]">directions_car</span>
                    <span className="text-[11px] font-label-md">2</span>
                  </div>
                  <div className="flex items-center gap-1 border border-white/10 px-2 py-1 rounded-sm bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-500" title="Área">
                    <span className="material-symbols-outlined text-[14px]">straighten</span>
                    <span className="text-[11px] font-label-md">110m²</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="font-headline-md text-headline-md text-white font-bold">$3,800 <span className="text-xs font-normal text-white/50 uppercase tracking-widest">/ mes</span></span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <span className="material-symbols-outlined text-white text-[18px] group-hover:translate-x-1 transition-transform duration-500">arrow_forward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-xl">
          <Link
            href="/proyectos"
            className="inline-flex px-8 py-4 bg-transparent border border-primary text-primary font-label-md text-label-md rounded-none hover:bg-primary hover:text-on-primary transition-all items-center justify-center gap-2 uppercase tracking-wider mx-auto">
            Ver Catálogo Completo
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
