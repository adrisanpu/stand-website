import { HelpCircle, RotateCcw, Swords, Gamepad2 } from 'lucide-react'

const experiences = [
  {
    icon: HelpCircle,
    tag: 'Conocimiento',
    title: 'Trivial Corporativo',
    description: 'Cuestionarios personalizados sobre tu empresa, sector o producto. Ideal para formaciones, onboarding y eventos de conocimiento de marca.',
    features: ['Preguntas personalizadas', 'Ranking en tiempo real', 'Hasta 500 jugadores', 'Pantalla compartida'],
    color: '#5235ef',
  },
  {
    icon: RotateCcw,
    tag: 'Suerte & Premio',
    title: 'Ruleta de Premios',
    description: 'Gira la ruleta y gana. Perfecta para stands en ferias, eventos de lanzamiento y activaciones de marca con reparto de premios.',
    features: ['Premios configurables', 'Control de probabilidad', 'Animación espectacular', 'Sin app necesaria'],
    color: '#ff931f',
  },
  {
    icon: Swords,
    tag: 'Competición',
    title: 'Retos & Duelos',
    description: 'Enfrenta equipos en retos de habilidad, velocidad o conocimiento. El formato más emocionante para eventos de teambuilding.',
    features: ['Formato 1v1 o equipos', 'Bracket de eliminación', 'Retos personalizados', 'Presentación épica'],
    color: '#8771ff',
  },
  {
    icon: Gamepad2,
    tag: 'Gamificación',
    title: 'Experiencia Completa',
    description: 'Combina múltiples mecánicas en una sola experiencia. Puntos, misiones, clasificaciones y premios durante todo tu evento.',
    features: ['Multi-juego', 'Puntos acumulables', 'Misiones en vivo', 'Análisis detallado'],
    color: '#5235ef',
  },
]

export default function Catalog() {
  return (
    <section id="catalog" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5235ef]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#8771ff] font-semibold text-sm uppercase tracking-widest mb-4">Catálogo</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Experiencias que
            <br />
            <span className="text-gradient">no se olvidan</span>
          </h2>
          <p className="text-white/60 text-lg">
            Elige la experiencia que mejor encaja con tus objetivos. Todas completamente personalizables con tu imagen de marca.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="card-hover group p-8 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${exp.color}25` }}
                >
                  <exp.icon size={24} style={{ color: exp.color }} />
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                >
                  {exp.tag}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-white/55 leading-relaxed text-sm">{exp.description}</p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {exp.features.map((f, j) => (
                  <li
                    key={j}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/60"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="self-start text-sm font-semibold underline underline-offset-4 text-white/40 group-hover:text-white transition-colors"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saber más →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
