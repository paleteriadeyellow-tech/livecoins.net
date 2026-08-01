export const WHATSAPP_NUMBER = '522202079074';
export const PANEL_URL = 'https://livecoins.onrender.com';
export const PREMIUM_PRICE = '$12 USD';
export const APP_VERSION = '1.6.15';
export const DOWNLOAD_URL =
  'https://github.com/Converse1995/llivecoin/releases/download/livecoins/Livecoins.Setup.1.6.15.exe';
export const DOWNLOAD_SIZE = '~943 MB';
export const RELEASES_URL = 'https://github.com/Converse1995/llivecoin/releases';

export const TUTORIAL_VIDEO_ID = 'YBLo2J0khbo';
export const TUTORIAL_VIDEO_START = 15;
export const TUTORIAL_VIDEO_URL = `https://www.youtube.com/watch?v=${TUTORIAL_VIDEO_ID}&t=${TUTORIAL_VIDEO_START}s`;
export const tutorialThumbnailUrl = `https://img.youtube.com/vi/${TUTORIAL_VIDEO_ID}/hqdefault.jpg`;

export function tutorialEmbedUrl(autoplay = false) {
  const params = new URLSearchParams({
    start: String(TUTORIAL_VIDEO_START),
    rel: '0',
    modestbranding: '1',
  });
  if (autoplay) params.set('autoplay', '1');
  return `https://www.youtube.com/embed/${TUTORIAL_VIDEO_ID}?${params}`;
}

export function overlayEmbedUrl(embedPath: string, urlParams?: Record<string, string>) {
  const base = PANEL_URL.replace(/\/$/, '');
  const path = embedPath.startsWith('/') ? embedPath : `/${embedPath}`;
  const url = new URL(path, base);
  url.searchParams.set('embed', '1');
  if (urlParams) {
    for (const [key, val] of Object.entries(urlParams)) {
      url.searchParams.set(key, val);
    }
  }
  return url.toString();
}

