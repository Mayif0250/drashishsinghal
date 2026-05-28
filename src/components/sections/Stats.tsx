"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Bone, Heart, Star } from "lucide-react";
import Image from "next/image";

export default function Stats() {
  const stats = [
    {
      icon: Calendar,
      value: "15+",
      label: "Years of Experience",
    },
    {
      icon: Users,
      value: "5000+",
      label: "Patients Treated",
    },
    {
      icon: Bone,
      value: "1000+",
      label: "Joint Replacements",
    },
    {
      icon: Heart,
      value: "98%",
      label: "Patient Satisfaction",
    },
  ];

  return (
    <section className="relative z-20 max-w-[98%] w-full mx-auto px-4 md:px-8 -mt-16 mb-20">
      <div className="flex flex-col gap-6">
        
        {/* Top Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-8 px-8 flex flex-wrap justify-between items-center gap-8 border border-gray-100/50"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 flex-1 min-w-[200px] justify-center md:justify-start lg:justify-center">
              <div className="w-12 h-12 rounded-full bg-[#f4f7fa] flex items-center justify-center text-[#3b5998] shrink-0">
                <stat.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[28px] font-bold text-[#0b1b3d] leading-none mb-1">{stat.value}</div>
                <div className="text-sm text-[#575757] font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Reviews Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-6 px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-gray-100/50"
        >
          {/* Review Quote */}
          <div className="md:col-span-6 flex items-center gap-5">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 bg-gray-100">
              {/* Note: Using a placeholder or the same doctor image if no patient image is available, but ideally we'd have a patient image. Let's use a standard generic avatar shape or image */}
              <div className="w-full h-full bg-gray-200">
                <Image 
                  src="/dr_singhal_original.png" 
                  alt="Patient"
                  fill
                  className="object-cover object-top opacity-50 grayscale"
                />
              </div>
            </div>
            <div>
              <p className="text-[#3b5998] font-medium italic text-lg leading-snug mb-2">
                "I walked pain-free for the first time in years.<br/>I'm truly grateful."
              </p>
              <p className="text-[#3b5998] text-sm font-semibold">
                — Ramesh K., Knee Replacement Patient
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-16 bg-gray-100 mx-auto"></div>

          {/* Google Reviews */}
          <div className="md:col-span-2 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center gap-1 mb-2">
              <span className="font-bold text-[#4285F4] text-xl">G</span>
              <span className="font-bold text-[#EA4335] text-xl">o</span>
              <span className="font-bold text-[#FBBC05] text-xl">o</span>
              <span className="font-bold text-[#4285F4] text-xl">g</span>
              <span className="font-bold text-[#34A853] text-xl">l</span>
              <span className="font-bold text-[#EA4335] text-xl">e</span>
            </div>
            <div className="flex gap-0.5 mb-1 text-[#FBBC05]">
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
            </div>
            <div className="text-sm font-bold text-[#0b1b3d]">4.9<span className="text-gray-400 font-normal">/5</span></div>
            <div className="text-xs text-gray-500">300+ reviews</div>
          </div>

          {/* Practo Reviews */}
          <div className="md:col-span-2 flex flex-col justify-center items-center md:items-start pl-0 md:pl-4">
            <div className="font-bold text-[#0b1b3d] text-xl mb-2 tracking-tight">
              Practo
            </div>
            <div className="flex gap-0.5 mb-1 text-[#FBBC05]">
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
              <Star fill="currentColor" size={14} />
            </div>
            <div className="text-sm font-bold text-[#0b1b3d]">4.8<span className="text-gray-400 font-normal">/5</span></div>
            <div className="text-xs text-gray-500">150+ reviews</div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
