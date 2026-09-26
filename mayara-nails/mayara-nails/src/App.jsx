import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WhatsAppCTA from './components/WhatsAppCTA'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'

export default function App() {
  return (
    <div className="bg-bone">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Services />
        <Testimonials />
        <WhatsAppCTA />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}
