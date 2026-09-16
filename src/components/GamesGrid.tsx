import { gameImageUrl, games } from '../data/content';

export function GamesGrid() {
  return (
    <section id="juegos" className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="site-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Nuestros <span className="text-live-gold">Juegos</span>
          </h2>
        </div>

        <div className="note-callout mx-auto max-w-3xl mb-6 !py-3 !text-sm">
          Miniaturas reales del catálogo Livecoins. Cada juego responde a los regalos de tu TikTok
          LIVE. Los marcados como Premium se desbloquean con el plan de $17 USD/mes.
        </div>

        <div className="featured-games">
          {games.map((game) => (
            <article key={game.id} className="featured-game" aria-label={game.name} title={game.name}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
