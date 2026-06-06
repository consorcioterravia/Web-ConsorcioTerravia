"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function InvertirPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    objetivo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*Registro VIP: Inversión en Propiedades* 🔑\n\n*Nombre:* ${formData.nombre}\n*Email:* ${formData.email}\n*Teléfono:* ${formData.telefono || 'No especificado'}\n*Objetivo:* ${formData.objetivo}\n\n_Deseo acceder al catálogo privado de propiedades._`;
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
    <div className="min-h-screen bg-surface-container-lowest pt-24 pb-12 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-2xl bg-surface/80 backdrop-blur-xl border border-outline-variant/60 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface-container-highest border border-outline-variant rounded-full mb-6 shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-on-surface">star</span>
            <span className="font-label-sm text-sm text-on-surface tracking-widest uppercase font-bold">Acceso Exclusivo</span>
          </div>
          <h1 className="font-display-md text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight">
            Acceso VIP: Propiedades de autor <span className="text-primary italic">antes que el resto.</span>
          </h1>
          <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
            Regístrate para acceder a nuestro catálogo privado de espacios transformados y asegura la mejor rentabilidad antes de que salgan al mercado abierto.
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
              placeholder="¿Cómo te llamamos?" 
              className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body-md text-on-surface"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-label-md text-sm text-on-surface font-semibold">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Donde enviaremos el catálogo" 
              className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body-md text-on-surface"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="telefono" className="font-label-md text-sm text-on-surface font-semibold">Teléfono / WhatsApp (Opcional)</label>
            <input 
              type="tel" 
              id="telefono" 
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Para atención preferencial" 
              className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body-md text-on-surface"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="objetivo" className="font-label-md text-sm text-on-surface font-semibold">Objetivo principal</label>
            <div className="relative">
              <select 
                id="objetivo" 
                value={formData.objetivo}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-body-md text-on-surface appearance-none"
                required
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="Para vivir y disfrutar">Para vivir y disfrutar</option>
                <option value="Para invertir y rentabilizar">Para invertir y rentabilizar</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-4 px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary/5 font-label-lg text-lg rounded-xl transition-all uppercase tracking-wider font-bold group flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">lock_open</span>
            Desbloquear Catálogo Privado
          </button>
          
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-sm uppercase tracking-wider">
            Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  );
}
