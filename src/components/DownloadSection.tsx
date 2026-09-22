import { APP_VERSION, DOWNLOAD_SIZE, DOWNLOAD_URL, downloadSteps } from '../data/content';
import { Download } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="descargar" className="section-pad relative overflow-hidden scroll-mt-24">
      <div className="site-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="section-title">
            Descarga e <span className="text-live-gold">instala</span>
          </h2>
          <p className="section-sub mx-auto">
            Setup oficial desde GitHub. En 2 minutos estás listo para el LIVE.
          </p>
        </div>

        <ol className="mx-auto mb-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {downloadSteps.map((step, i) => (
            <li
              key={step}
              className="flex gap-3 rounded-xl border border-white/[0.07] bg-[#0c1422]/90 px-4 py-3.5"
            >
              <span className="font-display text-live-gold font-bold">{i + 1}.</span>
              <span className="text-sm text-white/70 leading-snug">{step}</span>
            </li>
          ))}
        </ol>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-white/70 space-y-4 text-base leading-relaxed">
            <div className="note-callout !py-3 !text-sm">
              <strong className="text-white/80">¿Windows te bloquea?</strong> Es normal. El
              instalador no tiene certificado de pago. Pulsa <em>Más información</em> y luego{' '}
              <em>Ejecutar de todas formas</em>. La app es segura.
            </div>
            <a
              href={DOWNLOAD_URL}
              className="btn-glow mt-2 !from-live-gold !to-live-gold-dark !text-[#2a1c00]"
            >
              <Download size={18} />
              Descargar v{APP_VERSION}
            </a>
            <p className="text-sm text-white/40">
              {DOWNLOAD_SIZE} · Windows 10/11 · Release oficial en GitHub
            </p>
          </div>

          <div className="relative h-[280px] sm:h-[320px]">
            <div className="win-alert win-alert-back">
              <div className="win-alert-bar">Windows protegió su PC</div>
              <p>Microsoft Defender SmartScreen impidió el inicio de una aplicación no reconocida.</p>
              <span className="win-alert-btn">No ejecutar</span>
            </div>
            <div className="win-alert win-alert-front">
              <div className="win-alert-bar">Windows protegió su PC</div>
              <p>Livecoins.Setup.exe. Pulsa Más información y luego Ejecutar de todas formas.</p>
              <div className="flex gap-2 mt-3">
                <span className="win-alert-btn win-alert-btn-ghost">Más información</span>
                <span className="win-alert-btn">Ejecutar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
