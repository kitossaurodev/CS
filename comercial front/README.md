# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

📂 /project-root
│
├── 📂 public                   # Arquivos públicos acessíveis no frontend
│   ├── index.html              # Arquivo principal onde o React será injetado
│   ├── favicon.ico             # Ícone do site
│
├── 📂 src                      # Código-fonte principal
│   ├── 📂 assets               # Arquivos estáticos (imagens, ícones, etc.)
│   │   ├── /images             # Imagens usadas no projeto
│   │   ├── /icons              # Ícones personalizados ou SVGs
│   │   └── /fonts              # Fontes personalizadas (se necessário)
│   │
│   ├── 📂 components/ui         # Componentes de UI reutilizáveis
│   │   ├── Button.jsx          # Botão reutilizável
│   │   ├── Modal.jsx           # Componente de Modal
│   │   ├── Card.jsx            # Componente de Card
│   │   ├── Input.jsx           # Componente de Input
│   │   └── Loader.jsx          # Animação de carregamento
│   │
│   ├── 📂 components/layouts    # Layouts principais do app
│   │   ├── MainLayout.jsx      # Layout principal com sidebar e header
│   │   └── AuthLayout.jsx      # Layout para páginas de login/registro
│   │
│   ├── 📂 components/navigation # Componentes de navegação
│   │   ├── Sidebar.jsx         # Sidebar (menu fixo para navegação)
│   │   ├── Navbar.jsx          # Barra de navegação superior
│   │   └── Breadcrumbs.jsx     # Breadcrumbs para indicar a navegação atual
│   │
│   ├── 📂 features              # Componentes específicos de funcionalidades
│   │   ├── /auth               # Sistema de autenticação
│   │   │   ├── LoginPage.jsx        # Página de login
│   │   │   ├── RegisterPage.jsx     # Página de registro
│   │   │   └── AuthService.js       # API de autenticação
│   │   ├── /user                # Funcionalidades relacionadas ao usuário
│   │   │   ├── UserPage.jsx     # Página de perfil do usuário
│   │   │   ├── UserEditForm.jsx # Formulário de edição de perfil
│   │   │   └── UserService.js   # API para usuários
│   │   ├── /dashboard           # Painel principal do sistema
│   │   │   ├── DashboardPage.jsx  # Página do Dashboard
│   │   │   ├── StatsCard.jsx     # Card de estatísticas no Dashboard
│   │   │   ├── DashboardChart.jsx # Gráfico do Dashboard
│   │   │   └── DashboardService.js # API para dados do Dashboard
│   │
│   ├── 📂 pages                  # Páginas principais do SaaS
│   │   ├── Home.jsx              # Página inicial
│   │   ├── About.jsx             # Página "Sobre"
│   │   ├── NotFound.jsx          # Página de erro 404
│   │
│   ├── 📂 router                 # Gerenciamento de rotas
│   │   ├── routes.js             # Arquivo que define as rotas do React Router
│   │
│   ├── 📂 styles                 # Estilos globais do projeto
│   │   ├── globals.css           # Estilos globais
│   │   ├── tailwind.css          # Arquivo base para Tailwind
│   │
│   ├── 📂 utils                  # Funções e helpers reutilizáveis
│   │   ├── api.js                # Configuração geral de chamadas à API
│   │   ├── constants.js          # Constantes globais (ex: URLs de API)
│   │   ├── formatters.js         # Funções para formatação (ex: datas, números)
│   │   ├── hooks.js              # Custom Hooks do React
│   │
│   ├── App.jsx                   # Componente principal do React
│   ├── index.jsx                 # Ponto de entrada da aplicação
│
├── tailwind.config.js            # Configuração do Tailwind
├── postcss.config.js             # Configuração do PostCSS
├── package.json                  # Gerenciamento de dependências
├── vite.config.js                 # Configuração do Vite
└── .eslintrc.js   
