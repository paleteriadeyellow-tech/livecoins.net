export const WHATSAPP_NUMBER = '522202079074';
export const PREMIUM_PRICE = '$17 USD';
export const APP_VERSION = '1.6.56';
export const DOWNLOAD_URL =
  'https://github.com/paleteriadeyellow-tech/exe/releases/download/world/Livecoins.Setup.1.6.56.exe';
export const DOWNLOAD_SIZE = '~943 MB';
export const RELEASES_URL = 'https://github.com/paleteriadeyellow-tech/exe/releases';

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
  { id: 'smw', name: 'Super Mario World', img: '/img/smw-card.jpg' },
  { id: 'mari0', name: 'Mari0', img: '/img/mari0-card.png', badge: 'Nueva versión' },
  { id: 'pvz', name: 'Plants vs Zombies', img: '/img/plantasvszombies-card.jpg', webp: '/img/plantasvszombies-card.webp' },
  { id: 'pvzhybrid', name: 'PvZ Hybrid', img: '/img/pvzhybrid-card.jpg', webp: '/img/pvzhybrid-card.webp', premium: true },
  { id: 'repo', name: 'R.E.P.O.', img: '/img/repo-card.jpg', webp: '/img/repo-card.webp', premium: true },
  { id: 'l4d', name: 'Left 4 Dead 2', img: '/img/l4d2-card.png', premium: true },
  { id: 'gtavkoth', name: 'King of the Hill · GTA V', img: '/img/gtavkoth-card.png', premium: true },
  { id: 'gtavchaos', name: 'GTA V Chaos Mod', img: '/img/gtavchaos-card.png', premium: true },
  { id: 'gtavchiliad', name: 'Monte Chiliad · GTA V', img: '/img/gtavchiliad-card.png', premium: true },
  { id: 'unturned', name: 'Unturned', img: '/img/unturned-card.png', premium: true },
  { id: 'ctr', name: 'Crash Team Racing', img: '/img/ctr-card.jpg', webp: '/img/ctr-card.webp', premium: true },
  { id: 'mslug', name: 'Metal Slug', img: '/img/metalslug.png' },
  { id: 'gdash', name: 'Geometry Dash', img: '/img/gdash/gdash-card.jpg', webp: '/img/gdash/gdash-card.webp', premium: true },
];

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
