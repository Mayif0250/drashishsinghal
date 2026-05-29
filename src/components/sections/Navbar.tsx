"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Stethoscope, PhoneCall, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isDarkTheme = !scrolled && (pathname === "/expertise" || pathname === "/services" || pathname === "/news");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/85 backdrop-blur-lg border-b border-gray-200/50 py-3 shadow-md"
        : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-[99%] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1c1c1c] shadow-sm">
            <Stethoscope size={20} strokeWidth={2.5} />
          </div>
          <div>
            <span className={`font-sans font-bold text-[18px] tracking-tight block leading-none mb-1 ${isDarkTheme ? "text-white" : "text-[#1c1c1c]"}`}>
              Dr. Ashish Singhal
            </span>
            <span className={`text-[10px] font-bold tracking-wide block uppercase ${isDarkTheme ? "text-white/80" : "text-gray-500"}`}>
              Orthopedic & Robotic Joint Specialist
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: "About", href: "/#about" },
            { label: "Services", href: "/services" },
            { label: "Expertise", href: "/expertise" },
            { label: "News", href: "/news" },
            { label: "Contact", href: "/#booking" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${isDarkTheme
                  ? "text-white/90 hover:text-white"
                  : "text-headline-dark/90 hover:text-deep-graphite"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Direct Booking Elements */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919414393320"
            className={`hidden sm:flex items-center gap-2 border px-4 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${isDarkTheme
                ? "border-white/30 text-white hover:bg-white/10 hover:border-white"
                : "border-line-gray text-headline-dark hover:border-deep-graphite hover:bg-surface-white"
              }`}
          >
            <PhoneCall size={16} />
            <span>+91 94143 93320</span>
          </a>
          <Link
            href="/#booking"
            className={`py-2.5 px-6 text-sm font-medium rounded-lg flex items-center gap-2 transition-colors ${isDarkTheme
                ? "bg-white text-[#0b1b3d] hover:bg-gray-100"
                : "bg-[#0b1b3d] hover:bg-[#132752] text-white"
              }`}
          >
            Book Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
