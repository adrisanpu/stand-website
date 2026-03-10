const LOGOS = [
  'zoco-logo.png',
  // Añade aquí más nombres de archivo de public/clients
]

export default function ClientLogos() {
  return (
    <section className="py-20 sm:py-24 bg-[#101011]">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-[#ff931f] font-semibold text-sm uppercase tracking-widest mb-2">
          Clientes
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white/90">
          Quiénes confían en nosotros
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-12 sm:gap-16">
        {LOGOS.map((name) => (
          <img
            key={name}
            src={`/clients/${name}`}
            alt=""
            className="h-24 sm:h-28 w-48 sm:w-56 object-contain object-center grayscale"
          />
        ))}
      </div>
    </section>
  )
}
