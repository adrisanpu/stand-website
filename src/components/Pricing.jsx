import { useState } from 'react'
import { Check } from 'lucide-react'

// App URL that starts checkout (same flow as backend: POST /v1/billing/checkout then redirect to Stripe).
// Default: playstand.app/billing/checkout. Override with VITE_STRIPE_EVENT_CHECKOUT_URL for other environments.
const STRIPE_EVENT_CHECKOUT_URL = import.meta.env.VITE_STRIPE_EVENT_CHECKOUT_URL || 'https://playstand.app/billing/checkout'
const LOGIN_URL = 'https://playstand.app/login'

const plans = [
  {
    name: 'Starter',
    description: 'Ideal para entender cómo funciona la plataforma antes de lanzar un evento real.',
    price: '0',
    priceUnit: '/∞',
    priceNote: 'No necesitas tarjeta. Configuración en menos de 5 minutos.',
    features: [
      'Acceso a la plataforma',
      'Configuración básica',
      '1 juego activo',
      'Personalización visual básica',
      'Hasta 25 jugadores',
      'Validación de partidas',
      'Vista previa de resultados',
    ],
    cta: 'Probar GRATIS',
    highlight: false,
  },
  {
    name: 'Event',
    description: 'Ideal para eventos puntuales, activaciones presenciales y acciones promocionales.',
    priceDay: '24',
    priceUnitDay: '/24h',
    priceNoteDay: 'pago único',
    priceWeek: '99',
    priceUnitWeek: '/semana',
    priceNoteWeek: '40% de descuento',
    features: [
      'Acceso completo durante 24h',
      'Juegos ilimitados',
      'Jugadores ilimitados',
      'Configuración rápida del evento',
      'Personalización visual del juego',
      'Validación de partidas en tiempo real',
      'Realización de sorteos',
      'Formularios para jugadores',
      'Vista y exportación básica de resultados',
    ],
    cta: 'Contratar acceso',
    highlight: true,
  },
  {
    name: 'Enterprise',
    description: 'Activaciones gamificadas a medida para marcas y eventos profesionales.',
    priceFrom: '99',
    priceNote: 'desde',
    priceModularNote: 'Precio base. Al añadir servicios opcionales el importe aumenta.',
    tryFree: true,
    features: [
      'Acceso completo a la plataforma',
      'Configuración completa del evento',
      'Personalización visual y de contenidos',
      'Juegos y dinámicas a medida',
      'Soporte técnico dedicado',
      'Acompañamiento antes, durante y después del evento',
    ],
    servicesTitle: 'Servicios a escoger:',
    services: [
      'Diseño visual personalizado (branding completo)',
      'Adaptación de contenidos y mecánicas de juego',
      'Pantallas táctiles e instalaciones interactivas',
      'Logística y transporte al evento',
      'Analítica de datos post-evento',
      'Personal on-site',
      'Merchandising y premios personalizados',
    ],
    cta: 'Solicitar propuesta',
    highlight: false,
    enterprise: true,
  },
]

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('day') // 'day' | 'week'

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff931f]/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#ff931f] font-semibold text-sm uppercase tracking-widest mb-4">Precios</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Planes pensados
            <br />
            <span className="text-gradient">para cada evento</span>
          </h2>
          <p className="text-white/60 text-lg">
            Sin sorpresas. Sin contratos largos. Elige el plan que se adapta a tu próximo evento.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10">
            <button
              type="button"
              onClick={() => setBillingPeriod('day')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'day'
                  ? 'bg-[#ff931f] text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              1 día
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod('week')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'week'
                  ? 'bg-[#ff931f] text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              1 semana <span className="text-white/90 font-semibold">40% off</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl flex flex-col gap-6 ${
                plan.highlight
                  ? 'border-2 border-[#ff931f] bg-[#ff931f]/10'
                  : 'border border-white/10 bg-white/[0.03]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-[#ff931f] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#ff931f]/40">
                    Más popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                <div className="flex flex-wrap items-baseline gap-1 mb-1">
                  {plan.enterprise ? (
                    <>
                      <span className="text-4xl font-black text-white">{plan.priceFrom}€</span>
                      {plan.priceNote && (
                        <span className="text-white/40 text-sm ml-1">{plan.priceNote}</span>
                      )}
                    </>
                  ) : plan.priceDay != null ? (
                    <>
                      <span className="text-4xl font-black text-white">
                        {billingPeriod === 'day' ? plan.priceDay : plan.priceWeek}€
                      </span>
                      <span className="text-white/60 text-sm">
                        {billingPeriod === 'day' ? plan.priceUnitDay : plan.priceUnitWeek}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-black text-white">{plan.price}€</span>
                      <span className="text-white/60 text-sm">{plan.priceUnit}</span>
                    </>
                  )}
                </div>
                {plan.enterprise && plan.priceModularNote && (
                  <p className="text-white/40 text-xs mt-1">{plan.priceModularNote}</p>
                )}
                {plan.priceNote && !plan.enterprise && plan.priceDay == null && (
                  <p className="text-white/40 text-xs">{plan.priceNote}</p>
                )}
                {plan.priceDay != null && (
                  <p className="text-white/40 text-xs">
                    {billingPeriod === 'day' ? plan.priceNoteDay : plan.priceNoteWeek}
                  </p>
                )}
                {plan.tryFree && (
                  <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-md bg-white/10 text-white/70 text-xs font-medium">
                    Pruébalo GRATIS
                  </span>
                )}
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#ff931f]" />
                    {f}
                  </li>
                ))}
              </ul>

              {plan.enterprise && plan.servicesTitle && (
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    {plan.servicesTitle}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {plan.services.map((s, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/50">
                        <Check size={14} className="mt-0.5 shrink-0 text-[#ff931f]/80" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {plan.cta === 'Probar GRATIS' ? (
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-bold text-sm transition-colors duration-200 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-center block"
                >
                  {plan.cta}
                </a>
              ) : plan.highlight && STRIPE_EVENT_CHECKOUT_URL ? (
                <a
                  href={STRIPE_EVENT_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-bold text-sm transition-colors duration-200 bg-[#ff931f] hover:bg-[#e67e0f] text-white shadow-lg shadow-[#ff931f]/30 text-center block"
                >
                  {plan.cta}
                </a>
              ) : (
                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-colors duration-200 ${
                    plan.enterprise
                      ? 'bg-[#ff931f] hover:bg-[#e67e0f] text-white shadow-lg shadow-[#ff931f]/30'
                      : plan.highlight
                      ? 'bg-[#ff931f] hover:bg-[#e67e0f] text-white shadow-lg shadow-[#ff931f]/30'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/20'
                  }`}
                >
                  {plan.cta}
                </button>
              )}
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
