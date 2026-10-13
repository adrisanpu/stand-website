import { useI18n } from '../i18n/useI18n.js'

export default function FAQ() {
  const { messages } = useI18n()

  return (
    <section id="faq" className="section-shell bg-brand-paper text-brand-ink">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">{messages.faq.kicker}</p>
          <h2 className="section-title font-display">{messages.faq.title}</h2>
        </div>

        <div className="border-b border-brand-line">
          {messages.faq.items.map((item) => (
            <details key={item.question} className="border-t border-brand-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-2xl font-normal text-brand-orange-dark">
                  +
                </span>
              </summary>
              <p className="body-copy max-w-3xl pb-6 pr-10">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
