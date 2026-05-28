"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bone, PersonStanding, ScanSearch } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "KNEE & HIP REPLACEMENT",
      subtitle: "Robotic Knee by Dr Ashish Singhal |\nParas Hospital & Mahe Clinic | Udaipur",
      desc: "Using the latest robotic technology for knee and hip replacements, ensuring that each patient receives the best possible care. The goal is to minimize pain and reduce the likelihood of complications, allowing patients to return to their favorite activities swiftly and safely.",
      image: "/service1.png",
      icon: Bone,
    },
    {
      title: "SPORTS INJURY TREATMENT",
      subtitle: "Dr Ashish Singhal | Best orthopedic doctor\nfor Sports Injuries at Udaipur",
      desc: "15 plus years of experience in the field of surgery, brings a wealth of knowledge to every consultation. The focus on arthroscopy and other bone and joint disorders has resulted in a success rate of over 99%. Regain your mobility & improve your quality of life with expert surgical care.",
      image: "/service2.png",
      icon: PersonStanding,
    },
    {
      title: "ARTHROSCOPY ORTHOPEDICS",
      subtitle: "Arthroscopy by Dr Ashish Singhal\nat Paras Hospital Udaipur",
      desc: "Specialization in arthroscopy and the comprehensive treatment of various orthopedic disorders. Approach blends advanced surgical techniques with a deep understanding of patient needs. Each treatment plan is tailored to ensure the best healing experience tailored just for you.",
      image: "/service3.png",
      icon: ScanSearch,
    }
  ];

  return (
    <section className="relative bg-[#fafbfc] py-24 overflow-hidden" id="services">
      {/* Background Dot Matrix - Top Left */}
      <div className="absolute top-16 left-4 grid grid-cols-6 gap-3 opacity-30 pointer-events-none">
          {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#3b5998]"></div>
          ))}
      </div>

      {/* Wavy Background Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] pointer-events-none opacity-20">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,50 C30,70 70,30 100,50 L100,100 L0,100 Z" fill="none" stroke="#3b5998" strokeWidth="0.2" />
          <path d="M0,55 C30,75 70,35 100,55 L100,100 L0,100 Z" fill="none" stroke="#3b5998" strokeWidth="0.15" />
          <path d="M0,60 C30,80 70,40 100,60 L100,100 L0,100 Z" fill="none" stroke="#3b5998" strokeWidth="0.1" />
          <path d="M0,65 C30,85 70,45 100,65 L100,100 L0,100 Z" fill="none" stroke="#3b5998" strokeWidth="0.05" />
        </svg>
      </div>

      <div className="max-w-[90%] mx-auto px-4 md:px-8 w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[#3b5998] font-bold tracking-[0.15em] text-xs uppercase mb-3">
            OUR SERVICES
          </h2>
          <div className="w-8 h-[2px] bg-[#3b5998] mb-6"></div>
          <h1 className="text-4xl md:text-[44px] font-serif text-[#0b1b3d] leading-tight mb-4">
            Expert Orthopedic Care
          </h1>
          <p className="text-[#575757] text-[15px] leading-relaxed max-w-2xl">
            Advanced treatments. Personalised care. Better outcomes.<br className="hidden md:block"/>
            Specialised orthopedic services designed to help you move better, live better.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col overflow-visible group"
            >
              {/* Image Section */}
              <div className="relative h-[240px] w-full rounded-t-xl">
                <div className="absolute inset-0 rounded-t-xl overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Icon */}
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-50 z-20">
                  <service.icon size={24} className="text-[#3b5998]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-12 px-8 pb-10 flex flex-col flex-1 text-center items-center">
                <h3 className="font-serif text-[#0b1b3d] text-[17px] uppercase tracking-wider mb-2">
                  {service.title}
                </h3>
                
                <p className="text-[#3b5998] text-[12px] leading-relaxed mb-4 whitespace-pre-line px-2">
                  {service.subtitle}
                </p>
                
                <div className="w-12 h-px bg-gray-200 mb-5"></div>
                
                <p className="text-[#575757] text-[13px] leading-[1.8] mb-8 flex-1">
                  {service.desc}
                </p>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#3b5998] text-[13px] font-medium border-b border-[#3b5998] pb-0.5 hover:text-[#0b1b3d] hover:border-[#0b1b3d] transition-colors"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
