import Navbar from "@/components/sections/Navbar";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-canvas-warmth pt-20">
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
