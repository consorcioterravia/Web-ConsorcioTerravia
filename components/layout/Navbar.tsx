import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-primary/10">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto py-1 md:py-1.5">
        <div className="flex items-center">
          <Link href="/" className="relative h-[80px] w-[320px] md:h-[100px] md:w-[440px]">
            <Image 
              src={siteConfig.images.logo} 
              alt="Terravía Logo" 
              fill 
              className="object-contain object-left mix-blend-multiply" 
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
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
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-surface text-primary border border-primary/20 font-label-md text-sm rounded-full hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/10 active:translate-y-0 transition-all duration-300 uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-[18px]">chat</span>
            WhatsApp
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2 px-7 py-2.5 bg-gradient-to-r from-primary to-surface-tint text-white font-label-md text-sm rounded-full hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-300 uppercase tracking-widest font-bold">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
