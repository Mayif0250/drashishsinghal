import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";


import Pricing from "@/components/sections/Pricing";

import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-canvas-warmth">
        <Hero />
        <Stats />
        <About />
        <Features />


        <Pricing />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
