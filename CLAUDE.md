# Portfólio pessoal

Portfólio do Pedro Henrique Santos de Jesus — desenvolvedor fullstack, Salvador/BA.
Formado em ADS pelo SENAI, cursando Ciência da Computação na UNIFACS (3º semestre).
Vem do design gráfico, hoje trabalha com React, TypeScript, Next.js e PostgreSQL
(via Supabase).

O site se posiciona como **fullstack**, não front-end. O que sustenta isso é o
FinDash (Next.js + Supabase/PostgreSQL, modelagem própria das tabelas). Ao
escrever texto novo, não voltar para "front-end".

Links usados no site (trocar aqui e no `index.html` juntos):

| O que      | Onde                                                      |
|------------|-----------------------------------------------------------|
| E-mail     | pedrorik43@gmail.com                                       |
| GitHub     | github.com/P3DR020                                         |
| LinkedIn   | /in/pedro-henrique-santos-de-jesus-8134192ab               |
| FinDash    | fin-dash-ashen.vercel.app — Next.js, controle financeiro    |
| Hi-Man     | himanestamparia.com.br — React + Vite, e-commerce          |

Telefone **não** vai no site (decisão do Pedro, evitar spam).
Instagram também não — o botão foi removido por falta de perfil.

Site estático de página única. Sem framework, sem build, sem dependência de npm.
Só HTML, CSS e JavaScript nativo.

## Como rodar

Precisa de um servidor local — o JS usa ES modules, que o navegador bloqueia em `file://`.

- VS Code: extensão **Live Server**, botão "Go Live".
- Ou: `python3 -m http.server 5500` e abrir `http://localhost:5500`.

Abrir o `index.html` clicando duas vezes **não funciona**.

## Estrutura

```
.
├── index.html              # todo o conteúdo; nenhum estilo ou script inline
├── CLAUDE.md
├── assets/
│   └── img/                # perfil.svg (trocar pela foto real), og-image, favicon
├── css/
│   ├── main.css            # só @imports, na ordem certa — não escrever regra aqui
│   ├── tokens.css          # paleta, fontes, medidas (única fonte de hex)
│   ├── base.css            # reset, tipografia global, .reveal, reduced-motion
│   ├── layout.css          # header, nav, drawer, <section>, footer, barra de progresso
│   ├── components.css      # .btn e .chip (usados em mais de uma seção)
│   └── sections/
│       ├── hero.css        # primeira dobra, avatar, animação do nome
│       ├── about.css
│       ├── stack.css       # marquee infinito
│       ├── career.css
│       ├── projects.css
│       └── contact.css
└── js/
    ├── main.js             # importa e liga os módulos + array ROLES
    └── modules/
        ├── motion.js       # exporta `reduced` (prefers-reduced-motion)
        ├── hero-text.js    # linha de terminal, nome letra a letra, cargos rotativos
        ├── particles.js    # canvas do fundo do hero
        ├── reveal.js       # IntersectionObserver do scroll
        ├── marquee.js      # duplica as faixas de tecnologia
        ├── counter.js      # contador de anos
        ├── nav.js          # progresso, header, scrollspy, menu mobile
        └── experience.js   # botão "mostrar mais"
```

Onde mexer, por tipo de mudança:

| Mudança                        | Arquivo                      |
|--------------------------------|------------------------------|
| Cor, fonte, espaçamento padrão | `css/tokens.css`             |
| Aparência de uma seção         | `css/sections/<seção>.css`   |
| Texto, links, projetos         | `index.html`                 |
| Cargos que giram no hero       | `js/main.js` (`ROLES`)       |
| Comportamento novo             | novo módulo em `js/modules/` |

## Paleta

Definida em `css/tokens.css`. Sempre usar a variável, nunca o hex direto.

| Token           | Hex       | Uso                                        |
|-----------------|-----------|--------------------------------------------|
| `--bg`          | `#08090b` | fundo da página                             |
| `--bg-soft`     | `#0f1114` | chips, tags, superfícies um degrau acima    |
| `--line`        | `#1e2126` | bordas e divisórias                         |
| `--txt`         | `#e8e6e3` | texto principal                             |
| `--txt-dim`     | `#8b9099` | texto secundário, labels, legendas          |
| `--accent`      | `#ffb454` | âmbar de terminal — a única cor viva        |
| `--accent-soft` | `rgba(255,180,84,.12)` | preenchimento de hover         |
| `--ok`          | `#4ade80` | status "disponível"                         |

Tipografia: `--display` (Bricolage Grotesque) só em títulos e no nome; `--mono` (JetBrains Mono) em todo o resto.

Exceção conhecida: `js/modules/particles.js` tem o âmbar em `ACCENT = '255,180,84'` porque o canvas não lê variável CSS. Ao mudar `--accent`, mudar lá também.

## Regras

