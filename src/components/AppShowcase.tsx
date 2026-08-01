import { useState } from 'react';
import { appTabs, publicAsset, type AppTabId } from '../data/content';

export function AppShowcase() {
  const [tab, setTab] = useState<AppTabId>('juegos');
  const active = appTabs.find((t) => t.id === tab)!;

  return (
    <section id="app" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-live-cyan font-display text-sm font-semibold uppercase tracking-[0.2em]">Animación AI</span>
          <h2 className="section-title mt-3">
            El panel que <span className="neon-text">controla todo</span>
          </h2>
          <p className="section-sub mx-auto">
            Videos AI como en la app. Cada pestaña reproduce una animación vertical en bucle.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-live-cyan/30 to-live-pink/30 blur-sm" />
            <div className="relative glass-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-live-bg/90 border-b border-live-border/50">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-white/35">Livecoins — Animación AI · {active.label}</span>
              </div>

              <div className="flex border-b border-live-border/40 overflow-x-auto">
                {appTabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold whitespace-nowrap transition-all border-b-2 ${
                      tab === t.id
                        ? 'border-live-cyan text-live-cyan bg-live-cyan/5'
                        : 'border-transparent text-white/45 hover:text-white/70'
                    }`}
                  >
                    <span>{t.icon}</span>
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="bg-black p-4 min-h-[360px] flex items-center justify-center">
                <video
                  key={active.id}
                  src={publicAsset(`video/${active.video}`)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full max-h-[420px] rounded-xl border border-live-border/30 object-contain bg-black mx-auto"
                  aria-label={`Animación ${active.label}`}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { step: '01', title: 'Descarga e instala', desc: 'Obtén Livecoins Setup desde el botón de descarga oficial (Windows).' },
              { step: '02', title: 'Configura acciones', desc: 'Elige qué regalo dispara qué en cada juego u overlay.' },
              { step: '03', title: 'Añade overlays a OBS / Live Studio', desc: 'Copia la URL y pégala en OBS o Live Studio (3:4).' },
              { step: '04', title: '¡A streamer!', desc: 'Tu chat controla el show. Más interacción = más retención y donaciones.' },
            ].map((item) => (
              <div key={item.step} className="glass-card p-5 flex gap-4 hover:border-live-cyan/30 transition-colors">
                <span className="font-display text-2xl font-black text-live-cyan/40">{item.step}</span>
                <div>
                  <h3 className="font-display font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-white/55 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
