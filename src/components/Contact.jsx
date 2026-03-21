import { useState } from 'react'
import { Mail, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, replace with your form backend (e.g. Formspree, EmailJS, etc.)
    const subject = encodeURIComponent(`Consulta de ${form.name} — Stand`)
    const body = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`)
    window.location.href = `mailto:contact@playstand.app?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#ff931f]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Copy */}
          <div>
            <p className="text-[#ff931f] font-semibold text-sm uppercase tracking-widest mb-4">Contacto</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Hablemos de
              <br />
              <span className="text-gradient">tu próximo evento</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Cuéntanos qué tienes en mente. Te respondemos en menos de 24 horas con una propuesta personalizada.
            </p>

            {/* Alternative CTAs */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@playstand.app"
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#ff931f]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ff931f]/20 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[#ff931f]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-[#ff931f] transition-colors">Email directo</p>
                  <p className="text-sm text-white/50">contact@playstand.app</p>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] opacity-55 cursor-not-allowed select-none"
                aria-disabled="true"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-white/35" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white/50">WhatsApp</p>
                  <p className="text-sm text-white/35">Próximamente</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#ff931f]/20 flex items-center justify-center">
                  <Send size={28} className="text-[#ff931f]" />
                </div>
                <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                <p className="text-white/50">Te respondemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff931f] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff931f] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu evento: fecha, número de asistentes, tipo de experiencia que buscas..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#ff931f] transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#ff931f] hover:bg-[#e67e0f] text-white font-bold text-sm transition-colors duration-200 shadow-lg shadow-[#ff931f]/30 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Enviar mensaje
                </button>
                <p className="text-center text-xs text-white/30">
                  Al enviar aceptas nuestra política de privacidad.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
