import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { featuredGameIds, gameImageUrl, games, type GameItem } from '../data/content';

function GameCover({ game, featured }: { game: GameItem; featured?: boolean }) {
  return (
    <article
      className={featured ? 'featured-game' : 'featured-game featured-game-sm'}
      data-game={game.id}
      aria-label={game.name}
    >
      {game.webp ? (
        <picture>
          <source srcSet={gameImageUrl(game.webp)} type="image/webp" />
          <img src={gameImageUrl(game.img)} alt={game.name} className="featured-game-img" loading="lazy" />
        </picture>
      ) : (
        <img src={gameImageUrl(game.img)} alt={game.name} className="featured-game-img" loading="lazy" />
      )}
      <span className="featured-game-title">{game.name}</span>
      {game.badge && <span className="juego-version">{game.badge}</span>}
      <span className="featured-game-chip">{game.premium ? 'Premium' : 'PC'}</span>
    </article>
  );
}

export function GamesGrid() {
  const [showAll, setShowAll] = useState(false);

  const featured = useMemo(
    () =>
      featuredGameIds
        .map((id) => games.find((g) => g.id === id))
        .filter((g): g is GameItem => Boolean(g)),
    [],
  );
  const featuredSet = useMemo(() => new Set<string>(featuredGameIds), []);
  const rest = useMemo(() => games.filter((g) => !featuredSet.has(g.id)), [featuredSet]);

  return (
    <section id="juegos" className="section-pad relative">
      <div className="site-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="section-title">
            Nuestros <span className="text-live-gold">Juegos</span>
          </h2>
        </div>

        <div className="note-callout mx-auto max-w-3xl mb-10">
          Cada título está conectado a los regalos de TikTok LIVE. Un León, una rosa o un TikTok
          puede spawnear enemigos, un boss o una alerta en el juego. Los juegos Premium se
          desbloquean con el plan de $17 USD/mes.
        </div>

        <div className="featured-games">
          {featured.map((game) => (
            <GameCover key={game.id} game={game} featured />
          ))}
        </div>

        {showAll && (
          <div className="featured-games mt-5">
            {rest.map((game) => (
              <GameCover key={game.id} game={game} />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <button type="button" className="btn-glow !from-live-gold !to-live-gold-dark !text-[#2a1c00]" onClick={() => setShowAll((v) => !v)}>
            {showAll ? 'Ver menos' : 'Ver todos los juegos'}
            <ArrowRight size={16} className={showAll ? 'rotate-90' : ''} />
          </button>
          <p className="mt-3 text-sm text-white/40">{games.length} minijuegos en la App PC</p>
        </div>
      </div>
    </section>
  );
}
