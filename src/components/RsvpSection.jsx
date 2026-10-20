import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, HeartHandshake, User, Plus, Minus, MessageSquare, Ticket, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';
import weddingConfig from '../config';

export default function RsvpSection() {
  const { rsvp } = weddingConfig;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attending, setAttending] = useState('yes'); // 'yes' | 'no'
  const [guestsCount, setGuestsCount] = useState(2);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [savedData, setSavedData] = useState(null);

  // Load any prior RSVP from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('wedding_rsvp_aayush_nikita');
      if (stored) {
        const parsed = JSON.parse(stored);
        setSavedData(parsed);
        setIsSubmitted(true);
      }
    } catch (e) {
      console.warn("Could not read from localStorage", e);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const submission = {
      name,
      phone,
      attending,
      guestsCount: attending === 'yes' ? guestsCount : 0,
      message,
      submittedAt: new Date().toISOString()
    };

    try {
      localStorage.setItem('wedding_rsvp_aayush_nikita', JSON.stringify(submission));
      setSavedData(submission);
      setIsSubmitted(true);

      // Trigger celebratory confetti if attending
      if (attending === 'yes') {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#c9a45c', '#7a1f3d', '#ffd700', '#f43f5e']
        });
      }
    } catch (err) {
      console.error("Error saving RSVP", err);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="rsvp-section" className="relative w-full py-14 px-4 bg-gradient-to-b from-[#f8edf1] via-[#fbf6f7] to-[#f6e5ec] overflow-hidden">
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
            <Ticket className="w-3.5 h-3.5" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8c6928] font-semibold">
              Attendance Confirmation
            </span>
            <Ticket className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-script text-4xl sm:text-5xl text-[#7a1f3d] leading-tight">
            {rsvp.heading}
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-[#5c142c] max-w-xs mx-auto">
            {rsvp.subheading}
          </p>
        </motion.div>

        {/* RSVP Card / Form */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[28px] p-6 glass-panel border border-[#c9a45c]/35 shadow-[0_16px_40px_-12px_rgba(122,31,61,0.14)] relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              /* RSVP FORM */
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* 1. Full Name Input */}
                <div className="space-y-1.5 text-left">
                  <label className="block font-sans text-[10px] uppercase tracking-wider font-semibold text-[#8c6928]">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c9a45c]" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priyesh &amp; Family"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/80 border border-[#c9a45c]/40 text-sm font-serif text-[#4a1226] placeholder-[#4a1226]/40 focus:outline-none focus:ring-2 focus:ring-[#7a1f3d]/40 transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* 2. Phone / WhatsApp (Optional) */}
                <div className="space-y-1.5 text-left">
                  <label className="block font-sans text-[10px] uppercase tracking-wider font-semibold text-[#8c6928]">
                    Contact Number / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#c9a45c]/40 text-sm font-serif text-[#4a1226] placeholder-[#4a1226]/40 focus:outline-none focus:ring-2 focus:ring-[#7a1f3d]/40 transition-all shadow-xs"
                  />
                </div>

                {/* 3. Attendance Toggle Chips: "Joyfully yes" / "Regretfully no" */}
                <div className="space-y-1.5 text-left">
                  <label className="block font-sans text-[10px] uppercase tracking-wider font-semibold text-[#8c6928]">
                    Will you attend? *
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Joyfully yes */}
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`py-3 px-3 rounded-2xl border text-xs font-serif font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        attending === 'yes'
                          ? 'bg-[#7a1f3d] text-[#fff6e0] border-[#c9a45c] shadow-md scale-[1.02]'
                          : 'bg-white/70 text-[#5c142c] border-[#c9a45c]/30 hover:bg-white'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
                      <span>Joyfully yes</span>
                    </button>

                    {/* Regretfully no */}
                    <button
                      type="button"
                      onClick={() => setAttending('no')}
                      className={`py-3 px-3 rounded-2xl border text-xs font-serif font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        attending === 'no'
                          ? 'bg-[#7a1f3d] text-[#fff6e0] border-[#c9a45c] shadow-md scale-[1.02]'
                          : 'bg-white/70 text-[#5c142c] border-[#c9a45c]/30 hover:bg-white'
                      }`}
                    >
                      <HeartHandshake className="w-3.5 h-3.5 text-[#dfc27a]" />
                      <span>Regretfully no</span>
                    </button>
                  </div>
                </div>

                {/* 4. Guest Count Stepper (– 1 +) */}
                {attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-1.5 text-left"
                  >
                    <label className="block font-sans text-[10px] uppercase tracking-wider font-semibold text-[#8c6928]">
                      Total Attending Guests
                    </label>
                    <div className="flex items-center justify-between p-2 rounded-2xl bg-white/80 border border-[#c9a45c]/40 shadow-xs">
                      <button
                        type="button"
                        onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                        className="w-10 h-10 rounded-xl bg-[#fbf2f5] hover:bg-[#ecc2cf] text-[#7a1f3d] flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
                        aria-label="Decrease guest count"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <div className="text-center">
                        <span className="font-cinzel text-xl font-bold text-[#7a1f3d]">
                          {guestsCount}
                        </span>
                        <span className="block text-[9px] uppercase tracking-wider font-sans text-[#8c6928]">
                          {guestsCount === 1 ? 'Guest' : 'Guests'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setGuestsCount(Math.min(10, guestsCount + 1))}
                        className="w-10 h-10 rounded-xl bg-[#fbf2f5] hover:bg-[#ecc2cf] text-[#7a1f3d] flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
                        aria-label="Increase guest count"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* 5. A Message for the Couple Textarea */}
                <div className="space-y-1.5 text-left">
                  <label className="block font-sans text-[10px] uppercase tracking-wider font-semibold text-[#8c6928]">
                    A Message for the Couple
                  </label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your loving wishes, advice, or song requests..."
                      className="w-full p-3 rounded-xl bg-white/80 border border-[#c9a45c]/40 text-sm font-serif text-[#4a1226] placeholder-[#4a1226]/40 focus:outline-none focus:ring-2 focus:ring-[#7a1f3d]/40 transition-all shadow-xs resize-none"
                    />
                  </div>
                </div>

                {/* 6. BOARDING-TICKET STYLE "SEND RSVP" BUTTON WITH BARCODE ON THE LEFT */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full relative rounded-2xl bg-gradient-to-r from-[#5a1329] via-[#7a1f3d] to-[#4e1226] text-[#fef5e7] p-0.5 shadow-[0_8px_25px_rgba(122,31,61,0.35)] border border-[#c9a45c] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer group overflow-hidden"
                  >
                    <div className="flex items-center justify-between w-full h-14 bg-gradient-to-r from-[#440d1f] to-[#7a1f3d] rounded-[14px]">
                      {/* Left: Barcode ticket stub with vertical perforation */}
                      <div className="flex items-center gap-2 pl-3 pr-2.5 h-full border-r border-dashed border-[#c9a45c]/50 bg-black/20">
                        {/* Realistic SVG Barcode */}
                        <div className="flex items-center gap-[2px] h-7 opacity-85">
                          <span className="w-[3px] h-full bg-[#fdf4d6]" />
                          <span className="w-[1px] h-full bg-[#fdf4d6]" />
                          <span className="w-[2px] h-full bg-[#fdf4d6]" />
                          <span className="w-[1px] h-full bg-[#fdf4d6]" />
                          <span className="w-[4px] h-full bg-[#fdf4d6]" />
                          <span className="w-[2px] h-full bg-[#fdf4d6]" />
                          <span className="w-[1px] h-full bg-[#fdf4d6]" />
                          <span className="w-[3px] h-full bg-[#fdf4d6]" />
                        </div>
                      </div>

                      {/* Right: SEND RSVP action text */}
                      <div className="flex-1 flex items-center justify-center gap-2 px-3 text-center">
                        <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#fff6e0]">
                          {rsvp.buttonText}
                        </span>
                        <span className="text-[#ffd700] text-sm group-hover:translate-x-1 transition-transform">
                          ➔
                        </span>
                      </div>
                    </div>
                  </button>

                  <p className="text-[10px] font-serif italic text-[#8c6928] text-center mt-2">
                    {rsvp.deadlineText}
                  </p>
                </div>
              </motion.form>
            ) : (
              /* SUCCESS STATE: BOARDING PASS PASSENGER TICKET */
              <motion.div
                key="rsvp-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5 text-center py-2"
              >
                {/* Gold Seal Header */}
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-tr from-[#c9a45c] to-[#fef6e7] border-2 border-[#7a1f3d] flex items-center justify-center shadow-lg">
                  <Check className="w-7 h-7 text-[#7a1f3d]" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-script text-3xl sm:text-4xl text-[#7a1f3d]">
                    RSVP Confirmed!
                  </h3>
                  <p className="font-serif text-sm text-[#5c142c]">
                    Thank you, <span className="font-bold text-[#7a1f3d]">{savedData?.name}</span>!
                  </p>
                </div>

                {/* Luxury Wedding Boarding Pass Ticket */}
                <div className="relative rounded-2xl p-4 bg-gradient-to-tr from-[#fffbf4] via-[#ffffff] to-[#fcf4f7] border-2 border-[#c9a45c] shadow-md text-left space-y-3">
                  <div className="flex items-center justify-between border-b border-[#c9a45c]/30 pb-2">
                    <div>
                      <span className="font-sans text-[8px] uppercase tracking-widest text-[#8c6928] block">
                        ROYAL PASS
                      </span>
                      <span className="font-cinzel text-xs font-bold text-[#7a1f3d]">
                        AAYUSH &amp; NIKITA
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#7a1f3d] text-[#fff6e0] font-sans text-[9px] font-bold tracking-wider uppercase">
                      {savedData?.attending === 'yes' ? 'CONFIRMED' : 'REGRETS'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[9px] font-sans text-[#8c6928] uppercase block">Guest</span>
                      <span className="font-serif font-bold text-[#4a1226] text-[13px]">{savedData?.name}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-sans text-[#8c6928] uppercase block">Party Size</span>
                      <span className="font-serif font-bold text-[#4a1226] text-[13px]">
                        {savedData?.attending === 'yes' ? `${savedData?.guestsCount} Person(s)` : 'Will not attend'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] font-sans text-[#8c6928] uppercase block">Date</span>
                      <span className="font-serif font-bold text-[#4a1226] text-[13px]">14 Feb 2027</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-sans text-[#8c6928] uppercase block">Destination</span>
                      <span className="font-serif font-bold text-[#4a1226] text-[13px]">Udaipur &amp; Ahmedabad</span>
                    </div>
                  </div>

                  {savedData?.message && (
                    <div className="border-t border-[#c9a45c]/20 pt-2">
                      <span className="text-[9px] font-sans text-[#8c6928] uppercase block">Note for the Couple</span>
                      <p className="font-serif italic text-xs text-[#5c142c] line-clamp-2">
                        "{savedData.message}"
                      </p>
                    </div>
                  )}

                  {/* Ticket Barcode Strip */}
                  <div className="border-t border-dashed border-[#c9a45c]/50 pt-2 flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#8c6928] tracking-widest">
                      {rsvp.barcodeNumber}
                    </span>
                    <span className="font-sans text-[9px] text-[#7a1f3d] font-semibold">
                      VERIFIED GUEST
                    </span>
                  </div>
                </div>

                {/* Edit RSVP Button */}
                <button
                  onClick={handleReset}
                  className="text-xs font-serif italic text-[#7a1f3d] underline hover:text-[#94294d] transition-colors cursor-pointer"
                >
                  Need to update your RSVP? Tap here
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
