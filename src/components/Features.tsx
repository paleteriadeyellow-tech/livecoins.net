import { Bell, Download, Gamepad2, Headphones, Layers } from 'lucide-react';
import { DOWNLOAD_URL } from '../data/content';

const highlights = [
  {
    icon: Gamepad2,
    title: 'Regalos → acción en el juego',
    desc: 'Rosa, león o cualquier regalo spawnea enemigos, bosses y efectos en tiempo real.',
  },
  {
    icon: Layers,
    title: 'Overlays listos para OBS',
    desc: 'Contadores, metas y batallas 3:4. Copia el enlace y pégalo en OBS o Live Studio.',
  },
  {
    icon: Bell,
    title: 'Alertas que se sienten',
    desc: 'Sonido, video y clips al instante. El chat nota que su regalo hizo algo.',
  },
  {
    icon: Headphones,
    title: 'Te ayudamos a arrancar',
    desc: 'Soporte por WhatsApp para instalar, activar Premium y dejar el LIVE listo.',
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="section-pad pt-8 relative">
      <div className="site-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Por qué la <span className="text-live-gold">descargan</span>
          </h2>
          <p className="section-sub mx-auto">
            No es solo un overlay. Es la app que hace que el chat juegue contigo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/[0.07] bg-[#0c1422]/90 p-6 hover:border-live-gold/35 hover:shadow-glow-gold transition-all"
            >
              <item.icon className="text-live-gold mb-4" size={22} />
              <h3 className="font-display font-bold text-base">{item.title}</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={DOWNLOAD_URL}
            className="btn-glow !from-live-gold !to-live-gold-dark !text-[#2a1c00] hover:!shadow-glow-gold"
          >
            <Download size={18} />
            Quiero descargar Livecoins
          </a>
        </div>
      </div>
    </section>
  );
}
