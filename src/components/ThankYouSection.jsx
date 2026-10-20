import React from 'react';
import { motion } from 'framer-motion';
import weddingConfig from '../config';

export default function ThankYouSection() {
  const { thankYou, couple } = weddingConfig;

  return (
    <section className="relative w-full py-16 px-4 bg-gradient-to-b from-[#6b1834] via-[#551027] to-[#330816] text-center overflow-hidden">
      {/* Ambient background gold glow & subtle stars */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#c9a45c]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[420px] mx-auto space-y-8 relative z-10">
        
        {/* ENVELOPE CARD WITH STRIPED GOLD/RED AIRMAIL BORDER */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          style={{
            /* Striped Gold/Red Airmail Border Pattern */
            background: 'repeating-linear-gradient(135deg, #7a1f3d 0px, #7a1f3d 14px, #c9a45c 14px, #c9a45c 28px, #fffdfa 28px, #fffdfa 42px)'
          }}
        >
          {/* Inner Cream Envelope Letter Paper */}
          <div className="relative rounded-[22px] bg-[#fffcf5] p-6 sm:p-7 shadow-inner space-y-6 text-center overflow-hidden border border-[#e5c986]/40">
            
            {/* Top Stamps & Postmark Row */}
            <div className="flex items-start justify-between relative">
              {/* Left Monogram Crest */}
              <div className="w-10 h-10 rounded-full bg-[#fdf5f7] border border-[#c9a45c]/40 flex items-center justify-center shadow-xs">
                <span className="font-serif text-sm font-bold text-[#7a1f3d]">
                  {couple.monogram}
                </span>
              </div>

              {/* Right: Circular Vintage Postmark Stamp "14-02-27" */}
              <div className="relative rotate-6 select-none">
                {/* Postmark Stamp */}
                <div className="w-20 h-20 rounded-full border-2 border-[#7a1f3d]/70 p-1 flex flex-col items-center justify-center text-[#7a1f3d] shadow-xs">
                  <div className="w-full h-full rounded-full border border-dashed border-[#7a1f3d]/60 flex flex-col items-center justify-center p-0.5">
                    <span className="font-sans text-[7px] uppercase tracking-widest font-bold">
                      ROYAL DISPATCH
                    </span>
                    <span className="font-cinzel text-xs font-bold tracking-wider py-0.5 text-[#550e1b]">
                      {thankYou.postmarkDate}
                    </span>
                    <span className="font-sans text-[6px] uppercase tracking-wider font-semibold text-[#8c6928]">
                      UDAIPUR • INDIA
                    </span>
                  </div>
                </div>
                {/* Wavy cancellation postal lines */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-[3px] opacity-70">
                  <span className="w-6 h-[1.5px] bg-[#7a1f3d]" />
                  <span className="w-6 h-[1.5px] bg-[#7a1f3d]" />
                  <span className="w-6 h-[1.5px] bg-[#7a1f3d]" />
                </div>
              </div>
            </div>

            {/* "Thank You" Script Heading */}
            <div className="space-y-2 pt-2">
              <h2 className="font-script text-5xl sm:text-6xl text-[#7a1f3d] leading-none drop-shadow-xs">
                {thankYou.heading}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c9a45c]" />
                <span className="text-[#c9a45c] text-xs">✦</span>
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c9a45c]" />
              </div>
            </div>

            {/* Short Heartfelt Message */}
            <p className="font-serif text-[13px] sm:text-sm text-[#501728] leading-relaxed max-w-xs mx-auto">
              {thankYou.message}
            </p>

            {/* "With love, Aayush & Nikita" */}
            <div className="pt-2 space-y-1">
              <p className="font-serif italic text-xs text-[#8c6928]">
                {thankYou.signOff}
              </p>
              <p className="font-script text-3xl sm:text-4xl text-[#7a1f3d]">
                {thankYou.coupleNames}
              </p>
            </div>

            {/* RED WAX SEAL WITH INITIALS (Centered at bottom of card) */}
            <div className="relative pt-4 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="cursor-pointer transition-transform filter drop-shadow-[0_8px_16px_rgba(50,8,18,0.4)]"
              >
                <img
                  src="./assets/wax-seal.svg"
                  alt="Red wax seal with initials A & N"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Wedding Tagline & Footer */}
        <div className="pt-4 text-center space-y-2">
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#e5c986]">
            {couple.hashtag}
          </p>
          <p className="font-serif italic text-xs text-[#f7e1e8]/70">
            Designed with love for Aayush &amp; Nikita's Wedding • 14 Feb 2027
          </p>
        </div>

      </div>
    </section>
  );
}