export function whatsappBuyUrl(username = '') {
  const msg = `Hola, quiero comprar el Plan Premium (${PREMIUM_PRICE}/mes) de Livecoins.${username ? ` Mi usuario es: ${username}` : ''}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/** Rutas bajo /screenshots/ (public/) */
export const screenshots = {
  login: 'screenshots/panel-juegos.png',
  panel: 'screenshots/panel-juegos.png',
  videosAi: 'screenshots/videos-ai.png',
  acciones: 'screenshots/acciones.png',
  regalos: 'screenshots/regalos.png',
  alertasSonoras: 'screenshots/alertas-sonoras.png',
  chatTts: 'screenshots/chat-tts.png',
  temporizador: 'screenshots/temporizador.png',
  winscounter: 'screenshots/overlay-winscounter.png',
  joinlive: 'screenshots/overlay-joinlive.png',
  meta: 'screenshots/overlay-meta.png',
  batallalikes: 'screenshots/overlay-batallalikes.png',
} as const;

export const stats = [
  { value: '40+', label: 'Overlays para OBS' },
  { value: '19', label: 'Minijuegos conectados' },
  { value: APP_VERSION, label: 'Versión actual App PC' },
  { value: '3:4', label: 'Formato TikTok LIVE' },
];

export const features = [
  {
    icon: '🎮',
    title: 'Regalos → Acciones en juego',
    desc: 'Cada rosa, león o regalo dispara spawns, efectos y comandos en tiempo real dentro del juego.',
  },
  {
    icon: '📺',
    title: 'Overlays listos para OBS / Live Studio',
    desc: 'Copia el enlace, pégalo en OBS o Live Studio. Contadores, metas, batallas y alertas visuales.',
  },
  {
    icon: '🔊',
    title: 'Alertas de sonido y video',
    desc: 'Personaliza qué regalo reproduce un sonido, imagen o clip en tu stream.',
  },
  {
    icon: '⚔️',
    title: 'Batallas de regalos y likes',
    desc: 'Competencias en vivo con barras animadas que enganchan al chat.',
  },
  {
    icon: '🔗',
    title: 'Webhook y TTS',
    desc: 'Integra herramientas externas y deja que TikTok lea los mensajes en voz alta.',
  },
  {
    icon: '💻',
    title: 'App de escritorio (.exe)',
    desc: `Instala Livecoins ${APP_VERSION} en Windows. Juegos locales + relay a la nube.`,
  },
];

export function gameImageUrl(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export type GameItem = {
  id: string;
  name: string;
  /** Ruta en el servidor Livecoins, ej. /img/minecraft-card.jpg */
  img: string;
  webp?: string;
  premium?: boolean;
  badge?: string;
};

/** Mismo orden y arte que la pestaña Juegos del panel Livecoins */
export const games: GameItem[] = [
  { id: 'minecraft', name: 'Minecraft', img: '/img/minecraft-card.jpg', webp: '/img/minecraft-card.webp' },
  { id: 'mcparkour', name: 'Minecraft Parkour', img: '/img/mcparkour-card.jpg', webp: '/img/mcparkour-card.webp' },
  { id: 'mckoth', name: 'Minecraft KOTH', img: '/img/mckoth-card.jpg', webp: '/img/mckoth-card.webp' },
  { id: 'mcfarm', name: 'Minecraft Farm', img: '/img/mcfarm-card.jpg', webp: '/img/mcfarm-card.webp' },
  { id: 'mcshooter', name: 'Minecraft Shooters', img: '/img/mcshooter-card.png' },
  { id: 'bedrock', name: 'Cubo TNT · Bedrock', img: '/img/bedrock-card.jpg', webp: '/img/bedrock-card.webp' },
  { id: 'sandbox', name: 'Sandbox', img: '/img/sandbox-card.jpg', webp: '/img/sandbox-card.webp' },
  { id: 'roblox', name: 'Golden Keycaps · Roblox', img: '/img/roblox.png' },
  { id: 'roblox3', name: 'Roblox Parkour', img: '/img/roblox3.png' },
  { id: 'mario', name: 'Super Mario Bros X2', img: '/img/mariobros-card.jpg', webp: '/img/mariobros-card.webp' },
  { id: 'smb3', name: 'Super Mario Bros. 3', img: '/img/smb3-card.png' },
  { id: 'mari0', name: 'Mari0', img: '/img/mari0-card.png', badge: 'Nueva versión' },
  { id: 'pvz', name: 'Plants vs Zombies', img: '/img/plantasvszombies-card.jpg', webp: '/img/plantasvszombies-card.webp' },
  { id: 'pvzhybrid', name: 'PvZ Hybrid', img: '/img/pvzhybrid-card.jpg', webp: '/img/pvzhybrid-card.webp', premium: true },
  { id: 'repo', name: 'R.E.P.O.', img: '/img/repo-card.jpg', webp: '/img/repo-card.webp', premium: true },
  { id: 'l4d', name: 'Left 4 Dead 2', img: '/img/l4d2-card.png', premium: true },
  { id: 'ctr', name: 'Crash Team Racing', img: '/img/ctr-card.jpg', webp: '/img/ctr-card.webp', premium: true },
  { id: 'mslug', name: 'Metal Slug', img: '/img/metalslug.png' },
  { id: 'gdash', name: 'Geometry Dash', img: '/img/gdash/gdash-card.jpg', webp: '/img/gdash/gdash-card.webp', premium: true },
];

export type OverlayTestMessage = {
  kind: string;
  type?: string;
  count?: number;
  [key: string]: unknown;
};

export type OverlayItem = {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  /** Ruta del overlay en Livecoins, igual que en el panel (data-path) */
  embedPath: string;
  /** Params extra (ej. preview=1 en jarrón/perrito para demo en bucle) */
  urlParams?: Record<string, string>;
  /** Altura de la vista previa en tarjetas (px). Por defecto 320. */
  previewHeight?: number;
  /** Escala visual en tarjeta (0–1). Solo para overlays que se ven grandes en embed. */
  previewZoom?: number;
  /** Equivalente al botón Testear del panel vía postMessage */
  testMessage?: OverlayTestMessage;
  /** Repetir animación de prueba cada N ms */
  testLoopMs?: number;
};

export const overlays: OverlayItem[] = [
  {
    id: 'habibi',
    name: 'Habibi Top Donador',
    emoji: '✨',
    desc: 'Ranking top donador estilo Habibi con fuegos artificiales.',
    embedPath: '/habibi-top.html',
    urlParams: { v: '7' },
  },
  {
    id: 'top1fire',
    name: 'Top 1 Donador Fuego',
    emoji: '🔥',
    desc: 'El mejor donador con efectos de fuego en pantalla.',
    embedPath: '/top1fire.html',
  },
  {
    id: 'perrito',
    name: 'Perrito',
    emoji: '🐶',
    desc: 'Cada regalo cae dentro del perrito con física real hasta desbordarse.',
    embedPath: '/perrito.html',
    urlParams: { preview: '1' },
  },
  {
    id: 'gcounter',
    name: 'Contador de meta',
    emoji: '🎯',
    desc: 'Barra de progreso hacia la meta de monedas del live.',
    embedPath: '/gcounter.html',
  },
  {
    id: 'jarron',
    name: 'Jarrón',
    emoji: '🏺',
    desc: 'Regalos caen como canicas dentro del frasco con física.',
    embedPath: '/jarron.html',
    urlParams: { preview: '1' },
  },
  {
    id: 'vaquita',
    name: 'Vaquita',
    emoji: '🐮',
    desc: 'Alcancía vaquita que se llena con los regalos del chat.',
    embedPath: '/vaquita.html',
    urlParams: { preview: '1' },
  },
  {
    id: 'marranito',
    name: 'Marranito',
    emoji: '🐷',
    desc: 'Alcancía marranito con acumulación física de regalos.',
    embedPath: '/marranito.html',
    urlParams: { preview: '1' },
  },
  {
    id: 'batallalikes',
    name: 'Batalla de likes',
    emoji: '❤️',
    desc: 'Barra VS animada con likes del chat en tiempo real.',
    embedPath: '/batallalikes.html',
  },
  {
    id: 'batallaregalos',
    name: 'Batalla de regalos',
    emoji: '⚔️',
    desc: 'Competencia de regalos entre dos bandos en el live.',
    embedPath: '/batallaregalos.html',
  },
  {
    id: 'topaltneon',
    name: 'Top Likes / Diamantes Neón',
    emoji: '💎',
    desc: 'Alterna ranking de likes y diamantes con estilo neón.',
    embedPath: '/topalt-rank-neon.html',
  },
  {
    id: 'winscounter',
    name: 'Contador de victorias',
    emoji: '🏆',
    desc: 'Lleva la cuenta de wins con animación al subir.',
    embedPath: '/contador-wins.html',
    testMessage: { kind: 'wins_counter', type: 'test' },
    testLoopMs: 4500,
  },
  {
    id: 'alertafollow',
    name: 'Alerta nuevo seguidor',
    emoji: '👋',
    desc: 'Pop-up animado cuando alguien nuevo te sigue.',
    embedPath: '/alerta-seguidor.html',
    previewZoom: 0.82,
    testMessage: { kind: 'alertafollow', type: 'test' },
    testLoopMs: 6500,
  },
];

export function getOverlayById(id: string): OverlayItem | undefined {
  return overlays.find((o) => o.id === id);
}

export function publicAsset(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean.split('/').map(encodeURIComponent).join('/')}`;
}

