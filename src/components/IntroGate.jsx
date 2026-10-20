import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import weddingConfig from '../config';

export default function IntroGate({ onGateOpened }) {
  const [isOpen, setIsOpen] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      if (onGateOpened) onGateOpened();
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    // Swipe up or swipe down opens the gate
    if (Math.abs(touchStartY - touchEndY) > 30) {
      handleOpen();
    }
    setTouchStartY(null);
  };

  const handleScrollDown = () => {
    const inviteSection = document.getElementById('invitation-card-section');
    if (inviteSection) {
      inviteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full h-[100dvh] min-h-[640px] max-h-[920px] overflow-hidden select-none bg-[#10040a]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* SKIP BUTTON (Top Right) */}
      <div className="absolute top-4 right-4 z-40">
        <button
          onClick={handleOpen}
          aria-label="Skip intro animation"
          className="px-3.5 py-1 text-xs tracking-widest font-sans uppercase rounded-full bg-black/40 hover:bg-black/60 active:scale-95 text-[#fdf4d6] border border-[#c9a45c]/50 backdrop-blur-md transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
        >
          <span>{weddingConfig.intro.skipText}</span>
          <span className="text-[10px] text-[#c9a45c]">➔</span>
        </button>
      </div>

      {/* REVEALED NIGHT SCENE (Behind the gates) */}
      <div className="absolute inset-0 z-0">
        <img
          src="./assets/night-balcony.jpg"
          alt="Royal Udaipur Palace by night with full moon"
          className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
        />

        {/* Ambient Dark-Gold Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#200511] via-transparent to-[#100308]/70" />

        {/* Night Scene Text & Script Fade In */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-between py-12 px-6 text-center z-10 pointer-events-auto"
            >
              {/* Top Divine Emblem */}
              <div className="pt-6">
                <span className="inline-block text-[#c9a45c] text-3xl font-serif">ॐ</span>
                <p className="text-[#fcecd7] font-serif italic text-xs tracking-widest uppercase mt-1">
                  || Shri Ganeshaya Namah ||
                </p>
              </div>

              {/* Center Names in Grand Script */}
              <div className="my-auto space-y-3 px-2">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                  className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#dfc27a]"
                >
                  The Royal Wedding Of
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 1.0 }}
                  className="font-script text-5xl sm:text-6xl text-[#ffffff] drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)] leading-[1.2] py-2"
                  style={{ textShadow: '0 2px 20px rgba(201,164,92,0.45)' }}
                >
                  Aayush <span className="font-serif italic text-2xl sm:text-3xl text-[#f3dc9d] px-1 font-light">weds</span> Nikita
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="flex items-center justify-center gap-2 text-[#e2c98d]"
                >
                  <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c9a45c]"></span>
                  <span className="font-sans text-xs tracking-[0.25em] font-medium text-[#fff6e0]">
                    14 FEBRUARY 2027
                  </span>
                  <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c9a45c]"></span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.8 }}
                  className="font-serif italic text-[#faebdf] text-sm max-w-xs mx-auto drop-shadow-md pt-2"
                >
                  Udaipur &amp; Ahmedabad
                </motion.p>
              </div>

              {/* Bottom Enter Invitation Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.8 }}
                className="pb-4"
              >
                <button
                  onClick={handleScrollDown}
                  className="group px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7a1f3d] via-[#94294d] to-[#7a1f3d] border border-[#c9a45c] text-[#fdf4d6] text-xs font-sans tracking-[0.2em] uppercase shadow-[0_4px_25px_rgba(122,31,61,0.7)] flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Open Royal Invitation</span>
                  <ChevronDown className="w-4 h-4 text-[#ffd700] group-hover:translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3D PALACE GATES CONTAINER */}
      <div 
        className="absolute inset-0 z-20 perspective-1000 overflow-hidden pointer-events-none"
      >
        {/* Left Gate Door */}
        <motion.div
          onClick={handleOpen}
          initial={false}
          animate={{
            rotateY: isOpen ? -112 : 0,
            x: isOpen ? '-20%' : '0%'
          }}
          transition={{ duration: 1.6, ease: [0.33, 1, 0.68, 1] }}
          className="absolute top-0 left-0 w-1/2 h-full origin-left cursor-pointer pointer-events-auto border-r border-[#c9a45c]/50 shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Half Gate Image */}
          <div className="relative w-[200%] h-full left-0 overflow-hidden">
            <img
              src="./assets/palace-gates.jpg"
              alt="Golden palace gates left wing"
              className="w-full h-full object-cover object-left"
            />
            {/* Golden Jali Overlay Tint */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#310b18]/40 via-transparent to-[#100308]/60" />
            <div className="absolute inset-0 bg-[#c9a45c]/10 mix-blend-color-dodge" />
          </div>

          {/* Left Door Handle & Ornate Ring */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#886529] via-[#f7eac7] to-[#ad863c] p-0.5 shadow-xl flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-[#5a1529] bg-[#dfc27a]" />
            </div>
            <div className="w-1 h-8 bg-gradient-to-b from-[#dfc27a] to-transparent rounded-full mt-1" />
          </div>
        </motion.div>

        {/* Right Gate Door */}
        <motion.div
          onClick={handleOpen}
          initial={false}
          animate={{
            rotateY: isOpen ? 112 : 0,
            x: isOpen ? '20%' : '0%'
          }}
          transition={{ duration: 1.6, ease: [0.33, 1, 0.68, 1] }}
          className="absolute top-0 right-0 w-1/2 h-full origin-right cursor-pointer pointer-events-auto border-l border-[#c9a45c]/50 shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Half Gate Image */}
          <div className="relative w-[200%] h-full -left-[100%] overflow-hidden">
            <img
              src="./assets/palace-gates.jpg"
              alt="Golden palace gates right wing"
              className="w-full h-full object-cover object-right"
            />
            {/* Golden Jali Overlay Tint */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#310b18]/40 via-transparent to-[#100308]/60" />
            <div className="absolute inset-0 bg-[#c9a45c]/10 mix-blend-color-dodge" />
          </div>

          {/* Right Door Handle & Ornate Ring */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#886529] via-[#f7eac7] to-[#ad863c] p-0.5 shadow-xl flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-[#5a1529] bg-[#dfc27a]" />
            </div>
            <div className="w-1 h-8 bg-gradient-to-b from-[#dfc27a] to-transparent rounded-full mt-1" />
          </div>
        </motion.div>
      </div>

      {/* CREAM SATIN BOW & INTERACTIVE UNLOCK PROMPT (Mounted at gate center) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.25, y: -40 }}
            transition={{ duration: 0.6 }}
            onClick={handleOpen}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center cursor-pointer pointer-events-auto"
          >
            {/* The Satin Bow Visual Element */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="relative mb-6 filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]"
            >
              {/* Realistic SVG Satin Ribbon Bow */}
              <svg width="140" height="110" viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="satinCream" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ffffff" />
                    <stop offset="40%" stop-color="#fff5e4" />
                    <stop offset="80%" stop-color="#eddac0" />
                    <stop offset="100%" stop-color="#d6bf9f" />
                  </linearGradient>
                  <linearGradient id="goldRibbonBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fdf4d6" />
                    <stop offset="100%" stop-color="#c9a45c" />
                  </linearGradient>
                </defs>
                {/* Left bow loop */}
                <path d="M 70 42 C 40 10, 10 25, 20 55 C 28 72, 55 60, 70 45 Z" fill="url(#satinCream)" stroke="url(#goldRibbonBorder)" stroke-width="1.5" />
                <path d="M 66 40 C 45 22, 25 32, 32 50 Z" fill="#eddac0" opacity="0.6" />
                {/* Right bow loop */}
                <path d="M 70 42 C 100 10, 130 25, 120 55 C 112 72, 85 60, 70 45 Z" fill="url(#satinCream)" stroke="url(#goldRibbonBorder)" stroke-width="1.5" />
                <path d="M 74 40 C 95 22, 115 32, 108 50 Z" fill="#eddac0" opacity="0.6" />
                {/* Left flowing ribbon tail */}
                <path d="M 64 50 C 58 75, 45 95, 38 108 C 48 102, 58 92, 68 60 Z" fill="url(#satinCream)" stroke="url(#goldRibbonBorder)" stroke-width="1" />
                {/* Right flowing ribbon tail */}
                <path d="M 76 50 C 82 75, 95 95, 102 108 C 92 102, 82 92, 72 60 Z" fill="url(#satinCream)" stroke="url(#goldRibbonBorder)" stroke-width="1" />
                {/* Center Bow Knot */}
                <ellipse cx="70" cy="44" rx="13" ry="11" fill="url(#satinCream)" stroke="#c9a45c" stroke-width="2" />
                <circle cx="70" cy="44" r="5" fill="#c9a45c" />
              </svg>
            </motion.div>

            {/* Tap or Swipe Prompt Card */}
            <div className="px-5 py-3 rounded-2xl bg-[#2e0917]/85 border border-[#c9a45c]/60 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.7)] max-w-xs space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-[#ffd700]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#e5c986]">
                  The Royal Celebration
                </span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>

              <h2 className="font-script text-3xl text-[#ffffff] leading-tight">
                Aayush &amp; Nikita
              </h2>

              <div className="pt-1">
                <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#c9a45c] to-[#e2c98d] text-[#4a1024] text-[11px] font-sans font-semibold tracking-wider uppercase animate-pulse shadow-md">
                  Tap to Open Gates
                </span>
              </div>
              <p className="text-[10px] text-[#f7e6e5]/70 font-sans tracking-wide">
                or swipe anywhere on screen
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
