import { TESTIMONIALS } from '../config/site'

export default function Testimonials() {
  return (
    <section className="section-padding py-24 sm:py-32 bg-parchment">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow mb-4">Depoimentos</p>
        <h2 className="text-3xl sm:text-4xl leading-tight mb-14 max-w-lg">
          A confiança de quem já viveu a experiência.
        </h2>

        <div className="flex sm:grid sm:grid-cols-3 gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="snap-center shrink-0 w-[85%] sm:w-auto bg-bone rounded-sm p-8 flex flex-col justify-between"
            >
              <blockquote className="text-ink/85 leading-relaxed text-[15px]">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="text-stone text-sm mt-6">{testimonial.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
