import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

export default function Contact() {
  const { messages, t } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = t('contact.mailSubject', { name: form.name })
    const line = (label, val) => `${label}: ${val}`
    const body = [
      line(t('contact.mailBodyName'), form.name),
      line(t('contact.mailBodyEmail'), form.email),
      '',
      `${t('contact.mailBodyMessage')}:`,
      form.message,
    ].join('\n')
    window.location.href = `mailto:contact@playstand.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section-shell bg-brand-ink text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{messages.contact.kicker}</p>
            <h2 className="section-title font-display">
              {messages.contact.title1}
              <br />
              <span className="text-brand-orange">{messages.contact.title2}</span>
            </h2>
            <p className="body-copy mt-5 text-white/80">{messages.contact.intro}</p>

            <div className="mt-8">
              <a
                href="mailto:contact@playstand.app"
                className="group inline-flex min-h-12 items-center gap-3 text-white underline decoration-brand-orange underline-offset-4 transition-colors hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
              >
                <Mail size={18} aria-hidden="true" />
                <span>{messages.contact.emailDirect}: contact@playstand.app</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl border border-white/20 bg-white p-6 text-brand-ink sm:p-8">
            <h3 className="text-xl font-bold">{messages.contact.formTitle}</h3>
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">{messages.contact.labelName}</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder={messages.contact.placeholderName}
                className="field w-full bg-brand-paper text-brand-ink placeholder:text-brand-muted focus:border-brand-ink focus:outline-none focus:ring-4 focus:ring-amber-300 focus-visible:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">{messages.contact.labelEmail}</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder={messages.contact.placeholderEmail}
                className="field w-full bg-brand-paper text-brand-ink placeholder:text-brand-muted focus:border-brand-ink focus:outline-none focus:ring-4 focus:ring-amber-300 focus-visible:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">{messages.contact.labelMessage}</label>
              <textarea
                id="contact-message"
                name="message"
                autoComplete="off"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={messages.contact.placeholderMessage}
                className="field w-full resize-y bg-brand-paper text-brand-ink placeholder:text-brand-muted focus:border-brand-ink focus:outline-none focus:ring-4 focus:ring-amber-300 focus-visible:outline-none"
              />
            </div>
            <button type="submit" aria-describedby="contact-draft-note" className="button-primary w-full">
              <Send size={16} aria-hidden="true" />
              {messages.contact.submit}
            </button>
            <p id="contact-draft-note" className="text-sm leading-relaxed text-brand-muted">
              {messages.contact.draftNote}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
