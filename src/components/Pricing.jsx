import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Básico',
    price: '490',
    period: '/ evento',
    description: 'Para eventos puntuales y pruebas de concepto.',
    features: [
      '1 experiencia gamificada',
      'Hasta 100 participantes',
      'Personalización básica de marca',
      'Soporte por email',
      'Informe post-evento',
    ],
    cta: 'Empezar',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '990',
    period: '/ evento',
    description: 'La opción más elegida para eventos de impacto.',
    features: [
      '3 experiencias gamificadas',
      'Hasta 500 participantes',
      'Personalización completa de marca',
      'Soporte prioritario en directo',
      'Dashboard en tiempo real',
      'Informe detallado con métricas',
      'Pantalla y presentación incluidas',
    ],
    cta: 'Elegir Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'A medida',
    period: '',
    description: 'Soluciones personalizadas para grandes organizaciones.',
    features: [
      'Experiencias ilimitadas',
      'Participantes ilimitados',
      'Desarrollo a medida',
      'Account manager dedicado',
      'Integraciones con tus sistemas',
      'SLA garantizado',
      'Formación de equipo interno',
    ],
    cta: 'Contactar',
    highlight: false,
  },
]

export default function Pricing() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff931f]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#8771ff] font-semibold text-sm uppercase tracking-widest mb-4">Precios</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Planes pensados
            <br />
            <span className="text-gradient">para cada evento</span>
          </h2>
          <p className="text-white/60 text-lg">
            Sin sorpresas. Sin contratos largos. Elige el plan que se adapta a tu próximo evento.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl flex flex-col gap-6 ${
                plan.highlight
                  ? 'border-2 border-[#5235ef] bg-[#5235ef]/10'
                  : 'border border-white/10 bg-white/[0.03]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-[#5235ef] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#5235ef]/40">
                    Más popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white/70 mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  {plan.price === 'A medida' ? (
                    <span className="text-4xl font-black text-white">A medida</span>
                  ) : (
                    <>
                      <span className="text-4xl font-black text-white">{plan.price}€</span>
                      <span className="text-white/40 mb-1 text-sm">{plan.period}</span>
                    </>
                  )}
                </div>
                <p className="text-white/50 text-sm">{plan.description}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-[#8771ff]' : 'text-[#5235ef]'}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-colors duration-200 ${
                  plan.highlight
                    ? 'bg-[#5235ef] hover:bg-[#ff931f] text-white shadow-lg shadow-[#5235ef]/30'
                    : 'border border-white/20 hover:border-[#5235ef] text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-10">
          Todos los precios son orientativos. Contacta para un presupuesto personalizado.
        </p>
      </div>
    </section>
  )
}
