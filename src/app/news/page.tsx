import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";
import { Play, Calendar, Clock, ChevronLeft, ChevronRight, Mail, Quote, ArrowRight, LayoutGrid, Bone, Activity, Scissors, Microscope, Star, Eye } from "lucide-react";

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-[#fafbfc]">
        
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[550px] pt-24 overflow-hidden bg-[#0a1930]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/image copy 9.png"
              alt="Dr Ashish Singhal - Media and Insights"
              fill
              className="object-cover object-top opacity-80"
              priority
            />
            {/* Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b3d]/95 via-[#0b1b3d]/70 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[99%] mx-auto px-6 h-full flex flex-col justify-center items-start text-left pb-10">
            <span className="text-[#a5b4fc] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              MEDIA & INSIGHTS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-serif text-white leading-[1.1] mb-6 max-w-2xl">
              Trusted Insights.<br />
              Expert Opinions.<br />
              Better Outcomes.
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
              Explore videos, interviews, patient stories, health awareness initiatives, and expert insights from Dr. Ashish Singhal.
            </p>
          </div>
        </section>

        {/* Content Wrapper */}
        <div className="relative z-20 pb-20">
          
          {/* Categories / Tabs */}
          <div className="max-w-[99%] mx-auto px-6 -mt-8 mb-12 relative z-30">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between p-2 overflow-x-auto hide-scrollbar">
              <button className="flex items-center gap-2 bg-[#f0f4ff] text-[#2563eb] px-6 py-3.5 rounded-xl text-sm font-bold shadow-sm shrink-0">
                <LayoutGrid size={16} /> All Posts
              </button>
              <div className="w-px h-8 bg-gray-100 hidden md:block"></div>
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#2563eb] px-6 py-3.5 rounded-xl text-sm font-bold transition-colors shrink-0">
                <Bone size={16} /> Joint Replacements
              </button>
              <div className="w-px h-8 bg-gray-100 hidden md:block"></div>
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#2563eb] px-6 py-3.5 rounded-xl text-sm font-bold transition-colors shrink-0">
                <Activity size={16} /> Sports Injury
              </button>
              <div className="w-px h-8 bg-gray-100 hidden md:block"></div>
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#2563eb] px-6 py-3.5 rounded-xl text-sm font-bold transition-colors shrink-0">
                <Scissors size={16} /> Arthroscopy
              </button>
              <div className="w-px h-8 bg-gray-100 hidden md:block"></div>
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#2563eb] px-6 py-3.5 rounded-xl text-sm font-bold transition-colors shrink-0">
                <Microscope size={16} /> Orthopedics
              </button>
            </div>
          </div>

          {/* Featured Story */}
          <section className="max-w-[99%] mx-auto px-6 mb-20">
            <div className="flex flex-col lg:flex-row bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              {/* Featured Video Placeholder */}
              <div className="relative w-full lg:w-1/2 min-h-[350px] lg:min-h-[440px] overflow-hidden group cursor-pointer bg-gray-900 shrink-0">
                <Image
                  src="/image copy 9.png"
                  alt="Featured Video"
                  fill
                  className="object-cover object-center opacity-90 group-hover:opacity-80 transition-opacity"
                />
                <div className="absolute top-6 left-6 bg-white px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
                  <Star size={14} className="text-[#2563eb]" fill="currentColor" />
                  <span className="text-[11px] font-bold text-gray-900 tracking-wider uppercase">FEATURED</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-[#0b1b3d] ml-1.5" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="bg-[#1a1a1a]/90 text-white px-2.5 py-1.5 rounded flex items-center gap-2 backdrop-blur-sm shadow-sm">
                    <div className="bg-red-600 rounded-[3px] px-[5px] py-[3px] flex items-center justify-center">
                      <Play size={10} fill="currentColor" />
                    </div>
                    <span className="text-[13px] font-bold tracking-tight">YouTube</span>
                  </div>
                  <div className="bg-[#1a1a1a]/90 px-3 py-2 rounded text-white text-[12px] font-medium flex items-center gap-2 backdrop-blur-sm">
                    <Clock size={14} /> 04:38
                  </div>
                </div>
              </div>

              {/* Featured Content */}
              <div className="flex flex-col justify-center py-10 px-8 lg:px-12 w-full lg:w-1/2">
                <span className="text-[#2563eb] font-bold tracking-widest text-[11px] uppercase mb-4">
                  FEATURED STORY
                </span>
                <h2 className="text-3xl md:text-[32px] lg:text-[36px] font-serif text-[#0b1b3d] leading-tight mb-5">
                  Getting Muscle Cramps This Summer? Here&apos;s What Your Body Is Telling You
                </h2>
                <p className="text-gray-500 text-[15px] leading-[1.7] mb-8">
                  In this video, Dr. Ashish Singhal explains the common causes of muscle cramps, prevention tips, hydration advice, and when you should seek medical help.
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative bg-gray-100 shrink-0 border border-gray-200">
                    <Image src="/dr_singhal_portrait.png" alt="Dr Ashish Singhal" fill className="object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0b1b3d]">Dr. Ashish Singhal</h4>
                    <p className="text-[11px] text-gray-500 font-medium">Orthopedic Consultant & Robotic Joint Replacement Surgeon</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-6 gap-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> 15 hours ago</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> 2 min read</span>
                    <span className="flex items-center gap-1.5"><Eye size={14} /> 125 views</span>
                  </div>
                  <button className="flex items-center gap-2 text-[#2563eb] text-[13px] font-bold border border-[#2563eb] px-5 py-2.5 rounded-lg hover:bg-[#2563eb] hover:text-white transition-colors">
                    Watch on YouTube <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Videos */}
          <section className="max-w-[99%] mx-auto px-6 mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif text-[#0b1b3d] flex items-center gap-3">
                Latest Videos
                <div className="w-1 h-6 bg-[#2563eb] rounded-full"></div>
              </h2>
              <Link href="#" className="flex items-center gap-1 text-[13px] font-bold text-[#2563eb] hover:underline bg-[#f0f4ff] px-4 py-2 rounded-full">
                View all videos <ArrowRight size={14} />
              </Link>
            </div>

            <div className="relative">
              {/* Carousel Navigation */}
              <button className="absolute -left-5 top-[35%] -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center z-10 text-gray-600 hover:text-[#2563eb] hidden xl:flex border border-gray-100">
                <ChevronLeft size={20} />
              </button>
              <button className="absolute -right-5 top-[35%] -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center z-10 text-gray-600 hover:text-[#2563eb] hidden xl:flex border border-gray-100">
                <ChevronRight size={20} />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Advancements in Robotic Knee Replacement Surgery", views: "1.2K views", time: "3 days ago", duration: "05:21" },
                  { title: "Knee Pain: Causes, Treatment & Prevention Tips", views: "2.5K views", time: "1 week ago", duration: "06:15" },
                  { title: "Future of Orthopedics: Robotics & Precision", views: "3.7K views", time: "2 weeks ago", duration: "04:12" },
                  { title: "Shoulder Pain Relief Without Surgery – Is It Possible?", views: "1.8K views", time: "3 weeks ago", duration: "04:45" },
                ].map((video, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 group cursor-pointer flex flex-col hover:shadow-md transition-shadow">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-gray-900">
                      <Image src="/image copy 9.png" alt={video.title} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-600 rounded-sm flex items-center justify-center">
                          <Play size={8} fill="white" className="text-white" />
                        </div>
                        <span className="text-[10px] font-bold text-gray-900">YouTube</span>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-white text-[10px] font-medium backdrop-blur">
                        {video.duration}
                      </div>
                    </div>
                    <div className="px-1 flex flex-col flex-1">
                      <h3 className="text-[14px] font-bold text-[#0b1b3d] leading-snug mb-2 group-hover:text-[#2563eb] transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium mt-auto">
                        <span>{video.views}</span>
                        <span>•</span>
                        <span>{video.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Insights & Articles */}
          <section className="max-w-[99%] mx-auto px-6 mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-serif text-[#0b1b3d] flex items-center gap-3">
                Insights & Articles
                <div className="w-1 h-6 bg-[#2563eb] rounded-full"></div>
              </h2>
              <Link href="#" className="flex items-center gap-1 text-[13px] font-bold text-[#2563eb] hover:underline bg-[#f0f4ff] px-4 py-2 rounded-full">
                View all articles <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { type: "EVENT", badgeColor: "bg-[#2563eb]", title: "Udaipur's Mega Health Festival Led by Dr. Ashish Singhal Celebrates 1600+ Robotic Knee Surgeries", desc: "A powerful journey from pain to mobility—bringing world-class orthopedic care closer to home.", date: "Mar 26, 2024", source: "Paras Health" },
                { type: "NEWS ARTICLE", badgeColor: "bg-[#3b82f6]", title: "Robotic Joint Replacement: A Game Changer in Orthopedics", desc: "Dr. Ashish Singhal shares how robotic technology is transforming joint replacement with greater precision and faster recovery.", date: "Feb 18, 2024", source: "Healthworld" },
                { type: "PATIENT STORY", badgeColor: "bg-teal-500", title: "Back on My Feet After 10 Years of Knee Pain – My Story", desc: "Patient shares his life-changing experience after robotic knee replacement by Dr. Ashish Singhal.", date: "Feb 10, 2024", source: "Patient Testimonial" },
                { type: "MEDIA COVERAGE", badgeColor: "bg-purple-500", title: "उदयपुर में रोबोटिक घुटना प्रत्यारोपण: डॉ. आशीष सिंघल के साथ पाएं दर्द मुक्त जीवन", desc: "Leading Hindi daily covers the impact of robotic joint replacement surgery in Southern Rajasthan.", date: "Feb 23, 2024", source: "Dainik Bhaskar" }
              ].map((article, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-3 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col cursor-pointer group">
                  <div className="relative h-44 w-full bg-gray-100 rounded-xl overflow-hidden mb-4">
                    <Image src="/image copy 9.png" alt={article.title} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                    <div className={`absolute top-3 left-3 ${article.badgeColor} text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded shadow-sm`}>
                      {article.type}
                    </div>
                  </div>
                  <div className="px-2 flex flex-col flex-1">
                    <h3 className="text-[14px] font-bold text-[#0b1b3d] leading-snug mb-3 group-hover:text-[#2563eb] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed mb-6 flex-1">
                      {article.desc}
                    </p>
                    <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 mt-auto pt-3">
                      <div className="flex items-center gap-1.5">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.source}</span>
                      </div>
                      <span className="text-[#2563eb] flex items-center gap-1 group-hover:underline">
                        Read More <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial Quote Banner */}
          <section className="max-w-[99%] mx-auto px-6 mb-24">
            <div className="relative rounded-2xl overflow-hidden bg-[#0a1930] text-white shadow-xl flex flex-col md:flex-row items-center justify-between min-h-[160px]">
              
              {/* Spine background overlay on the left */}
              <div className="absolute inset-y-0 left-0 w-1/3 opacity-20 pointer-events-none mix-blend-screen">
                <Image src="/image copy 9.png" alt="Spine Background" fill className="object-cover object-left" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a1930]" />
              </div>

              <div className="relative z-10 flex-1 p-8 md:p-12 pr-4">
                <Quote size={32} className="text-[#3b82f6] mb-4" />
                <h3 className="text-2xl md:text-[28px] font-serif leading-snug max-w-xl">
                  Technology should make surgery more precise and recovery more predictable.
                </h3>
              </div>
              
              <div className="relative z-10 flex items-center gap-4 shrink-0 bg-transparent p-8 md:p-10 border-l border-white/10 w-full md:w-auto justify-end">
                <div className="flex flex-col text-right">
                  <h4 className="font-bold text-lg">— Dr. Ashish Singhal</h4>
                  <p className="text-[11px] text-white/60 mb-2">Orthopedic Consultant &<br/>Robotic Joint Replacement Surgeon</p>
                  <p className="font-[cursive] text-2xl text-[#3b82f6] opacity-80 -mt-1 -mr-2">Ashish Singhal</p>
                </div>
                {/* Embedded transparent image cutout simulation */}
                <div className="w-20 h-20 rounded-full overflow-hidden relative bg-[#1e3a8a] border border-white/20 hidden md:block">
                  <Image src="/dr_singhal_portrait.png" alt="Dr Ashish Singhal" fill className="object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Subscribe */}
          <section className="max-w-7xl mx-auto px-6">
            <div className="border border-gray-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#f8fafc] shadow-sm">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#2563eb] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                  <Mail size={24} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b1b3d] mb-1">Stay Updated with Dr. Ashish Singhal</h3>
                  <p className="text-sm text-gray-500 font-medium">Subscribe to our newsletter for the latest videos, articles and health tips.</p>
                </div>
              </div>
              
              <div className="flex w-full md:w-auto gap-3">
                <div className="relative flex-1 md:w-72">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                  />
                </div>
                <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
