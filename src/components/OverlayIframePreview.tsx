import { useEffect, useRef, useState } from 'react';
import { overlayEmbedUrl, type OverlayItem, type OverlayTestMessage } from '../data/content';

type OverlayIframePreviewProps = Pick<
  OverlayItem,
  'embedPath' | 'urlParams' | 'testMessage' | 'testLoopMs'
> & {
  title: string;
  /** Altura del contenedor en px, estilo ovpro-preview del panel */
  height?: number;
  /** Escala del contenido del iframe (ej. 0.82 para ver el overlay completo) */
  zoom?: number;
  className?: string;
  showLabel?: boolean;
};

function fireTest(win: Window | null, msg: OverlayTestMessage) {
  if (!win) return;
  try {
    win.postMessage(msg, '*');
  } catch {
    /* iframe cross-origin guard */
  }
}

export function OverlayIframePreview({
  embedPath,
  urlParams,
  testMessage,
  testLoopMs,
  title,
  height = 380,
  zoom = 1,
  className = '',
  showLabel = true,
}: OverlayIframePreviewProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '160px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || !testMessage) return undefined;

    let interval: ReturnType<typeof setInterval> | undefined;
    let kickoff: ReturnType<typeof setTimeout> | undefined;

    const startLoop = () => {
      const win = iframeRef.current?.contentWindow ?? null;
      fireTest(win, testMessage);
      if (testLoopMs && testLoopMs > 0) {
        interval = setInterval(() => fireTest(iframeRef.current?.contentWindow ?? null, testMessage), testLoopMs);
      }
    };

    const iframe = iframeRef.current;
    if (!iframe) return undefined;

    const onLoad = () => {
      kickoff = setTimeout(startLoop, 400);
    };

    iframe.addEventListener('load', onLoad);
    if (iframe.contentDocument?.readyState === 'complete') onLoad();

    return () => {
      iframe.removeEventListener('load', onLoad);
      if (kickoff) clearTimeout(kickoff);
      if (interval) clearInterval(interval);
    };
  }, [visible, testMessage, testLoopMs, embedPath]);

  const src = overlayEmbedUrl(embedPath, urlParams);
  const zoomWrap =
    zoom < 1
      ? {
          width: `${100 / zoom}%`,
          height: `${100 / zoom}%`,
          transform: `scale(${zoom})`,
          transformOrigin: 'top center',
        }
      : undefined;

  return (
    <div ref={rootRef} className={`ov-iframe-wrap ${className}`}>
      {showLabel && <div className="ov-iframe-label">👁 Vista previa</div>}
      <div className="ov-iframe-preview overflow-hidden" style={{ height: `${height}px` }}>
        {visible ? (
          <div className="h-full w-full flex justify-center" style={zoomWrap}>
            <iframe
              ref={iframeRef}
              src={src}
              title={title}
              loading="lazy"
              allow="autoplay"
              className="h-full w-full border-0 block bg-transparent"
            />
          </div>
        ) : (
          <div className="ov-iframe-skeleton" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}
