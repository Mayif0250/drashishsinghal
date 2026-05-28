import Link from "next/link";
import { Stethoscope } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-graphite text-canvas-warmth py-16 relative overflow-hidden border-t border-line-gray/20">
      {/* Bottom ambient highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-canvas-warmth/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Dynamic Flowing Waves */}
      <style>{`
        @keyframes waveFlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="absolute bottom-0 left-0 w-full h-[80px] md:h-[120px] pointer-events-none opacity-40 z-0">
        <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-[200%] h-full" style={{ animation: 'waveFlow 8s linear infinite' }}>
          <path d="M 0,50 C 25,80 75,20 100,50 C 125,80 175,20 200,50 L 200,100 L 0,100 Z" fill="#1e3a8a" opacity="0.4" />
        </svg>
        <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-[200%] h-full" style={{ animation: 'waveFlow 12s linear infinite reverse' }}>
          <path d="M 0,60 C 25,20 75,100 100,60 C 125,20 175,100 200,60 L 200,100 L 0,100 Z" fill="#3b5998" opacity="0.3" />
        </svg>
        <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-[200%] h-full" style={{ animation: 'waveFlow 6s linear infinite' }}>
          <path d="M 0,70 C 30,100 70,40 100,70 C 130,100 170,40 200,70 L 200,100 L 0,100 Z" fill="#172554" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-[12px] bg-canvas-warmth flex items-center justify-center text-deep-graphite shadow-sm">
                <Stethoscope size={20} strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-canvas-warmth block leading-none">
                  Dr. Ashish Singhal
                </span>
                <span className="text-[10px] font-bold tracking-wider text-canvas-warmth/60 block mt-1.5 uppercase">
                  Orthopedic & Robotic Joint Surgery
                </span>
              </div>
            </Link>
            <p className="text-sm text-canvas-warmth/80 max-w-sm leading-relaxed mt-2">
              Dr. Ashish Singhal provides advanced orthopedic care using high-tech robotic joint surgeries and minimally invasive arthroscopy, supporting patients across Udaipur and Rajasthan.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-3 mt-2 relative z-20">
              <a href="https://www.instagram.com/ashishsinghal87/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-canvas-warmth/20 flex items-center justify-center text-canvas-warmth/70 hover:text-canvas-warmth hover:border-canvas-warmth hover:scale-105 transition-all" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Orthopedic-Works-of-Surgeon-Dr-Ashish-Singhal-Udaipur/61561419308008/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-canvas-warmth/20 flex items-center justify-center text-canvas-warmth/70 hover:text-canvas-warmth hover:border-canvas-warmth hover:scale-105 transition-all" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@SurgeonDrAshishSinghal" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-canvas-warmth/20 flex items-center justify-center text-canvas-warmth/70 hover:text-canvas-warmth hover:border-canvas-warmth hover:scale-105 transition-all" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current mt-0.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-canvas-warmth/60">
                Treatments
              </span>
              <a href="#services" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Knee Replacement
              </a>
              <a href="#services" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Hip Replacement
              </a>
              <a href="#services" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Sports Medicine
              </a>
              <a href="#services" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Arthroscopy
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-canvas-warmth/60">
                Clinics
              </span>
              <a href="#robotic" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Mahe Clinic
              </a>
              <a href="#robotic" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Paras Hospital
              </a>
              <a href="#booking" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Book Consultation
              </a>
              <a href="#calculator" className="text-xs font-bold uppercase tracking-wide text-canvas-warmth/80 hover:text-canvas-warmth transition-colors">
                Diagnostic Intake
              </a>
            </div>

            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1 relative z-20">
              <span className="text-xs font-bold uppercase tracking-wider text-canvas-warmth/60">
                Paras Hospital
              </span>
              <span className="text-[11px] font-semibold text-canvas-warmth/80 leading-normal">
                Plot No, JP46+M8V, 1, JK Lane, Shobhagpura, Udaipur, Rajasthan
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-canvas-warmth/60 mt-1">
                Mahe Clinic
              </span>
              <span className="text-[11px] font-semibold text-canvas-warmth/80 leading-normal">
                140-141, Priyadarshini Nagar, Bedla Road Udaipur, Rajasthan
              </span>
              
              <div className="flex flex-col gap-1.5 mt-2">
                <a href="mailto:drashishsinghal12@gmail.com" className="text-xs font-bold text-canvas-warmth uppercase tracking-wide hover:opacity-80 transition-opacity">
                  drashishsinghal12@gmail.com
                </a>
                <a href="tel:+919414393320" className="text-xs font-bold text-canvas-warmth uppercase tracking-wide hover:opacity-80 transition-opacity">
                  +91 94143 93320
                </a>
                <a href="tel:+918209169103" className="text-xs font-bold text-canvas-warmth uppercase tracking-wide hover:opacity-80 transition-opacity">
                  +91 82091 69103
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-4 pb-4 border-t border-canvas-warmth/10 text-xs text-canvas-warmth/60 leading-relaxed font-sans font-medium relative z-10">
          <div className="flex flex-col items-center justify-center text-center text-canvas-warmth/40 uppercase tracking-widest font-bold">
            <span>
              &copy; 2024-26 | Site content for informational purposes only and not to be substituted for any medical advise
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
