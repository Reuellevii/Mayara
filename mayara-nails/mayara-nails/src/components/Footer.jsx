import { INSTAGRAM_URL, SITE } from '../config/site'
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function Footer() {
  return (
    <footer className="section-padding py-14 bg-ink text-bone/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div>
          <p className="font-display text-bone text-lg mb-1">{SITE.brandName}</p>
          <p className="text-sm">{SITE.city}</p>
        </div>

        <div className="flex gap-6 text-sm">
          <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="hover:text-brass-light transition-colors duration-300">
            WhatsApp
          </a>
          {INSTAGRAM_URL && (
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-brass-light transition-colors duration-300">
              Instagram
            </a>
          )}
        </div>

        <p className="text-xs">© {new Date().getFullYear()} {SITE.brandName}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
