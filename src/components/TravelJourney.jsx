import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Compass, Car, Navigation, Sparkles } from 'lucide-react';
import weddingConfig from '../config';

export default function TravelJourney() {
  const { travelJourney } = weddingConfig;
  const sectionRef = useRef(null);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center']
  });

  // Airplane moves from top to bottom of the travel line as you scroll
  const airplaneTop = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '92%']);
  const airplaneRotate = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [175, 180, 185]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-14 px-4 bg-gradient-to-b from-[#f9f1f3] via-[#fcf7f8] to-[#f9eff2] overflow-hidden"
    >
      <div className="max-w-[420px] mx-auto space-y-7">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-1"
        >
          <div className="flex items-center justify-center gap-1.5 text-[#c9a45c]">
            <Compass className="w-3.5 h-3.5" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8c6928] font-semibold">
              Travel &amp; Route
            </span>
            <Compass className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-script text-4xl sm:text-5xl text-[#7a1f3d] leading-tight">
            The Royal Journey
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#5c142c] max-w-xs mx-auto">
            From the heritage streets of Ahmedabad to the royal palaces of Lake Pichola
          </p>
        </motion.div>

        {/* Travel Timeline with Moving Airplane */}
        <div className="relative rounded-3xl p-6 glass-panel border border-[#c9a45c]/35 shadow-lg space-y-6">
          
          {/* 1. ORIGIN CITY CARD: AHMEDABAD */}
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/70 border border-[#c9a45c]/25 shadow-sm">
            <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden border border-[#c9a45c]/30 bg-[#2b0816] shadow-sm">
              <img
                src="./assets/city-ahmedabad.svg"
                alt="Ahmedabad city icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <span className="px-2 py-0.5 rounded-full bg-[#c9a45c]/15 text-[#886529] font-sans text-[8px] font-bold tracking-widest uppercase">
                ORIGIN • GUJARAT
              </span>
              <h3 className="font-cinzel text-base font-bold text-[#7a1f3d] tracking-wider">
                {travelJourney.originCity}
              </h3>
              <p className="font-serif text-xs text-[#5c142c]">
                {travelJourney.originSubtitle}
              </p>
            </div>
          </div>

          {/* 2. VERTICAL TRAVEL CONNECTOR WITH SCROLL-DRIVEN MAROON AIRPLANE */}
          <div className="relative py-3 px-8 flex justify-between items-center min-h-[160px]">
            {/* The vertical dashed line */}
            <div className="absolute left-[38px] top-0 bottom-0 w-[2px] border-l-2 border-dashed border-[#c9a45c]/60" />

            {/* The Animated Maroon Airplane that moves along the dashed line */}
            <motion.div
              style={{
                top: airplaneTop,
                rotate: airplaneRotate
              }}
              className="absolute left-[26px] z-20 w-6 h-6 rounded-full bg-[#7a1f3d] border-2 border-[#fdf4d6] shadow-[0_2px_8px_rgba(122,31,61,0.5)] flex items-center justify-center transition-all duration-75"
            >
              <Plane className="w-3.5 h-3.5 text-[#fdf4d6] fill-[#fdf4d6]" />
            </motion.div>

            {/* Route Stats & Scenic Corridor Info */}
            <div className="ml-10 space-y-2 py-1 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff6e6] border border-[#c9a45c]/40 text-[#8c6928] font-sans text-[10px] font-semibold tracking-wider">
                <Navigation className="w-3 h-3 text-[#7a1f3d]" />
                <span>{travelJourney.distance}</span>
              </div>
              <p className="font-serif text-xs text-[#5c142c] leading-relaxed">
                {travelJourney.description}
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-sans text-[#8c6928]">
                <Car className="w-3.5 h-3.5 text-[#7a1f3d]" />
                <span>NH 48 Scenic Expressway • Aravali Foothills</span>
              </div>
            </div>
          </div>

          {/* 3. DESTINATION CITY CARD: UDAIPUR */}
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/70 border border-[#c9a45c]/25 shadow-sm">
            <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden border border-[#c9a45c]/30 bg-[#2b0816] shadow-sm">
              <img
                src="./assets/city-udaipur.svg"
                alt="Udaipur city icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <span className="px-2 py-0.5 rounded-full bg-[#7a1f3d]/10 text-[#7a1f3d] font-sans text-[8px] font-bold tracking-widest uppercase">
                DESTINATION • RAJASTHAN
              </span>
              <h3 className="font-cinzel text-base font-bold text-[#7a1f3d] tracking-wider">
                {travelJourney.destinationCity}
              </h3>
              <p className="font-serif text-xs text-[#5c142c]">
                {travelJourney.destinationSubtitle}
              </p>
            </div>
          </div>

          {/* Bottom Guest Concierge Note */}
          <div className="pt-2 border-t border-[#c9a45c]/25 text-center">
            <p className="font-serif italic text-xs text-[#8c6928] leading-normal">
              ✦ {travelJourney.transportNote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
