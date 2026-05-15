import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Variables for external data, making the component scalable
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  // Navigation Links
  const navLinks = [
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Inversión', href: '/inversion' },
    { label: 'Constructores', href: '/constructores' },
    { label: 'Portal', href: '/portal' },
  ];

  // Image Placeholders
  const heroBgImage = "/hero-bg.jpg";
  const TRUSTED_LOGOS = [
    { src: "/logo-1.svg", alt: "CBRE" },
    { src: "/logo-2.svg", alt: "JLL" },
    { src: "/logo-3.svg", alt: "Savills" }
  ];
  const portfolioImages = [
    "/property-1.jpg",
    "/property-2.jpg",
    "/property-3.jpg"
  ];
  const ecosystemImage = "/ecosystem-interior.jpg";

  return (
    <>
      {/*  TopNavBar  */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-primary/10">
          <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto h-20">
              <div className="flex items-center">
                  <div className="relative h-12 w-40 md:h-20 md:w-64">
                      <Image src="/terravia-logo.jpeg" alt="Terravía Logo" fill className="object-contain mix-blend-multiply" />
                  </div>
              </div>
              <div className="hidden md:flex items-center gap-gutter">
                  {navLinks.map((link, index) => (
                      <Link 
                          key={index}
                          className={`font-label-md text-label-md tracking-wider uppercase transition-colors duration-300 ${
                              index === 0 
                              ? 'text-primary border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity' 
                              : 'text-on-surface-variant hover:text-primary'
                          }`}
                          href={link.href}>
                          {link.label}
                      </Link>
                  ))}
              </div>
              <div className="flex items-center gap-sm">
                  <a
                      href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                      className="hidden md:flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-primary font-label-md text-label-md rounded-DEFAULT hover:bg-primary/5 transition-colors uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      WhatsApp
                  </a>
                  <a
                      href="#contacto"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-label-md text-label-md rounded-DEFAULT hover:bg-primary-container transition-colors uppercase tracking-wider shadow-md shadow-primary/20">
                      Contacto
                  </a>
              </div>
          </div>
      </nav>

      <main className="flex-grow pt-20">
          {/*  Hero Section  */}
          <section className="relative min-h-[921px] flex items-center px-margin-mobile md:px-margin-desktop pt-xl pb-xl bg-surface-container-lowest">
              <div className="absolute inset-0 z-0">
                  <Image 
                      alt="Minimalist industrial architecture" 
                      className="object-cover grayscale opacity-40"
                      src={heroBgImage} 
                      fill
                      priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/70 via-surface-container-lowest/40 to-surface-container-lowest/90">
                  </div>
              </div>
              <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
                  <div className="lg:col-span-8 lg:col-start-3 text-center flex flex-col items-center gap-lg z-10">
                      <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full">
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                          <span className="font-label-md text-label-md text-primary tracking-widest uppercase">Industrial Minimalism in PropTech</span>
                      </div>
                      <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface font-extrabold tracking-tighter">
                          Más que metros cuadrados:<br />
                          <span className="text-primary italic font-semibold">Inteligencia Inmobiliaria, Diseño y Rentabilidad</span>
                      </h1>
                      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
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
                              href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                              className="w-full sm:w-auto px-8 py-4 bg-surface border-2 border-primary/30 text-on-surface font-label-md text-label-md rounded-DEFAULT hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-3 uppercase tracking-wider">
                              <span className="material-symbols-outlined text-[20px] text-primary">chat</span>
                              Asesoría WhatsApp
                          </a>
                      </div>
                      <div className="mt-xl pt-xl border-t border-outline-variant/50 w-full flex flex-col items-center gap-md">
                          <p className="font-label-md text-caption text-primary uppercase tracking-widest font-semibold text-center">
                              Confían en nosotros
                          </p>
                          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center w-full">
                              {TRUSTED_LOGOS.map((logo, i) => (
                                  <div key={i} className="relative h-12 w-32 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer mix-blend-multiply flex-shrink-0">
                                      <Image alt={logo.alt} src={logo.src} fill className="object-contain" />
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
              {/*  Abstract background element  */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <div className="absolute -right-1/4 -top-1/4 w-1/2 h-full bg-primary/5 transform rotate-12 origin-center border-l border-primary/10">
                  </div>
                  <div className="absolute -left-1/4 bottom-0 w-1/3 h-1/2 bg-primary/5 transform -rotate-12 origin-center border-r border-t border-primary/10">
                  </div>
              </div>
          </section>

          {/*  Alquiler y Ventas Gallery Section  */}
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
                          <div className="relative overflow-hidden aspect-[4/5] bg-surface-variant">
                              <Image alt="Apartamento Alquiler 1"
                                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                  src={portfolioImages[0]} fill />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                              <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 bg-primary text-on-primary font-caption text-caption rounded-none uppercase tracking-wider text-xs">Alquiler</span>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-lg">
                                  <h3 className="font-headline-md text-headline-md text-white mb-2 group-hover:text-primary-fixed transition-colors">Loft Industrial 01</h3>
                                  <p className="font-body-md text-body-md text-white/80 mb-4 flex items-center gap-2">
                                      <span className="material-symbols-outlined text-sm">location_on</span> Zona Norte, Distrito Financiero
                                  </p>
                                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                                      <span className="font-headline-md text-headline-md text-white font-bold">$2,500 <span className="text-sm font-normal text-white/70">/ mes</span></span>
                                      <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*  Property 2  */}
                      <div className="group cursor-pointer">
                          <div className="relative overflow-hidden aspect-[4/5] bg-surface-variant">
                              <Image alt="Apartamento Alquiler 2"
                                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                  src={portfolioImages[1]} fill />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                              <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 bg-primary text-on-primary font-caption text-caption rounded-none uppercase tracking-wider text-xs">Alquiler</span>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-lg">
                                  <h3 className="font-headline-md text-headline-md text-white mb-2 group-hover:text-primary-fixed transition-colors">Residencia Terra</h3>
                                  <p className="font-body-md text-body-md text-white/80 mb-4 flex items-center gap-2">
                                      <span className="material-symbols-outlined text-sm">location_on</span> Colinas del Este
                                  </p>
                                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                                      <span className="font-headline-md text-headline-md text-white font-bold">$4,200 <span className="text-sm font-normal text-white/70">/ mes</span></span>
                                      <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/*  Property 3  */}
                      <div className="group cursor-pointer">
                          <div className="relative overflow-hidden aspect-[4/5] bg-surface-variant">
                              <Image alt="Apartamento Alquiler 3"
                                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                                  src={portfolioImages[2]} fill />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                              <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 bg-primary text-on-primary font-caption text-caption rounded-none uppercase tracking-wider text-xs">Alquiler</span>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-lg">
                                  <h3 className="font-headline-md text-headline-md text-white mb-2 group-hover:text-primary-fixed transition-colors">Penthouse Vértice</h3>
                                  <p className="font-body-md text-body-md text-white/80 mb-4 flex items-center gap-2">
                                      <span className="material-symbols-outlined text-sm">location_on</span> Centro Histórico
                                  </p>
                                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                                      <span className="font-headline-md text-headline-md text-white font-bold">$3,800 <span className="text-sm font-normal text-white/70">/ mes</span></span>
                                      <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="text-center mt-xl">
                      <a
                          href="/proyectos"
                          className="inline-flex px-8 py-4 bg-transparent border border-primary text-primary font-label-md text-label-md rounded-none hover:bg-primary hover:text-on-primary transition-all items-center justify-center gap-2 uppercase tracking-wider mx-auto">
                          Ver Catálogo Completo
                          <span className="material-symbols-outlined text-[20px]">grid_view</span>
                      </a>
                  </div>
              </div>
          </section>

          {/*  Ecosystem Bento Grid  */}
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
                                  src={ecosystemImage} fill />
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
                              <a className="inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:text-primary-container transition-colors group-hover:translate-x-2 transform duration-300 uppercase tracking-wider mt-4"
                                  href="/proyectos">
                                  Ver Propiedades <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                              </a>
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
                                      <span className="font-caption text-caption text-primary-fixed uppercase tracking-widest">ROI Promedio Proyectado</span>
                                      <span className="font-display-lg text-headline-lg text-white font-black">18.5%</span>
                                  </div>
                                  <div className="w-full bg-black/40 h-2 mt-4 rounded-full overflow-hidden">
                                      <div className="bg-primary-fixed h-2 w-[75%] rounded-full relative">
                                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <a className="relative z-10 inline-flex items-center gap-2 text-white font-label-md text-label-md hover:text-primary-fixed transition-colors group-hover:translate-x-2 transform duration-300 uppercase tracking-wider"
                              href="/inversion">
                              Oportunidades de Inversión <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                          </a>
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
                              <ul className="space-y-md mb-xl">
                                  <li className="flex items-center gap-4 font-body-md text-body-md text-on-surface">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                          <span className="material-symbols-outlined text-primary text-[16px]">check</span>
                                      </div>
                                      Reportes Fotográficos Diarios
                                  </li>
                                  <li className="flex items-center gap-4 font-body-md text-body-md text-on-surface">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                          <span className="material-symbols-outlined text-primary text-[16px]">check</span>
                                      </div>
                                      Control Presupuestario Milimétrico
                                  </li>
                                  <li className="flex items-center gap-4 font-body-md text-body-md text-on-surface">
                                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                          <span className="material-symbols-outlined text-primary text-[16px]">check</span>
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
      </main>

      {/*  Footer Redesign  */}
      <footer id="contacto" className="bg-inverse-surface w-full pt-6 pb-4 border-t-4 border-primary relative overflow-hidden">
          <div className="absolute inset-0 concrete-texture opacity-10 pointer-events-none"></div>
          <div className="px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6 items-start">
                  
                  {/* Brand & Description */}
                  <div className="lg:col-span-4 flex flex-col gap-4 items-start">
                      <div className="flex items-center bg-white rounded-md p-2 shadow-sm border border-white/10">
                          <div className="relative h-12 w-40">
                              <Image src="/terravia-logo.jpeg" alt="Terravía Logo" fill className="object-contain" />
                          </div>
                      </div>
                      <p className="font-body-md text-sm text-inverse-on-surface/80 max-w-[280px] leading-relaxed">
                          <span className="block mb-2">Inteligencia Inmobiliaria, Diseño y Rentabilidad.</span>
                          <span className="block">Elevando el estándar del desarrollo a través del Minimalismo Industrial.</span>
                      </p>
                      <div className="flex gap-3 mt-1">
                          <a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
                              href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                              <span className="material-symbols-outlined text-[16px]">chat</span>
                          </a>
                          <a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
                              href="#contacto" aria-label="Contacto">
                              <span className="material-symbols-outlined text-[16px]">mail</span>
                          </a>
                      </div>
                  </div>

                  {/* Form & Navigation */}
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      
                      {/* Compact Column Form */}
                      <div className="md:col-span-7 bg-surface-tint border border-primary p-5 shadow-2xl relative w-full">
                          <div className="absolute top-0 right-0 w-12 h-12 bg-primary/20 -translate-y-1/2 translate-x-1/2 rotate-45 blur-xl"></div>
                          <h4 className="font-label-md text-sm text-white mb-4 uppercase tracking-widest font-bold border-b border-white/20 pb-2">
                              Contacto Directo
                          </h4>
                          <form className="flex flex-col gap-4 w-full">
                              <div className="relative w-full">
                                  <input className="w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 font-body-md text-sm px-0 py-2 text-white placeholder-white/50 transition-colors" placeholder="Nombre completo" type="text" />
                              </div>
                              <div className="relative w-full">
                                  <input className="w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 font-body-md text-sm px-0 py-2 text-white placeholder-white/50 transition-colors" placeholder="WhatsApp / Teléfono" type="tel" />
                              </div>
                              <div className="relative w-full">
                                  <select className="w-full bg-transparent border-0 border-b border-white/30 focus:border-white focus:ring-0 font-body-md text-sm px-0 py-2 text-white/90 appearance-none transition-colors">
                                      <option className="text-on-surface">Interés: Inversión</option>
                                      <option className="text-on-surface">Interés: Compra / Alquiler</option>
                                      <option className="text-on-surface">Interés: Construcción</option>
                                  </select>
                                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-white pointer-events-none text-[18px]">expand_more</span>
                              </div>
                              <button className="mt-2 w-full px-4 py-3 bg-white text-primary font-label-md text-sm hover:bg-inverse-on-surface transition-colors uppercase tracking-widest font-bold flex items-center justify-center gap-2" type="submit">
                                  Solicitar Asesoría
                                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                              </button>
                          </form>
                      </div>

                      {/* Navigation & Legal Links Side-by-Side */}
                      <div className="md:col-span-5 flex gap-6 md:pl-6 md:border-l border-white/10 items-start">
                          <div className="flex-1">
                              <h4 className="font-label-md text-xs text-primary-fixed mb-3 uppercase tracking-widest font-bold">Navegación</h4>
                              <ul className="space-y-2">
                                  {navLinks.map((link, index) => (
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
    </>
  );
}
