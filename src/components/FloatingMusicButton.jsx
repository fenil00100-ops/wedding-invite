import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import royalAudio from '../utils/audioPlayer';
import weddingConfig from '../config';

export default function FloatingMusicButton({ autoStart = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    if (autoStart && !isPlaying) {
      const started = royalAudio.play(weddingConfig.audio.customAudioSrc);
      setIsPlaying(started);
    }
  }, [autoStart]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setShowTooltip(false);
    const active = royalAudio.toggle(weddingConfig.audio.customAudioSrc);
    setIsPlaying(active);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {/* Gentle floating tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:block animate-pulse bg-[#4a1024]/90 text-[#fef5e7] border border-[#c9a45c]/40 text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md font-serif italic tracking-wide">
          {isPlaying ? 'Music playing' : 'Tap for Royal Music 🎵'}
        </div>
      )}

      {/* Floating Vinyl Button */}
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
        className={`relative w-13 h-13 rounded-full flex items-center justify-center p-0.5 shadow-2xl transition-all duration-300 transform active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#c9a45c] ${
          isPlaying
            ? 'shadow-[0_0_20px_rgba(201,164,92,0.6)] scale-105'
            : 'shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:scale-105'
        }`}
        style={{
          background: 'linear-gradient(135deg, #1f050d 0%, #3e0c1b 50%, #1f050d 100%)',
          border: '2px solid #c9a45c'
        }}
      >
        {/* Vinyl Grooves & Gold Rim */}
        <div
          className={`w-full h-full rounded-full flex items-center justify-center relative overflow-hidden ${
            isPlaying ? 'animate-spin-slow' : ''
          }`}
          style={{
            backgroundImage:
              'radial-gradient(circle, transparent 35%, rgba(201,164,92,0.15) 36%, transparent 40%, rgba(201,164,92,0.15) 45%, transparent 50%, rgba(201,164,92,0.15) 65%, transparent 70%)'
          }}
        >
          {/* Vinyl center gold label */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#886529] via-[#c9a45c] to-[#fcf6e7] flex items-center justify-center shadow-inner">
            <div className="w-1.5 h-1.5 rounded-full bg-[#330b18]"></div>
          </div>

          {/* Needle / sound wave indicator on play */}
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <span className="w-10 h-10 rounded-full border border-[#c9a45c] animate-ping"></span>
            </div>
          )}
        </div>

        {/* Small Audio Status Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#7a1f3d] border border-[#fcf6e7] text-[#fcf6e7] flex items-center justify-center shadow-md">
          {isPlaying ? (
            <Volume2 className="w-3 h-3 text-[#fdf4d6] animate-pulse" />
          ) : (
            <VolumeX className="w-3 h-3 text-[#e2c98d]" />
          )}
        </div>
      </button>
    </div>
  );
}
