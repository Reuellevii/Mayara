import { SITE } from '../config/site'

export default function About() {
  return (
    <section id="sobre" className="section-padding py-24 sm:py-32 bg-parchment">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            {/* Substitua /images/mayara-profile.png pela foto oficial se quiser trocar depois. */}
            <img
              src="/images/mayara-profile.png"
              alt={`${SITE.professionalName}, nail designer`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-ink text-bone px-6 py-5 rounded-sm">
            <p className="font-display text-2xl">+5</p>
            <p className="text-xs text-bone/70 tracking-wideish">anos de experiência</p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Sobre</p>
          <h2 className="text-3xl sm:text-4xl leading-tight mb-6">
            Técnica apurada e um olhar atento para cada detalhe.
          </h2>
          <div className="space-y-5 text-stone text-[15px] leading-relaxed max-w-prose">
            <p>
              Sou {SITE.professionalName}, nail designer especializada em esmaltação em gel,
              alongamento e nail art. Meu trabalho nasce da combinação entre técnica precisa e
              sensibilidade para entender o que combina com cada cliente.
            </p>
            <p>
              Cada atendimento é conduzido com calma, higiene rigorosa e atenção aos mínimos
              detalhes — do formato ao acabamento final. O resultado é sempre pensado para durar e
              para valorizar suas mãos no dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