- Zero dependências. Nada de npm, CDN de biblioteca, bundler ou framework.
- Sem `<style>` ou `style=""` no HTML, e sem `<script>` inline. Tudo em arquivo.
- Um módulo JS = um comportamento, com `export function init...()`. `main.js` só orquestra.
- Animação nova precisa checar `reduced` (JS) ou estar coberta por `prefers-reduced-motion` (CSS).
- Testar em 375px de largura antes de considerar pronto.
- Manter `main.css` só com imports; a ordem dos imports importa.

## Conteúdo

Português do Brasil, tom direto e informal. Sem linguagem de marketing, sem "apaixonado por tecnologia", "soluções inovadoras", "excelência".
Descrição de projeto: uma ou duas frases sobre o problema que ele resolve e o desafio técnico. Não listar features.

## Não fazer sem eu pedir

- Trocar a paleta ou as fontes.
- Adicionar seções novas.
- Reescrever a animação de partículas — está calibrada para não pesar no celular
  (contagem ligada à largura, teto de 70 pontos, DPR limitado a 2, pausa com a aba oculta).
- Converter para React, Next, Astro ou qualquer coisa com build.

## Estado do trabalho

Última atualização: 08/09/2026.

### Feito

**Estrutura reconstruída.** O repositório tinha só 5 arquivos na raiz: `index.html`
apontava para `css/main.css` e `js/main.js`, que não existiam, e `main.js`
importava 7 módulos ausentes — o site abria sem estilo e com o script quebrado.
`tokens.css` e `main.js` foram movidos para `css/` e `js/`, e os 9 arquivos CSS
e 8 módulos JS descritos neste documento foram escritos do zero.

**Conteúdo.** Todos os placeholders do template foram substituídos: nome, logo,
`<title>`, meta description, e-mail, GitHub, LinkedIn, os dois projetos, os chips
de stack, os fatos do "sobre", a seção de carreira e o `ROLES`.

Decisões de conteúdo que valem registrar:

- A seção **Carreira** virou "Formação e experiência": não há emprego CLT
  para listar, então ela cobre os projetos entregues, as duas formações e o
  design gráfico. Dois blocos ficam atrás do "mostrar mais".
- O contador deixou de ser "anos de código profissional" e passou a ser
  "projetos em produção" (`data-count="2"`), que é verificável.
- Textos que prometiam o que não dá para sustentar saíram: "APIs que aguentam
  o tranco", "sistemas usados por centenas de pessoas", "respondo em até 24h".
- Os chips de stack só listam o que existe em projeto entregue. Django, AWS,
  Nginx e Docker, que vinham do template, foram removidos — **não repor esses
  quatro**. Node.js, Tailwind, MySQL e REST APIs também saíram, por não terem
  projeto que os sustente; voltam se houver um. PostgreSQL fica: o FinDash usa
  Supabase, que é PostgreSQL de verdade.

  Faixa 1 (front): TypeScript · JavaScript · React · Next.js · Vite · HTML5 · CSS3
  Faixa 2 (dados e ferramentas): PostgreSQL · Supabase · SQL · Java · Git ·
  Vercel · Figma · Photoshop

**Reposicionamento para fullstack (08/09/2026).** Os textos de
`textos-portfolio_1.md` (versão 3) foram aplicados: hero, "sobre", carreira,
projetos, contato, `ROLES` e os chips de stack. A ficha técnica do "sobre"
trocou a linha única "Stack" por duas — "Front" e "Dados". O card do FinDash
passou a citar Supabase e PostgreSQL. A meta description acompanhou.

**Foto de perfil.** `assets/img/perfil.jpg` é um recorte quadrado (560×560, 55 KB)
feito a partir de `assets/img/perfil-original.jpg`, que é a foto de corpo inteiro
que o Pedro mandou. O avatar do hero é um círculo com `object-fit:cover`: a
original em 3:4 entrava cortando a cabeça, por isso o recorte fechado no rosto.
Para reenquadrar, recortar de novo a partir da original — ela foi mantida só
para isso e não é carregada pelo site. O `perfil.svg` continua na pasta como
referência do placeholder antigo; pode ser apagado.

**As partículas foram escritas do zero.** A regra abaixo pede para não reescrever
`particles.js` por estar calibrado, mas o arquivo nunca existiu no repositório.
Se houver uma versão original em algum lugar, ela vale mais que a atual.

### Em aberto

- **Instagram.** Botão removido do contato por falta de perfil; devolver se
  o Pedro passar o link.
- **Terceiro projeto.** A seção tem dois cards. Candidatos nos repos:
  `MeuTreino`, `PlannerFinanceiro`, `DoceLua`, `PetShop`.
- **Teste em 375px.** A regra do projeto pede; ainda não foi feito em navegador real.
- **Perguntas que o rótulo "fullstack" atrai.** `textos-portfolio_1.md` termina
  com uma lista delas (por que Supabase e não API própria, como estão as
  tabelas do FinDash, Row Level Security, como o fechamento mensal funciona,
  quantos usuários reais). São para o Pedro se preparar, não tarefa de código —
  mas se alguma resposta não se sustentar, o texto correspondente muda.
- **Git.** A pasta já é um repositório git, com histórico — mudanças são
  reversíveis por commit.

