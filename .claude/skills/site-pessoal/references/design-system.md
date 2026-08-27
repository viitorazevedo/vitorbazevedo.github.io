# Design system do site

Não existe stylesheet compartilhado em uso — cada página (`index.html`, `projetos.html`,
`blog.html`, `blog/*.html`) carrega o mesmo bloco `<style>` inline, quase idêntico, no `<head>`.
(`assets/css/style.css` e `assets/js/main.js` são de uma versão antiga e não são referenciados
por nenhuma página atual — ignore-os a menos que o usuário peça explicitamente para reativá-los.)

Sempre que criar ou editar uma página, copie o bloco `<style>` de uma página existente
equivalente (ex: para um novo post, copie de `blog/ia-generativa-dia-a-dia-produto.html`) e
ajuste só o necessário. Não invente cores, fontes ou espaçamentos novos — reutilize as variáveis
abaixo.

## Paleta (CSS custom properties em `:root`)

```css
--navy:   #0a1628;  /* fundo escuro: nav, hero, footer */
--navy2:  #112040;  /* variação do navy */
--blue:   #1a3a6b;  /* texto/links secundários sobre fundo claro */
--accent: #c9a84c;  /* dourado — destaque, links ativos, hover */
--accent2:#e8c97a;  /* dourado mais claro — hover de títulos */
--light:  #f5f3ef;  /* fundo claro (bege) das seções de conteúdo */
--muted:  #8a96a8;  /* texto secundário/legendas */
--white:  #ffffff;
--radius: 4px;       /* border-radius padrão de cards/boxes */
```

## Tipografia

- Google Fonts: `Playfair Display` (400/600/700) para títulos (`h1`, `h2`, logo) e
  `DM Sans` (300/400/500) para corpo de texto. Sempre carregadas via `<link>` no `<head>`,
  com `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`.
- `h1`/`h2`/logo usam `font-family: 'Playfair Display', serif`.
- Corpo (`body`) usa `font-family: 'DM Sans', sans-serif`.

## Componentes recorrentes

- **Nav fixa** (`<nav>`): logo "Vitor." (com `.` em `--accent`), links de navegação
  (`Sobre`, `Atuação`, `Certificados`, `Projetos`, `Blog`, `Contato` — sempre apontando para
  `index.html#âncora` ou para as outras páginas), hamburger mobile (`.hamburger` + JS
  `toggleMenu()` que alterna `.open` em `#navLinks`). Em páginas dentro de `blog/`, os links usam
  `../` no início (ex: `../index.html`, `../blog.html`).
- **Hero de página** (`.page-hero` em listagens, `.post-hero` em posts): fundo `--navy`,
  gradiente radial + grid sutil de fundo, tag pill (`.page-hero-tag` / `.post-category-tag`)
  com borda dourada.
- **Pills/tags** (`.pill`): fundo `--light`, texto `--blue`, `border-radius: 99px` — usadas para
  categorias/tags de posts.
- **Footer**: sempre igual — fundo `--navy`, logo à esquerda, copyright à direita
  (`&#169; 2026 · Product Manager · São José dos Campos, SP`).
- **Cards** (`.post-card` em `blog.html`): fundo branco, borda sutil, `border-left` dourado no
  `.card-content`, hover com `box-shadow`.

## Padrões de SEO/estrutura de `<head>` (obrigatórios em toda página nova)

Toda página (e especialmente todo post) inclui:
- `<title>`, `meta description`, `meta keywords`, `meta author`, `meta robots`, `link rel="canonical"`
- Open Graph completo (`og:type`, `og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale`)
- Twitter card (`twitter:card`, `twitter:title`, `twitter:description`)
- Um ou mais blocos `<script type="application/ld+json">` com Schema.org apropriado
  (`BlogPosting` + `BreadcrumbList` para posts, `Blog` para a listagem)

Não pule esses blocos ao criar conteúdo novo — são o que mantém o SEO do site consistente.
