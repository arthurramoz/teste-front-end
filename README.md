# 🛒 Teste Econverse - E-commerce Front-End

Projeto desenvolvido como teste técnico para a vaga de **Desenvolvedor Front-End** na [Econverse](https://www.econverse.com.br/).

A aplicação é uma landing page de e-commerce construída com **React**, **TypeScript** e **Next.js**, seguindo fielmente o layout do Figma proposto.

### 🌐 [Demo ao Vivo (Vercel)](https://teste-front-end-livid.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** `v15.0.5` — Framework React com SSR
- **[React](https://react.dev/)** `v18` — Biblioteca de UI
- **[TypeScript](https://www.typescriptlang.org/)** `v5` — Tipagem estática
- **[Styled Components](https://styled-components.com/)** `v6` — CSS-in-JS (pré-processador)
- **[Axios](https://axios-http.com/)** — Requisições HTTP
- **[React Icons](https://react-icons.github.io/react-icons/)** — Ícones
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** — Notificações

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/products/     # API Route para servir os produtos (JSON)
│   ├── layout.tsx         # Layout raiz com fontes e SEO
│   └── page.tsx           # Página principal com HTML semântico
├── components/
│   ├── Banner/            # Seção hero/banner principal
│   ├── Categories/        # Grid de categorias
│   ├── RelatedProducts/   # Vitrine de produtos (API)
│   ├── Partners/          # Cards de parceiros
│   ├── Brands/            # Logos das marcas
│   ├── Footer/            # Rodapé com newsletter
│   ├── ProductModal/      # Modal de detalhes do produto
│   ├── Pages/             # Componentes globais (Center, etc.)
│   └── Providers/         # ThemeProvider e StyledRegistry
└── public/
    ├── banner/            # Imagens dos banners
    ├── logo/              # Logo SVG
    └── products/          # Imagens dos produtos
```

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- **Node.js** `v18+`
- **Yarn** `v1.22+` (ou npm)

### 1. Clone o repositório

```bash
git clone https://github.com/arthurramoz/teste-front-end.git
cd teste-front-end
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```bash
cp .env.example .env
```

### 4. Rode o projeto em modo desenvolvimento

```bash
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### 5. Build de produção

```bash
yarn build
yarn start
```

---

## 🧪 Testes e Verificação

### Lint

```bash
yarn lint
```

### Verificação de tipos TypeScript

```bash
npx tsc --noEmit
```

---

## 📋 Funcionalidades Implementadas

- ✅ Layout pixel-perfect seguindo o Figma
- ✅ **Vitrine de produtos** consumindo dados da API JSON
- ✅ **Modal de produto** ao clicar em um item, com informações detalhadas e seletor de quantidade
- ✅ **Seções**: Banner, Categorias, Produtos Relacionados, Parceiros, Marcas, Footer
- ✅ **Newsletter** com input e botão de inscrição no footer
- ✅ **Responsivo** para diferentes tamanhos de tela
- ✅ **HTML semântico** (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ **SEO** otimizado (meta tags, Open Graph, keywords, robots)
- ✅ **Styled Components** como pré-processador CSS
- ✅ **Sem bibliotecas UI** (Bootstrap, Foundation, etc.)

---

## 📐 Especificações Técnicas Atendidas

| Requisito | Status |
| :--- | :---: |
| React + TypeScript | ✅ |
| Layout conforme Figma | ✅ |
| Vitrine consumindo JSON via API | ✅ |
| Modal ao clicar no produto | ✅ |
| Pré-processador CSS (Styled Components) | ✅ |
| Layout pixel a pixel | ✅ |
| Sem bibliotecas UI | ✅ |
| Boas práticas de SEO | ✅ |
| HTML semântico | ✅ |

---

## 👤 Autor

**Arthur Ramos**

---
