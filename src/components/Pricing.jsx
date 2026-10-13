import { useState } from 'react'
import { Check } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const CHECKOUT_APP_URL = 'https://playstand.app/billing/checkout'
const LOGIN_URL = 'https://playstand.app/login'

const PLAN_IDS = ['starter', 'event', 'enterprise']

export default function Pricing() {
  const { messages } = useI18n()
  const [billingPeriod, setBillingPeriod] = useState('day')

  const pp = messages.pricing.plans

  return (
    <section id="pricing" className="section-shell bg-brand-paper text-brand-ink">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="eyebrow">{messages.pricing.kicker}</p>
          <h2 className="section-title font-display">
            {messages.pricing.title1}
            <br />
            <span className="text-[#9c4700]">{messages.pricing.title2}</span>
          </h2>
          <p className="body-copy mt-5">{messages.pricing.subtitle}</p>
        </div>

        <div className="mb-10 flex flex-col items-center gap-3">
          <p className="text-sm font-semibold text-brand-muted">{messages.pricing.durationLabel}</p>
          <div role="group" aria-label={messages.pricing.durationLabel} className="inline-flex rounded-full border border-brand-line bg-white p-1">
            <button
              type="button"
              onClick={() => setBillingPeriod('day')}
              aria-pressed={billingPeriod === 'day'}
              className={`min-h-11 rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
                billingPeriod === 'day' ? 'bg-brand-orange text-brand-ink' : 'text-brand-muted hover:text-brand-ink'
              }`}
            >
              {messages.pricing.billingDay}
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod('week')}
              aria-pressed={billingPeriod === 'week'}
              className={`min-h-11 rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
                billingPeriod === 'week' ? 'bg-brand-orange text-brand-ink' : 'text-brand-muted hover:text-brand-ink'
              }`}
            >
              {messages.pricing.billingWeek}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {PLAN_IDS.map((planId) => {
            const plan = pp[planId]
            const isEvent = planId === 'event'
            const isEnterprise = planId === 'enterprise'
            const isStarter = planId === 'starter'

            return (
              <div
                key={planId}
                className={`flex h-full flex-col gap-6 rounded-3xl p-7 ${
                  isEvent ? 'border-2 border-brand-orange bg-white shadow-lg shadow-brand-orange/10' : 'border border-brand-line bg-white'
                }`}
              >
                <p className="min-h-6 text-sm font-semibold text-brand-orange-dark">
                  {isEvent ? messages.pricing.recommended : '\u00a0'}
                </p>

                <div>
                  <h3 className="mb-1 text-xl font-bold">{plan.name}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-brand-muted">{plan.description}</p>
                  <div className="mb-1 flex flex-wrap items-baseline gap-2">
                    {isEnterprise ? (
                      <span className="text-3xl font-black tracking-tight">{plan.priceFrom}</span>
                    ) : isEvent ? (
                      <>
                        <span className="text-3xl font-black tracking-tight">
                          {billingPeriod === 'day' ? plan.priceDay : plan.priceWeek}
                        </span>
                        <span className="text-sm text-brand-muted">
                          {billingPeriod === 'day' ? plan.priceUnitDay : plan.priceUnitWeek}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-3xl font-black tracking-tight">{plan.price}</span>
                        <span className="text-sm text-brand-muted">{plan.priceUnit}</span>
                      </>
                    )}
                  </div>
                  {isEnterprise && <p className="mt-2 text-sm text-brand-muted">{plan.priceModularNote}</p>}
                  {isEvent && (
                    <p className="text-xs text-brand-muted">
                      {billingPeriod === 'day' ? plan.priceNoteDay : plan.priceNoteWeek}
                    </p>
                  )}
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((f, j) => {
                    let text = f
                    if (isEvent && billingPeriod === 'week' && j === 0) {
                      text = pp.event.featureWeekAlt
                    }
                    return (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-brand-ink">
                        <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-orange-dark" />
                        {text}
                      </li>
                    )
                  })}
                </ul>

                {isEnterprise && plan.servicesTitle && (
                  <div className="border-t border-brand-line pt-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                      {plan.servicesTitle}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {plan.services.map((s, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-brand-muted">
                          <Check size={14} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-orange-dark" />
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
                    className="button-secondary mt-auto w-full"
                  >
                    {plan.cta}
                  </a>
                ) : isEvent ? (
                  <a
                    href={CHECKOUT_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary mt-auto w-full"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="button-primary mt-auto w-full"
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-brand-muted">{messages.pricing.footerNote}</p>
      </div>
    </section>
  )
}
