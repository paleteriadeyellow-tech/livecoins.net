import { APP_VERSION, DOWNLOAD_URL, screenshots, stats, whatsappBuyUrl } from '../data/content';
import { OverlayIframePreview } from './OverlayIframePreview';

function asset(path: string) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center section-pad pt-32 overflow-hidden">
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-live-cyan/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-live-pink/10 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-live-cyan/30 bg-live-cyan/5 px-4 py-1.5 text-sm font-semibold text-live-cyan mb-6">
              <span className="h-2 w-2 rounded-full bg-live-cyan animate-pulse" />
              TikTok LIVE · v{APP_VERSION} · Windows
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-wide">
              Convierte cada{' '}
              <span className="neon-text">regalo</span>
              <br />
              en una{' '}
              <span className="text-live-gold">acción épica</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/65 max-w-xl leading-relaxed">
              Livecoins conecta tu TikTok LIVE con minijuegos, overlays para OBS y alertas que hacen que tu audiencia
              <strong className="text-white"> quiera quedarse y donar más</strong>.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={DOWNLOAD_URL} className="btn-glow text-base px-8 py-4 !from-live-gold !to-live-gold-dark !text-[#2a1c00] hover:!shadow-glow-gold">
                ⬇ Descargar App PC
              </a>
              <a href={whatsappBuyUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-8 py-4">
                Comprar Premium
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-card p-4 text-center">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-live-cyan">{s.value}</div>
                  <div className="mt-1 text-xs sm:text-sm text-white/50 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-live-cyan/20 to-live-pink/20 blur-2xl" />
            <div className="relative glass-card p-1.5 rounded-2xl shadow-glow scanline">
              <img
                src={asset(screenshots.login)}
                alt="Panel Livecoins — pestaña Juegos con minijuegos"
                className="rounded-xl w-full h-auto border border-live-border/30"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-card p-3 shadow-glow max-w-[200px] hidden sm:block">
              <OverlayIframePreview
                embedPath="/perrito.html"
                urlParams={{ preview: '1' }}
                title="Perrito"
                height={140}
                showLabel={false}
              />
              <div className="text-xs text-white/50 uppercase mt-2">Vista previa</div>
              <div className="font-display text-live-cyan font-bold text-sm">Perrito</div>
            </div>

            <div className="absolute -top-4 -right-4 glass-card px-4 py-3 shadow-glow-gold">
              <div className="text-xs text-white/50 uppercase">Versión</div>
              <div className="font-display text-live-gold font-bold text-xl">v{APP_VERSION}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
