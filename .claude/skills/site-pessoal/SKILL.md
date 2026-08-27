---
name: site-pessoal
description: Fluxo completo de manutenção do site pessoal de Vitor Azevedo (portfólio + blog sobre carreira, gestão de produto e tecnologia), hospedado como HTML estático no GitHub Pages. Use esta skill sempre que o usuário pedir para escrever, publicar ou revisar um post do blog; adicionar, editar ou remover conteúdo em index.html ou projetos.html (sobre, atuação, certificados, contato, projetos); mexer em blog.html, sitemap.xml, CNAME ou qualquer outra página do site; ou fazer deploy/publicar mudanças no site. Dispare mesmo que o usuário não use a palavra "skill" — por exemplo "escreve um post sobre X para o blog", "atualiza meu portfólio com esse novo certificado", "sobe essa mudança pro site", "cria uma página nova de projeto".
---

# Site pessoal — portfólio + blog

Site 100% HTML/CSS/JS estático (sem framework, sem build step), hospedado via GitHub Pages
(branch `main`, root) no domínio `vitorbazevedo.com` (ver `CNAME`). **Qualquer push na `main`
publica direto em produção** — não existe ambiente de staging.

Antes de qualquer edição, leia [references/design-system.md](references/design-system.md) — ele
documenta a paleta de cores, tipografia e os componentes recorrentes (nav, hero, footer, pills)
que TODA página do site reutiliza. O maior risco ao editar este site não é lógica quebrada, é
inconsistência visual: cada página carrega seu próprio `<style>` inline copiado das outras, então
uma cor ou espaçamento "quase igual" que você inventar vai destoar visivelmente das demais
páginas. Sempre copie de uma página existente em vez de estilizar do zero.

## 1. Escrever e publicar um novo post do blog

Um post novo toca em **4 arquivos**. Esquecer algum deles é o erro mais comum neste fluxo —
trate a lista abaixo como um checklist, não como sugestões soltas:

1. **Conteúdo do post** — reúna com o usuário (ou proponha um rascunho, se ele já deu o tema):
   - Título e um "headline" (pode ser igual ou uma variação mais longa/SEO-friendly do título)
   - Categoria: uma das existentes — `Gestão de Produto` (filtro `gestao`), `Agilidade`
     (`agilidade`), `Carreira` (`carreira`), `IA e Produto` (`ia`) — ou uma nova, se o tema não
     couber em nenhuma (nesse caso é preciso também adicionar um novo `<button class="filter-btn">`
     em `blog.html`, ver passo 3)
   - 2-4 tags específicas (viram tanto os `.pill` visuais quanto o `keywords` do JSON-LD)
   - Excerpt (1-2 frases, aparece em destaque no topo do post e como subtítulo do card na
     listagem)
   - Corpo em `<h2>`/`<p>`/`<strong>` (sem novos estilos — o `.article-body` do template já
     estiliza esses elementos)
   - Data de publicação e tempo de leitura estimado (conte ~200 palavras/min como referência)
   - Sempre escreva em português, no tom das pessoas que já escreveram os posts existentes:
     primeira pessoa, direto, com opinião própria — não é conteúdo genérico de marketing.

2. **Criar `blog/<slug>.html`** a partir de
   [templates/blog-post-template.html](templates/blog-post-template.html). O slug é o título em
   kebab-case sem acentos (ex: "IA generativa no dia a dia" → `ia-generativa-dia-a-dia-produto`).
   Preencha todos os placeholders `{{...}}` — não deixe nenhum para trás, incluindo os dois blocos
   JSON-LD (`BlogPosting` e `BreadcrumbList`) e as tags `article:tag` de Open Graph (uma linha por
   tag). Consulte um post existente em `blog/` para ver exatamente como cada placeholder deve ficar
   preenchido no HTML final.

3. **Atualizar `blog.html`**:
   - Adicione um novo bloco `<div class="post-card reveal" data-tags="...">` na seção
     `.posts-section`, seguindo o post existente como modelo. `data-tags` deve bater com o valor do
     filtro (`gestao`/`agilidade`/`carreira`/`ia`/novo).
   - Se a categoria for nova, adicione também um `<button class="filter-btn" onclick="filterCards('...', this)">`
     na `.filter-bar`.
   - Atualize o número em `<strong id="countDisplay">` para refletir o total de posts.
   - Adicione uma entrada correspondente ao array `blogPost` dentro do `<script type="application/ld+json">`
     (`@type: Blog`) no `<head>`.

4. **Atualizar `sitemap.xml`**: adicione um `<url>` novo para `https://vitorbazevedo.com/blog/<slug>.html`
   com `<lastmod>` na data de publicação (formato `YYYY-MM-DD`), `changefreq` `monthly` e
   `priority` `0.7` (mesmo padrão do post existente).

Depois de criar/editar os 4 arquivos, mostre um resumo do que mudou e siga para a seção
**Deploy** abaixo — não faça `git push` sem essa confirmação.

## 2. Editar o portfólio (`index.html`, `projetos.html`)

Essas páginas não têm um processo passo a passo fixo como o blog — são edições diretas de
conteúdo (texto, um novo certificado, um novo projeto, ajuste de bio, etc.). O que importa:

- Edite dentro da estrutura de seções existente (`#about`, `#services`, `#certs`, `#contact` em
  `index.html`; os cards de projeto em `projetos.html`) em vez de criar seções novas do zero,
  a menos que o usuário peça explicitamente uma seção nova.
- Reaproveite os componentes documentados em `references/design-system.md` (cards, pills, hero)
  — não crie um componente visual novo para um caso que já tem um padrão equivalente na página.
  Imagens novas (ex: um novo certificado) devem seguir o padrão de tamanho/proporção das imagens
  já usadas na mesma seção.
- Depois de editar, confira rapidamente se os links de navegação (`nav`) de todas as páginas
  continuam consistentes entre si — eles são duplicados em cada arquivo, então uma mudança no
  menu (novo item, renomear algo) precisa ser replicada manualmente em `index.html`,
  `projetos.html`, `blog.html` e em todo arquivo dentro de `blog/`.

## 3. Deploy

Não há build nem CI: **o deploy é o próprio `git push` para `main`**, e o GitHub Pages publica em
minutos. Isso significa que qualquer push é uma publicação em produção — trate como uma ação que
precisa de confirmação explícita do usuário no chat antes de executar, mesmo que ele tenha pedido
"publica isso" de forma geral (confirme o que exatamente vai ser publicado: quais arquivos, resumo
das mudanças).

Fluxo:
```bash
git add -A
git commit -m "mensagem descrevendo a mudança"
git push origin main
```

Depois do push, informe o usuário que a mudança deve aparecer em `https://vitorbazevedo.com/`
(ou `https://viitorazevedo.github.io/`) em alguns minutos, sem necessidade de nenhum outro passo.
