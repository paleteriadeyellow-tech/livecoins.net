import { APP_VERSION, DOWNLOAD_SIZE, DOWNLOAD_URL } from '../data/content';
import { Download } from 'lucide-react';

export function DownloadSection() {
  return (
    <section id="descargar" className="section-pad relative overflow-hidden">
      <div className="site-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="section-title">
            Fácil <span className="text-live-gold">instalación</span>
          </h2>
        </div>

        <div className="note-callout mx-auto max-w-3xl mb-12">
          Livecoins se descarga desde GitHub. El instalador no está firmado con certificado de pago,
          por eso Windows puede mostrar una alerta. Es normal. La app es segura: pulsa Más información
          y luego Ejecutar de todas formas.
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-white/70 space-y-4 text-base leading-relaxed">
            <p>
              La descarga sale del repositorio oficial de Livecoins. Instala el Setup, abre la app e
              inicia sesión con tu TikTok LIVE.
            </p>
            <p>
              Si Windows dice que la aplicación es desconocida, no te asustes: pasa porque no está
              certificada digitalmente, igual que muchas apps independientes.
            </p>
            <a
              href={DOWNLOAD_URL}
              className="btn-glow mt-4 !from-live-gold !to-live-gold-dark !text-[#2a1c00]"
            >
              <Download size={18} />
              Descargar v{APP_VERSION}
            </a>
            <p className="text-sm text-white/40">{DOWNLOAD_SIZE} · Windows 10/11</p>
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
