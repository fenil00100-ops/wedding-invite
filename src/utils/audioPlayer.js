/**
 * ROYAL WEDDING AUDIO PLAYER
 * Provides ambient wedding music via Web Audio API (Raag Yaman / Indian classical harmonium & sitar harmony)
 * with automatic fallback or support for custom MP3 URLs specified in config.
 */

class RoyalAudioPlayer {
  constructor() {
    this.audioContext = null;
    this.isPlaying = false;
    this.melodyInterval = null;
    this.customAudio = null;
    this.activeNodes = [];
  }

  initContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  startCustomAudio(src) {
    if (!this.customAudio) {
      this.customAudio = new Audio(src);
      this.customAudio.loop = true;
    }
    this.customAudio.play().then(() => {
      this.isPlaying = true;
    }).catch(err => {
      console.warn("Custom audio autoplay prevented:", err);
    });
  }

  // Pentatonic classical notes in Hz (Raag Bhupali / Yaman tranquil scale)
  // Sa (D4=293.66), Re (E4=329.63), Ga (F#4=369.99), Pa (A4=440.0), Dha (B4=493.88), Sa' (D5=587.33)
  playNote(frequency, duration = 3.5, type = 'sine', volume = 0.08) {
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Warm low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.Q.setValueAtTime(2, ctx.currentTime);

    // Attack and decay envelope (soft shehnai / flute feel)
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.2);

    this.activeNodes.push(osc);
  }

  startDrone() {
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    
    // Tanpura Root & Fifth (D3 = 146.83, A3 = 220.00)
    const droneFreqs = [146.83, 220.00, 293.66];
    
    droneFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      this.activeNodes.push(osc);
    });
  }

  startSynthesizerMelody() {
    this.initContext();
    this.stopSynthesizer();

    this.startDrone();

    // Rhythmic melody pattern simulating royal flute & sitar meend
    const scale = [293.66, 329.63, 369.99, 440.00, 493.88, 587.33, 440.00, 369.99];
    let noteIndex = 0;

    const playNext = () => {
      if (!this.isPlaying) return;
      const freq = scale[noteIndex % scale.length];
      this.playNote(freq, 2.8, 'sine', 0.07);
      
      // Occasional bell / chime harmonic
      if (noteIndex % 4 === 0) {
        this.playNote(freq * 2, 4.0, 'triangle', 0.03);
      }

      noteIndex++;
    };

    playNext();
    this.melodyInterval = setInterval(playNext, 2200);
  }

  stopSynthesizer() {
    if (this.melodyInterval) {
      clearInterval(this.melodyInterval);
      this.melodyInterval = null;
    }
    this.activeNodes.forEach(node => {
      try {
        node.stop();
        node.disconnect();
      } catch (e) {
        // ignore already stopped
      }
    });
    this.activeNodes = [];
  }

  toggle(customSrc) {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play(customSrc);
      return true;
    }
  }

  play(customSrc) {
    if (customSrc) {
      this.startCustomAudio(customSrc);
      this.isPlaying = true;
    } else {
      this.isPlaying = true;
      this.startSynthesizerMelody();
    }
    return this.isPlaying;
  }

  pause() {
    this.isPlaying = false;
    if (this.customAudio) {
      this.customAudio.pause();
    }
    this.stopSynthesizer();
    return this.isPlaying;
  }
}

export const royalAudio = new RoyalAudioPlayer();
export default royalAudio;
