import { Zap, Users, Trophy, Contact } from 'lucide-react'

const pillars = [
  {
    icon: Zap,
    title: 'Activación inmediata',
    description: 'Tus participantes se enganchan desde el primer segundo. Sin curvas de aprendizaje, solo diversión y competición.',
  },
  {
    icon: Users,
    title: 'Experiencias a medida',
    description: 'Adaptamos cada juego a tu marca, sector y objetivos. Desde formación interna hasta activaciones en ferias.',
  },
  {
    icon: Contact,
    title: 'Leads y contactos',
    description: 'Captura datos y contactos de quienes participan en tu stand. Formularios integrados y exportación para seguir vendiendo después del evento.',
  },
  {
    icon: Trophy,
    title: 'Resultados medibles',
    description: 'Dashboard en tiempo real con métricas de participación, engagement y aprendizaje para justificar el ROI.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#ff931f] font-semibold text-sm uppercase tracking-widest mb-4">Sobre nosotros</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            El juego que transforma<br />
            <span className="text-gradient">la forma de conectar</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Conectamos marcas con su público a través del juego. Nuestro objetivo: que cada persona que pase por tu stand viva una experiencia memorable y que tú puedas medir el impacto y captar leads para seguir vendiendo.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="card-hover p-8 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ff931f]/20 flex items-center justify-center">
                <p.icon size={24} className="text-[#ff931f]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-white/55 leading-relaxed text-sm">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-white/40 text-sm">
          Estamos en fase de pilotos con empresas pioneras.
        </p>
      </div>
    </section>
  )
}
