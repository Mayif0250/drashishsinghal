"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, CheckCircle2, User, PhoneCall, Clock, Mail, MessageSquare } from "lucide-react";

export default function CTA() {
  const [mounted, setMounted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
    }
  };

  if (!mounted) {
    return (
      <section id="booking" className="relative py-24 bg-canvas-warmth border-t border-line-gray overflow-hidden">
        <div className="max-w-[94%] mx-auto px-4 md:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-text animate-pulse">Loading Scheduling Intake...</span>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="relative py-24 bg-canvas-warmth border-t border-line-gray overflow-hidden">
      {/* Background visuals */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-deep-graphite/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[94%] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Two Separate Horizontal Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* BOX 1: Booking Form & Information */}
          <div className="bg-surface-white border border-line-gray p-8 md:p-12 rounded-[25px] shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-caption block text-headline-dark/70 font-semibold mb-2">
                Consultation Request
              </span>
              <h2 className="text-section font-bold text-headline-dark mt-4 tracking-tight">
                Schedule Your Orthopedic Consultation
              </h2>
              <p className="text-body mt-4 leading-relaxed text-body-gray">
                Fill out the clinic scheduling intake. Our executive clinic coordinators will review your joint indicators and verify an appointment slot with Dr. Ashish Singhal.
              </p>
            </div>
            
            {/* Form */}
            <div className="mt-8 w-full bg-canvas-warmth/40 p-6 md:p-8 rounded-[16px] border border-line-gray">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-headline-dark">
                        First Name
                      </label>
                      <div className="relative flex items-center">
                        <User size={16} className="absolute left-[18px] top-1/2 -translate-y-1/2 text-deep-graphite/70" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full pl-[52px] pr-4 py-3 bg-surface-white border border-line-gray rounded-[12px] text-sm text-headline-dark outline-none focus:border-deep-graphite transition-colors shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-headline-dark">
                        Last Name
                      </label>
                      <div className="relative flex items-center">
                        <User size={16} className="absolute left-[18px] top-1/2 -translate-y-1/2 text-deep-graphite/70" />
                        <input
                          type="text"
                          placeholder="Kumar"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full pl-[52px] pr-4 py-3 bg-surface-white border border-line-gray rounded-[12px] text-sm text-headline-dark outline-none focus:border-deep-graphite transition-colors shadow-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-headline-dark">
                      Email *
                    </label>
                    <div className="relative flex items-center">
                      <Mail size={16} className="absolute left-[18px] top-1/2 -translate-y-1/2 text-deep-graphite/70" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-[52px] pr-4 py-3 bg-surface-white border border-line-gray rounded-[12px] text-sm text-headline-dark outline-none focus:border-deep-graphite transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-headline-dark">
                      Phone
                    </label>
                    <div className="relative flex items-center">
                      <Phone size={16} className="absolute left-[18px] top-1/2 -translate-y-1/2 text-deep-graphite/70" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-[52px] pr-4 py-3 bg-surface-white border border-line-gray rounded-[12px] text-sm text-headline-dark outline-none focus:border-deep-graphite transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-headline-dark">
                      Message *
                    </label>
                    <div className="relative flex items-start">
                      <MessageSquare size={16} className="absolute left-[18px] top-[14px] text-deep-graphite/70" />
                      <textarea
                        required
                        placeholder="How can we help you?"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full pl-[52px] pr-4 py-3 bg-surface-white border border-line-gray rounded-[12px] text-sm text-headline-dark outline-none focus:border-deep-graphite transition-colors shadow-sm resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-3.5 mt-2 rounded-[12px] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Send Request</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-surface-white border border-line-gray rounded-[16px] text-center shadow-sm"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-deep-graphite/5 border border-deep-graphite flex items-center justify-center text-deep-graphite mx-auto mb-4">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-subheading font-bold text-headline-dark">
                    Booking Requested
                  </h3>
                  <p className="text-xs text-body-gray mt-3 leading-relaxed">
                    Thank you, <span className="text-headline-dark font-bold">{firstName}</span>. Your request is noted. A representative will get back to you shortly at <span className="text-headline-dark font-bold">{email}</span>.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* BOX 2: Headquarters Map & Contact Info */}
          <div className="bg-surface-white border border-line-gray p-8 md:p-12 rounded-[25px] shadow-sm flex flex-col h-full">
            <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest block mb-4">
              Headquarters Location
            </span>
            
            {/* Interactive Map */}
            <div className="w-full flex-grow min-h-[350px] rounded-[16px] overflow-hidden border border-line-gray bg-line-gray/10 relative">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Paras%20Hospital%20%7C%20Best%20Hospital%20in%20Udaipur,%20Plot%20No%201,%20JK%20Lane,%20Shobhagpura,%20Udaipur,%20Rajasthan%20313001&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-8">
              <p className="text-sm font-semibold text-headline-dark flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-deep-graphite block mt-1.5 flex-shrink-0"></span>
                Paras Hospital | Best Hospital in Udaipur, Plot No 1, JK Lane, Shobhagpura, Udaipur, Rajasthan 313001
              </p>
              
              {/* Direct Helpline numbers block */}
              <div className="mt-6 pt-6 border-t border-line-gray space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-deep-graphite/5 flex items-center justify-center text-deep-graphite shadow-sm">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest block">
                      Direct Call Booking
                    </span>
                    <a href="tel:+919414393320" className="text-sm font-bold text-headline-dark hover:text-deep-graphite transition-colors">
                      +91 94143 93320
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[12px] bg-deep-graphite/5 flex items-center justify-center text-deep-graphite shadow-sm">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-muted-text uppercase tracking-widest block">
                      Support Hours
                    </span>
                    <span className="text-xs font-semibold text-headline-dark">
                      09:00 AM - 08:00 PM (Mon - Sat)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
