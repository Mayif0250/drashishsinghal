import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Stethoscope,
  Award,
  Bone,
  User,
  ShieldCheck,
  Trophy,
  Star,
  HeartHandshake,
  CalendarDays,
  Users,
  Activity,
  BadgeCheck,
  FileBadge,
  Medal,
  Heart
} from "lucide-react";

const DetailedLaurelWreath = ({ color = "currentColor", children }: { color?: string, children?: React.ReactNode }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
    <g stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Left stem */}
      <path d="M 50 95 C 25 90 5 60 15 25" />
      {/* Right stem */}
      <path d="M 50 95 C 75 90 95 60 85 25" />

      {/* Outer Left leaves */}
      <path d="M 45 90 C 35 85 30 80 35 75 C 40 80 45 85 45 90 Z" fill={color} fillOpacity="0.1" />
      <path d="M 33 79 C 23 75 18 70 24 64 C 29 70 34 75 33 79 Z" fill={color} fillOpacity="0.1" />
      <path d="M 22 65 C 13 60 9 55 16 48 C 21 54 26 59 22 65 Z" fill={color} fillOpacity="0.1" />
      <path d="M 14 50 C 6 45 3 40 10 32 C 15 39 19 44 14 50 Z" fill={color} fillOpacity="0.1" />
      <path d="M 12 35 C 5 30 3 25 10 17 C 15 24 18 29 12 35 Z" fill={color} fillOpacity="0.1" />

      {/* Inner Left leaves */}
      <path d="M 38 85 C 45 75 48 70 42 65 C 38 72 35 78 38 85 Z" fill={color} fillOpacity="0.1" />
      <path d="M 28 70 C 36 60 39 55 33 49 C 28 56 25 63 28 70 Z" fill={color} fillOpacity="0.1" />
      <path d="M 20 54 C 29 44 32 39 26 32 C 21 40 17 47 20 54 Z" fill={color} fillOpacity="0.1" />
      <path d="M 16 38 C 25 28 28 23 22 16 C 17 24 13 31 16 38 Z" fill={color} fillOpacity="0.1" />

      {/* Outer Right leaves */}
      <path d="M 55 90 C 65 85 70 80 65 75 C 60 80 55 85 55 90 Z" fill={color} fillOpacity="0.1" />
      <path d="M 67 79 C 77 75 82 70 76 64 C 71 70 66 75 67 79 Z" fill={color} fillOpacity="0.1" />
      <path d="M 78 65 C 87 60 91 55 84 48 C 79 54 74 59 78 65 Z" fill={color} fillOpacity="0.1" />
      <path d="M 86 50 C 94 45 97 40 90 32 C 85 39 81 44 86 50 Z" fill={color} fillOpacity="0.1" />
      <path d="M 88 35 C 95 30 97 25 90 17 C 85 24 82 29 88 35 Z" fill={color} fillOpacity="0.1" />

      {/* Inner Right leaves */}
      <path d="M 62 85 C 55 75 52 70 58 65 C 62 72 65 78 62 85 Z" fill={color} fillOpacity="0.1" />
      <path d="M 72 70 C 64 60 61 55 67 49 C 72 56 75 63 72 70 Z" fill={color} fillOpacity="0.1" />
      <path d="M 80 54 C 71 44 68 39 74 32 C 79 40 83 47 80 54 Z" fill={color} fillOpacity="0.1" />
      <path d="M 84 38 C 75 28 72 23 78 16 C 83 24 87 31 84 38 Z" fill={color} fillOpacity="0.1" />

      {/* Bottom ribbons */}
      <path d="M 45 95 L 40 102 C 45 102 55 102 60 102 L 55 95" />
    </g>

    <circle cx="50" cy="48" r="23" stroke={color} strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" />

    {/* Center the 24x24 icon inside the 100x100 wreath */}
    <g transform="translate(38, 36)">
      {children}
    </g>
  </svg>
);

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#f8fafc]">

        {/* Expertise Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] pt-24 overflow-hidden">
          <Image
            src="/expertise-hero.png"
            alt="Dr Ashish Singhal Speaking"
            fill
            className="object-cover object-[center_1%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/80 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start text-left">
            <span className="text-white text-xs font-bold tracking-widest uppercase mb-4 opacity-90 border-b border-white/20 pb-2 inline-block">
              EXPERTISE
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-2">
              Dr. Ashish Singhal
            </h1>
            <h2 className="text-[#a5b4fc] text-lg md:text-xl font-bold tracking-wide uppercase mb-1">
              ORTHOPEDIC CONSULTANT
            </h2>
            <h3 className="text-white/90 text-md md:text-lg mb-6">
              Paras Health, Udaipur
            </h3>
            <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-xl">
              Dr. Ashish Singhal, a distinguished Orthopedic Consultant at Paras Health, Udaipur, embodies excellence in orthopedic care, particularly in spine surgery. With a career spanning over a decade, Dr. Singhal has been a pioneer in advancing orthopedic treatments, specializing in robotic surgery and joint replacements for the knee, shoulder, and back. His expertise extends to intricate procedures, ensuring precision and optimal patient outcomes.
            </p>
          </div>
        </section>

        {/* Medical Qualifications */}
        <section className="bg-white py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

            {/* Centered Title with Heartbeats */}
            <div className="flex items-center justify-center gap-2 md:gap-6 mb-24 w-full">
              {/* Left Heartbeat */}
              <div className="w-16 md:w-32 h-8 opacity-20">
                <svg viewBox="0 0 200 40" className="w-full h-full" preserveAspectRatio="none" fill="none" stroke="#1e3a8a" strokeWidth="3">
                  <path d="M0,20 L120,20 L130,5 L145,35 L155,20 L200,20" />
                </svg>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <h2 className="text-[20px] md:text-[26px] font-serif font-bold text-[#0b1b3d] uppercase tracking-widest text-center">
                  MEDICAL QUALIFICATIONS
                </h2>
                <div className="w-10 h-[3px] bg-[#1e3a8a] mt-4" />
              </div>
              {/* Right Heartbeat */}
              <div className="w-16 md:w-32 h-8 opacity-20 transform scale-x-[-1]">
                <svg viewBox="0 0 200 40" className="w-full h-full" preserveAspectRatio="none" fill="none" stroke="#1e3a8a" strokeWidth="3">
                  <path d="M0,20 L120,20 L130,5 L145,35 L155,20 L200,20" />
                </svg>
              </div>
            </div>

            {/* Timeline Layout */}
            <div className="relative w-full max-w-6xl">
              {/* Horizontal Line Background */}
              <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-[#1e3a8a] z-0 opacity-70">
                {/* Arrows on the line */}
                <div className="absolute top-1/2 left-[25%] -translate-y-1/2 -translate-x-1/2 bg-white px-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </div>
                <div className="absolute top-1/2 left-[58%] -translate-y-1/2 -translate-x-1/2 bg-white px-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </div>
                <div className="absolute top-1/2 left-[91%] -translate-y-1/2 -translate-x-1/2 bg-white px-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </div>
                {/* Arrow at the very end */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </div>
              </div>

              {/* Mobile Vertical Line */}
              <div className="block md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#1e3a8a] opacity-50 -translate-x-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 relative z-10">

                {/* Node 1 */}
                <div className="flex flex-col items-center text-center px-2 relative">
                  <div className="relative w-[120px] h-[120px] flex items-center justify-center bg-white rounded-full mb-6 mx-auto">
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#1e3a8a]/40 m-1" />
                    <div className="absolute inset-2 rounded-full border border-[#1e3a8a]/20" />
                    <div className="absolute inset-3 rounded-full bg-[#0b1b3d] flex items-center justify-center shadow-lg">
                      <GraduationCap size={44} className="text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-serif text-[#1e3a8a]/20 font-bold mb-3 leading-none tracking-wider">01</div>
                  <h3 className="text-[15px] font-bold text-[#0b1b3d] leading-snug mb-3 min-h-[45px]">
                    Bachelor of Medicine,<br />Bachelor of Surgery<br />(MBBS)
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[200px]">
                    Foundation of extensive medical knowledge and patient care.
                  </p>
                </div>

                {/* Node 2 */}
                <div className="flex flex-col items-center text-center px-2 relative">
                  <div className="relative w-[120px] h-[120px] flex items-center justify-center bg-white rounded-full mb-6 mx-auto">
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#1e3a8a]/40 m-1" />
                    <div className="absolute inset-2 rounded-full border border-[#1e3a8a]/20" />
                    <div className="absolute inset-3 rounded-full bg-[#0b1b3d] flex items-center justify-center shadow-lg">
                      <Award size={44} className="text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-serif text-[#1e3a8a]/20 font-bold mb-3 leading-none tracking-wider">02</div>
                  <h3 className="text-[15px] font-bold text-[#0b1b3d] leading-snug mb-3 min-h-[45px]">
                    Master of Surgery<br />(Orthopedics)
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[200px]">
                    Advanced expertise in diagnosing and treating musculoskeletal conditions.
                  </p>
                </div>

                {/* Node 3 */}
                <div className="flex flex-col items-center text-center px-2 relative">
                  <div className="relative w-[120px] h-[120px] flex items-center justify-center bg-white rounded-full mb-6 mx-auto">
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#1e3a8a]/40 m-1" />
                    <div className="absolute inset-2 rounded-full border border-[#1e3a8a]/20" />
                    <div className="absolute inset-3 rounded-full bg-[#0b1b3d] flex items-center justify-center shadow-lg">
                      {/* Custom Spine Icon matching the design */}
                      <svg viewBox="0 0 24 24" className="w-[44px] h-[44px] text-white" fill="none">
                        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform="translate(4, -1)">
                          <rect x="4" y="4" width="8" height="3" rx="1" />
                          <rect x="4" y="9" width="8" height="3" rx="1" />
                          <rect x="4" y="14" width="8" height="3" rx="1" />
                          <rect x="4" y="19" width="8" height="3" rx="1" />
                          <line x1="8" y1="7" x2="8" y2="9" />
                          <line x1="8" y1="12" x2="8" y2="14" />
                          <line x1="8" y1="17" x2="8" y2="19" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-serif text-[#1e3a8a]/20 font-bold mb-3 leading-none tracking-wider">03</div>
                  <h3 className="text-[15px] font-bold text-[#0b1b3d] leading-snug mb-3 min-h-[45px]">
                    Fellowship in<br />Spine Surgery
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed max-w-[200px]">
                    Specialized training in complex spine surgery and advanced techniques.
                  </p>
                </div>

                {/* Node 4 */}
                <div className="flex flex-col items-center text-center px-2 relative">
                  <div className="relative w-[120px] h-[120px] flex items-center justify-center bg-white rounded-full mb-6 mx-auto">
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#1e3a8a]/40 m-1" />
                    <div className="absolute inset-2 rounded-full border border-[#1e3a8a]/20" />
                    <div className="absolute inset-3 rounded-full bg-[#0b1b3d] flex items-center justify-center shadow-lg">
                      {/* Document with Checkmark Icon */}
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                        <path d="M10 9H8" />
                        <circle cx="18" cy="18" r="5" fill="#0b1b3d" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M16.5 18l1 1 2-2" stroke="white" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                  {/* Empty text area as per design, maintains alignment */}
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* Specialization and Expertise */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
            <div className="flex flex-col items-center mb-16">
              <div className="w-12 h-12 rounded-full border-2 border-blue-100 flex items-center justify-center bg-transparent text-[#0b1b3d] mb-4">
                <User size={24} strokeWidth={1.5} />
              </div>
              <h2 className="text-[20px] md:text-[24px] font-serif font-bold text-[#0b1b3d] uppercase tracking-wide text-center">
                SPECIALIZATION AND EXPERTISE
              </h2>
              <div className="w-16 h-1 bg-blue-600 mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 relative">
                  <Image src="/image copy 8.png" alt="Spine Surgery" fill className="object-cover" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0b1b3d] mb-3">Orthopedic Spine Surgery</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-xs">
                  Expertise in treating complex spine disorders with advanced surgical techniques, ensuring stability and pain relief.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 relative">
                  <Image src="/image.png" alt="Robotic Surgery" fill className="object-cover" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0b1b3d] mb-3">Robotic Surgery</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-xs">
                  Pioneer in robotic-assisted surgeries for precision, minimal invasiveness, and faster recovery.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden mb-6 relative">
                  <Image src="/image copy.png" alt="Joint Replacement" fill className="object-cover" />
                </div>
                <h3 className="text-[17px] font-bold text-[#0b1b3d] mb-3">
                  Joint Replacement<br />(Knee, Shoulder, and Back)
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed max-w-xs">
                  Specialized in joint replacement procedures improving mobility and enhancing quality of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-white py-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#1e3a8a]/30 flex items-center justify-center text-[#1e3a8a]">
                <ShieldCheck size={20} strokeWidth={1.5} />
              </div>
              <h2 className="text-[22px] md:text-[26px] font-serif font-bold text-[#0b1b3d] uppercase tracking-widest">
                CERTIFICATIONS
              </h2>
            </div>
            <div className="w-16 h-[3px] bg-[#1e3a8a] mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">

              {/* Cert Card 1 */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[110px] h-[110px]">
                  <Image src="/award_wheat_wreath_in_navy_gradient.svg" alt="Certification Wreath" fill className="object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BadgeCheck className="text-[#1e3a8a] w-8 h-8 opacity-90 mb-3" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#0b1b3d] leading-snug mb-2">
                    Certified in Robotic<br />Surgery Techniques
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Recognized expertise in robotic-assisted orthopedic surgical procedures.
                  </p>
                </div>
              </div>

              {/* Cert Card 2 */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[110px] h-[110px]">
                  <Image src="/award_wheat_wreath_in_navy_gradient.svg" alt="Certification Wreath" fill className="object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileBadge className="text-[#1e3a8a] w-8 h-8 opacity-90 mb-3" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#0b1b3d] leading-snug mb-2">
                    Advanced Training in<br />Joint Replacement Procedures
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Specialized training in advanced joint replacement techniques for better outcomes.
                  </p>
                </div>
              </div>

              {/* Cert Card 3 */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[110px] h-[110px]">
                  <Image src="/award_wheat_wreath_in_navy_gradient.svg" alt="Certification Wreath" fill className="object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GraduationCap className="text-[#1e3a8a] w-8 h-8 opacity-90 mb-3" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#0b1b3d] leading-snug mb-2">
                    Fellowship in Spine Surgery<br />from a Recognized Institution
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Advanced fellowship ensuring expertise in complex spine surgical procedures.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Awards & Recognitions */}
        <section className="bg-[#f8fafc] py-20 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#1e3a8a]/30 flex items-center justify-center text-[#1e3a8a]">
                <Trophy size={20} strokeWidth={1.5} />
              </div>
              <h2 className="text-[22px] md:text-[26px] font-serif font-bold text-[#0b1b3d] uppercase tracking-widest">
                AWARDS & RECOGNITIONS
              </h2>
            </div>
            <div className="w-16 h-[3px] bg-[#1e3a8a] mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">

              {/* Award 1 - Gold Star */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[110px] h-[110px]">
                  <Image src="/award_wheat_wreath_in_gold_gradient.svg" alt="Award Wreath" fill className="object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy className="text-[#b45309] w-8 h-8 opacity-90 mb-3" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#92400e] leading-snug mb-2">
                    Excellence in<br />Orthopedic Surgery Award
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Honored for exceptional contributions to the field of orthopedic surgery.
                  </p>
                </div>
              </div>

              {/* Award 2 - Spine */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[110px] h-[110px]">
                  <Image src="/award_wheat_wreath_in_gold_gradient.svg" alt="Award Wreath" fill className="object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Medal className="text-[#b45309] w-8 h-8 opacity-90 mb-3" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#92400e] leading-snug mb-2">
                    Outstanding Contributions<br />to Spine Surgery
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Recognized for pioneering advancements and exceptional patient outcomes.
                  </p>
                </div>
              </div>

              {/* Award 3 - Hands */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[110px] h-[110px]">
                  <Image src="/award_wheat_wreath_in_gold_gradient.svg" alt="Award Wreath" fill className="object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="text-[#b45309] w-8 h-8 opacity-90 mb-3" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#92400e] leading-snug mb-2">
                    Patient-Centric Approach<br />and Compassionate Care
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Honored for dedication to patient well-being and compassionate treatment.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-[#0b1b3d] py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 px-4 text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center text-[#a5b4fc] flex-shrink-0">
                <CalendarDays size={36} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
                <p className="text-[13px] font-bold text-white/90 mb-1">Years of Experience</p>
                <p className="text-[11px] text-white/60 leading-tight">Delivering excellence in orthopedic care</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 px-4 text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center text-[#a5b4fc] flex-shrink-0">
                <User size={36} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">1000+</h4>
                <p className="text-[13px] font-bold text-white/90 mb-1">Successful Surgeries</p>
                <p className="text-[11px] text-white/60 leading-tight">Robotic, spine and joint replacement surgeries</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 px-4 text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center text-[#a5b4fc] flex-shrink-0">
                <Users size={36} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">5000+</h4>
                <p className="text-[13px] font-bold text-white/90 mb-1">Patients Treated</p>
                <p className="text-[11px] text-white/60 leading-tight">Restoring mobility and improving quality of life</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 px-4 text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center text-[#a5b4fc] flex-shrink-0">
                <Award size={36} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white mb-1">&nbsp;</h4>
                <p className="text-[14px] font-bold text-white/90 mb-1 mt-[-20px] md:mt-0">Excellence<br />in Care</p>
                <p className="text-[11px] text-white/60 leading-tight mt-1">Committed to innovation, precision and compassion</p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
