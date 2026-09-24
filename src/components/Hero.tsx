import { useEffect, useState } from 'react';
import { ArrowRight, Download, Play, Sparkles } from 'lucide-react';
import { APP_VERSION, DOWNLOAD_SIZE, DOWNLOAD_URL, HERO_VIDEO, publicAsset, screenshots } from '../data/content';

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,244,238,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(255,207,92,0.1),_transparent_50%)]" />
      <div className="site-grid absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl section-pad pt-28 pb-20 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="hero-reveal">
            <p className="inline-flex items-center gap-2 rounded-full border border-live-gold/30 bg-live-gold/10 px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-[0.18em] text-live-gold">
              <Sparkles size={14} />
              App gratis para TikTok LIVE
            </p>

            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-[4.1rem] font-black leading-[0.98] tracking-tight">
              <span className="block text-white/95">Livecoins</span>
              <span className="mt-2 block text-[0.72em] sm:text-[0.78em] text-white/90">
                El chat deja de mirar.
              </span>
              <span className="mt-1 block text-[0.72em] sm:text-[0.78em] text-live-gold">
                Empieza a jugar.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/65 max-w-lg leading-relaxed">
              Cada regalo de TikTok dispara spawns, overlays y alertas en tu LIVE.
              Descarga la app, conecta OBS y enciende el directo.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={DOWNLOAD_URL}
                className="btn-glow text-sm px-7 py-4 !from-live-gold !to-live-gold-dark !text-[#2a1c00] hover:!shadow-glow-gold"
              >
                <Download size={18} />
                Descargar gratis
                <ArrowRight size={16} />
              </a>
              <a href="#demo" className="btn-outline text-sm px-6 py-4">
                <Play size={16} />
                Ver cómo funciona
              </a>
            </div>

            <p className="mt-4 text-sm text-white/40">
              v{APP_VERSION} · {DOWNLOAD_SIZE} · Windows 10/11 · Sin tarjeta para empezar
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                { k: '28', v: 'Juegos' },
                { k: '40+', v: 'Overlays' },
                { k: '1 min', v: 'Para instalar' },
              ].map((item) => (
                <div
                  key={item.v}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-3 text-center"
                >
                  <div className="font-display text-xl font-black text-live-cyan">{item.k}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-white/40">{item.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hero-reveal-delay">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-live-cyan/20 via-transparent to-live-gold/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a101c] shadow-2xl">
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
                    alt="Livecoins en acción"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-live-bg via-transparent to-transparent opacity-70" />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/90 px-2.5 py-1 text-[11px] font-display font-bold uppercase tracking-wider text-white shadow-lg">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                    LIVE
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-sm">
                    Regalo → Spawn
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                  <div className="rounded-xl border border-white/10 bg-black/55 px-3 py-2 backdrop-blur-md">
                    <p className="text-[11px] uppercase tracking-wider text-white/45">Ahora mismo</p>
                    <p className="font-display text-sm font-bold text-white">El chat controla el juego</p>
                  </div>
                  <a
                    href={DOWNLOAD_URL}
                    className="btn-glow !py-2.5 !px-4 text-xs !from-live-gold !to-live-gold-dark !text-[#2a1c00]"
                  >
                    <Download size={14} />
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
