"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData.get("nombre") as string;
    const email = formData.get("email") as string;
    const interes = formData.get("interes") as string;

    const message = `*Contacto desde la Web*%0A%0A*Nombre:* ${nombre}%0A*Correo:* ${email}%0A*Interés:* ${interes}`;
    
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <footer id="contacto" className="bg-inverse-surface w-full pt-6 pb-4 border-t-4 border-primary relative overflow-hidden">
      <div className="absolute inset-0 concrete-texture opacity-10 pointer-events-none"></div>
      <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6 items-start">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 flex flex-col gap-4 items-start">
            <div className="flex items-center bg-white rounded-md p-2 shadow-sm border border-white/10">
              <div className="relative h-12 w-40">
                <Image src={siteConfig.images.logo} alt="Terravía Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="font-body-md text-sm text-inverse-on-surface/80 max-w-[280px] leading-relaxed">
              <span className="block mb-2">Inteligencia Inmobiliaria, Diseño y Rentabilidad.</span>
              <span className="block">Elevando el estándar del desarrollo a través del Minimalismo Industrial.</span>
            </p>
            <div className="flex gap-3 mt-1">
              <a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-200"
                href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <span className="material-symbols-outlined text-[16px]">chat</span>
              </a>
              <a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-200"
                href="https://www.instagram.com/consorcioterravia?igsh=MThlN3ozN2UxMnF0cA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors duration-200"
                href="#contacto" aria-label="Contacto">
                <span className="material-symbols-outlined text-[16px]">mail</span>
              </a>
            </div>
          </div>

          {/* Form & Navigation */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Compact Column Form */}
            <div className="md:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-none relative w-full">
              <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 -translate-y-1/2 translate-x-1/2 rotate-45 blur-md pointer-events-none"></div>
              <h4 className="font-label-md text-sm text-white mb-4 uppercase tracking-widest font-bold border-b border-white/20 pb-2">
                Contacto Directo
              </h4>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                <div className="relative w-full">
                  <input name="nombre" className="w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 font-body-md text-sm px-0 py-2 text-white placeholder-white/50 transition-colors" placeholder="Nombre completo" type="text" required />
                </div>
                <div className="relative w-full">
                  <input name="email" className="w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 font-body-md text-sm px-0 py-2 text-white placeholder-white/50 transition-colors" placeholder="Correo electrónico" type="email" required />
                </div>
                <div className="relative w-full">
                  <select name="interes" className="w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 font-body-md text-sm px-0 py-2 text-white/90 appearance-none transition-colors" required>
                    <option className="text-on-surface">Interés: Inversión</option>
                    <option className="text-on-surface">Interés: Compra / Alquiler</option>
                    <option className="text-on-surface">Interés: Construcción</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-white pointer-events-none text-[18px]">expand_more</span>
                </div>
                <button className="mt-4 w-full px-4 py-4 bg-primary text-white font-label-md text-sm hover:bg-primary-container hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-primary/20 uppercase tracking-widest font-bold flex items-center justify-center gap-2" type="submit">
                  Solicitar Asesoría
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>
            </div>

            {/* Navigation & Legal Links Side-by-Side */}
            <div className="md:col-span-5 flex gap-6 md:pl-6 md:border-l border-white/10 items-start">
              <div className="flex-1">
                <h4 className="font-label-md text-xs text-primary-fixed mb-3 uppercase tracking-widest font-bold">Navegación</h4>
                <ul className="space-y-2">
                  {siteConfig.navLinks.map((link, index) => (
                    <li key={index}>
                      <Link className="font-body-md text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2" href={link.href}>
                        <span className="w-1 h-1 rounded-full bg-primary"></span> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="font-label-md text-xs text-primary-fixed mb-3 uppercase tracking-widest font-bold">Legal</h4>
                <ul className="space-y-2">
                  <li><a className="font-body-md text-sm text-white/70 hover:text-white transition-colors" href="/privacidad">Privacidad</a></li>
                  <li><a className="font-body-md text-sm text-white/70 hover:text-white transition-colors" href="/terminos">Términos</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Block */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="font-caption text-xs text-white/50 uppercase tracking-wider">© 2024 Consorcio Terravía.</span>
          <span className="font-caption text-xs text-inverse-primary uppercase tracking-widest font-bold">Excelencia en Industrial Minimalism</span>
        </div>
      </div>
    </footer>
  );
}
