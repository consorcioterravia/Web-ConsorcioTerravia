"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function VenderPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    ubicacion: "",
    tipo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*Nueva Solicitud de Venta Directa* 🏡\n\n*Nombre:* ${formData.nombre}\n*Teléfono:* ${formData.telefono}\n*Ubicación:* ${formData.ubicacion}\n*Tipo de Inmueble:* ${formData.tipo}\n\n_Deseo recibir una oferta por mi propiedad._`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${siteConfig.whatsappUrl}?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest pt-24 pb-12 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-surface/80 backdrop-blur-md border border-outline-variant/50 rounded-3xl p-8 md:p-12 shadow-2xl">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="material-symbols-outlined text-[16px] text-primary">real_estate_agent</span>
            <span className="font-label-sm text-sm text-primary tracking-widest uppercase font-bold">Venta Directa</span>
          </div>
          <h1 className="font-display-md text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">
            Recibe una oferta por tu propiedad en <span className="text-primary italic">tiempo récord.</span>
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
            Completa estos datos y nuestro equipo evaluará tu inmueble para darte una propuesta justa hoy mismo. Sin intermediarios, sin estrés.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="font-label-md text-sm text-on-surface font-semibold">Nombre completo</label>
            <input 
              type="text" 
              id="nombre" 
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez" 
              className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body-md text-on-surface"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="telefono" className="font-label-md text-sm text-on-surface font-semibold">Teléfono / WhatsApp</label>
            <input 
              type="tel" 
              id="telefono" 
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Para contactarte rápido" 
              className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body-md text-on-surface"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="ubicacion" className="font-label-md text-sm text-on-surface font-semibold">Ubicación del inmueble</label>
            <input 
              type="text" 
              id="ubicacion" 
              value={formData.ubicacion}
              onChange={handleChange}
              placeholder="Ciudad, Sector o Zona" 
              className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body-md text-on-surface"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="tipo" className="font-label-md text-sm text-on-surface font-semibold">Tipo de inmueble</label>
            <div className="relative">
              <select 
                id="tipo" 
                value={formData.tipo}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body-md text-on-surface appearance-none"
                required
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Departamento">Departamento</option>
                <option value="Casa">Casa</option>
                <option value="Terreno">Terreno</option>
                <option value="Otro">Otro</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-4 px-8 py-4 bg-primary text-on-primary font-label-lg text-lg rounded-xl hover:bg-primary-container hover:shadow-lg hover:shadow-primary/30 transition-all uppercase tracking-wider font-bold"
          >
            Solicitar Oferta Ahora
          </button>
          
          <p className="text-center font-body-sm text-sm text-on-surface-variant mt-2 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            Tus datos están seguros y la evaluación es 100% gratuita.
          </p>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-primary hover:underline font-label-sm text-sm uppercase tracking-wider">
            Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
}
