import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
import weddingConfig from '../config';

export default function ScratchToReveal() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const [isScratching, setIsScratching] = useState(false);
  const hasTriggeredConfetti = useRef(false);

  const CARD_WIDTH = 300;
  const CARD_HEIGHT = 280;

  // Initialize Golden Heart Canvas Scratch Layer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High DPI scaling
    const dpr = window.devicePixelRatio || 1;
    canvas.width = CARD_WIDTH * dpr;
    canvas.height = CARD_HEIGHT * dpr;
    ctx.scale(dpr, dpr);

    drawGoldHeartCover(ctx, CARD_WIDTH, CARD_HEIGHT);
  }, []);

  // Draw Heart Path on Canvas
  const traceHeartPath = (ctx, w, h) => {
    const cx = w / 2;
    const topY = h * 0.32;
    const bottomY = h * 0.88;
    const r = w * 0.22;

    ctx.beginPath();
    ctx.moveTo(cx, bottomY);
    // Left bottom curve up to left bulge
    ctx.bezierCurveTo(cx - w * 0.45, h * 0.65, cx - w * 0.45, topY, cx - r, topY - h * 0.08);
    // Left top lobe
    ctx.arc(cx - r, topY, r, -Math.PI * 0.85, 0, false);
    // Right top lobe
    ctx.arc(cx + r, topY, r, Math.PI, Math.PI * 1.85, false);
    // Right bulge down to bottom tip
    ctx.bezierCurveTo(cx + w * 0.45, topY, cx + w * 0.45, h * 0.65, cx, bottomY);
    ctx.closePath();
  };

  const drawGoldHeartCover = (ctx, w, h) => {
    ctx.save();
    traceHeartPath(ctx, w, h);
    ctx.clip();

    // Metallic Gold Gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#f9e8b7');
    grad.addColorStop(0.25, '#d4af37');
    grad.addColorStop(0.5, '#edd48d');
    grad.addColorStop(0.75, '#b88a32');
    grad.addColorStop(1, '#f9e8b7');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle Glitter Flecks
    for (let i = 0; i < 400; i++) {
      const rx = Math.random() * w;
      const ry = Math.random() * h;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(138, 98, 30, 0.25)';
      ctx.fillRect(rx, ry, Math.random() * 2 + 1, Math.random() * 2 + 1);
    }

    // Elegant Scratch Callout inside Cover
    ctx.fillStyle = '#4a1024';
    ctx.font = 'bold 13px Montserrat, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('RUB OR SCRATCH HERE', w / 2, h * 0.48);

    ctx.fillStyle = '#7a1f3d';
    ctx.font = '22px serif';
    ctx.fillText('✨', w / 2, h * 0.58);

    // Gold Heart Outline border
    ctx.strokeStyle = '#fff0c2';
    ctx.lineWidth = 4;
    traceHeartPath(ctx, w, h);
    ctx.stroke();

    ctx.restore();
  };

  // Scratch Action
  const scratchAt = (clientX, clientY) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.save();
    // High DPI aware
    const dpr = window.devicePixelRatio || 1;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Check scratch percentage
    calculateScratchPercentage();
  };

  const calculateScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    // Sample a centered bounding box in the heart
    const sampleW = Math.floor(CARD_WIDTH * 0.6 * dpr);
    const sampleH = Math.floor(CARD_HEIGHT * 0.5 * dpr);
    const startX = Math.floor(CARD_WIDTH * 0.2 * dpr);
    const startY = Math.floor(CARD_HEIGHT * 0.25 * dpr);

    const imgData = ctx.getImageData(startX, startY, sampleW, sampleH);
    const pixels = imgData.data;
    let transparentCount = 0;
    const totalPixels = pixels.length / 4;

    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] < 30) {
        transparentCount += 4;
      }
    }

    const pct = Math.min(100, Math.round((transparentCount / totalPixels) * 100));
    setScratchPercent(pct);

    if (pct >= 45 && !hasTriggeredConfetti.current) {
      triggerReveal();
    }
  };

  const triggerReveal = () => {
    hasTriggeredConfetti.current = true;
    setIsRevealed(true);

    // Trigger celebratory gold and blush confetti
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c9a45c', '#ffd700', '#f43f5e', '#ffffff', '#7a1f3d'],
      disableForReducedMotion: true
    });
  };

  // Mouse Handlers
  const handleMouseDown = (e) => {
    setIsScratching(true);
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isScratching) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handleMouseUp = () => setIsScratching(false);

  // Touch Handlers with scroll prevention during card scratch
  const handleTouchStart = (e) => {
    setIsScratching(true);
    const touch = e.touches[0];
    scratchAt(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    if (!isScratching) return;
    // prevent scrolling while scratching the heart
    if (e.cancelable) e.preventDefault();
    const touch = e.touches[0];
    scratchAt(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => setIsScratching(false);

  return (
    <section className="relative w-full py-12 px-4 bg-gradient-to-b from-[#f7eef0] via-[#fbf6f7] to-[#f8f1f3] text-center overflow-hidden">
      <div className="max-w-[400px] mx-auto space-y-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-1"
        >
          <div className="flex items-center justify-center gap-1.5 text-[#c9a45c]">
            <Sparkles className="w-4 h-4 text-[#c9a45c]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#8c6928] font-semibold">
              {weddingConfig.scratchCard.heading}
            </span>
            <Sparkles className="w-4 h-4 text-[#c9a45c]" />
          </div>
          <h2 className="font-script text-3xl sm:text-4xl text-[#7a1f3d] px-2 leading-snug">
            {weddingConfig.scratchCard.subheading}
          </h2>
        </motion.div>

        {/* Scratch Card Interactive Area */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-[300px] h-[280px] rounded-3xl p-1 flex items-center justify-center select-none"
        >
          {/* UNDERNEATH LAYER: The Revealed Wedding Date */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            {/* Gold Heart Outline Container */}
            <div className="relative w-[280px] h-[255px] rounded-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-tr from-[#fff7e8] via-[#ffffff] to-[#faedf1] border-2 border-[#c9a45c] shadow-[0_8px_30px_rgba(201,164,92,0.25)]">
              {/* Shimmering Aura */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ffd700]/30 to-[#f43f5e]/20 blur-lg -z-10" />

              <Heart className="w-8 h-8 text-[#7a1f3d] fill-[#7a1f3d]/20 mb-2 animate-bounce" />

              <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#8c6928] font-semibold">
                Save Our Date
              </p>

              <h3 className="font-cinzel text-2xl font-bold text-[#7a1f3d] tracking-wider my-1 drop-shadow-sm">
                {weddingConfig.scratchCard.revealDate}
              </h3>

              <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent my-1" />

              <p className="font-serif italic text-xs text-[#5c142c] font-medium">
                {weddingConfig.scratchCard.revealSubtitle}
              </p>

              {isRevealed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-2 px-3 py-0.5 rounded-full bg-[#7a1f3d] text-[#fff7e8] font-sans text-[10px] uppercase tracking-wider"
                >
                  Date Revealed! 💖
                </motion.div>
              )}
            </div>
          </div>

          {/* TOP LAYER: Golden Scratch Canvas */}
          <canvas
            ref={canvasRef}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`relative z-10 w-[300px] h-[280px] cursor-pointer touch-none transition-opacity duration-700 ${
              isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{ touchAction: 'none' }}
          />
        </motion.div>

        {/* Hint Text with animated finger / hand */}
        <div className="pt-1">
          <AnimatePresence>
            {!isRevealed ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-xs font-serif text-[#7a1f3d] font-medium"
              >
                <motion.span
                  animate={{ x: [-4, 6, -4], y: [-2, 2, -2] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-lg"
                >
                  👆
                </motion.span>
                <span>{weddingConfig.scratchCard.hintText}</span>
                {scratchPercent > 0 && (
                  <span className="text-[10px] font-sans text-[#8c6928] bg-white/70 px-2 py-0.5 rounded-full border border-[#c9a45c]/30">
                    {scratchPercent}%
                  </span>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-serif italic text-[#7a1f3d]"
              >
                We can't wait to celebrate with you on 14th February! ✨
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
