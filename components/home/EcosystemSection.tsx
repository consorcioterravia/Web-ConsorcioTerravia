import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function EcosystemSection() {
  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-low noise-bg">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-xl flex flex-col md:flex-row justify-between items-end gap-lg">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-sm font-bold tracking-tight border-l-4 border-primary pl-4">
              Un Ecosistema Diseñado para el Futuro
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pl-5">
              Soluciones especializadas que convergen en una plataforma única, garantizando resiliencia y rentabilidad.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          
          {/*  Card 1: Buyer/Tenant  */}
          <div className="md:col-span-7 bg-surface border-t-4 border-t-primary border border-outline-variant shadow-lg rounded-none overflow-hidden group">
            <div className="h-72 relative bg-surface-variant">
              <Image alt="Interior"
                className="object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
                src={siteConfig.images.ecosystem} fill />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent"></div>
              <div className="absolute bottom-md left-md right-md flex gap-sm">
                <span className="px-4 py-1.5 bg-inverse-surface/90 text-inverse-on-surface font-caption text-caption rounded-none border border-outline/30 uppercase tracking-widest">Power Backup</span>
                <span className="px-4 py-1.5 bg-inverse-surface/90 text-inverse-on-surface font-caption text-caption rounded-none border border-outline/30 uppercase tracking-widest">Water Reserve</span>
              </div>
            </div>
            <div className="p-lg bg-surface">
              <div className="flex items-center gap-3 mb-md text-primary">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined">home_work</span>
                </div>
                <span className="font-label-md text-label-md uppercase tracking-widest font-bold">Comprador / Inquilino</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-md font-bold">Habitabilidad Resiliente</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">
                Propiedades equipadas con 'Filtros de Resiliencia' que garantizan autonomía en servicios
                críticos. Diseño pensado para la continuidad de vida y trabajo sin interrupciones.
              </p>
              <Link className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:text-primary-container transition-colors group-hover:translate-x-2 transform duration-300 uppercase tracking-wider mt-4"
                href="/proyectos">
                Ver Propiedades <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/*  Card 2: Investor  */}
          <div className="md:col-span-5 bg-primary border border-primary-container shadow-lg rounded-none p-lg flex flex-col justify-between text-on-primary group relative overflow-hidden">
            <div className="absolute inset-0 concrete-texture opacity-20 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-md text-primary-fixed">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <span className="font-label-md text-label-md uppercase tracking-widest font-bold">Inversionista</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-md font-bold">Smart Flipping &amp; Alto ROI</h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim mb-lg leading-relaxed">
                Identificamos activos subvalorados, aplicamos diseño arquitectónico estratégico y
                maximizamos la rentabilidad mediante intervenciones precisas.
              </p>
              <div className="bg-black/20 border border-white/10 rounded-none p-lg mb-lg backdrop-blur-sm">
                <div className="flex justify-between items-end mb-3">
                  <span className="font-caption text-caption text-primary-fixed uppercase tracking-widest mb-1">ROI Promedio Proyectado</span>
                  <span className="font-display-lg text-5xl md:text-6xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] font-black">18.5%</span>
                </div>
                <div className="w-full bg-black/40 h-2 mt-4 rounded-full overflow-hidden">
                  <div className="bg-primary-fixed h-2 w-[75%] rounded-full relative">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            <Link className="relative z-10 inline-flex items-center gap-2 text-white font-label-md text-label-md hover:text-primary-fixed transition-colors group-hover:translate-x-2 transform duration-300 uppercase tracking-wider"
              href="/inversion">
              Oportunidades de Inversión <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/*  Card 3: Construction  */}
          <div className="md:col-span-12 bg-surface border border-outline-variant shadow-lg rounded-none p-0 grid grid-cols-1 md:grid-cols-2 items-stretch group">
            <div className="p-lg xl:p-xl border-r border-outline-variant/50 bg-surface z-10">
              <div className="flex items-center gap-3 mb-md text-primary">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <span className="font-label-md text-label-md uppercase tracking-widest font-bold">Cliente Constructor</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-md font-bold">Transparencia Absoluta</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed">
                Gestión de proyectos de arquitectura de autor con control total. Visualiza avances
                diarios, presupuestos en tiempo real y cronogramas exactos desde nuestra plataforma.
              </p>
              <ul className="space-y-6 mb-xl">
                <li className="flex items-center gap-4 font-body-md text-body-md text-on-surface">
                  <div className="w-10 h-10 rounded-none border border-outline-variant/60 flex items-center justify-center bg-surface-container-lowest flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] font-light">photo_camera</span>
                  </div>
                  Reportes Fotográficos Diarios
                </li>
                <li className="flex items-center gap-4 font-body-md text-body-md text-on-surface">
                  <div className="w-10 h-10 rounded-none border border-outline-variant/60 flex items-center justify-center bg-surface-container-lowest flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] font-light">account_balance_wallet</span>
                  </div>
                  Control Presupuestario Milimétrico
                </li>
                <li className="flex items-center gap-4 font-body-md text-body-md text-on-surface">
                  <div className="w-10 h-10 rounded-none border border-outline-variant/60 flex items-center justify-center bg-surface-container-lowest flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] font-light">forum</span>
                  </div>
                  Comunicación Directa con Directores de Obra
                </li>
              </ul>
              <Link className="inline-flex items-center gap-3 px-8 py-4 bg-surface border-2 border-primary text-primary font-label-md text-label-md rounded-none hover:bg-primary hover:text-white transition-colors uppercase tracking-wider"
                href="/iniciar-proyecto">
                Iniciar Proyecto <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
            </div>
            <div className="relative h-auto bg-surface-container-highest flex items-center justify-center p-lg concrete-texture">
              {/*  Simplified mock of dashboard UI  */}
              <div className="w-full sm:w-auto min-w-full sm:min-w-[340px] bg-surface shadow-2xl border border-outline/20 flex flex-col p-6 transform group-hover:scale-105 transition-transform duration-500 rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 border-b border-outline/10 pb-4">
                  <div className="flex flex-col">
                    <span className="font-caption text-caption text-on-surface-variant block uppercase tracking-widest mb-1">Proyecto en curso</span>
                    <span className="font-label-md text-label-md font-bold text-on-surface text-xl">Casa Camoruco</span>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary font-caption text-caption rounded-full border border-primary/20 whitespace-nowrap">En Ejecución</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-surface-container-low p-4 rounded-lg border border-outline/5 flex flex-col">
                    <span className="font-caption text-caption text-on-surface-variant block uppercase tracking-wider">Avance Físico</span>
                    <span className="font-headline-md text-headline-md text-primary font-black text-3xl mt-4">42%</span>
                    <div className="w-full bg-surface-variant h-1.5 mt-3 rounded-full">
                      <div className="bg-primary h-1.5 w-[42%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-lg border border-outline/5 flex flex-col">
                    <span className="font-caption text-caption text-on-surface-variant block uppercase tracking-wider">Presupuesto</span>
                    <span className="font-headline-md text-headline-md text-primary font-black text-3xl mt-4">38%</span>
                    <div className="w-full bg-surface-variant h-1.5 mt-3 rounded-full">
                      <div className="bg-primary h-1.5 w-[38%] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex-grow bg-surface-container-lowest rounded-lg p-6 flex items-center justify-center border border-outline/10 border-dashed">
                  <span className="material-symbols-outlined text-outline/40 text-[64px]">monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
