import { useState } from 'react'
import { Mail, MessageCircle, Send } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

export default function Contact() {
  const { messages, t } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

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
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">{messages.contact.kicker}</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              {messages.contact.title1}
              <br />
              <span className="text-gradient">{messages.contact.title2}</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">{messages.contact.intro}</p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@playstand.app"
                className="flex items-center gap-4 p-5 rounded-card border border-white/10 bg-white/[0.03] hover:border-brand-orange/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-control bg-brand-orange/20 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">
                    {messages.contact.emailDirect}
                  </p>
                  <p className="text-sm text-white/50">contact@playstand.app</p>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] opacity-55 cursor-not-allowed select-none"
                aria-disabled="true"
              >
                <div className="w-10 h-10 rounded-control bg-white/5 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-white/35" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/50">{messages.contact.whatsapp}</p>
                  <p className="text-sm text-white/35">{messages.contact.whatsappSoon}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <Send size={28} className="text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold">{messages.contact.sentTitle}</h3>
                <p className="text-white/50">{messages.contact.sentBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">{messages.contact.labelName}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={messages.contact.placeholderName}
                    className="w-full px-4 py-3 rounded-control bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">{messages.contact.labelEmail}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={messages.contact.placeholderEmail}
                    className="w-full px-4 py-3 rounded-control bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">{messages.contact.labelMessage}</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={messages.contact.placeholderMessage}
                    className="w-full px-4 py-3 rounded-control bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-control bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm transition-colors duration-200 shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {messages.contact.submit}
                </button>
                <p className="text-center text-xs text-white/30">{messages.contact.privacyNote}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
