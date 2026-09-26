import { SERVICES } from '../config/site'

export default function Services() {
  return (
    <section id="servicos" className="section-padding py-24 sm:py-32 bg-ink">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow text-bone/60 mb-4">Serviços</p>
        <h2 className="text-bone text-3xl sm:text-4xl leading-tight max-w-lg mb-16">
          Cada procedimento com o cuidado que ele merece.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-ink p-8 sm:p-9 flex flex-col justify-between min-h-[220px]">
              <h3 className="text-bone text-xl mb-4">{service.title}</h3>
              <p className="text-bone/60 text-[14.5px] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
