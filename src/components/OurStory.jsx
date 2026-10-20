import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import weddingConfig from '../config';

export default function OurStory() {
  const { story } = weddingConfig;
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Tilt angles for authentic polaroid stack look
  const tiltAngles = [-3, 2.5, -2, 3];

  const handleScroll = (e) => {
    const el = e.target;
    const cardWidth = 240;
    const index = Math.round(el.scrollLeft / cardWidth);
    if (index !== activeIndex && index >= 0 && index < story.chapters.length) {
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (idx) => {
    if (carouselRef.current) {
      const cardWidth = 260;
      carouselRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(idx);
    }
  };

  return (
    <section className="relative w-full py-14 px-4 bg-gradient-to-b from-[#f9f3f4] via-[#fcf7f8] to-[#fbf4f6] overflow-hidden">
      <div className="max-w-[430px] mx-auto space-y-7">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-1"
        >
          <div className="flex items-center justify-center gap-1.5 text-[#c9a45c]">
            <Heart className="w-3.5 h-3.5 fill-[#c9a45c]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8c6928] font-semibold">
              Chapters of Love
            </span>
            <Heart className="w-3.5 h-3.5 fill-[#c9a45c]" />
          </div>
          <h2 className="font-script text-4xl sm:text-5xl text-[#7a1f3d] leading-tight">
            {story.heading}
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#5c142c] max-w-xs mx-auto">
            {story.subheading}
          </p>
        </motion.div>

        {/* POLAROID HORIZONTAL CAROUSEL */}
        <div className="relative w-full">
          {/* Scrollable Container with side card peeking */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-8 py-5 snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {story.chapters.map((chap, idx) => {
              const tilt = tiltAngles[idx % tiltAngles.length];
              return (
                <div
                  key={chap.id}
                  className="shrink-0 w-[240px] snap-center select-none cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    transform: `rotate(${tilt}deg)`
                  }}
                  onClick={() => scrollToIndex(idx)}
                >
                  {/* Polaroid Outer Card */}
                  <div className="relative rounded-xl p-3 bg-[#fffefd] shadow-[0_12px_28px_-6px_rgba(122,31,61,0.18)] border border-[#c9a45c]/25 space-y-2.5">
                    {/* Washi Gold Tape Effect at top */}
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#e5c986]/70 border border-[#c9a45c]/40 rotate-1 shadow-sm backdrop-blur-sm rounded-xs z-10" />

                    {/* Photo Container */}
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#2d0a17] border border-[#c9a45c]/15">
                      <img
                        src={chap.photo}
                        alt={chap.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {/* Year Badge */}
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-[#ffd700] font-sans text-[10px] tracking-wider font-semibold border border-[#ffd700]/30">
                        {chap.year}
                      </div>
                    </div>

                    {/* Polaroid Bottom Caption in script / handwritten font */}
                    <div className="text-center pt-1 pb-1">
                      <p className="font-script text-xl text-[#7a1f3d] leading-none">
                        {chap.title}
                      </p>
                      <p className="font-sans text-[9px] uppercase tracking-wider text-[#8c6928] mt-1">
                        {chap.caption}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Dot Indicators */}
          <div className="flex items-center justify-center gap-1.5 pt-3">
            {story.chapters.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-6 bg-[#7a1f3d]' : 'w-1.5 bg-[#c9a45c]/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3–4 SHORT PARAGRAPHS OF TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-6 glass-panel border border-[#c9a45c]/30 shadow-lg space-y-4"
        >
          {story.chapters.map((ch, idx) => (
            <div 
              key={ch.id} 
              className={`space-y-1 ${idx !== 0 ? 'pt-3 border-t border-[#c9a45c]/20' : ''}`}
            >
              <div className="flex items-center gap-2">
                <span className="font-sans text-[10px] font-bold tracking-widest text-[#c9a45c]">
                  {ch.year}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#7a1f3d]" />
                <h3 className="font-serif font-bold text-sm text-[#7a1f3d]">
                  {ch.title}
                </h3>
              </div>
              <p className="font-serif text-[13px] leading-relaxed text-[#5c142c] pl-4">
                {ch.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
