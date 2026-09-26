import { useState } from 'react'
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient'

const SERVICE_OPTIONS = ['Esmaltação em gel', 'Alongamento', 'Nail art', 'Manutenção', 'Outro']

const INITIAL_STATE = {
  name: '',
  whatsapp: '',
  serviceType: '',
  desiredDate: '',
  city: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Informe seu nome.'
  if (!values.whatsapp.trim()) {
    errors.whatsapp = 'Informe um número de WhatsApp.'
  } else if (!/^[\d\s()+-]{8,}$/.test(values.whatsapp)) {
    errors.whatsapp = 'Verifique o número informado.'
  }
  if (!values.serviceType) errors.serviceType = 'Selecione o tipo de serviço.'
  if (!values.city.trim()) errors.city = 'Informe sua cidade.'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')
    try {
      if (isSupabaseConfigured && supabase) {
        // Quando o Supabase estiver conectado (veja src/lib/supabaseClient.js),
        // troque a linha abaixo pelo envio real:
        // await supabase.from('contatos').insert([values])
      }
      // Simulação de envio enquanto não há backend conectado.
      await new Promise((resolve) => setTimeout(resolve, 700))
      setStatus('success')
      setValues(INITIAL_STATE)
    } catch (err) {
      setStatus('error')
    }
  }

  const inputClasses = (field) =>
    `w-full bg-transparent border-b py-3 text-[15px] placeholder:text-stone/60 focus:outline-none transition-colors duration-300 ${
      errors[field] ? 'border-red-400' : 'border-ink/20 focus:border-brass'
    }`

  return (
    <section id="contato" className="section-padding py-24 sm:py-32">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow mb-4">Contato</p>
        <h2 className="text-3xl sm:text-4xl leading-tight mb-4">Solicitar atendimento</h2>
        <p className="text-stone text-[15px] mb-12 max-w-prose">
          Preencha o formulário abaixo e retornaremos o quanto antes pelo WhatsApp.
        </p>

        <form onSubmit={handleSubmit} noValidate className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="sr-only">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nome"
              value={values.name}
              onChange={handleChange('name')}
              className={inputClasses('name')}
            />
            {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="whatsapp" className="sr-only">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              placeholder="WhatsApp"
              value={values.whatsapp}
              onChange={handleChange('whatsapp')}
              className={inputClasses('whatsapp')}
            />
            {errors.whatsapp && <p className="text-red-500 text-xs mt-2">{errors.whatsapp}</p>}
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="serviceType" className="sr-only">
              Tipo de serviço
            </label>
            <select
              id="serviceType"
              value={values.serviceType}
              onChange={handleChange('serviceType')}
              className={`${inputClasses('serviceType')} ${values.serviceType ? 'text-ink' : 'text-stone/60'}`}
            >
              <option value="">Tipo de serviço</option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.serviceType && <p className="text-red-500 text-xs mt-2">{errors.serviceType}</p>}
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="desiredDate" className="sr-only">
              Data desejada
            </label>
            <input
              id="desiredDate"
              type="date"
              value={values.desiredDate}
              onChange={handleChange('desiredDate')}
              className={`${inputClasses('desiredDate')} ${values.desiredDate ? 'text-ink' : 'text-stone/60'}`}
            />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="city" className="sr-only">
              Cidade
            </label>
            <input
              id="city"
              type="text"
              placeholder="Cidade"
              value={values.city}
              onChange={handleChange('city')}
              className={inputClasses('city')}
            />
            {errors.city && <p className="text-red-500 text-xs mt-2">{errors.city}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="sr-only">
              Mensagem
            </label>
            <textarea
              id="message"
              placeholder="Mensagem (opcional)"
              rows={4}
              value={values.message}
              onChange={handleChange('message')}
              className={`${inputClasses('message')} resize-none`}
            />
          </div>

          <div className="sm:col-span-2 flex items-center gap-5 mt-2">
            <button type="submit" disabled={status === 'submitting'} className="btn-primary disabled:opacity-60">
              {status === 'submitting' ? 'Enviando…' : 'Solicitar atendimento'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-brass">Recebido! Em breve entraremos em contato.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500">Algo deu errado. Tente novamente.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
