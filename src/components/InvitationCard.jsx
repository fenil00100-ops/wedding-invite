import React from 'react';
import { motion } from 'framer-motion';
import weddingConfig from '../config';

export default function InvitationCard() {
  const { invitation, couple } = weddingConfig;

  return (
    <section 
      id="invitation-card-section" 
      className="relative w-full py-14 px-4 bg-gradient-to-b from-[#fbf5f4] via-[#fdf9f8] to-[#f7eef0] overflow-hidden"
    >
      {/* Subtle background ornamentation */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#c9a45c]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7a1f3d]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Frosted-Glass Invitation Card */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-[390px] rounded-[28px] p-7 text-center glass-panel shadow-[0_16px_40px_-10px_rgba(122,31,61,0.12)] border border-[#c9a45c]/35 overflow-hidden"
      >
        {/* Double Gold Inset Border with Corner Filigree */}
        <div className="absolute inset-3 rounded-[22px] border border-[#c9a45c]/30 pointer-events-none" />
        <div className="absolute inset-3.5 rounded-[20px] border border-[#c9a45c]/15 pointer-events-none" />

        {/* Top Corner Ornaments */}
        <svg className="absolute top-3 left-3 w-5 h-5 text-[#c9a45c]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M 2 12 Q 2 2 12 2" strokeWidth="1.5" />
          <circle cx="5" cy="5" r="1.5" fill="#c9a45c" />
        </svg>
        <svg className="absolute top-3 right-3 w-5 h-5 text-[#c9a45c]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M 22 12 Q 22 2 12 2" strokeWidth="1.5" />
          <circle cx="19" cy="5" r="1.5" fill="#c9a45c" />
        </svg>
        <svg className="absolute bottom-3 left-3 w-5 h-5 text-[#c9a45c]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M 2 12 Q 2 22 12 22" strokeWidth="1.5" />
          <circle cx="5" cy="19" r="1.5" fill="#c9a45c" />
        </svg>
        <svg className="absolute bottom-3 right-3 w-5 h-5 text-[#c9a45c]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M 22 12 Q 22 22 12 22" strokeWidth="1.5" />
          <circle cx="19" cy="19" r="1.5" fill="#c9a45c" />
        </svg>

        {/* 1. Divine Om Symbol with Aura */}
        <div className="relative inline-block mb-3">
          <div className="absolute inset-0 bg-[#c9a45c]/20 blur-md rounded-full" />
          <div className="relative w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-[#fbf2f5] to-[#fef6e7] border border-[#c9a45c]/40 flex items-center justify-center shadow-sm">
            <span className="font-serif text-2xl font-bold text-[#7a1f3d]">
              {invitation.omSymbol}
            </span>
          </div>
        </div>

        {/* 2. Sanskrit Ganesh Vandana Shloka */}
        <div className="mb-5 space-y-1">
          <p className="font-serif text-[#7a1f3d] text-[13px] leading-relaxed whitespace-pre-line tracking-wide font-medium">
            {invitation.sanskritShloka}
          </p>
          <p className="text-[10px] font-serif italic text-[#886529] max-w-[260px] mx-auto leading-tight pt-1">
            "{invitation.shlokaTranslation}"
          </p>
        </div>

        {/* Decorative Gold Divider */}
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-[#c9a45c]" />
          <span className="text-[#c9a45c] text-xs">✦</span>
          <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-[#c9a45c]" />
        </div>

        {/* 3. "We Cordially Invite You" Heading */}
        <h2 className="font-script text-4xl text-[#7a1f3d] mb-3 leading-tight">
          {invitation.heading}
        </h2>

        {/* 4. Invitation Paragraph */}
        <p className="font-serif text-[#551d2f] text-sm leading-relaxed mb-6 px-2">
          {invitation.paragraph}
        </p>

        {/* 5. Couple Names & Family Details */}
        <div className="space-y-4 py-2">
          {/* Groom Card Block */}
          <div className="space-y-1">
            <h3 className="font-script text-4xl sm:text-5xl text-[#7a1f3d] tracking-wide">
              {couple.groom.firstName}
            </h3>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8c6928] font-medium">
              {couple.groom.relation}
            </p>
            <p className="font-serif text-sm font-semibold text-[#4a1226]">
              {couple.groom.parents}
            </p>
          </div>

          {/* Calligraphic "With" */}
          <div className="flex items-center justify-center py-1">
            <div className="h-[1px] w-10 bg-[#c9a45c]/40" />
            <span className="font-script text-3xl text-[#c9a45c] px-3">
              With
            </span>
            <div className="h-[1px] w-10 bg-[#c9a45c]/40" />
          </div>

          {/* Bride Card Block */}
          <div className="space-y-1">
            <h3 className="font-script text-4xl sm:text-5xl text-[#7a1f3d] tracking-wide">
              {couple.bride.firstName}
            </h3>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8c6928] font-medium">
              {couple.bride.relation}
            </p>
            <p className="font-serif text-sm font-semibold text-[#4a1226]">
              {couple.bride.parents}
            </p>
          </div>
        </div>

        {/* Bottom Golden Monogram Seal */}
        <div className="mt-6 pt-4 border-t border-[#c9a45c]/25 flex items-center justify-center gap-2">
          <span className="font-serif italic text-xs text-[#8c6928] tracking-widest">
            {couple.hashtag}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
