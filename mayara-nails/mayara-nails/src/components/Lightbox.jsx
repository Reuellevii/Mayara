import { useEffect } from 'react'

export default function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const item = items[activeIndex]

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(1)
      if (e.key === 'ArrowLeft') onNavigate(-1)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onNavigate])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da fotografia"
      className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center animate-[fadein_.35s_ease-soft]"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-6 right-6 sm:top-8 sm:right-10 text-bone/70 hover:text-bone transition-colors duration-300 text-3xl leading-none"
      >
        &times;
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate(-1)
        }}
        aria-label="Foto anterior"
        className="hidden sm:flex absolute left-6 lg:left-10 items-center justify-center w-11 h-11 rounded-full border border-bone/30 text-bone/80 hover:border-brass hover:text-brass transition-colors duration-300"
      >
        ‹
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
      >
        <img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="max-w-[90vw] max-h-[75vh] object-contain rounded-sm animate-[fadein_.4s_ease-soft]"
        />
        <figcaption className="text-bone/70 text-sm mt-4 tracking-wide">{item.alt}</figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate(1)
        }}
        aria-label="Próxima foto"
        className="hidden sm:flex absolute right-6 lg:right-10 items-center justify-center w-11 h-11 rounded-full border border-bone/30 text-bone/80 hover:border-brass hover:text-brass transition-colors duration-300"
      >
        ›
      </button>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
