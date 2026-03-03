import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff931f]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ff931f]/10 blur-[100px]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[#ff931f]/10 blur-[80px]" />
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-12 w-24 h-24 border border-[#ff931f]/30 rounded-2xl rotate-12 opacity-60" />
        <div className="absolute bottom-32 left-10 w-16 h-16 border border-[#ff931f]/30 rounded-xl -rotate-6 opacity-50" />
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-[#ff931f]/30 rounded-full opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#ff931f]/40 rounded-full opacity-70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff931f]/40 bg-[#ff931f]/10 text-sm font-medium text-[#ff931f] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#ff931f] animate-pulse" />
          Experiencias gamificadas para marcas
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6">
          <span className="text-white">Transforma tus</span>
          <br />
          <span className="text-gradient">eventos en juego</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stand crea experiencias gamificadas únicas para eventos corporativos, ferias y activaciones de marca. Trivials, ruletas, retos y mucho más.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollTo('#catalog')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#ff931f] hover:bg-[#e67e0f] text-white font-bold text-base transition-colors duration-200 shadow-lg shadow-[#ff931f]/30"
          >
            Ver catálogo
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-[#ff931f] text-white font-semibold text-base transition-colors duration-200"
          >
            Solicitar demo
          </button>
        </div>

        {/* Social proof */}
        <p className="mt-12 text-sm text-white/30">
          Más de <span className="text-white/60 font-semibold">50 empresas</span> ya confían en Stand
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#101011] to-transparent pointer-events-none" />
    </section>
  )
}
