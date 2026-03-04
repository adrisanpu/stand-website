import { useState } from 'react'
import { RotateCcw, Timer, Users, Heart, CircleDot, FileText, Sparkles } from 'lucide-react'

const experiences = [
  {
    icon: Sparkles,
    image: '/images/l3tras-logo.png',
    tag: 'Ingenio & Velocidad',
    title: 'L3tras',
    description: 'Se muestra una palabra objetivo y los jugadores usan las letras de sus códigos (o de la partida) para formar esa palabra. Quien lo consiga antes o con más aciertos gana. Juego de ingenio y velocidad, con ranking opcional.',
    color: '#ff931f',
  },
  {
    icon: RotateCcw,
    image: '/images/ruleta-logo.png',
    tag: 'Suerte & Premio',
    title: 'Rulet4',
    description: 'Ruleta de premios o acciones personalizable para el evento. El organizador configura opciones y la ruleta decide quién gana o qué reto toca. Puede usarse para sorteos, dinámicas o simplemente animar el público. Multijugador en formato sala.',
    color: '#ff931f',
  },
  {
    icon: Timer,
    image: '/images/t1mer-logo.png',
    tag: 'Precisión',
    title: 'T1mer',
    description: 'Los jugadores deben pulsar o actuar en el momento exacto que indica el temporizador. Prueba de reflejos y precisión. Puede ser individual o en sala compitiendo por el mejor tiempo. Competitivo y con ranking.',
    color: '#ff931f',
  },
  {
    icon: Users,
    image: '/images/empareja2-logo.png',
    tag: 'Networking',
    title: 'Empareja2',
    description: 'Cada jugador tiene una pareja asignada por el sistema. El reto es encontrarla en la sala e intercambiar los códigos de validación. Gana la pareja que se valide correctamente. Perfecto para dinámicas de networking y que la gente se mueva y hable.',
    color: '#ff931f',
  },
  {
    icon: Heart,
    image: '/images/cupido-logo.png',
    tag: 'Social',
    title: 'Cupido',
    description: 'Empareja a participantes según sus respuestas a un cuestionario. Cada uno ve un semáforo (rojo/amarillo/verde) que indica compatibilidad. El objetivo es encontrar a tu pareja asignada y validar el código entre los dos. Muy social y pensado para eventos.',
    color: '#ff931f',
  },
  {
    icon: CircleDot,
    image: '/images/semaforo-logo.png',
    tag: 'Romper el hielo',
    title: 'Semáforo',
    description: 'Los jugadores se clasifican en Casado (rojo), Puede ser (amarillo) o Soltero (verde). Tras validar la pareja, un quiz cruzado pone a prueba si os conocéis bien. Ideal para eventos en vivo donde quieras romper el hielo y que la gente se mezcle según su estado.',
    color: '#ff931f',
  },
  {
    icon: FileText,
    image: '/images/infocards-logo.png',
    tag: 'Presentación',
    title: 'Info Cards',
    description: 'Muestra información sobre tu producto, servicio o marca en una secuencia de tarjetas visuales. Sube un PDF, texto o imágenes y la IA genera las tarjetas automáticamente. Ideal para ferias y eventos.',
    color: '#ff931f',
  },
]

export default function Catalog() {
  return (
    <section id="catalog" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ff931f]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#ff931f] font-semibold text-sm uppercase tracking-widest mb-4">Catálogo</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Experiencias que
            <br />
            <span className="text-gradient">no se olvidan</span>
          </h2>
          <p className="text-white/60 text-lg">
            Elige la experiencia que mejor encaja con tus objetivos. Todas completamente personalizables con tu imagen de marca.
          </p>
        </div>

        <p className="text-center text-white/40 text-sm mb-4 md:mb-6">
          Desliza para ver todos los juegos →
        </p>

        {/* Cards: horizontal scroll */}
        <div className="relative -mx-6 px-6">
          <div className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/20">
            {experiences.map((exp, i) => (
              <CatalogCard key={i} exp={exp} />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-[#101011] to-transparent pointer-events-none" aria-hidden />
        </div>
      </div>
    </section>
  )
}

function CatalogCard({ exp }) {
  const [imgError, setImgError] = useState(false)
  const showImage = exp.image && !imgError

  return (
    <div
      className="card-hover group p-6 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col gap-4 min-w-[280px] max-w-[320px] shrink-0 snap-start"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden shrink-0"
          style={{ backgroundColor: `${exp.color}15` }}
        >
          {showImage ? (
            <img
              src={exp.image}
              alt=""
              className="w-full h-full object-contain p-1"
              onError={() => setImgError(true)}
            />
          ) : (
            <exp.icon size={28} style={{ color: exp.color }} />
          )}
        </div>
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold shrink-0"
          style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
        >
          {exp.tag}
        </span>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
        <p className="text-white/55 leading-relaxed text-sm line-clamp-4">{exp.description}</p>
      </div>

      <button
        className="mt-auto self-start text-sm font-semibold underline underline-offset-4 text-white/40 group-hover:text-white transition-colors"
        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Saber más →
      </button>
    </div>
  )
}
