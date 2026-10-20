import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Crown, Users } from 'lucide-react';
import weddingConfig from '../config';

export default function Blessings() {
  const { blessings } = weddingConfig;

  return (
    <section className="relative w-full py-14 px-4 bg-gradient-to-b from-[#f9eff2] via-[#fcf7f8] to-[#f8edf1] overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#c9a45c]/10 rounded-full blur-3xl pointer-events-none" />

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
            <Crown className="w-3.5 h-3.5 text-[#c9a45c]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8c6928] font-semibold">
              Family &amp; Elders
            </span>
            <Crown className="w-3.5 h-3.5 text-[#c9a45c]" />
          </div>
          <h2 className="font-script text-4xl sm:text-5xl text-[#7a1f3d] leading-tight">
            {blessings.heading}
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#5c142c] max-w-xs mx-auto">
            {blessings.subheading}
          </p>
        </motion.div>

        {/* Glass Card with Grouped Lists */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[28px] p-6 sm:p-7 glass-panel border border-[#c9a45c]/35 shadow-[0_12px_36px_-10px_rgba(122,31,61,0.12)] space-y-6"
        >
          {blessings.groups.map((group, idx) => (
            <div 
              key={group.category}
              className={`${idx !== 0 ? 'pt-5 border-t border-[#c9a45c]/25' : ''} space-y-2.5`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2">
                <span className="text-[#c9a45c] text-xs">✦</span>
                <h3 className="font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-[#7a1f3d]">
                  {group.category}
                </h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#c9a45c]/40 to-transparent" />
              </div>

              {/* Members List */}
              <ul className="space-y-1.5 pl-3">
                {group.members.map((member, mIdx) => (
                  <li 
                    key={mIdx} 
                    className="font-serif text-[13px] sm:text-sm text-[#4a1226] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a45c] shrink-0" />
                    <span className="font-medium tracking-wide">
                      {member}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Footer note */}
          <div className="pt-3 border-t border-[#c9a45c]/30 text-center">
            <p className="font-serif italic text-xs text-[#8c6928]">
              "May their love and guidance forever illuminate our path."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
