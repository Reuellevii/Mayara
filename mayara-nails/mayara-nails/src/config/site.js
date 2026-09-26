// ─────────────────────────────────────────────────────────────
// CONFIGURAÇÕES GERAIS DO SITE
// Edite os valores abaixo para atualizar textos, contatos e
// conteúdo do site sem precisar mexer nos componentes.
// ─────────────────────────────────────────────────────────────

// Número de WhatsApp no formato internacional, somente números
// (Brasil = 55 + DDD + número). Troque pelo número real da Mayara.
export const WHATSAPP_NUMBER = '5588999999999'

// Mensagem que já vem escrita quando alguém clica em "Falar no WhatsApp".
export const WHATSAPP_MESSAGE =
  'Olá, Mayara! Vi seu site e gostaria de agendar um horário.'

// Link do Instagram. Deixe vazio ('') até você ter o link real —
// o site esconde o ícone/menção automaticamente quando estiver vazio.
export const INSTAGRAM_URL = ''

export const SITE = {
  brandName: 'Mayara Nails',
  professionalName: 'Mayara Duarte',
  city: 'Icó, CE',
  heroHeadline: 'Cada detalhe é pensado para valorizar suas mãos.',
  heroSubline:
    'Esmaltação em gel, alongamento e nail art com técnica, sensibilidade e acabamento de alto padrão.',
}

// ─────────────────────────────────────────────────────────────
// PORTFÓLIO
// Para adicionar uma foto nova: salve a imagem em /public/images
// e acrescente um novo objeto neste array, seguindo o mesmo
// formato dos existentes. "span" controla o tamanho do card na
// grade (veja instruções no README).
// ─────────────────────────────────────────────────────────────
export const PORTFOLIO_ITEMS = [
  {
    id: 'p1',
    src: '/images/nail-work-white-gold.png',
    alt: 'Francesinha branca com detalhes dourados e strass',
    category: 'Francesinha',
    span: 'tall',
  },
  {
    id: 'p2',
    src: '/images/nail-work-burgundy-gold.png',
    alt: 'Esmaltação nude com contorno bordô e dourado',
    category: 'Nail art',
    span: 'wide',
  },
  {
    id: 'p3',
    src: '/images/nail-work-blue-french.png',
    alt: 'Francesinha azul com traço fino dourado',
    category: 'Nail art',
    span: 'tall',
  },
]

export const PORTFOLIO_CATEGORIES = [
  'Todos',
  ...Array.from(new Set(PORTFOLIO_ITEMS.map((item) => item.category))),
]

// ─────────────────────────────────────────────────────────────
// SERVIÇOS — sem preços, apenas descrição da experiência.
// ─────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 's1',
    title: 'Esmaltação em gel',
    description:
      'Acabamento espelhado e duradouro, com cutilagem cuidadosa e cores sob medida para você.',
  },
  {
    id: 's2',
    title: 'Alongamento',
    description:
      'Modelagem em fibra ou gel, formato pensado para o seu tipo de mão e rotina do dia a dia.',
  },
  {
    id: 's3',
    title: 'Nail art',
    description:
      'Traços finos, esmaltação francesinha e composições autorais, feitas à mão em cada unha.',
  },
  {
    id: 's4',
    title: 'Manutenção',
    description:
      'Cuidado contínuo para manter o trabalho impecável entre um atendimento e outro.',
  },
]

// ─────────────────────────────────────────────────────────────
// DEPOIMENTOS — edite, adicione ou remova livremente.
// ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      'A Mayara tem um cuidado com os detalhes que eu nunca tinha visto antes. Saio de lá sempre encantada.',
    author: 'Clara S.',
  },
  {
    id: 't2',
    quote:
      'Profissionalismo do início ao fim. O atendimento é tranquilo e o resultado sempre impecável.',
    author: 'Renata M.',
  },
  {
    id: 't3',
    quote:
      'Já indiquei para várias amigas. A durabilidade do esmalte em gel é surpreendente.',
    author: 'Beatriz A.',
  },
]
