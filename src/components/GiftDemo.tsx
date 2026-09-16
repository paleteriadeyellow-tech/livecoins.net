import { useState } from 'react';
import { giftReactions, screenshots } from '../data/content';

function asset(path: string) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}

const flashClass: Record<(typeof giftReactions)[number]['accent'], string> = {
  cyan: 'from-live-cyan/50 to-transparent',
  gold: 'from-live-gold/50 to-transparent',
  pink: 'from-live-pink/50 to-transparent',
};

const btnActive: Record<(typeof giftReactions)[number]['accent'], string> = {
  cyan: 'border-live-cyan bg-live-cyan/15 shadow-glow',
  gold: 'border-live-gold bg-live-gold/15 shadow-glow-gold',
  pink: 'border-live-pink bg-live-pink/15 shadow-glow-pink',
};

export function GiftDemo() {
  const [activeId, setActiveId] = useState<(typeof giftReactions)[number]['id']>('leon');
  const [burst, setBurst] = useState(0);
  const active = giftReactions.find((g) => g.id === activeId) ?? giftReactions[1];

  function pick(id: (typeof giftReactions)[number]['id']) {
    setActiveId(id);
    setBurst((n) => n + 1);
  }

  return (
    <section id="demo" className="section-pad relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-live-gold/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <span className="text-live-gold font-display text-sm font-semibold uppercase tracking-[0.2em]">
            Pruébalo aquí
          </span>
          <h2 className="section-title mt-3">
            Toca un <span className="text-live-gold">regalo</span>
          </h2>
          <p className="section-sub mx-auto">
            Así reacciona un LIVE con Livecoins. En la app pasa en tiempo real, con tu TikTok conectado.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {giftReactions.map((gift) => (
            <button
              key={gift.id}
              type="button"
              onClick={() => pick(gift.id)}
              className={`rounded-2xl border px-5 py-3.5 text-left transition-all duration-200 min-w-[9.5rem] ${
                activeId === gift.id
                  ? btnActive[gift.accent]
                  : 'border-live-border/60 bg-live-card/50 hover:border-white/25'
              }`}
            >
              <span className="text-2xl leading-none">{gift.emoji}</span>
              <span className="mt-1 block font-display font-bold">{gift.name}</span>
            </button>
          ))}
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-live-cyan/25 via-live-gold/20 to-live-pink/25 blur-md" />
          <div className="relative glass-card overflow-hidden rounded-3xl p-2 sm:p-3">
            <div className="relative overflow-hidden rounded-2xl border border-live-border/40">
              <img
                src={asset(screenshots.acciones)}
                alt="Acción disparada por un regalo en Livecoins"
                className="w-full h-auto min-h-[220px] object-cover"
              />
              <div
                key={burst}
                className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${flashClass[active.accent]} animate-gift-flash`}
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
                <p className="text-xs font-display uppercase tracking-[0.18em] text-white/55">El chat acaba de enviar</p>
                <p className="mt-1 font-display text-2xl sm:text-3xl font-black">
                  {active.emoji} {active.result}
                </p>
                <p className="mt-1 text-sm text-white/70">{active.detail}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { k: '28', v: 'Minijuegos listos para el chat' },
            { k: '40+', v: 'Overlays 3:4 para OBS / Live Studio' },
            { k: '1 toque', v: 'Regalo → spawn, boss o alerta' },
          ].map((item) => (
            <div key={item.v} className="glass-card p-5 text-center">
              <div className="font-display text-2xl font-black text-live-cyan">{item.k}</div>
              <div className="mt-1 text-sm text-white/55">{item.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
