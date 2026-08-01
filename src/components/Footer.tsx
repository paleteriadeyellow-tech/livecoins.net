import { APP_VERSION, DOWNLOAD_URL, PANEL_URL, RELEASES_URL } from '../data/content';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-live-border/40 bg-live-bg/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo compact />

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <a href="#descargar" className="hover:text-live-gold transition-colors">Descargar v{APP_VERSION}</a>
            <a href="#inicio" className="hover:text-live-cyan transition-colors">Inicio</a>
            <a href="#juegos" className="hover:text-live-cyan transition-colors">Juegos</a>
            <a href="#overlays" className="hover:text-live-cyan transition-colors">Overlays</a>
            <a href="#planes" className="hover:text-live-cyan transition-colors">Planes</a>
            <a href={DOWNLOAD_URL} className="hover:text-live-gold transition-colors">Instalador .exe</a>
            <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-live-cyan transition-colors">GitHub</a>
            <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-live-cyan transition-colors">
              Panel web
            </a>
          </nav>

          <p className="text-xs text-white/30 text-center md:text-right">
            © {new Date().getFullYear()} Livecoins. TikTok LIVE interactivo.
          </p>
        </div>
      </div>
    </footer>
  );
}
