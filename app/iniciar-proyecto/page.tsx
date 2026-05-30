"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function IniciarProyecto() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData.get("nombreCompleto") as string;
    const email = formData.get("email") as string;
    const tipo = formData.get("tipoProyecto") as string;
    const ubicacion = formData.get("ubicacion") as string;
    const presupuesto = formData.get("presupuesto") as string;

    const message = `*Nueva Solicitud de Proyecto*%0A%0A*Nombre:* ${nombre}%0A*Correo:* ${email}%0A*Tipo de Proyecto:* ${tipo}%0A*Ubicación:* ${ubicacion}%0A*Presupuesto:* ${presupuesto}`;
    
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-surface-container-lowest min-h-screen flex flex-col" style={{ animation: 'fadeIn 0.8s ease-out' }}>
      {/* Header */}
      <nav className="w-full z-50 bg-white shadow-sm border-b border-primary/10">
          <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto h-20">
              <div className="flex items-center">
                  <div className="relative h-12 w-40 md:h-20 md:w-64">
                      <Image src={siteConfig.images.logo} alt="Terravía Logo" fill className="object-contain mix-blend-multiply" />
                  </div>
              </div>
              <Link href="/" className="flex items-center gap-2 px-6 py-2 bg-transparent border border-primary text-primary font-label-md text-label-md rounded-none hover:bg-primary/5 transition-colors uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  <span className="hidden md:inline">Volver</span>
              </Link>
          </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-3xl w-full">
          <div className="mb-12 text-center">
            <h1 className="font-display-lg text-display-lg font-black tracking-tighter text-on-surface mb-4">Iniciar Proyecto</h1>
            <p className="font-body-lg text-on-surface-variant">
              Compártenos los detalles de tu visión. Nuestro equipo analizará la viabilidad y te contactará con una propuesta estructurada bajo los estándares del Minimalismo Industrial.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-outline/20 p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Contact Info */}
              <div className="flex flex-col gap-2">
                <label htmlFor="nombreCompleto" className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant font-bold">Nombre Completo</label>
                <input id="nombreCompleto" name="nombreCompleto" type="text" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-primary focus:ring-0 font-body-md text-on-surface px-0 py-2 transition-colors" placeholder="Ej. Arquitecto / Inversor" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant font-bold">Correo Electrónico</label>
                <input id="email" name="email" type="email" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-primary focus:ring-0 font-body-md text-on-surface px-0 py-2 transition-colors" placeholder="ejemplo@correo.com" required />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-8">
              {/* Project Type */}
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="tipoProyecto" className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant font-bold">Tipo de Proyecto</label>
                <select id="tipoProyecto" name="tipoProyecto" defaultValue="" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-primary focus:ring-0 font-body-md text-on-surface px-0 py-2 appearance-none transition-colors" required>
                  <option value="" disabled>Seleccione una opción</option>
                  <option value="Construcción de Casa">Construcción de Casa</option>
                  <option value="Remodelación">Remodelación</option>
                  <option value="Inversión Comercial">Inversión Comercial</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-2 text-on-surface-variant pointer-events-none">expand_more</span>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2">
                <label htmlFor="ubicacion" className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant font-bold">Ubicación / Terreno</label>
                <input id="ubicacion" name="ubicacion" type="text" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-primary focus:ring-0 font-body-md text-on-surface px-0 py-2 transition-colors" placeholder="Ej. Urb. El Bosque / Aún no tengo terreno" required />
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="presupuesto" className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant font-bold">Presupuesto Estimado</label>
                <select id="presupuesto" name="presupuesto" defaultValue="" className="w-full bg-transparent border-0 border-b border-outline/30 focus:border-primary focus:ring-0 font-body-md text-on-surface px-0 py-2 appearance-none transition-colors" required>
                  <option value="" disabled>Seleccione un rango</option>
                  <option value="Menos de $50k">Menos de $50k</option>
                  <option value="$50k - $150k">$50k - $150k</option>
                  <option value="$150k - $500k">$150k - $500k</option>
                  <option value="Más de $500k">Más de $500k</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-2 text-on-surface-variant pointer-events-none">expand_more</span>
              </div>
            </div>

            <div className="mt-12 flex justify-end">
              <button type="submit" className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-none hover:bg-primary-container transition-all uppercase tracking-wider shadow-md shadow-primary/20">
                Enviar Solicitud
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-inverse-surface py-12 px-margin-mobile md:px-margin-desktop mt-auto">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center bg-white rounded-md p-2 shadow-sm border border-white/10">
              <div className="relative h-10 w-32">
                  <Image src={siteConfig.images.logo} alt="Terravía Logo" fill className="object-contain" />
              </div>
          </div>
          <p className="font-caption text-xs text-white/50 uppercase tracking-wider">© 2024 Consorcio Terravía.</p>
        </div>
      </footer>
    </div>
  );
}
