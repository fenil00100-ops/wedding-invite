import React, { useState } from 'react';
import IntroGate from './components/IntroGate';
import InvitationCard from './components/InvitationCard';
import ScratchToReveal from './components/ScratchToReveal';
import CountdownTimer from './components/CountdownTimer';
import OurStory from './components/OurStory';
import EventsSection from './components/EventsSection';
import TravelJourney from './components/TravelJourney';
import Blessings from './components/Blessings';
import RsvpSection from './components/RsvpSection';
import ThankYouSection from './components/ThankYouSection';
import FloatingMusicButton from './components/FloatingMusicButton';
import weddingConfig from './config';
import { Smartphone, Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [musicAutoStart, setMusicAutoStart] = useState(false);

  // When user opens gates, start the royal background music
  const handleGateOpened = () => {
    setMusicAutoStart(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#17050e] text-[#4a1226] relative overflow-x-hidden flex flex-col items-center justify-start">
      
      {/* DESKTOP LUXURY BACKDROP (Shown only on larger desktop screens) */}
      <div className="fixed inset-0 pointer-events-none hidden md:block overflow-hidden">
        {/* Deep Burgundy & Champagne Damask Background */}
        <div className="absolute inset-0 bg-radial from-[#3c0e1e] via-[#1c040d] to-[#0c0206] opacity-95" />
        
        {/* Soft Golden Ambient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#c9a45c]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7a1f3d]/15 rounded-full blur-[140px]" />

        {/* Desktop Side Header & Experience Guide */}
        <div className="absolute top-8 left-8 max-w-xs space-y-2 text-[#fdf6e8] opacity-80 z-10">
          <div className="flex items-center gap-2 text-[#c9a45c]">
            <Sparkles className="w-4 h-4" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] font-semibold">
              Royal Invitation
            </span>
          </div>
          <h1 className="font-script text-4xl text-[#fff8ec]">
            {weddingConfig.couple.groom.firstName} &amp; {weddingConfig.couple.bride.firstName}
          </h1>
          <p className="font-serif italic text-xs text-[#eedecb]">
            14 February 2027 • Ahmedabad &amp; Udaipur
          </p>
        </div>

        <div className="absolute bottom-8 left-8 max-w-xs space-y-1 text-[#eedecb]/70 font-sans text-[11px] z-10">
          <div className="flex items-center gap-1.5 text-[#c9a45c]">
            <Smartphone className="w-4 h-4" />
            <span className="uppercase tracking-wider font-semibold">Mobile-First Experience</span>
          </div>
          <p className="font-serif italic text-xs">
            Optimized for 360–430px wide mobile phones with touch scratch card &amp; 3D gates.
          </p>
        </div>

        <div className="absolute top-8 right-8 text-right space-y-1 text-[#fdf6e8] opacity-80 z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-[#c9a45c]/40 text-[#c9a45c] text-xs font-sans tracking-widest uppercase">
            {weddingConfig.couple.hashtag}
          </span>
        </div>
      </div>

      {/* CENTERED MOBILE PHONE CONTAINER (360px - 430px width on desktop, 100% on mobile) */}
      <main className="w-full max-w-[430px] min-h-screen bg-[#fcf7f8] relative z-20 shadow-[0_0_60px_rgba(0,0,0,0.65)] md:my-6 md:rounded-[40px] md:border-[7px] md:border-[#2d0917] md:ring-1 md:ring-[#c9a45c]/30 overflow-hidden flex flex-col">
        
        {/* DESKTOP PHONE SPEAKER & DYNAMIC ISLAND BAR (Visual touch on desktop) */}
        <div className="hidden md:flex absolute top-2 inset-x-0 z-50 items-center justify-center pointer-events-none">
          <div className="w-24 h-4 rounded-full bg-[#120209] flex items-center justify-center gap-2 border border-white/10 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#1f0510]" />
            <div className="w-8 h-1 rounded-full bg-[#2a0817]" />
          </div>
        </div>

        {/* 1. INTRO GATE (Full screen 3D swinging gates & night balcony reveal) */}
        <IntroGate onGateOpened={handleGateOpened} />

        {/* 2. INVITATION CARD (Om symbol, Sanskrit Shloka, Cordially Invite, Parents) */}
        <InvitationCard />

        {/* 3. SCRATCH-TO-REVEAL (Gold heart canvas scratch card & confetti) */}
        <ScratchToReveal />

        {/* 4. COUNTDOWN (The Big Day Approaches, live ticking glass boxes) */}
        <CountdownTimer />

        {/* 5. OUR STORY (Horizontal swipeable tilted polaroid photo carousel) */}
        <OurStory />

        {/* 6. EVENTS (Sangeet, Mandap Muhurat, Royal Wedding at The Leela Palace) */}
        <EventsSection />

        {/* 7. TRAVEL JOURNEY (Ahmedabad to Udaipur, dashed line, scroll moving airplane) */}
        <TravelJourney />

        {/* 8. BLESSINGS (Grandparents, Bhabhi & Brother, Sister & Jiju, Nieces & Nephew) */}
        <Blessings />

        {/* 9. RSVP (Attendance chips, guest stepper, message, boarding pass ticket) */}
        <RsvpSection />

        {/* 10. THANK YOU (Burgundy section, striped airmail envelope, postmark & wax seal) */}
        <ThankYouSection />

        {/* FLOATING MUSIC BUTTON (Vinyl disc fixed at bottom-right) */}
        <FloatingMusicButton autoStart={musicAutoStart} />

      </main>

    </div>
  );
}
