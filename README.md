<p align="center">
  <img src="public/img/logo.png" alt="Moraes Eletroclimatização" width="200" />
</p>

<h1 align="center">🌀 Moraes Eletroclimatização</h1>

<p align="center">
  <strong>Site institucional moderno para empresa de climatização e serviços elétricos</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-estrutura">Estrutura</a> •
  <a href="#-instalação">Instalação</a> •
  <a href="#-scripts">Scripts</a> •
  <a href="#-deploy">Deploy</a>
</p>

---

## 📋 Sobre

Landing page profissional desenvolvida para a **Moraes Eletroclimatização**, empresa especializada em instalação, manutenção e limpeza de ar condicionado, além de serviços elétricos residenciais e comerciais. O site foi projetado com foco em **conversão** e **experiência do usuário**, facilitando o contato via WhatsApp.

### 🎯 Objetivo

Criar uma presença digital profissional que transmita confiança e facilite a captação de novos clientes através de formulários integrados diretamente com o WhatsApp.

---

## ✨ Funcionalidades

### 🏠 Seções do Site

- **Header** — Navegação fixa com menu responsivo e logo da empresa
- **Hero** — Banner principal com chamada de ação e botões de contato
- **Quick Contact** — Formulário rápido de orçamento integrado ao WhatsApp
- **Serviços** — Cards dos serviços oferecidos (AC e Elétrica)
- **Sobre** — Informações sobre a empresa e diferenciais
- **Contato** — Formulário completo + informações de contato
- **Footer** — Links úteis e redes sociais

### 💬 Integração WhatsApp

- **Formulário inteligente** — Envia mensagem formatada diretamente para o WhatsApp
- **Botão flutuante** — Acesso rápido ao WhatsApp em qualquer página
- **Sem necessidade de telefone** — O WhatsApp identifica automaticamente o remetente

### 📱 Design Responsivo

- Layout adaptável para desktop, tablet e mobile
- Animações suaves e interações modernas
- Cores personalizadas da marca (azul e laranja)

---

## 🛠 Tecnologias

| Tecnologia                                    | Versão | Descrição                                |
| --------------------------------------------- | ------ | ---------------------------------------- |
| [React](https://react.dev/)                   | 19.2.0 | Biblioteca para construção de interfaces |
| [TypeScript](https://www.typescriptlang.org/) | 5.9    | Superset JavaScript com tipagem estática |
| [Vite](https://vitejs.dev/)                   | 7.2    | Build tool ultrarrápida                  |
| [Tailwind CSS](https://tailwindcss.com/)      | 3.4    | Framework CSS utility-first              |
| [Lucide React](https://lucide.dev/)           | 0.562  | Biblioteca de ícones                     |
| [ESLint](https://eslint.org/)                 | 9.39   | Linter para qualidade de código          |

---

## 📁 Estrutura

```
moraes-site/
├── public/
│   └── img/                    # Imagens e assets
├── src/
│   ├── Components/
│   │   ├── About/              # Seção "Sobre Nós"
│   │   ├── Card/               # Cards de serviços
│   │   ├── Contact/            # Formulário de contato
│   │   ├── Footer/             # Rodapé
│   │   ├── Header/             # Navegação
│   │   ├── Hero/               # Banner principal
│   │   ├── QuickContact/       # Formulário rápido
│   │   └── WhatsAppIcon/       # Ícone customizado
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Ponto de entrada
│   └── index.css               # Estilos globais
├── index.html                  # HTML base
├── tailwind.config.js          # Configuração do Tailwind
├── vite.config.ts              # Configuração do Vite
├── tsconfig.json               # Configuração do TypeScript
└── package.json                # Dependências e scripts
```

---

## 🚀 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/moraes-site.git

# 2. Acesse a pasta do projeto
cd moraes-site

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm start
```

O site estará disponível em `http://localhost:5173`

---

## 📜 Scripts

| Comando           | Descrição                               |
| ----------------- | --------------------------------------- |
| `npm start`       | Inicia o servidor de desenvolvimento    |
| `npm run build`   | Gera a versão de produção em `/dist`    |
| `npm run preview` | Preview da versão de produção           |
| `npm run lint`    | Executa o ESLint para análise de código |

---

## 🎨 Cores da Marca

| Cor             | Hex       | Uso                                 |
| --------------- | --------- | ----------------------------------- |
| 🔵 Brand Blue   | `#0066cc` | Botões, links, destaques principais |
| 🟠 Brand Orange | `#ff8800` | CTAs, elementos de ação             |
| 🌑 Brand Dark   | `#0f172a` | Textos, fundos escuros              |
| ⬛ Brand Darker | `#020617` | Header, elementos premium           |

---

## 🌐 Deploy

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Opções de Hospedagem

- **[Vercel](https://vercel.com/)** — Deploy automático com Git
- **[Netlify](https://www.netlify.com/)** — CI/CD integrado
- **[GitHub Pages](https://pages.github.com/)** — Gratuito para projetos públicos
- **Hospedagem tradicional** — Basta fazer upload da pasta `dist/`

---

## 📞 Contato da Empresa

| Canal          | Informação                                                                         |
| -------------- | ---------------------------------------------------------------------------------- |
| 📱 WhatsApp    | [(18) 99617-9881](https://wa.me/5518996179881)                                     |
| 📷 Instagram   | [@moraes.eletroclimatizacao](https://www.instagram.com/moraes.eletroclimatizacao/) |
| 📍 Localização | Birigui - SP                                                                       |

---

## 📄 Licença

Este projeto é privado e foi desenvolvido exclusivamente para **Moraes Eletroclimatização**.

---

<p align="center">
  Desenvolvido com ❄️ e ⚡ por <strong>Luan G.</strong>
</p>
