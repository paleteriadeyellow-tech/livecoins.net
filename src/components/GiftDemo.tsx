import { useEffect, useRef, useState } from 'react';
import { gameImageUrl, giftReactions } from '../data/content';

const btnActive: Record<(typeof giftReactions)[number]['accent'], string> = {
  cyan: 'border-live-cyan bg-live-cyan/15 shadow-glow',
  gold: 'border-live-gold bg-live-gold/15 shadow-glow-gold',
  pink: 'border-live-pink bg-live-pink/15 shadow-glow-pink',
};

const scenes = {
  mari0: {
    world: '/img/mari0-card.png',
    game: 'Mari0',
    user: '@luna',
    spawnLabel: 'SPAWN ×3',
    spawnName: 'Goombas',
    mobs: [
      { emoji: '👾', x: '18%', delay: '0.62s', size: 'text-6xl sm:text-7xl' },
      { emoji: '🐢', x: '42%', delay: '0.74s', size: 'text-7xl sm:text-8xl' },
      { emoji: '👾', x: '66%', delay: '0.86s', size: 'text-6xl sm:text-7xl' },
    ],
  },
  mslug: {
    world: '/img/metalslug.png',
    game: 'Metal Slug',
    user: '@diego',
    spawnLabel: 'OLEADA',
    spawnName: 'Soldados',
    mobs: [
      { emoji: '🪖', x: '28%', delay: '0.62s', size: 'text-6xl sm:text-7xl' },
      { emoji: '💥', x: '50%', delay: '0.74s', size: 'text-7xl sm:text-8xl' },
      { emoji: '🪖', x: '68%', delay: '0.86s', size: 'text-6xl sm:text-7xl' },
    ],
  },
  cubo: {
    world: '/img/bedrock-card.jpg',
    game: 'Cubo TNT · Bedrock',
    user: '@vale',
    spawnLabel: 'TNT',
    spawnName: 'Explosión',
    mobs: [
      { emoji: '💣', x: '38%', delay: '0.62s', size: 'text-6xl sm:text-7xl' },
      { emoji: '💥', x: '55%', delay: '0.78s', size: 'text-8xl sm:text-9xl' },
    ],
  },
} as const;

type GiftId = keyof typeof scenes;

export function GiftDemo() {
  const [activeId, setActiveId] = useState<GiftId>('mari0');
  const [burst, setBurst] = useState(0);
  const userTouched = useRef(false);
  const active = giftReactions.find((g) => g.id === activeId) ?? giftReactions[0];
  const scene = scenes[activeId];

  function play(id: GiftId) {
    setActiveId(id);
    setBurst((n) => n + 1);
  }

  useEffect(() => {
    const order: GiftId[] = ['mari0', 'mslug', 'cubo'];
    const timer = window.setInterval(() => {
      if (userTouched.current) return;
      setActiveId((current) => order[(order.indexOf(current) + 1) % order.length]);
      setBurst((n) => n + 1);
    }, 4800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="demo" className="section-pad relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-live-gold/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <span className="text-live-gold font-display text-sm font-semibold uppercase tracking-[0.2em]">
            Así se ve en el LIVE
          </span>
          <h2 className="section-title mt-3">
            Un regalo. Un <span className="text-live-gold">spawn</span>.
          </h2>
          <p className="section-sub mx-auto">
            Toca Mari0, Metal Slug o Cubo TNT. El regalo entra al juego y aparece el spawn. Eso es
            Livecoins.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {giftReactions.map((gift) => (
            <button
              key={gift.id}
              type="button"
              onClick={() => {
                userTouched.current = true;
                play(gift.id);
              }}
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

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-live-cyan/25 via-live-gold/20 to-live-pink/25 blur-md" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
            <div key={burst} className="demo-stage demo-shake">
              <img
                src={gameImageUrl(scene.world)}
                alt=""
                className="demo-world"
              />
              <div className="demo-impact" />

              <div className="demo-hud">
                <span className="demo-live">
                  <span className="demo-live-dot" />
                  LIVE
                </span>
                <span className="demo-hud-game">{scene.game}</span>
              </div>

              <div className="demo-gift-fly" aria-hidden="true">
                {active.emoji}
              </div>

              {scene.mobs.map((mob, i) => (
                <span
                  key={`${burst}-${i}`}
                  className={`demo-spawn ${mob.size}`}
                  style={{ left: mob.x, animationDelay: mob.delay }}
                  aria-hidden="true"
                >
                  {mob.emoji}
                </span>
              ))}

              <div className="demo-combo">
                <span className="demo-combo-user">{scene.user}</span>
                <span className="demo-combo-gift">
                  {active.emoji} {active.name} ×1
                </span>
              </div>

              <div className="demo-spawn-tag">
                <span className="demo-spawn-k">{scene.spawnLabel}</span>
                <span className="demo-spawn-v">{scene.spawnName}</span>
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
