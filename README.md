# projnot - EngComp Alert

Atividade MOBILE_009 - Sistema de notificações em tempo real com Expo + Supabase.

O app grava o aviso (título e mensagem) na tabela `notifications` do Supabase e todo celular que estiver com o app aberto recebe o INSERT pelo Realtime e mostra um alerta na tela.

## Supabase

Tabela `notifications` com Realtime ativado:

- id (int8, primary key)
- created_at (timestamptz, default now())
- title (text)
- body (text)

RLS ligado com a policy "Enabled read/write for all users" (ALL, using true / with check true).

A URL e a chave anon ficam em `src/services/supabase.js`.

## Rodando

```
npm install
npx expo start --tunnel
```

Depois é só ler o QR Code com o Expo Go.
