import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import { APP_VERSION, DOWNLOAD_URL } from '../data/content';

export function StickyDownload() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-live-bg/95 p-3 backdrop-blur-xl transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={DOWNLOAD_URL}
        className="btn-glow w-full justify-center !from-live-gold !to-live-gold-dark !text-[#2a1c00]"
      >
        <Download size={18} />
        Descargar Livecoins v{APP_VERSION}
      </a>
    </div>
  );
}
