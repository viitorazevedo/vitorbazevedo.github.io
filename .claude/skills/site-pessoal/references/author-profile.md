# Perfil do autor — Vitor Azevedo

Mapeado a partir do LinkedIn do autor e de correções reais feitas em cima de rascunhos anteriores
(ver [example-posts/](example-posts/)). Leia isto **antes** de escrever qualquer rascunho — é o
que separa um texto genérico de PM de um texto que soa como o autor de verdade.

## Trajetória (o ativo mais forte para storytelling)

Não é um PM "de carreira acadêmica". Veio do varejo e vendas técnicas (UZ Games, Sodimac, Houter,
Premium Store, ~2011–2018) e migrou para gestão de projetos/produtos a partir de 2018
(Epta → Tria Software → Konatus → Buson → Spread). Isso significa que ele entende o cliente final
porque já vendeu para ele, não só porque leu sobre persona em um curso — é um diferencial real
frente a PMs generalistas que nunca pisaram num balcão de loja. Use essa trajetória como fonte de
exemplos concretos sempre que fizer sentido, em vez de falar de "experiência em produto" de forma
abstrata.

## Especialização (pilar central, não linha de currículo)

Segurança digital: biometria facial, biometria comportamental, KYC, motores de decisão antifraude
(experiência recente em Spread / Casas Bahia Pay). É um nicho técnico específico dentro de
produto — a maioria dos PMs generalistas não fala essa língua. Ao escrever sobre qualquer tema
(backlog, agilidade, IA, mercado), procure uma analogia natural com esse domínio quando ela
realmente esclarecer o ponto — é um padrão de voz recorrente do autor, não um enfeite (ver seção
"Padrões estruturais" abaixo). Não force a analogia se não houver uma ligação genuína com o tema.

## Certificações e formação

CSPO® (Scrum), CLB® (LeSS), KMP (Kanban), PM3 — cobre os três grandes frameworks ágeis (Scrum,
LeSS, Kanban), o que é raro (a maioria certifica só em um). Também citado: título de "AI Builder"
no LinkedIn, uso diário de GitHub Copilot e BMad, e uma pós-graduação em IA e Negócios em
andamento — esse é o ângulo mais atual (2026) para textos sobre tendências de mercado e IA.

## Pilares de conteúdo do blog

Os posts giram em torno de:
1. Gestão de produto e metodologias ágeis (Scrum, LeSS, Kanban) na prática
2. Mercado de trabalho de quem constrói produtos digitais
3. IA generativa aplicada ao dia a dia de produto (não IA em abstrato — sempre ancorada em uso
   real: descoberta de requisitos, artefatos de planejamento, prototipagem)
4. Tendências de mercado

Todo tema deve render um ângulo prático e específico dentro de um desses pilares, não um resumo
enciclopédico do assunto.

## Regras de voz (extraídas de correções reais do autor em cima de rascunhos)

Estas são correções que o próprio autor já fez em texto gerado por IA. Aplique-as desde a
primeira versão do rascunho — não espere o `editor` corrigir isso depois:

1. **Menos travessão, mais frase curta.** Evite "—" para conectar ideias. Quebre em frases
   separadas por ponto. É mais direto de ler.
2. **Precisão sobre exagero de competência.** O autor é PM com conhecimento técnico intermediário,
   não desenvolvedor. Prefira "sei interagir o suficiente [com IA/código]" a "sei programar" — não
   infle o nível técnico dele.
3. **Termos abertos, não nicho, quando o público é amplo.** "Antifraude" → "segurança digital";
   "PM" → "pessoas de produto". Evite sigla e jargão técnico de nicho quando o texto não é
   especificamente para outros PMs de antifraude.
4. **Presente perfeito para aprendizado em andamento.** "Tenho aprendido a analisar e estressar"
   em vez de "aprendi a desconfiar" — comunica processo contínuo, não conclusão fechada. Prefira
   também o termo mais específico ("estressar"/stress-test) ao mais genérico ("desconfiar").
5. **Fechamento coletivo, não individual.** Os textos tendem a terminar abrindo o olhar para o
   coletivo ("nós, humanos, continuamos validando"), não fechando no indivíduo ("eu continuo
   validando"). É uma marca de voz — feche seções finais nessa direção quando o tema permitir.
6. **Perguntas diretas em vez de afirmações fechadas**, principalmente perto do fim de uma seção.
   "Temos uma proposta de valor aqui? Podemos seguir para validá-la?" em vez de "o time deveria
   ajustar X" — tom socrático, convida a decidir junto em vez de apontar o próximo passo.
7. **Títulos abrangentes, não hiper-específicos.** "Quem gerencia produto" → "quem trabalha com
   produtos digitais" — abre o público-alvo em vez de restringir a um cargo.

## Padrões estruturais (dos posts já publicados)

Os dois posts em [example-posts/](example-posts/) e o post real em `blog/` seguem a mesma
espinha dorsal. Use como modelo de estrutura, não copie o conteúdo:

1. **Abertura com cena/problema concreto**, geralmente ligado a uma empresa ou momento real da
   trajetória do autor ("Foi assim que encontrei o backlog na Konatus...").
2. **Uma seção (H2) com analogia do domínio de segurança digital/antifraude**, quando genuína,
   traduzindo o conceito do post para esse domínio e de volta.
3. **Uma ou duas seções (H2) de conteúdo prático**, muitas vezes em lista, com exemplos nomeados
   (empresas, ferramentas, situações reais) em vez de genéricos.
4. **Seção final que reflete e abre**, não resume. Termina com uma tensão ou pergunta em aberto,
   não com uma conclusão arredondada tipo "em resumo, X é importante".

## Formato de referência no topo do rascunho (fonte: como o autor edita localmente)

Ao trocar rascunhos com o autor fora deste fluxo, ele usa este cabeçalho simples antes do título:

```
**Categoria:** Gestão de Produto
**Tags:** Backlog, Priorização
```

O `writer` não precisa reproduzir esse formato exato (o front-matter de
[draft-format.md](draft-format.md) já cobre a mesma informação de forma mais completa) — é só
para reconhecer o padrão caso o autor cole um rascunho nesse formato para ser processado.
