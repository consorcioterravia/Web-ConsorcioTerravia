import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <PortfolioSection />
        <EcosystemSection />
      </main>
      <Footer />
    </>
  );
}
