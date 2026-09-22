import {
  AGENCY_APPLY_URL,
  APP_VERSION,
  DOWNLOAD_URL,
  planAgency,
  planFree,
  planPremium,
  PREMIUM_PRICE,
  whatsappBuyUrl,
} from '../data/content';
import { Download, ExternalLink } from 'lucide-react';

export function Pricing() {
  return (
    <section id="planes" className="section-pad relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-live-gold/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <span className="text-live-gold font-display text-sm font-semibold uppercase tracking-[0.2em]">Planes</span>
          <h2 className="section-title mt-3">
            Empieza gratis, <span className="neon-text">escala a Premium</span>
          </h2>
          <p className="section-sub mx-auto">
            Descarga gratis. Premium desbloquea todo por {PREMIUM_PRICE}/mes. En la agencia, Livecoins
            queda en $0 mientras estés dentro.
          </p>
        </div>

        <div className="mb-12 overflow-x-auto rounded-xl border border-white/[0.07] bg-[#0c1422]/90">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] text-white/40 font-display uppercase tracking-wider text-xs">
                <th className="px-4 py-3 font-semibold">Incluye</th>
                <th className="px-4 py-3 font-semibold text-center">Gratis</th>
                <th className="px-4 py-3 font-semibold text-center text-live-gold">Premium</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              {[
                ['Juegos principales (Mario, PvZ, MC…)', true, true],
                ['Juegos Premium (PvZ Fusion, GTA, L4D2…)', false, true],
                ['Overlays esenciales', true, true],
                ['40+ overlays desbloqueados', false, true],
                ['Alertas de sonido (hasta 5)', true, true],
                ['Alertas y perfiles ilimitados', false, true],
                ['TTS de TikTok', false, true],
                ['Soporte prioritario WhatsApp', false, true],
              ].map(([label, free, premium]) => (
                <tr key={String(label)} className="border-b border-white/[0.04]">
                  <td className="px-4 py-2.5">{label}</td>
                  <td className="px-4 py-2.5 text-center">{free ? '✓' : '—'}</td>
                  <td className="px-4 py-2.5 text-center text-live-gold">{premium ? '★' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">
          <div className="glass-card p-8 flex flex-col">
            <div className="text-sm font-display uppercase tracking-widest text-white/40">Plan Gratis</div>
            <div className="mt-4 font-display text-5xl font-black">
              $0
              <span className="text-lg font-normal text-white/40">/ siempre</span>
            </div>
            <p className="mt-3 text-white/55">Para empezar a transmitir con lo esencial.</p>
            <ul className="mt-8 space-y-3 flex-1">
              {planFree.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="text-live-cyan mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={DOWNLOAD_URL} className="btn-outline mt-8 w-full justify-center gap-2">
              <Download size={18} />
              Descargar App v{APP_VERSION}
            </a>
          </div>

          <div className="relative glass-card p-8 flex flex-col border-live-gold/40 shadow-glow-gold">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-live-gold to-live-gold-dark text-[#2a1c00] text-xs font-display font-bold uppercase tracking-wider">
              ⭐ Recomendado
            </div>
            <div className="text-sm font-display uppercase tracking-widest text-live-gold">Plan Premium</div>
            <div className="mt-4 font-display text-5xl font-black text-live-gold">
              {PREMIUM_PRICE}
              <span className="text-lg font-normal text-white/40">/ mes</span>
            </div>
            <p className="mt-3 text-white/55">Sin límites. Todos los juegos, overlays y funciones.</p>
            <ul className="mt-8 space-y-3 flex-1">
              {planPremium.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="text-live-gold mt-0.5">★</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whatsappBuyUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow mt-8 w-full justify-center !from-live-gold !to-live-gold-dark !text-[#2a1c00] hover:!shadow-glow-gold"
            >
              Comprar Premium por WhatsApp
            </a>
            <p className="text-xs text-center text-white/35 mt-4">
              Te activamos el plan manualmente por WhatsApp. Luego cierra sesión e inicia de nuevo.
            </p>
          </div>

          <div className="relative glass-card p-8 flex flex-col border-live-cyan/35 shadow-glow md:col-span-2 xl:col-span-1">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-live-cyan text-[#04121a] text-xs font-display font-bold uppercase tracking-wider">
              Agencia
            </div>
            <div className="text-sm font-display uppercase tracking-widest text-live-cyan">Plan Agencia</div>
            <div className="mt-4 font-display text-5xl font-black text-live-cyan">
              $0
              <span className="text-lg font-normal text-white/40"> / en la agencia</span>
            </div>
            <p className="mt-3 text-white/55">
              Premium a $0 durante toda tu estancia. Aplica a la red de creadores.
            </p>
            <ul className="mt-8 space-y-3 flex-1">
              {planAgency.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                  <span className="text-live-cyan mt-0.5">★</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg border border-white/[0.06] bg-black/20 px-3 py-3 text-xs text-white/45 space-y-1.5">
              <p>
                <span className="text-live-cyan font-semibold">1.</span> Pulsa Aplicar y llena el
                formulario en TikTok.
              </p>
              <p>
                <span className="text-live-cyan font-semibold">2.</span> Si te aceptan, te activamos
                Livecoins en $0 mientras estés en la agencia.
              </p>
            </div>
            <a
              href={AGENCY_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow mt-6 w-full justify-center"
            >
              Aplicar
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
