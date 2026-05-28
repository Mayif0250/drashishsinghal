"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Stethoscope, PhoneCall, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm"
        : "bg-white border-b border-gray-100 py-4"
        }`}
    >
      <div className="max-w-[94%] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1c1c1c] shadow-sm">
            <Stethoscope size={20} strokeWidth={2.5} />
          </div>
          <div>
            <span className="font-sans font-bold text-[18px] tracking-tight text-[#1c1c1c] block leading-none mb-1">
              Dr. Ashish Singhal
            </span>
            <span className="text-[10px] font-bold tracking-wide text-gray-500 block uppercase">
              Orthopedic & Robotic Joint Specialist
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-headline-dark/90 hover:text-deep-graphite transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium text-headline-dark/90 hover:text-deep-graphite transition-colors">
            Services
          </Link>
          <Link href="#expertise" className="text-sm font-medium text-headline-dark/90 hover:text-deep-graphite transition-colors">
            Expertise
          </Link>
          <Link href="#patient-stories" className="text-sm font-medium text-headline-dark/90 hover:text-deep-graphite transition-colors">
            Patient Stories
          </Link>
          <Link href="#resources" className="text-sm font-medium text-headline-dark/90 hover:text-deep-graphite transition-colors">
            Resources
          </Link>
          <Link href="#contact" className="text-sm font-medium text-headline-dark/90 hover:text-deep-graphite transition-colors">
            Contact
          </Link>
        </nav>

        {/* Direct Booking Elements */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919414393320"
            className="hidden sm:flex items-center gap-2 border border-line-gray px-4 py-2.5 rounded-full text-sm font-semibold text-headline-dark hover:border-deep-graphite hover:bg-surface-white transition-all shadow-sm"
          >
            <PhoneCall size={16} />
            <span>+91 94143 93320</span>
          </a>
          <Link href="#booking" className="bg-[#0b1b3d] hover:bg-[#132752] text-white py-2.5 px-6 text-sm font-medium rounded-lg flex items-center gap-2 transition-colors">
            Book Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
