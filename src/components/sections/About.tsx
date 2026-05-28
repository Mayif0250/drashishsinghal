"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Activity, User, ArrowRight } from "lucide-react";

export default function About() {
  const qualifications = [
    "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    "Master of Surgery — Orthopedics (MS Ortho)",
    "Fellowship in Spine Surgery"
  ];

  const specializations = [
    "Orthopedic Spine Surgery",
    "Robotic Surgery",
    "Joint Replacement — Knee, Shoulder & Back"
  ];



  return (
    <section className="relative bg-white pt-24 pb-8 overflow-hidden" id="about">
      {/* Background Dot Matrix */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-24 left-8 grid grid-cols-6 gap-[14px] opacity-30">
            {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#3b5998]"></div>
            ))}
        </div>
      </div>

      <div className="max-w-[90%] mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column - Image & Graphic Elements */}
          <div className="lg:col-span-5 relative flex justify-center items-end h-[750px] lg:-mb-[280px]">
            
            {/* Large light blue circle */}
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[100%] aspect-square bg-[#f0f5fc] rounded-full z-0"></div>
            
            <Image
              src="/about_doctor.png"
              alt="Dr. Ashish Singhal"
              fill
              draggable={false}
              className="object-contain object-top relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.08)] scale-[1.5] origin-top select-none pointer-events-none"
            />
            
            {/* Wavy bottom overlay masking the doctor */}
            <div className="absolute top-[122%] w-[125%] h-[600px] z-20 pointer-events-none -translate-y-full">
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                {/* Solid white base to seamlessly blend with section background */}
                <path d="M0,10 C30,22 70,-2 100,10 L100,20 L0,20 Z" fill="white" />
                
                {/* Subtle blue wave lines */}
                <path d="M0,10 C30,22 70,-2 100,10" fill="none" stroke="#3b5998" strokeWidth="0.15" opacity="0.3" />
                <path d="M0,11.5 C30,23.5 70,-0.5 100,11.5" fill="none" stroke="#3b5998" strokeWidth="0.1" opacity="0.2" />
                <path d="M0,13 C30,25 70,1 100,13" fill="none" stroke="#3b5998" strokeWidth="0.08" opacity="0.15" />
                <path d="M0,14.5 C30,26.5 70,2.5 100,14.5" fill="none" stroke="#3b5998" strokeWidth="0.05" opacity="0.1" />
                <path d="M0,16 C30,28 70,4 100,16" fill="none" stroke="#3b5998" strokeWidth="0.03" opacity="0.05" />
              </svg>
            </div>

          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-7 pt-12 lg:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#2563eb] font-bold tracking-[0.1em] text-xs uppercase mb-2">
                ABOUT DR ASHISH SINGHAL
              </h2>
              
              <div className="w-8 h-[2px] bg-[#2563eb] mb-6"></div>
              
              <h1 className="text-5xl md:text-[56px] font-serif text-[#0b1b3d] leading-tight mb-4">
                Dr. Ashish Singhal
              </h1>

              {/* Award Tag */}
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-[#2563eb]" size={28} />
                <span className="text-[#2563eb] text-xl font-medium">Awarded Best Orthopedic Surgeon in Udaipur</span>
              </div>

              {/* Paragraphs */}
              <p className="text-[#575757] text-[15px] leading-[1.8] mb-6 max-w-[95%]">
                Popularly recognized as one of the best knee surgeons in Udaipur, Rajasthan,
                Dr. Ashish Singhal, MS (Ortho), is a renowned Orthopedic and Joint Replacement
                Specialist. He is among the leading joint replacement experts utilizing highly
                advanced robotic technology for knee and hip replacement surgeries.
              </p>

              <p className="text-[#575757] text-[15px] leading-[1.8] mb-10 max-w-[95%]">
                His precision-driven approach delivers superior treatment outcomes with minimal
                complications, reduced pain, shorter hospital stays, faster recovery, and longer-lasting implant performance — helping patients regain mobility and improve their
                quality of life with confidence.
              </p>

              {/* Button */}
              <button className="flex items-center gap-2 border border-[#2563eb] text-[#2563eb] font-semibold text-[13px] px-6 py-3 rounded hover:bg-[#eff6ff] transition-colors mb-12 tracking-wide">
                CLICK HERE TO KNOW MORE <ArrowRight size={16} />
              </button>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
