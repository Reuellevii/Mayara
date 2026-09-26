import { buildWhatsAppLink } from '../lib/whatsapp'

export default function WhatsAppCTA() {
  return (
    <section className="section-padding py-24 sm:py-28">
      <div className="max-w-6xl mx-auto bg-ink rounded-sm px-8 py-16 sm:px-16 sm:py-20 text-center flex flex-col items-center">
        <p className="eyebrow text-brass-light mb-5">Agende seu horário</p>
        <h2 className="text-bone text-3xl sm:text-5xl leading-tight max-w-2xl">
          Vamos cuidar das suas unhas com o carinho que elas merecem.
        </h2>
        <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="btn-primary bg-bone text-ink hover:bg-brass-light mt-10">
          Falar no WhatsApp
        </a>
      </div>
    </section>
  )
}
