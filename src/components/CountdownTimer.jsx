import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import weddingConfig from '../config';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(weddingConfig.countdown.targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section className="relative w-full py-14 px-4 bg-gradient-to-b from-[#f8f1f3] via-[#fbf6f7] to-[#f9f3f4] text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-[#c9a45c]/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[400px] mx-auto space-y-6"
      >
        {/* Heading */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-[#c9a45c]">
            <Clock className="w-3.5 h-3.5 text-[#c9a45c]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8c6928] font-semibold">
              The Auspicious Muhurat
            </span>
          </div>
          <h2 className="font-script text-4xl sm:text-5xl text-[#7a1f3d] leading-tight">
            {weddingConfig.countdown.heading}
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#5c142c] max-w-xs mx-auto">
            {weddingConfig.countdown.subheading}
          </p>
        </div>

        {/* Four Glass Boxes Grid */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3 px-1">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative rounded-2xl p-3 glass-panel-gold border border-[#c9a45c]/35 shadow-[0_6px_20px_rgba(122,31,61,0.06)] flex flex-col items-center justify-center overflow-hidden group hover:scale-105 transition-transform"
            >
              {/* Subtle gold top gleam */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#c9a45c]/50 to-transparent" />

              {/* Number display */}
              <span className={`font-cinzel text-2xl sm:text-3xl font-bold text-[#7a1f3d] tracking-tight ${unit.label === 'SECONDS' ? 'animate-pulse' : ''}`}>
                {String(unit.value).padStart(2, '0')}
              </span>

              {/* Unit Label */}
              <span className="font-sans text-[9px] uppercase tracking-wider font-semibold text-[#8c6928] mt-1">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Date Milestone Text */}
        <div className="pt-1 flex items-center justify-center gap-2 text-xs font-serif text-[#7a1f3d]">
          <span className="h-[1px] w-8 bg-[#c9a45c]/50" />
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8c6928]">
            Sunday, 14 February 2027 • 6:30 PM
          </span>
          <span className="h-[1px] w-8 bg-[#c9a45c]/50" />
        </div>
      </motion.div>
    </section>
  );
}
