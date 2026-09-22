import { useEffect, useState } from 'react';
import { ArrowRight, Download, Play } from 'lucide-react';
import { APP_VERSION, DOWNLOAD_URL, HERO_VIDEO, publicAsset, screenshots } from '../data/content';

function asset(path: string) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}

export function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="site-grid absolute inset-0 opacity-60" />
      <div className="absolute top-24 right-[12%] h-72 w-72 rounded-full bg-live-cyan/10 blur-[90px]" />
      <div className="absolute bottom-16 left-[8%] h-64 w-64 rounded-full bg-live-pink/10 blur-[90px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl section-pad pt-28 pb-16 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-live-cyan">
              Livecoins
            </p>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight">
              Los regalos de TikTok
              <br />
              <span className="text-live-gold">controlan el juego</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/65 max-w-lg leading-relaxed">
              Cada rosa, león o regalo dispara spawns, overlays y alertas en tu LIVE.
              El chat deja de mirar. Empieza a jugar.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={DOWNLOAD_URL}
                className="btn-glow text-sm px-6 py-3.5 !from-live-gold !to-live-gold-dark !text-[#2a1c00] hover:!shadow-glow-gold"
              >
                <Download size={18} />
                Descargar v{APP_VERSION}
                <ArrowRight size={16} />
              </a>
              <a href="#demo" className="btn-outline text-sm px-6 py-3.5">
                <Play size={16} />
                Ver demo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/40">
              <span>28 minijuegos</span>
              <span className="text-white/20">·</span>
              <span>40+ overlays</span>
              <span className="text-white/20">·</span>
              <span>Windows 10/11</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-live-cyan/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a101c] shadow-2xl">
              <div className="site-grid absolute inset-0 opacity-40" />
              <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                {!reduceMotion ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={publicAsset(`video/${HERO_VIDEO}`)}
                    poster={asset(screenshots.panel)}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={asset(screenshots.panel)}
                    alt="Panel Livecoins"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-live-bg/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
