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

Esse fluxo é dividido em 4 subagentes especializados, cada um definido em `.claude/agents/` e
invocado com o Agent tool (`subagent_type` = nome do agente). Cada um lê e escreve o rascunho em
`_drafts/<slug>.md` — um formato Markdown intermediário com front-matter, documentado em
[references/draft-format.md](references/draft-format.md). O site publicado continua sendo HTML
puro; o Markdown existe só para dar aos agentes um formato leve para passar o texto entre si antes
da conversão final.

Ordem do pipeline:

1. **`writer`** — recebe o tema/outline que o usuário deu e escreve o primeiro rascunho completo
   em `_drafts/<slug>.md` (front-matter + corpo), lendo posts existentes para manter a voz.
2. **`editor`** — revisa gramática, clareza e tom do rascunho, mantendo a voz do autor. Não mexe
   nos campos de SEO.
3. **`seo-optimizer`** — ajusta título, meta description, keywords e headings para SEO, sem
   reescrever o conteúdo.
4. **`publisher`** — converte o rascunho final em `blog/<slug>.html` a partir de
   [templates/blog-post-template.html](templates/blog-post-template.html), atualiza `blog.html`
   (card novo, filtro se necessário, contador, JSON-LD) e `sitemap.xml`, apaga o rascunho publicado
   e faz o commit local. **Não dá `git push` sozinho.**

Rode os três primeiros em sequência sem parar para aprovação a cada etapa — são edições reversíveis
de um arquivo de rascunho que ainda não é público. Depois do `seo-optimizer`, mostre ao usuário o
resultado final (título, categoria, excerpt, meta description) antes de acionar o `publisher` — é
o último ponto fácil para pedir um ajuste antes do HTML ser gerado. Depois do `publisher`, siga
para a seção **Deploy** abaixo — o commit já existe localmente, mas o push continua exigindo
confirmação explícita.

Se o usuário já trouxer o post pronto (texto final, sem precisar de rascunho/revisão/SEO), pule
direto para o `publisher` — não force as outras etapas quando não fazem sentido.

Antes de começar um post novo do zero, vale checar `.claude/pmo/backlog.md` — pode ser que o tema
já esteja lá com um rascunho pendente de uma sessão anterior. Veja a seção 4 (**Governança**)
abaixo.

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

## 4. Governança do projeto (PMO)

O agente `pmo` (`.claude/agents/pmo.md`) mantém dois documentos em `.claude/pmo/`:
`backlog.md` (ideias de post e em que fase cada uma está) e `changelog.md` (histórico de
publicações, auditorias e decisões de projeto). Acione-o quando o usuário perguntar o que está
pendente, quiser registrar uma ideia nova, pedir uma checagem geral de consistência do site, ou
quiser um resumo do estado do projeto — não para escrever ou editar conteúdo em si.

O `pmo` não invoca os outros agentes diretamente (subagentes não encadeiam uns aos outros) — ele
só mantém o estado visível e aponta qual é o próximo passo do pipeline descrito na seção 1. Quem
segue a sequência `writer → editor → seo-optimizer → publisher` continua sendo você, guiado por
este SKILL.md.
