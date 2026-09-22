import { Bell, Gamepad2, Headphones, Layers } from 'lucide-react';

const highlights = [
  {
    icon: Layers,
    title: 'Overlays personalizables',
    desc: 'Contadores, metas y batallas 3:4. Copia el enlace y pégalo en OBS o Live Studio.',
  },
  {
    icon: Bell,
    title: 'Alertas',
    desc: 'Cada regalo puede disparar sonido, video o un clip. El chat se siente en el LIVE.',
  },
  {
    icon: Gamepad2,
    title: 'Minijuegos interactivos',
    desc: 'Minecraft, Mario, PvZ, GTA V y más. Un León deja de ser un like: spawnea un boss.',
  },
  {
    icon: Headphones,
    title: 'Soporte',
    desc: 'Te ayudamos por WhatsApp para activar Premium, instalar y dejar el directo listo.',
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="section-pad pt-8 relative">
      <div className="site-grid absolute inset-0 opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Cómo <span className="text-live-gold">funciona</span>
          </h2>
          <p className="section-sub mx-auto">
            Overlays, alertas y minijuegos conectados al chat. El directo se siente distinto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/[0.07] bg-[#0c1422]/90 p-6 hover:border-live-cyan/30 hover:shadow-glow transition-all"
            >
              <item.icon className="text-live-gold mb-4" size={22} />
              <h3 className="font-display font-bold text-base">{item.title}</h3>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
