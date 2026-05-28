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
  Activity
} from "lucide-react";

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#f8fafc]">
        
        {/* Expertise Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] pt-24 overflow-hidden">
          <Image
            src="/image.png"
            alt="Dr Ashish Singhal"
            fill
            className="object-cover object-top"
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
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </div>
                <div className="absolute top-1/2 left-[58%] -translate-y-1/2 -translate-x-1/2 bg-white px-1">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </div>
                <div className="absolute top-1/2 left-[91%] -translate-y-1/2 -translate-x-1/2 bg-white px-1">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </div>
                {/* Arrow at the very end */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
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
                    Bachelor of Medicine,<br/>Bachelor of Surgery<br/>(MBBS)
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
                    Master of Surgery<br/>(Orthopedics)
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
                    Fellowship in<br/>Spine Surgery
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
                  Joint Replacement<br/>(Knee, Shoulder, and Back)
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
                {/* Blue laurel wreath SVG */}
                <div className="relative flex-shrink-0 w-[90px] h-[90px]">
                  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                    <g stroke="#1e3a8a" strokeWidth="2" opacity="0.7">
                      {/* Left laurel leaves */}
                      <path d="M30 60 Q20 50 25 38" /><path d="M30 60 Q15 55 18 42" />
                      <path d="M30 60 Q22 70 28 82" /><path d="M30 60 Q16 68 20 80" />
                      <path d="M30 60 Q18 60 20 60" />
                      {/* Right laurel leaves */}
                      <path d="M90 60 Q100 50 95 38" /><path d="M90 60 Q105 55 102 42" />
                      <path d="M90 60 Q98 70 92 82" /><path d="M90 60 Q104 68 100 80" />
                      <path d="M90 60 Q102 60 100 60" />
                      {/* Bottom tie */}
                      <path d="M55 90 Q60 95 65 90" strokeWidth="2.5" />
                    </g>
                    {/* Inner icon area */}
                    <circle cx="60" cy="58" r="24" stroke="#1e3a8a" strokeWidth="1" opacity="0.2" />
                    {/* Robot arm icon approximation */}
                    <g stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" transform="translate(47,44)">
                      <rect x="0" y="14" width="8" height="10" rx="1" />
                      <rect x="10" y="8" width="7" height="7" rx="1" />
                      <rect x="19" y="2" width="6" height="6" rx="1" />
                      <line x1="8" y1="19" x2="10" y2="11" />
                      <line x1="17" y1="11" x2="19" y2="5" />
                    </g>
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#0b1b3d] leading-snug mb-2">
                    Certified in Robotic<br/>Surgery Techniques
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Recognized expertise in robotic-assisted orthopedic surgical procedures.
                  </p>
                </div>
              </div>

              {/* Cert Card 2 */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[90px] h-[90px]">
                  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                    <g stroke="#1e3a8a" strokeWidth="2" opacity="0.7">
                      <path d="M30 60 Q20 50 25 38" /><path d="M30 60 Q15 55 18 42" />
                      <path d="M30 60 Q22 70 28 82" /><path d="M30 60 Q16 68 20 80" />
                      <path d="M90 60 Q100 50 95 38" /><path d="M90 60 Q105 55 102 42" />
                      <path d="M90 60 Q98 70 92 82" /><path d="M90 60 Q104 68 100 80" />
                      <path d="M55 90 Q60 95 65 90" strokeWidth="2.5" />
                    </g>
                    <circle cx="60" cy="58" r="24" stroke="#1e3a8a" strokeWidth="1" opacity="0.2" />
                    {/* Knee joint icon */}
                    <g stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" transform="translate(46,38)">
                      <ellipse cx="14" cy="9" rx="7" ry="9" />
                      <ellipse cx="14" cy="32" rx="7" ry="9" />
                      <path d="M8 18 Q6 22 8 26" /><path d="M20 18 Q22 22 20 26" />
                      <ellipse cx="14" cy="22" rx="6" ry="4" />
                    </g>
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#0b1b3d] leading-snug mb-2">
                    Advanced Training in<br/>Joint Replacement Procedures
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Specialized training in advanced joint replacement techniques for better outcomes.
                  </p>
                </div>
              </div>

              {/* Cert Card 3 */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[90px] h-[90px]">
                  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                    <g stroke="#1e3a8a" strokeWidth="2" opacity="0.7">
                      <path d="M30 60 Q20 50 25 38" /><path d="M30 60 Q15 55 18 42" />
                      <path d="M30 60 Q22 70 28 82" /><path d="M30 60 Q16 68 20 80" />
                      <path d="M90 60 Q100 50 95 38" /><path d="M90 60 Q105 55 102 42" />
                      <path d="M90 60 Q98 70 92 82" /><path d="M90 60 Q104 68 100 80" />
                      <path d="M55 90 Q60 95 65 90" strokeWidth="2.5" />
                    </g>
                    <circle cx="60" cy="58" r="24" stroke="#1e3a8a" strokeWidth="1" opacity="0.2" />
                    {/* Spine icon */}
                    <g stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round" transform="translate(52,36)">
                      <rect x="4" y="0" width="8" height="5" rx="1" />
                      <rect x="4" y="8" width="8" height="5" rx="1" />
                      <rect x="4" y="16" width="8" height="5" rx="1" />
                      <rect x="4" y="24" width="8" height="5" rx="1" />
                      <line x1="8" y1="5" x2="8" y2="8" />
                      <line x1="8" y1="13" x2="8" y2="16" />
                      <line x1="8" y1="21" x2="8" y2="24" />
                    </g>
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#0b1b3d] leading-snug mb-2">
                    Fellowship in Spine Surgery<br/>from a Recognized Institution
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
                <div className="relative flex-shrink-0 w-[90px] h-[90px]">
                  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                    <g stroke="#b45309" strokeWidth="2" opacity="0.8">
                      <path d="M30 60 Q20 50 25 38" /><path d="M30 60 Q15 55 18 42" />
                      <path d="M30 60 Q22 70 28 82" /><path d="M30 60 Q16 68 20 80" />
                      <path d="M90 60 Q100 50 95 38" /><path d="M90 60 Q105 55 102 42" />
                      <path d="M90 60 Q98 70 92 82" /><path d="M90 60 Q104 68 100 80" />
                      <path d="M55 90 Q60 96 65 90" strokeWidth="2.5" />
                    </g>
                    <circle cx="60" cy="58" r="22" stroke="#b45309" strokeWidth="1" opacity="0.2" />
                    {/* Star */}
                    <polygon points="60,40 63.5,52 76,52 66,60 69.5,72 60,64 50.5,72 54,60 44,52 56.5,52" fill="#b45309" opacity="0.9" />
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#92400e] leading-snug mb-2">
                    Excellence in<br/>Orthopedic Surgery Award
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Honored for exceptional contributions to the field of orthopedic surgery.
                  </p>
                </div>
              </div>

              {/* Award 2 - Spine */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[90px] h-[90px]">
                  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                    <g stroke="#b45309" strokeWidth="2" opacity="0.8">
                      <path d="M30 60 Q20 50 25 38" /><path d="M30 60 Q15 55 18 42" />
                      <path d="M30 60 Q22 70 28 82" /><path d="M30 60 Q16 68 20 80" />
                      <path d="M90 60 Q100 50 95 38" /><path d="M90 60 Q105 55 102 42" />
                      <path d="M90 60 Q98 70 92 82" /><path d="M90 60 Q104 68 100 80" />
                      <path d="M55 90 Q60 96 65 90" strokeWidth="2.5" />
                    </g>
                    <circle cx="60" cy="58" r="22" stroke="#b45309" strokeWidth="1" opacity="0.2" />
                    <g stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" transform="translate(52,36)">
                      <rect x="4" y="0" width="8" height="5" rx="1" fill="#b45309" fillOpacity="0.15" />
                      <rect x="4" y="8" width="8" height="5" rx="1" fill="#b45309" fillOpacity="0.15" />
                      <rect x="4" y="16" width="8" height="5" rx="1" fill="#b45309" fillOpacity="0.15" />
                      <rect x="4" y="24" width="8" height="5" rx="1" fill="#b45309" fillOpacity="0.15" />
                      <line x1="8" y1="5" x2="8" y2="8" /><line x1="8" y1="13" x2="8" y2="16" /><line x1="8" y1="21" x2="8" y2="24" />
                    </g>
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#92400e] leading-snug mb-2">
                    Outstanding Contributions<br/>to Spine Surgery
                  </h3>
                  <p className="text-[12px] text-gray-500 leading-relaxed">
                    Recognized for pioneering advancements and exceptional patient outcomes.
                  </p>
                </div>
              </div>

              {/* Award 3 - Hands */}
              <div className="flex items-start gap-5">
                <div className="relative flex-shrink-0 w-[90px] h-[90px]">
                  <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                    <g stroke="#b45309" strokeWidth="2" opacity="0.8">
                      <path d="M30 60 Q20 50 25 38" /><path d="M30 60 Q15 55 18 42" />
                      <path d="M30 60 Q22 70 28 82" /><path d="M30 60 Q16 68 20 80" />
                      <path d="M90 60 Q100 50 95 38" /><path d="M90 60 Q105 55 102 42" />
                      <path d="M90 60 Q98 70 92 82" /><path d="M90 60 Q104 68 100 80" />
                      <path d="M55 90 Q60 96 65 90" strokeWidth="2.5" />
                    </g>
                    <circle cx="60" cy="58" r="22" stroke="#b45309" strokeWidth="1" opacity="0.2" />
                    {/* Heart + hands */}
                    <g stroke="#b45309" strokeWidth="1.8" strokeLinecap="round" transform="translate(44,40)">
                      <path d="M16 8 Q16 4 12 4 Q8 4 8 8 Q8 12 16 18 Q24 12 24 8 Q24 4 20 4 Q16 4 16 8Z" fill="#b45309" fillOpacity="0.2" />
                      <path d="M4 22 Q8 20 16 22 Q24 20 28 22" />
                      <path d="M4 22 Q2 26 4 28 Q8 30 16 28 Q24 30 28 28 Q30 26 28 22" />
                    </g>
                  </svg>
                </div>
                <div className="pt-2">
                  <h3 className="text-[15px] font-bold text-[#92400e] leading-snug mb-2">
                    Patient-Centric Approach<br/>and Compassionate Care
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
                <p className="text-[14px] font-bold text-white/90 mb-1 mt-[-20px] md:mt-0">Excellence<br/>in Care</p>
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
