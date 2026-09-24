import { MessageCircle, Download, ArrowRight } from 'lucide-react';
import { DOWNLOAD_URL, whatsappBuyUrl } from '../data/content';

export function CtaBanner() {
  return (
    <section id="comunidad" className="section-pad pt-4 pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-live-gold/25 bg-gradient-to-br from-[#1a1408] via-[#0c1422] to-[#071018] px-6 py-12 sm:px-12 text-center">
          <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-live-gold/15 blur-[80px]" />
          <div className="relative">
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-live-gold">
              Empieza hoy
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black leading-tight">
              Tu próximo LIVE puede verse
              <span className="text-live-gold"> 10× más vivo</span>
            </h2>
            <p className="mt-4 text-white/55 max-w-2xl mx-auto text-base sm:text-lg">
              Descarga Livecoins gratis, abre la app e inicia sesión con TikTok. En minutos el chat
              ya está spawneando en tu juego.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={DOWNLOAD_URL}
                className="btn-glow min-w-[240px] justify-center !from-live-gold !to-live-gold-dark !text-[#2a1c00] hover:!shadow-glow-gold"
              >
                <Download size={18} />
                Descargar gratis ahora
                <ArrowRight size={16} />
              </a>
              <a
                href={whatsappBuyUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline min-w-[220px] justify-center"
              >
                <MessageCircle size={18} />
                Activar Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
