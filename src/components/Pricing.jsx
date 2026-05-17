import { useState } from 'react'
import { Check } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const CHECKOUT_APP_URL = 'https://playstand.app/billing/checkout'
const LOGIN_URL = 'https://playstand.app/login'

const PLAN_IDS = ['starter', 'event', 'enterprise']

const PLAN_NUMBERS = {
  starter: { price: '0' },
  event: { priceDay: '24', priceWeek: '99' },
  enterprise: { priceFrom: '99' },
}

export default function Pricing() {
  const { messages } = useI18n()
  const [billingPeriod, setBillingPeriod] = useState('day')

  const pp = messages.pricing.plans

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-orange/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">{messages.pricing.kicker}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            {messages.pricing.title1}
            <br />
            <span className="text-gradient">{messages.pricing.title2}</span>
          </h2>
          <p className="text-white/60 text-lg">{messages.pricing.subtitle}</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10">
            <button
              type="button"
              onClick={() => setBillingPeriod('day')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'day' ? 'bg-brand-orange text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {messages.pricing.billingDay}
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod('week')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'week' ? 'bg-brand-orange text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              {messages.pricing.billingWeek}{' '}
              <span className="text-white/90 font-semibold">{messages.pricing.billingWeekOff}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLAN_IDS.map((planId) => {
            const plan = pp[planId]
            const nums = PLAN_NUMBERS[planId]
            const isEvent = planId === 'event'
            const isEnterprise = planId === 'enterprise'
            const isStarter = planId === 'starter'

            return (
              <div
                key={planId}
                className={`relative p-8 rounded-card flex flex-col gap-6 ${
                  isEvent ? 'border-2 border-brand-orange bg-brand-orange/10' : 'border border-white/10 bg-white/[0.03]'
                }`}
              >
                {isEvent && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-orange/40">
                      {messages.pricing.popular}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                  <div className="flex flex-wrap items-baseline gap-1 mb-1">
                    {isEnterprise ? (
                      <>
                        <span className="text-4xl font-black text-white">{nums.priceFrom}€</span>
                        {plan.priceNote && (
                          <span className="text-white/40 text-sm ml-1">{plan.priceNote}</span>
                        )}
                      </>
                    ) : isEvent ? (
                      <>
                        <span className="text-4xl font-black text-white">
                          {billingPeriod === 'day' ? nums.priceDay : nums.priceWeek}€
                        </span>
                        <span className="text-white/60 text-sm">
                          {billingPeriod === 'day' ? plan.priceUnitDay : plan.priceUnitWeek}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-4xl font-black text-white">{nums.price}€</span>
                        <span className="text-white/60 text-sm">{plan.priceUnit}</span>
                      </>
                    )}
                  </div>
                  {isEnterprise && plan.priceModularNote && (
                    <p className="text-white/40 text-xs mt-1">{plan.priceModularNote}</p>
                  )}
                  {isStarter && plan.priceNote && <p className="text-white/40 text-xs">{plan.priceNote}</p>}
                  {isEvent && (
                    <p className="text-white/40 text-xs">
                      {billingPeriod === 'day' ? plan.priceNoteDay : plan.priceNoteWeek}
                    </p>
                  )}
                  {isEnterprise && (
                    <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-md bg-white/10 text-white/70 text-xs font-medium">
                      {messages.pricing.tryFreeBadge}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((f, j) => {
                    let text = f
                    if (isEvent && billingPeriod === 'week' && j === 0) {
                      text = pp.event.featureWeekAlt
                    }
                    return (
                      <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                        <Check size={16} className="mt-0.5 shrink-0 text-brand-orange" />
                        {text}
                      </li>
                    )
                  })}
                </ul>

                {isEnterprise && plan.servicesTitle && (
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                      {plan.servicesTitle}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {plan.services.map((s, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-white/50">
                          <Check size={14} className="mt-0.5 shrink-0 text-brand-orange/80" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {isStarter ? (
                  <a
                    href={LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-control font-bold text-sm transition-colors duration-200 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-center block"
                  >
                    {plan.cta}
                  </a>
                ) : isEvent ? (
                  <a
                    href={CHECKOUT_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-control font-bold text-sm transition-colors duration-200 bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg shadow-brand-orange/30 text-center block"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="w-full py-3 rounded-control font-bold text-sm transition-colors duration-200 bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg shadow-brand-orange/30"
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-center text-white/30 text-sm mt-10">{messages.pricing.footerNote}</p>
      </div>
    </section>
  )
}
