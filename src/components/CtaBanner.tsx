import { DOWNLOAD_URL, whatsappBuyUrl } from '../data/content';

export function CtaBanner() {
  return (
    <section className="section-pad pt-0">
      <div className="mx-auto max-w-5xl">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-live-cyan/20 to-live-pink/20" />
          <div className="relative px-8 py-14 sm:px-14 sm:py-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-wide">
              ¿Listo para el siguiente nivel?
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
              Descarga la app, configura tus overlays y convierte tu TikTok LIVE en un show interactivo que vende.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href={DOWNLOAD_URL} className="btn-glow text-base px-10 py-4 !from-live-gold !to-live-gold-dark !text-[#2a1c00] hover:!shadow-glow-gold">
                ⬇ Descargar Livecoins
              </a>
              <a href={whatsappBuyUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-10 py-4">
                Quiero Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
