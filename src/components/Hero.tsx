import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DOWNLOAD_URL, HERO_VIDEO, publicAsset, screenshots } from '../data/content';

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
    <section id="inicio" className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
      {!reduceMotion && (
        <video
          className="absolute inset-0 h-full w-full object-cover scale-105 animate-hero-zoom"
          src={publicAsset(`video/${HERO_VIDEO}`)}
          poster={asset(screenshots.panel)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}
      {reduceMotion && (
        <img
          src={asset(screenshots.panel)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-live-bg via-live-bg/75 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-live-bg/90 via-live-bg/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-live-bg to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl section-pad pt-28 pb-20 sm:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-live-pink/40 bg-live-pink/15 px-4 py-1.5 text-sm font-semibold text-white mb-6 shadow-glow-pink">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-live-pink animate-ping opacity-75" />
            <span className="relative rounded-full h-2.5 w-2.5 bg-live-pink" />
          </span>
          LIVE · El chat controla el juego
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4.4rem] font-black leading-[1.08] tracking-wide max-w-4xl">
          Tu chat tira un <span className="text-live-gold">León</span>.
          <br />
          En tu juego aparece un <span className="neon-text">boss</span>.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/75 max-w-xl leading-relaxed">
          Livecoins convierte cada regalo de TikTok en spawns, jefes, overlays y alertas.
          El LIVE deja de ser un chat. Se vuelve un show.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={DOWNLOAD_URL}
            className="btn-glow text-base px-8 py-4 !from-live-gold !to-live-gold-dark !text-[#2a1c00] hover:!shadow-glow-gold"
          >
            Descargar App PC
          </a>
          <a href="#demo" className="btn-outline text-base px-8 py-4 bg-black/30 backdrop-blur-sm">
            Ver un spawn
          </a>
        </div>
      </div>

      <a
        href="#demo"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-white/45 hover:text-live-cyan transition-colors"
        aria-label="Ver la demo"
      >
        <span className="text-[11px] font-display uppercase tracking-[0.2em]">Ver más</span>
        <ChevronDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
