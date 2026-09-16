import { MessageCircle, MonitorPlay } from 'lucide-react';
import { whatsappBuyUrl } from '../data/content';

export function CtaBanner() {
  return (
    <section id="comunidad" className="section-pad pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-white/[0.07] bg-[#0c1422]/90 px-6 py-10 sm:px-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-black">
            ¿Listo para el siguiente LIVE?
          </h2>
          <p className="mt-3 text-white/55 max-w-2xl mx-auto">
            Únete a los streamers que ya encienden su TikTok con Livecoins. Te activamos Premium
            por WhatsApp. No te quedes atrás.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappBuyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline min-w-[220px] justify-center"
            >
              <MessageCircle size={18} />
              WhatsApp Premium
            </a>
            <a
              href="https://livecoins.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline min-w-[220px] justify-center"
            >
              <MonitorPlay size={18} />
              Panel web
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
