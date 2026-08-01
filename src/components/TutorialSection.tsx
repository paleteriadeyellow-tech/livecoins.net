import { useState } from 'react';
import { Play } from 'lucide-react';
import { tutorialEmbedUrl, tutorialThumbnailUrl, TUTORIAL_VIDEO_URL } from '../data/content';

export function TutorialSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="tutorial" className="section-pad pt-0">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <span className="text-live-cyan font-display text-sm font-semibold uppercase tracking-[0.2em]">
            Tutorial
          </span>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl">
            Aprende a usar <span className="neon-text">Livecoins</span>
          </h2>
          <p className="section-sub mx-auto">
            Mira el tutorial en video y configura tu directo paso a paso.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-live-cyan/25 to-live-pink/25 blur-md" />
          <div className="relative glass-card overflow-hidden rounded-2xl p-3 sm:p-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-live-border/30 bg-black">
              {playing ? (
                <iframe
                  src={tutorialEmbedUrl(true)}
                  title="Tutorial Livecoins"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 flex items-center justify-center"
                  aria-label="Reproducir tutorial en YouTube"
                >
                  <img
                    src={tutorialThumbnailUrl}
                    alt="Miniatura del tutorial de Livecoins"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/25" />
                  <span className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-live-cyan/90 text-live-bg shadow-glow transition-transform group-hover:scale-110">
                    <Play size={32} className="ml-1" fill="currentColor" />
                  </span>
                </button>
              )}
            </div>

            <p className="mt-4 text-center text-sm text-white/45">
              ¿Prefieres verlo en YouTube?{' '}
              <a
                href={TUTORIAL_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-live-cyan hover:underline"
              >
                Abrir en YouTube
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
