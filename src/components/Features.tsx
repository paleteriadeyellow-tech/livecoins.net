import { features } from '../data/content';

export function Features() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="text-live-cyan font-display text-sm font-semibold uppercase tracking-[0.2em]">Funciones</span>
          <h2 className="section-title mt-3">
            Todo lo que necesitas para <span className="neon-text">crecer</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <article
              key={f.title}
              className="glass-card p-6 hover:border-live-cyan/40 hover:shadow-glow transition-all duration-300 group"
            >
              <span className="text-4xl block group-hover:scale-110 transition-transform duration-300">{f.icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
