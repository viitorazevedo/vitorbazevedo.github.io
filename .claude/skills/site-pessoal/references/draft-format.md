# Formato do rascunho (`_drafts/<slug>.md`)

Formato intermediário usado pelos agentes `writer`, `editor` e `seo-optimizer` enquanto o post
ainda não virou HTML. O site em si não usa Markdown nem front-matter — isso é só um formato de
trabalho interno. O agente `publisher` é quem lê esse arquivo e gera o HTML real em `blog/`.

Local: `_drafts/<slug>.md` na raiz do repo (pasta ignorada pelo git via `.gitignore` — nunca é
publicada).

## Estrutura

```markdown
---
title: Título curto (vai para <title> e para o card da listagem)
headline: Título completo do H1 do post (pode ser igual ao title ou uma variação mais longa)
category: gestao | agilidade | carreira | ia | <nova-categoria-em-kebab-case>
category_label: Rótulo visível da categoria, ex. "Gestão de Produto"
tags: [tag um, tag dois, tag três]
excerpt: Frase(s) de abertura em destaque, 1-2 frases.
date: YYYY-MM-DD
read_time: N
meta_description: Descrição para SEO (meta description, og:description, twitter:description) — pode ser igual ao excerpt, ajustada para ~155 caracteres.
keywords: [palavra-chave um, palavra-chave dois, ...]
---

## Primeiro H2

Parágrafo de corpo do post...

**Destaque em negrito** quando fizer sentido.

## Segundo H2

Mais parágrafos...
```

## Regras

- `category` deve ser um dos slugs de filtro já existentes em `blog.html`
  (`gestao`/`agilidade`/`carreira`/`ia`) sempre que o tema se encaixar em algum deles. Só crie
  uma categoria nova se o tema realmente não couber em nenhuma — isso implica adicionar um botão
  de filtro novo em `blog.html` (o `publisher` cuida disso).
- O corpo usa só `##` (H2), parágrafos e `**negrito**` — nada de H1, H3, listas, imagens ou tabelas;
  o design do site não tem estilo definido para esses elementos dentro do artigo.
- `slug` é derivado do `title`: kebab-case, sem acentos, sem stopwords desnecessárias.
