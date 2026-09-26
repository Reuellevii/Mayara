import { useMemo, useState } from 'react'
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from '../config/site'
import Lightbox from './Lightbox'

const SPAN_CLASSES = {
  tall: 'row-span-2',
  wide: 'sm:col-span-2',
  default: '',
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'Todos') return PORTFOLIO_ITEMS
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const handleNavigate = (direction) => {
    setLightboxIndex((current) => {
      if (current === null) return current
      const next = (current + direction + filteredItems.length) % filteredItems.length
      return next
    })
  }

  return (
    <section id="portfolio" className="section-padding py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">Portfólio</p>
            <h2 className="text-3xl sm:text-4xl leading-tight">Meu trabalho</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ease-soft border ${
                  activeCategory === category
                    ? 'bg-ink text-bone border-ink'
                    : 'border-stone/30 text-stone hover:border-brass hover:text-brass'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] sm:auto-rows-[260px] gap-4 sm:gap-5">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className={`group relative overflow-hidden rounded-sm ${SPAN_CLASSES[item.span] || ''}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  )
}
