import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, ExternalLink, Sparkles } from 'lucide-react';
import weddingConfig from '../config';

export default function EventsSection() {
  const { events } = weddingConfig;

  return (
    <section id="wedding-events-section" className="relative w-full py-14 px-4 bg-gradient-to-b from-[#fbf4f6] via-[#fdf8f9] to-[#f9f1f3] overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-[#c9a45c]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-[#7a1f3d]/8 rounded-full blur-3xl pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8c6928] font-semibold">
              Celebration Itinerary
            </span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-script text-4xl sm:text-5xl text-[#7a1f3d] leading-tight">
            Wedding Festivities
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#5c142c] max-w-xs mx-auto">
            Please join us for three unforgettable celebrations of love &amp; traditions
          </p>
        </motion.div>

        {/* Event Cards List */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[26px] p-5 glass-panel border border-[#c9a45c]/35 shadow-[0_12px_32px_-8px_rgba(122,31,61,0.1)] overflow-hidden space-y-4 hover:shadow-xl transition-shadow"
            >
              {/* Event Category Tag */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#7a1f3d]/10 border border-[#c9a45c]/30 text-[#7a1f3d] font-sans text-[9px] font-bold tracking-widest uppercase">
                  {event.tag}
                </span>
                <span className="font-sans text-[11px] font-semibold text-[#8c6928]">
                  0{index + 1}
                </span>
              </div>

              {/* Event Title in Script */}
              <div className="space-y-1">
                <h3 className="font-script text-3xl sm:text-4xl text-[#7a1f3d] leading-snug">
                  {event.title}
                </h3>

                {/* Date & Time line in GOLD */}
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-serif font-semibold text-[#c9a45c]">
                  <div className="flex items-center gap-1.5 text-[#ad863c]">
                    <Calendar className="w-3.5 h-3.5 text-[#c9a45c]" />
                    <span>{event.dateBadge}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#ad863c]">
                    <Clock className="w-3.5 h-3.5 text-[#c9a45c]" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>

              {/* Illustrated Couple Artwork Container */}
              <div className="relative w-full h-[175px] rounded-2xl overflow-hidden bg-[#240813] border border-[#c9a45c]/25 shadow-inner">
                <img
                  src={event.artwork}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Venue Name in Gold Caps & Address */}
              <div className="space-y-1.5 pt-1">
                <p className="font-sans text-[10px] tracking-widest text-[#8c6928] uppercase font-semibold">
                  VENUE
                </p>
                <h4 className="font-cinzel text-base font-bold text-[#7a1f3d] tracking-wide leading-snug">
                  {event.venueName}
                </h4>
                <div className="flex items-start gap-1.5 text-[#5c142c] text-xs font-serif">
                  <MapPin className="w-3.5 h-3.5 text-[#c9a45c] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {event.address}
                  </p>
                </div>
              </div>

              {/* Dress Code Pill */}
              {event.dressCode && (
                <div className="pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#fff8eb] border border-[#c9a45c]/30 text-[#886529] font-serif text-xs italic">
                    <span className="font-sans font-semibold text-[9px] uppercase tracking-wider not-italic text-[#7a1f3d]">
                      ATTIRE:
                    </span>
                    <span>{event.dressCode}</span>
                  </div>
                </div>
              )}

              {/* "View on Maps" Pill Button (Google Maps link) */}
              <div className="pt-2">
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#7a1f3d] via-[#94294d] to-[#7a1f3d] hover:brightness-110 active:scale-[0.98] transition-all text-[#fef5e7] text-xs font-sans font-medium tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(122,31,61,0.25)] border border-[#c9a45c]/50 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#fdf4d6]" />
                  <span>View on Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#fdf4d6]/80 ml-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
