import { SITE, PORTFOLIO_ITEMS } from '../config/site'
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function Hero() {
  const heroImage = PORTFOLIO_ITEMS[0]

  const scrollTo = (href) => (e) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="topo" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <img
        src={heroImage.src}
        alt={heroImage.alt}
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/40" />

      <div className="relative z-10 h-full flex flex-col justify-end section-padding pb-24 sm:pb-28">
        <p className="eyebrow text-bone/80 mb-4">{SITE.professionalName} · {SITE.city}</p>
        <h1 className="font-display text-bone text-[2.4rem] sm:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
          {SITE.heroHeadline}
        </h1>
        <p className="text-bone/85 text-base sm:text-lg mt-6 max-w-md">{SITE.heroSubline}</p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#portfolio" onClick={scrollTo('#portfolio')} className="btn-outline border-bone/70 text-bone hover:border-brass-light hover:text-brass-light">
            Conheça meu trabalho
          </a>
          <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="btn-primary bg-bone text-ink hover:bg-brass-light">
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollTo('#portfolio')}
        aria-label="Rolar para o portfólio"
        className="hidden sm:flex absolute bottom-8 right-10 z-10 flex-col items-center gap-2 text-bone/70 hover:text-bone transition-colors duration-300"
      >
        <span className="text-xs tracking-wideish [writing-mode:vertical-rl]">Rolar</span>
        <span className="w-px h-10 bg-bone/50 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-bone animate-[scrollline_1.8s_ease-in-out_infinite]" />
        </span>
      </button>

      <style>{`
        @keyframes scrollline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  )
}
