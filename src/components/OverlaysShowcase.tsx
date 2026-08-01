import { overlays } from '../data/content';
import { OverlayIframePreview } from './OverlayIframePreview';

export function OverlaysShowcase() {
  return (
    <section id="overlays" className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-live-pink font-display text-sm font-semibold uppercase tracking-[0.2em]">Overlays OBS</span>
          <h2 className="section-title mt-3">
            Producción <span className="neon-text">nivel pro</span>
          </h2>
          <p className="section-sub mx-auto">
            Vista previa en vivo con animación — igual que al pulsar <strong className="text-white">Testear</strong> en el panel.
            Los jarrón, perrito, vaquita y marranito corren en bucle automático.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {overlays.map((ov) => (
            <article
              key={ov.id}
              className="group glass-card overflow-hidden hover:border-live-pink/40 hover:shadow-glow-pink transition-all duration-300 hover:-translate-y-1"
            >
              <div className="px-4 pt-4">
                <OverlayIframePreview
                  embedPath={ov.embedPath}
                  urlParams={ov.urlParams}
                  testMessage={ov.testMessage}
                  testLoopMs={ov.testLoopMs}
                  title={`Vista previa ${ov.name}`}
                  height={ov.previewHeight ?? 320}
                  zoom={ov.previewZoom ?? 1}
                />
              </div>

              <div className="p-4 pt-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{ov.emoji}</span>
                  <h3 className="font-display font-bold">{ov.name}</h3>
                </div>
                <p className="text-sm text-white/50 mt-2 leading-snug">{ov.desc}</p>
                <code className="mt-3 block text-[11px] font-mono text-live-cyan/55 truncate opacity-70 group-hover:opacity-100 transition-opacity">
                  {ov.embedPath}
                </code>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between border-live-gold/20">
          <div>
            <h3 className="font-display text-xl font-bold text-live-gold">Overlays por juego</h3>
            <p className="text-sm text-white/55 mt-2 max-w-lg">
              Genera imágenes PNG con tus acciones y regalos para Mario, R.E.P.O., Crash CTR y Metal Slug — listas para tu escena de OBS.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {['🍄 Mario', '👻 R.E.P.O.', '🏎️ CTR', '💣 Metal Slug'].map((g) => (
              <span key={g} className="px-3 py-2 rounded-lg bg-live-gold/10 border border-live-gold/25 text-sm font-semibold text-live-gold">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
