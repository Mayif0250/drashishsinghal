"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#f4f7fa] h-[95vh] min-h-[750px] overflow-hidden flex items-center pt-20">

      {/* Hero Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero_bg_overlay.png"
          alt="Hero Background"
          fill
          priority
          className="object-fill"
        />
      </div>

      {/* Doctor Image Container - Anchored strictly to the bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 right-0 lg:right-[5%] z-10 w-[950px] h-[95%] pointer-events-none"
      >
        <Image
          src="/dr_singhal_nobg_transparent.png"
          alt="Dr. Ashish Singhal"
          fill
          priority
          className="object-contain object-bottom drop-shadow-2xl"
        />
      </motion.div>

      <div className="max-w-[94%] mx-auto px-4 md:px-8 w-full relative z-20 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#3b5998] font-bold tracking-[0.2em] text-xs uppercase mb-6">
                Robotic Joint Replacement Specialist
              </h2>

              <h1 className="text-5xl md:text-[72px] font-serif text-[#0b1b3d] leading-[1.1] mb-6 whitespace-nowrap">
                Precision care.<br />
                Stronger tomorrow.
              </h1>

              <div className="w-12 h-0.5 bg-[#3b5998] mb-6"></div>

              <p className="text-[#575757] text-lg max-w-lg mb-10 leading-relaxed">
                Advanced orthopedic solutions using robotic technology and
                evidence-based care to help you move better, live better.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#booking"
                  className="bg-[#0b1b3d] hover:bg-[#132752] text-white py-3.5 px-8 text-sm font-medium rounded-lg flex items-center gap-2 transition-colors shadow-lg"
                >
                  Book Appointment <ArrowRight size={18} />
                </Link>

                <Link
                  href="#stories"
                  className="bg-white hover:bg-gray-50 text-[#0b1b3d] py-3.5 px-8 text-sm font-medium rounded-lg flex items-center gap-2 transition-colors shadow-sm border border-gray-100"
                >
                  <div className="w-6 h-6 rounded-full border border-[#0b1b3d] flex items-center justify-center">
                    <Play size={12} className="ml-0.5" fill="currentColor" />
                  </div>
                  Watch Patient Stories
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[500px] w-full flex items-center justify-end">
            {/* Floating Cards Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-0 bg-white/95 backdrop-blur-md rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 p-6 z-20 flex flex-col gap-6 w-[280px]"
            >
              {/* Card 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f0f8] flex items-center justify-center text-[#3b5998] shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="text-[#0b1b3d] font-semibold text-sm leading-tight mb-1">
                    Robotic-Assisted<br />Joint Replacement
                  </h3>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Card 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f0f8] flex items-center justify-center text-[#3b5998] shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="text-[#0b1b3d] font-semibold text-sm leading-tight mb-1">
                    Minimally Invasive<br />Techniques
                  </h3>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Card 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e8f0f8] flex items-center justify-center text-[#3b5998] shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="text-[#0b1b3d] font-semibold text-sm leading-tight mb-1">
                    Faster Recovery<br />Better Outcomes
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
