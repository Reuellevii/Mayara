// ─────────────────────────────────────────────────────────────
// Estrutura preparada para uma futura integração com Supabase.
// Nada aqui é obrigatório para o site funcionar hoje: enquanto as
// variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY não forem
// preenchidas no arquivo .env, o formulário de contato continua
// funcionando normalmente (veja src/components/ContactForm.jsx).
//
// Quando quiser conectar de verdade:
// 1. Rode: npm install @supabase/supabase-js
// 2. Preencha o .env com a URL e a chave anônima do seu projeto Supabase.
// 3. Descomente o código abaixo.
// 4. Em ContactForm.jsx, troque a função de envio para chamar
//    supabase.from('contatos').insert([...]) com os dados do formulário.
// ─────────────────────────────────────────────────────────────

// import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

// export const supabase = isSupabaseConfigured
//   ? createClient(supabaseUrl, supabaseAnonKey)
//   : null

export const supabase = null
