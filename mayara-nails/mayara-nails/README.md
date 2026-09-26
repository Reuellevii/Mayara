# Mayara Nails — Site

Site profissional da **Mayara Nails**, feito em React + Vite + Tailwind CSS.

Este guia foi escrito para quem **não é programador** — siga os passos na ordem.

---

## 1. Instalar as ferramentas necessárias (só na primeira vez)

Você precisa ter o **Node.js** instalado no computador.

1. Acesse https://nodejs.org
2. Baixe a versão "LTS" (recomendada)
3. Instale normalmente, clicando em "Avançar" até o fim

## 2. Instalar o projeto

1. Baixe ou clone esta pasta no seu computador
2. Abra o terminal (ou Prompt de Comando) dentro da pasta do projeto
3. Digite o comando abaixo e aperte Enter:

```
npm install
```

Isso baixa tudo o que o site precisa para funcionar. Só precisa fazer isso uma vez (ou sempre que baixar o projeto de novo).

## 3. Rodar o site no seu computador

Depois de instalado, digite:

```
npm run dev
```

O terminal vai mostrar um endereço, algo como `http://localhost:5173`. Copie e cole esse endereço no navegador para ver o site.

Para parar, volte ao terminal e aperte `Ctrl + C`.

---

## 4. Como trocar as fotografias do portfólio

1. Salve a nova foto dentro da pasta `public/images`
2. Abra o arquivo `src/config/site.js`
3. Encontre a lista `PORTFOLIO_ITEMS`
4. Copie um dos blocos existentes e ajuste:
   - `src`: caminho da nova imagem (ex: `/images/nome-da-foto.png`)
   - `alt`: uma descrição curta da foto (importante para acessibilidade)
   - `category`: a categoria da foto (ex: "Nail art", "Francesinha")
   - `span`: controla o tamanho do card na grade —
     - `'tall'` = card mais alto
     - `'wide'` = card mais largo
     - remova essa linha para um card padrão

## 5. Como adicionar novas fotografias

Basta seguir o passo 4 acima e adicionar um novo bloco na lista, com um `id` diferente dos outros (ex: `'p4'`, `'p5'`...).

## 6. Como trocar a fotografia da Mayara (seção "Sobre")

1. Salve a nova foto em `public/images`, por exemplo como `mayara-profile.png` (substituindo a atual, ou com outro nome)
2. Se usar outro nome de arquivo, abra `src/components/About.jsx` e troque o caminho na linha `src="/images/mayara-profile.png"`

## 7. Como trocar o número do WhatsApp

1. Abra o arquivo `src/config/site.js`
2. Troque o valor de `WHATSAPP_NUMBER` pelo número real, sempre no formato: `55` + DDD + número, só números (sem espaços, traços ou parênteses)
   - Exemplo: (11) 91234-5678 vira `5511912345678`
3. Se quiser, troque também a mensagem automática em `WHATSAPP_MESSAGE`

## 8. Como trocar o Instagram

1. Abra `src/config/site.js`
2. Cole o link completo do Instagram dentro de `INSTAGRAM_URL` (ex: `'https://instagram.com/mayaranails'`)
3. Enquanto esse campo estiver vazio, o link do Instagram fica escondido automaticamente no site

## 9. Como alterar os textos do site

A maioria dos textos principais fica em `src/config/site.js`, dentro do objeto `SITE`:

- `heroHeadline`: frase principal da primeira tela
- `heroSubline`: frase de apoio
- `professionalName`, `city`: nome e cidade exibidos no site

Textos de cada seção (Sobre, Serviços, Depoimentos) ficam nos arquivos correspondentes dentro de `src/components/`, ou nas listas `SERVICES` e `TESTIMONIALS` em `src/config/site.js`.

## 10. Como alterar as informações de contato

O formulário de contato está em `src/components/ContactForm.jsx`. Os campos (nome, WhatsApp, tipo de serviço, data, cidade, mensagem) já estão prontos; normalmente não é necessário mexer neste arquivo, apenas nos textos gerais em `site.js`.

## 11. Como adicionar novos depoimentos

1. Abra `src/config/site.js`
2. Encontre a lista `TESTIMONIALS`
3. Copie um bloco existente e ajuste o `id` (único), `quote` (o depoimento) e `author` (nome da pessoa)

## 12. Como remover ou editar depoimentos

- Para editar: mude o texto de `quote` ou `author` diretamente
- Para remover: apague o bloco inteiro (do `{` até o `}` correspondente) da lista `TESTIMONIALS`

---

## 13. Conectar o formulário ao Supabase (opcional, para depois)

O projeto já está preparado para isso, mas não é obrigatório para o site funcionar:

1. Crie uma conta e um projeto em https://supabase.com
2. Copie o arquivo `.env.example` e renomeie a cópia para `.env`
3. Preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com os dados do seu projeto Supabase
4. Rode `npm install @supabase/supabase-js`
5. Siga as instruções escritas dentro do arquivo `src/lib/supabaseClient.js`

Enquanto isso não for feito, o formulário continua funcionando normalmente (ele apenas ainda não guarda os dados em um banco de dados).

---

## 14. Publicar o site (GitHub + Vercel)

1. Crie uma conta em https://github.com, se ainda não tiver
2. Crie um novo repositório e envie os arquivos do projeto para ele
3. Crie uma conta em https://vercel.com (pode entrar direto com o GitHub)
4. Clique em "Add New… → Project" e selecione o repositório que você criou
5. A Vercel detecta automaticamente que é um projeto Vite — não precisa mudar nada, clique em "Deploy"
6. Depois que o site estiver no ar, vá em "Settings → Domains" no painel da Vercel para conectar seu domínio próprio

---

## Estrutura do projeto (para referência)

```
mayara-nails/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/       (Header, Hero, Portfolio, Lightbox, About, Services, Testimonials, WhatsAppCTA, ContactForm, Footer, botão flutuante)
    ├── config/site.js    (todos os textos, fotos, serviços e depoimentos editáveis)
    ├── lib/              (funções auxiliares: link do WhatsApp e integração futura com Supabase)
    └── styles/index.css
```
