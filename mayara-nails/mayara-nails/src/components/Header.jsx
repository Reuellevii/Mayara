import { useEffect, useState } from 'react'
import { SITE } from '../config/site'
import { buildWhatsAppLink } from '../lib/whatsapp'

const NAV_LINKS = [
  { label: 'Trabalho', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const isDark = scrolled || menuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-soft ${
        isDark ? 'bg-bone/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(20,19,18,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="section-padding flex items-center justify-between h-20">
        <a
          href="#topo"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#topo')
          }}
          className={`font-display text-xl tracking-wide transition-colors duration-500 ${
            isDark ? 'text-ink' : 'text-bone'
          }`}
        >
          {SITE.brandName}
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className={`text-[15px] transition-colors duration-500 hover:text-brass ${
                isDark ? 'text-ink/80' : 'text-bone/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-soft ${
              isDark
                ? 'bg-ink text-bone hover:bg-brass hover:text-ink'
                : 'bg-bone text-ink hover:bg-brass'
            }`}
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative w-9 h-9 flex flex-col justify-center items-center gap-[6px]"
        >
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ease-soft ${
              isDark ? 'bg-ink' : 'bg-bone'
            } ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ease-soft ${
              isDark ? 'bg-ink' : 'bg-bone'
            } ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ease-soft ${
              isDark ? 'bg-ink' : 'bg-bone'
            } ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 bg-bone transition-all duration-500 ease-soft ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pt-10">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              className={`text-2xl font-display py-4 border-b border-ink/10 text-ink transition-all duration-500 ease-soft ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-8 w-full"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
