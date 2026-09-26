import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../config/site'

/**
 * Monta o link do WhatsApp com o número e a mensagem configurados
 * em src/config/site.js. Aceita uma mensagem customizada opcional
 * (por exemplo, incluindo o tipo de serviço escolhido no formulário).
 */
export function buildWhatsAppLink(customMessage) {
  const message = encodeURIComponent(customMessage || WHATSAPP_MESSAGE)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}
