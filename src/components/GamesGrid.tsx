import { gameImageUrl, games } from '../data/content';

export function GamesGrid() {
  return (
    <section id="juegos" className="section-pad relative">
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-live-cyan font-display text-sm font-semibold uppercase tracking-[0.2em]">Minijuegos</span>
          <h2 className="section-title mt-3">
            Tu chat <span className="neon-text">juega contigo</span>
          </h2>
          <p className="section-sub mx-auto">
            Los mismos títulos que en la app Livecoins. Cada regalo puede spawnear enemigos, dar items o ejecutar comandos en vivo.
          </p>
        </div>

        <div className="juegos-grid">
          {games.map((game) => (
            <article
              key={game.id}
              className="juego-card group"
              data-game={game.id}
              aria-label={game.name}
              title={game.name}
            >
              {game.badge && <span className="juego-version">{game.badge}</span>}

              {game.webp ? (
                <picture>
                  <source srcSet={gameImageUrl(game.webp)} type="image/webp" />
                  <img
                    src={gameImageUrl(game.img)}
                    alt={game.name}
                    className="juego-card-img"
                    loading="lazy"
                    width={600}
                    height={840}
                  />
                </picture>
              ) : (
                <img
                  src={gameImageUrl(game.img)}
                  alt={game.name}
                  className="juego-card-img"
                  loading="lazy"
                  width={600}
                  height={840}
                />
              )}
            </article>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-white/40">
          Los juegos con badge <span className="text-live-gold font-semibold">Premium</span> se desbloquean con el plan de $12 USD/mes.
        </p>
      </div>
    </section>
  );
}
