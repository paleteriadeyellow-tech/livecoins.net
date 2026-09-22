import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { featuredGameIds, gameImageUrl, games, PREMIUM_PRICE } from '../data/content';

function GameCard({
  game,
}: {
  game: (typeof games)[number];
}) {
  return (
    <article className="featured-game" aria-label={game.name} title={game.name}>
      {game.webp ? (
        <picture>
          <source srcSet={gameImageUrl(game.webp)} type="image/webp" />
          <img
            src={gameImageUrl(game.img)}
            alt={game.name}
            className="featured-game-img"
            loading="lazy"
            width={220}
            height={308}
          />
        </picture>
      ) : (
        <img
          src={gameImageUrl(game.img)}
          alt={game.name}
          className="featured-game-img"
          loading="lazy"
          width={220}
          height={308}
        />
      )}
      <span
        className={`absolute left-1.5 top-1.5 z-10 rounded px-1.5 py-0.5 text-[10px] font-display font-bold uppercase tracking-wide ${
          game.premium
            ? 'bg-live-gold text-[#2a1c00]'
            : 'bg-black/65 text-white/85 backdrop-blur-sm'
        }`}
      >
        {game.premium ? 'Premium' : 'Gratis'}
      </span>
    </article>
  );
}

export function GamesGrid() {
  const [showAll, setShowAll] = useState(false);
  const featured = featuredGameIds
    .map((id) => games.find((g) => g.id === id))
    .filter((g): g is (typeof games)[number] => Boolean(g));
  const visible = showAll ? games : featured;

  return (
    <section id="juegos" className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="site-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Nuestros <span className="text-live-gold">Juegos</span>
          </h2>
          <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm sm:text-base">
            Cada regalo del chat puede spawnear enemigos, bosses o efectos. Premium desbloquea el
            catálogo completo por {PREMIUM_PRICE}/mes.
          </p>
        </div>

        <div className={`featured-games ${showAll ? '' : 'featured-games-spotlight'}`}>
          {visible.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="btn-outline text-sm px-5 py-2.5 gap-2"
          >
            {showAll ? (
              <>
                Ver destacados
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                Ver catálogo completo ({games.length})
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
