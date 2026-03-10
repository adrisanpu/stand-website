import { useState } from 'react'
import { RotateCcw, Timer, Users, Heart, CircleDot, FileText, Sparkles } from 'lucide-react'

const experiences = [
  {
    icon: Sparkles,
    image: '/images/l3tras-logo.png',
    tag: 'Ingenio & Velocidad',
    title: 'L3tras',
    description: 'Forma la palabra objetivo con tus letras antes que el resto. Ingenio y velocidad con ranking opcional.',
    color: '#ff931f',
  },
  {
    icon: RotateCcw,
    image: '/images/ruleta-logo.png',
    tag: 'Suerte & Premio',
    title: 'Rulet4',
    description: 'Ruleta de premios o retos personalizable. Sorteos, dinámicas o animar al público en formato sala.',
    color: '#ff931f',
  },
  {
    icon: Timer,
    image: '/images/t1mer-logo.png',
    tag: 'Precisión',
    title: 'T1mer',
    description: 'Pulsa en el momento exacto que marca el temporizador. Prueba de reflejos; individual o en sala con ranking.',
    color: '#ff931f',
  },
  {
    icon: Users,
    image: '/images/empareja2-logo.png',
    tag: 'Networking',
    title: 'Empareja2',
    description: 'Encuentra a tu pareja asignada en la sala e intercambiad códigos. Ideal para networking y que la gente se mueva.',
    color: '#ff931f',
  },
  {
    icon: Heart,
    image: '/images/cupido-logo.png',
    tag: 'Social',
    title: 'Cupido',
    description: 'Empareja por cuestionario; semáforo de compatibilidad. Encuentra a tu pareja y validad el código. Muy social.',
    color: '#ff931f',
  },
  {
    icon: CircleDot,
    image: '/images/semaforo-logo.png',
    tag: 'Romper el hielo',
    title: 'Semáforo',
    description: 'Rojo/amarillo/verde según estado. Quiz cruzado para ver si os conocéis. Romper el hielo en eventos.',
    color: '#ff931f',
  },
  {
    icon: FileText,
    image: '/images/infocards-logo.png',
    tag: 'Presentación',
    title: 'Info Cards',
    description: 'Tarjetas visuales con tu información. Sube PDF o imágenes y la IA genera las tarjetas. Para ferias y presentaciones.',
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
      className="card-hover group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col h-[300px] min-w-[280px] max-w-[320px] shrink-0 snap-start overflow-hidden"
    >
      {/* Tag fijo: esquina superior derecha, no se mueve */}
      <span
        className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-colors duration-300"
        style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
      >
        {exp.tag}
      </span>

      {/* Logo: centrado y grande por defecto; en hover pequeño en esquina superior izquierda (animación diagonal) */}
      <div
        className="absolute left-1/2 top-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-xl flex items-center justify-center overflow-hidden transition-all duration-500 ease-out group-hover:left-4 group-hover:top-4 group-hover:w-20 group-hover:h-20 group-hover:translate-x-0 group-hover:translate-y-0 max-md:left-4 max-md:top-4 max-md:w-20 max-md:h-20 max-md:translate-x-0 max-md:translate-y-0"
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
          <exp.icon size={32} style={{ color: exp.color }} className="group-hover:scale-75 max-md:scale-75" />
        )}
      </div>

      {/* Contenido: nombre, descripción, Saber más — visible solo en hover, animación suave */}
      <div className="relative z-[1] mt-auto min-h-[140px] opacity-0 group-hover:opacity-100 max-md:opacity-100 transition-opacity duration-500 ease-out">
        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
        <p className="text-white/55 leading-relaxed text-sm">{exp.description}</p>
        <button
          className="mt-2 text-sm font-semibold underline underline-offset-4 text-white/40 group-hover:text-white transition-colors duration-200"
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Saber más →
        </button>
      </div>
    </div>
  )
}
