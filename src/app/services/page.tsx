import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bone,
  Activity,
  Footprints,
  Syringe,
  Hand,
  ScanSearch,
  ActivitySquare,
  CheckCircle2,
  Phone
} from "lucide-react";

type ServiceItem = {
  id: number;
  title: string;
  desc: string;
  listTitle: string;
  list: string[];
  image: string;
  imagePos: string;
  icon: React.ElementType;
  buttons?: boolean;
  singleButton?: boolean;
  twoColList?: boolean;
};

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Knee Replacement with\nWorld's Best Robotic\nTechnology",
    desc: "State-of-the-art knee replacement procedures using the best robotic technology available. Delivering personalized treatment plans that minimize recovery time and enhance outcomes.",
    listTitle: "Procedures performed at our Centre:",
    list: ["Total Knee Replacement", "Partial Knee Replacement", "Revision Knee Replacement"],
    image: "/image copy.png",
    imagePos: "left",
    icon: Bone,
    buttons: true
  },
  {
    id: 2,
    title: "Hip Replacement with\nWorld's Best Robotic\nTechnology",
    desc: "Hip surgery performed using cutting-edge robotic technology renowned worldwide. This innovative method enhances surgical accuracy and promotes quicker healing.",
    listTitle: "Procedures performed at our Centre:",
    list: ["Total Hip Replacement", "Partial Hip Replacement", "Revision Hip Replacement"],
    image: "/image copy 2.png",
    imagePos: "right",
    icon: Bone,
    buttons: true
  },
  {
    id: 3,
    title: "Knee Pain Treatment",
    desc: "Our knee pain treatment goal is to help patients get back on their feet and back to their active lives.",
    listTitle: "Knee conditions we treat:",
    list: ["Knee arthritis", "Patellar dislocations\nand disorders", "Cartilage injuries", "Fractures around the knee", "Meniscal tears", "Quadriceps tendon autografts", "ACL injuries", "Patellar dislocation & disorder"],
    image: "/image copy 3.png",
    imagePos: "left",
    icon: Bone,
    buttons: true,
    twoColList: true
  },
  {
    id: 4,
    title: "Foot & Ankle Treatment",
    desc: "Non-operative care and daycare procedures for minor conditions to the latest surgical procedures for more complex disorders and injuries.",
    listTitle: "",
    list: ["Sports injuries", "Foot and ankle arthritis", "Flat feet", "Hammertoes", "Plantar fasciitis", "Achilles tendon injuries", "Foot neuromas", "Pediatric deformities", "Foot and ankle fractures"],
    image: "/image copy 4.png",
    imagePos: "right",
    icon: Footprints,
    buttons: true,
    twoColList: true
  },
  {
    id: 5,
    title: "PRP Treatment for Tendinitis",
    desc: "While PRP injections are effective at accelerating the healing of any form of tendinitis, there are several common sports injuries where they can be most effective:",
    listTitle: "",
    list: ["Achilles Tendinitis", "Tennis Elbow", "Patellar Tendinitis", "Golfer's Elbow", "Rotator Cuff Injuries", "Jumper's Knee"],
    image: "/image copy 5.png",
    imagePos: "left",
    icon: Syringe,
    buttons: true,
    twoColList: true
  },
  {
    id: 6,
    title: "Hand, Wrist, Elbow &\nShoulder Treatment",
    desc: "Hand, Wrist, Elbow and Shoulder Conditions we treat include:",
    listTitle: "",
    list: ["Rotator cuff tear", "Medial epicondylitis\n(golfer's elbow)", "Labral tears", "Arthritis of the hand and\nupper extremities", "Shoulder dislocations\nand shoulder instability", "Tendon ruptures", "Lateral epicondylitis\n(tennis elbow)"],
    image: "/image copy 6.png",
    imagePos: "right",
    icon: Hand,
    buttons: true,
    twoColList: true
  },
  {
    id: 7,
    title: "Arthroscopic Surgery",
    desc: "Below are some common conditions and procedures where arthroscopy may be needed:",
    listTitle: "",
    list: ["Torn Meniscus Knee Injury", "Femoroacetabular (Hip)\nImpingement", "ACL Injury", "Torn Rotator Cuff", "Elbow Osteoarthritis", "Common Wrist Injuries"],
    image: "/image copy 7.png",
    imagePos: "left",
    icon: ScanSearch,
    buttons: true,
    twoColList: true
  },
  {
    id: 8,
    title: "Latest Spine Therapy",
    desc: "We explore nonsurgical orthopedic treatment options such as physical therapy, spinal injections, platelet-rich plasma (PRP) therapy, and complex spinal reconstruction.\n\nIn those cases where back or spine surgery is necessary, we offer the latest, state-of-the-art procedures, including minimally invasive spinal surgery techniques for better outcomes and faster recovery.",
    listTitle: "",
    list: [],
    image: "/image copy 8.png",
    imagePos: "right",
    icon: ActivitySquare,
    buttons: true
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#f8fafc]">

        {/* Services Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] pt-24 overflow-hidden">
          <Image
            src="/image.png"
            alt="Dr Ashish Singhal"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0b1b3d]/90 via-[#0b1b3d]/70 to-transparent" />

          <div className="relative z-10 max-w-[99%] mx-auto px-6 h-full flex flex-col justify-center items-end text-right">
            <span className="text-white text-xs font-bold tracking-widest uppercase mb-4 opacity-90 border-b border-white/20 pb-2 inline-block w-[120px]">
              SERVICES
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6 max-w-2xl">
              Dr Ashish Singhal<br />Areas of Practice
            </h1>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl">
              Advanced orthopedic and robotic-assisted treatments designed to restore mobility, reduce pain, and improve long-term quality of life.
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 md:py-28 px-4 md:px-6">
          <div className="max-w-[99%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-[32px] shadow-[0_4px_24px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col sm:flex-row h-auto min-h-[420px] group border border-gray-100">

                {/* Image Side */}
                <div className={`relative w-full sm:w-[280px] h-[240px] sm:h-auto flex-shrink-0 ${service.imagePos === 'right' ? 'sm:order-last' : ''
                  }`}>
                  <div className={`absolute inset-0 w-full h-full transform transition-transform duration-700 group-hover:scale-105 rounded-t-[32px] sm:rounded-t-none ${service.imagePos === 'left' ? 'sm:rounded-r-[120px]' : 'sm:rounded-l-[120px]'
                    } overflow-hidden`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 p-8 md:p-10 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="min-w-[48px] w-12 h-12 rounded-full border-2 border-blue-100 flex items-center justify-center bg-blue-50 text-blue-600 flex-shrink-0">
                      <service.icon size={22} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-[20px] md:text-[22px] font-bold text-[#0b1b3d] leading-tight mt-1 whitespace-pre-line break-words">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-[#575757] text-[13px] leading-relaxed mb-6 whitespace-pre-line">
                    {service.desc}
                  </p>

                  {service.listTitle && (
                    <h4 className="text-[12px] font-bold text-[#0b1b3d] mb-3">
                      {service.listTitle}
                    </h4>
                  )}

                  {service.list.length > 0 && (
                    <div className={`grid ${service.twoColList ? 'grid-cols-1 sm:grid-cols-2 gap-x-4' : 'grid-cols-1'} gap-y-2 mb-8 flex-1`}>
                      {service.list.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[12px] text-[#575757] leading-snug whitespace-pre-line">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {!service.list.length && <div className="flex-1" />}

                  {/* Buttons */}
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    {service.buttons ? (
                      <>
                        <Link href="#contact" className="px-5 py-2.5 rounded-md border border-gray-300 text-[12px] font-semibold text-[#0b1b3d] flex items-center gap-2 hover:bg-gray-50 transition-colors">
                          Learn More <ArrowRight size={14} />
                        </Link>
                        <Link href="#contact" className="px-5 py-2.5 rounded-md bg-[#0b1b3d] text-[12px] font-semibold text-white flex items-center gap-2 hover:bg-blue-600 transition-colors">
                          Book Now <ArrowRight size={14} />
                        </Link>
                      </>
                    ) : service.singleButton ? (
                      <Link href="#contact" className="px-5 py-2.5 rounded-md bg-[#0b1b3d] text-[12px] font-semibold text-white flex items-center gap-2 hover:bg-blue-600 transition-colors">
                        Book Now <ArrowRight size={14} />
                      </Link>
                    ) : null}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Feature Icons Footer Banner */}
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-[99%] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3">
                <Activity size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-[13px] font-bold text-[#0b1b3d] mb-1">Robotic Precision</h4>
              <p className="text-[11px] text-gray-500">Advanced robotic technology for superior accuracy</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3">
                <Bone size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-[13px] font-bold text-[#0b1b3d] mb-1">Personalized Care</h4>
              <p className="text-[11px] text-gray-500">Individualized treatment plans for every patient</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3">
                <ActivitySquare size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-[13px] font-bold text-[#0b1b3d] mb-1">Faster Recovery</h4>
              <p className="text-[11px] text-gray-500">Minimally invasive techniques for quicker healing</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-3">
                <CheckCircle2 size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-[13px] font-bold text-[#0b1b3d] mb-1">Proven Excellence</h4>
              <p className="text-[11px] text-gray-500">Trusted expertise with world-class outcomes</p>
            </div>
          </div>
        </section>

        {/* Custom CTA Section */}
        <section className="bg-[#f8fafc] py-16 px-6">
          <div className="max-w-5xl mx-auto bg-[#0b1b3d] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />

            <div className="flex items-center gap-6 relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                <Phone size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Ready to Take the First Step Towards Pain-Free Living?
                </h3>
                <p className="text-white/80 text-[13px] max-w-xl leading-relaxed">
                  Consult Dr. Ashish Singhal for advanced orthopedic care tailored to you.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
              <Link href="#contact" className="w-full md:w-auto px-8 py-4 bg-white text-[#0b1b3d] font-bold text-[14px] rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all hover:scale-105">
                Book an Appointment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