export const appTabs = [
  { id: 'juegos', label: 'Guante AI', icon: '🎬', video: 'Guante1.webm' },
  { id: 'overlays', label: 'Guantess AI', icon: '🎬', video: 'guantess-alpha.webm' },
  { id: 'alertas', label: 'Quiereme AI', icon: '🎬', video: 'Quiereme.webm' },
  { id: 'batallas', label: 'Kitty AI', icon: '🎬', video: 'Kitty x3.webm' },
  { id: 'webhook', label: 'Nivel 30 AI', icon: '🎬', video: 'nivel30.webm' },
] as const;

export type AppTabId = (typeof appTabs)[number]['id'];

export const planFree = [
  'Alertas de sonido (hasta 5)',
  'Videos y batallas básicas',
  'Overlays esenciales',
  'Juegos principales (Mario, PvZ, MC…)',
  '1 perfil de configuración',
  'Panel web gratis',
];

export const planPremium = [
  'Todo ilimitado — sin topes',
  'PvZ Hybrid, R.E.P.O., L4D2, CTR, GD',
  '40+ overlays desbloqueados',
  'TTS de TikTok',
  'Perfiles ilimitados',
  'App PC con todos los juegos',
  'Soporte prioritario por WhatsApp',
];

export const downloadSteps = [
  'Descarga el instalador para Windows',
  'Ejecuta Livecoins Setup y sigue el asistente',
  'Inicia sesión con tu cuenta de TikTok LIVE',
  'Conecta overlays en OBS y configura tus juegos',
];
