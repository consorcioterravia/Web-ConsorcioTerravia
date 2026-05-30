"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-primary/10">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto py-2 md:py-1.5 relative bg-white z-50">
        <div className="flex items-center">
          <Link href="/" className="relative h-[45px] w-[180px] sm:h-[55px] sm:w-[220px] md:h-[100px] md:w-[440px]">
            <Image 
              src={siteConfig.images.logo} 
              alt="Terravía Logo" 
              fill 
              className="object-contain object-left mix-blend-multiply" 
              priority
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.navLinks.map((link, index) => (
            <Link 
              key={index}
              className="relative font-label-md text-sm tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors duration-300 py-2 group"
              href={link.href}>
              {link.label}
              {/* Animación de subrayado elegante */}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transform origin-left transition-transform duration-300 ease-out ${index === 0 ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-surface text-primary border border-primary/20 font-label-md text-sm rounded-full hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/10 active:translate-y-0 transition-all duration-300 uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-[18px]">chat</span>
            WhatsApp
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 px-7 py-2.5 bg-gradient-to-r from-primary to-surface-tint text-white font-label-md text-sm rounded-full hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-300 uppercase tracking-widest font-bold">
            Contacto
          </a>
        </div>

        {/* Mobile Header Buttons */}
        <div className="lg:hidden flex items-center gap-1 sm:gap-2">
          {/* WhatsApp Button Mobile (Icon and Text) */}
          <a
            href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-surface text-primary border border-primary/20 rounded-full active:bg-primary/10 transition-colors"
            aria-label="WhatsApp"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">chat</span>
            <span className="font-label-md text-[10px] sm:text-xs font-bold uppercase tracking-wider">WhatsApp</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={toggleMobileMenu}
            className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out border-b border-primary/10 shadow-xl overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[calc(100vh-70px)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6 h-full overflow-y-auto">
          <div className="flex flex-col gap-4">
            {siteConfig.navLinks.map((link, index) => (
              <Link 
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-label-md text-lg tracking-widest uppercase text-on-surface hover:text-primary transition-colors py-3 border-b border-surface-variant/20"
                href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 mt-6 pb-6">
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-primary to-surface-tint text-white font-label-md text-base rounded-full uppercase tracking-widest font-bold shadow-md w-full text-center active:shadow-sm">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
