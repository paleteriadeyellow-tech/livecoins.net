import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { DOWNLOAD_URL, PANEL_URL, whatsappBuyUrl } from '../data/content';
import { Logo } from './Logo';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#descargar', label: 'Descargar' },
  { href: '#app', label: 'App' },
  { href: '#juegos', label: 'Juegos' },
  { href: '#overlays', label: 'Overlays' },
  { href: '#planes', label: 'Planes' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-live-bg/90 backdrop-blur-xl border-b border-live-border/50 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="group transition-opacity hover:opacity-90">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-live-cyan"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={DOWNLOAD_URL} className="btn-outline text-xs py-2.5 px-4 gap-1.5">
            <Download size={16} />
            Descargar
          </a>
          <a href={whatsappBuyUrl()} target="_blank" rel="noopener noreferrer" className="btn-glow text-xs py-2.5 px-5">
            Premium ⭐
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white/80 hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-live-border/50 bg-live-panel/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-4 py-3 font-semibold text-white/80 hover:bg-white/5 hover:text-live-cyan"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href={DOWNLOAD_URL} className="btn-outline mt-2 justify-center gap-2">
              <Download size={18} />
              Descargar App
            </a>
            <a href={PANEL_URL} target="_blank" rel="noopener noreferrer" className="btn-outline mt-2 justify-center">
              Panel web
            </a>
            <a href={whatsappBuyUrl()} target="_blank" rel="noopener noreferrer" className="btn-glow mt-2 justify-center">
              Comprar Premium
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
