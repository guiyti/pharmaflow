# PharmaFlow - Sistema de Gerenciamento Farmacêutico 💊

<div align="center">

Sistema moderno e otimizado para gerenciamento de receitas médicas e operações farmacêuticas.

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC.svg)](https://tailwindcss.com/)

</div>

---

## 🚀 Melhorias Recentes

### ✨ Funcionalidades Principais

#### **Sidebar Inteligente com Auto-Hide**
- 🎯 **Auto-ocultar**: Se recolhe automaticamente quando você rola a página ou interage com o conteúdo
- 🖱️ **Expansão por proximidade**: Aproxime o mouse da borda esquerda (20px) para expandir automaticamente
- 📏 **Modo compacto**: Interface compacta (80px) que maximiza o espaço de trabalho
- 📱 **Responsivo**: Comportamento otimizado para desktop e mobile
- 🔘 **Toggle manual**: Botão sempre disponível para controle manual

#### **Arquitetura Refatorada**
- ⚡ Contexto global (`SidebarContext`) para gerenciamento de estado
- 🎣 Hooks customizados reutilizáveis
- 🧩 Componentes UI modulares e otimizados
- 🚀 Performance aprimorada com memoização

---

## 📁 Estrutura do Projeto

```
pharmaflow/
├── components/
│   ├── ui/                       # 🎨 Componentes reutilizáveis
│   │   ├── StatusBadge.tsx       # Badge de status com cores
│   │   ├── StatCard.tsx          # Card de estatísticas
│   │   ├── ActionButton.tsx      # Botões de ação
│   │   └── SearchInput.tsx       # Input de busca
│   ├── Header.tsx                # Cabeçalho da aplicação
│   └── Sidebar.tsx               # Sidebar inteligente
├── contexts/
│   └── SidebarContext.tsx        # 🔄 Estado global do sidebar
├── hooks/
│   ├── useClickOutside.ts        # 🖱️ Detecta cliques externos
│   ├── useDebounce.ts            # ⏱️ Debounce de valores
│   ├── useMediaQuery.ts          # 📱 Media queries responsivas
│   └── index.ts
├── pages/
│   ├── Dashboard.tsx             # 📊 Dashboard principal
│   ├── Login.tsx                 # 🔐 Tela de login
│   ├── RecipeList.tsx            # 📋 Lista de receitas
│   └── RecipeDetails.tsx         # 📄 Detalhes da receita
├── App.tsx                       # 🏠 Componente raiz
├── constants.tsx                 # 📦 Constantes e dados
└── types.ts                      # 🔷 Tipos TypeScript
```

---

## 🎨 Recursos de UI/UX

- ✅ **Design responsivo** com Tailwind CSS
- ✅ **Animações suaves** (300ms) e transições polidas
- ✅ **Feedback visual** em todas as interações
- ✅ **Acessibilidade** com aria-labels e navegação por teclado
- ✅ **Tema consistente** com sistema de cores primary
- ✅ **Modo dark** pronto (variáveis CSS)

---

## 🔧 Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React** | 19.2.1 | Framework UI |
| **TypeScript** | 5.8.2 | Tipagem estática |
| **React Router** | 7.10.0 | Navegação SPA |
| **Tailwind CSS** | - | Estilização |
| **Lucide React** | 0.555.0 | Ícones SVG |
| **Vite** | 6.2.0 | Build tool |

---

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Comandos

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

---

## 🎯 Funcionalidades do Sistema

### 📊 Dashboard
- Visão geral com métricas importantes (pedidos, estoque, receitas, clientes)
- Cards estatísticos com trending indicators
- Ações rápidas para operações comuns
- Tabela de receitas recentes a processar

### 📋 Gestão de Receitas
- Listagem completa com filtros por status
- Busca em tempo real por medicamento, médico ou paciente
- Detalhamento completo de cada receita
- Status visuais com cores diferenciadas
- Navegação intuitiva com breadcrumbs

### 🎛️ Sidebar Dinâmica

#### Desktop
- Auto-oculta ao rolar a página (delay: 150ms)
- Expande automaticamente quando mouse próximo à borda (≤20px)
- Recolhe quando mouse afasta (>280px, delay: 300ms)
- Largura: 256px (expandida) / 80px (recolhida)

#### Mobile
- Menu hambúrguer com backdrop semitransparente
- Slide-in animation suave
- Fecha ao clicar fora ou navegar

---

## 🚀 Otimizações Implementadas

### 1. **Performance** ⚡
```typescript
// Memoização de componentes
React.memo(Component)

// Cálculos otimizados
const value = useMemo(() => expensiveCalc(), [deps])

// Callbacks estáveis
const handler = useCallback(() => {}, [deps])
```

### 2. **Experiência do Usuário** 🎨
- Transições CSS suaves (300ms ease-in-out)
- Feedback visual imediato em todas as ações
- Estados de hover e active em botões
- Loading states preparados

### 3. **Manutenibilidade** 🛠️
- Código modular e reutilizável
- Tipagem forte com TypeScript
- Separação clara de responsabilidades
- Componentes autocontidos

---

## 📱 Responsividade

| Breakpoint | Pixels | Uso |
|------------|--------|-----|
| `sm` | 640px | Smartphones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Telas grandes |

### Características
- 📱 **Mobile First**: Design otimizado para dispositivos móveis
- 👆 **Touch-friendly**: Áreas de toque ≥44px
- 🔄 **Adaptativo**: Layout fluido que se ajusta automaticamente

---

## 🎨 Sistema de Cores

```css
/* Primary Colors */
--primary-50: #f0f9ff;
--primary-600: #0284c7;
--primary-700: #0369a1;

/* Slate Colors */
--slate-50: #f8fafc;
--slate-100: #f1f5f9;
--slate-500: #64748b;
--slate-900: #0f172a;

/* Status Colors */
--green-600: #16a34a;  /* Success */
--amber-500: #f59e0b;  /* Warning */
--red-500: #ef4444;    /* Error */
```

---

## 🎭 Hooks Customizados

### `useClickOutside`
Detecta cliques fora de um elemento:
```typescript
const ref = useClickOutside<HTMLDivElement>(() => {
  console.log('Clicked outside!');
});
```

### `useDebounce`
Debounce de valores com delay configurável:
```typescript
const debouncedSearch = useDebounce(searchTerm, 300);
```

### `useMediaQuery`
Media queries responsivas:
```typescript
const isDesktop = useMediaQuery('md'); // >= 768px
```

---

## 📊 Contextos

### `SidebarContext`
Gerencia estado global do sidebar:

```typescript
const {
  isCollapsed,      // Estado colapsado
  isMobileOpen,     // Menu mobile aberto
  toggleSidebar,    // Toggle manual
  collapseSidebar,  // Colapsar
  expandSidebar,    // Expandir
  toggleMobile,     // Toggle mobile
  closeMobile,      // Fechar mobile
} = useSidebar();
```

---

## 🧩 Componentes UI

### `StatusBadge`
```tsx
<StatusBadge status="Pendente" />
```

### `StatCard`
```tsx
<StatCard
  label="Pedidos Pendentes"
  value={12}
  trend="+2.5%"
  trendDirection="up"
  icon={<ShoppingBag size={40} />}
/>
```

### `ActionButton`
```tsx
<ActionButton
  icon={<Plus size={28} />}
  label="Nova Receita"
  onClick={handleClick}
/>
```

### `SearchInput`
```tsx
<SearchInput
  placeholder="Buscar..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
```

---

## 🔒 Segurança e Boas Práticas

- ✅ Validação de tipos com TypeScript
- ✅ Sanitização de inputs
- ✅ Proteção contra XSS
- ✅ Rotas protegidas (Login)
- ✅ Variáveis de ambiente (.env.local)

---

## 🌐 Navegação

```
/ (Dashboard)
/recipes (Lista de Receitas)
/recipes/:id (Detalhes da Receita)
/login (Login)
```

---

## 🎓 Padrões de Código

### Nomenclatura
- **Componentes**: PascalCase (`StatusBadge`)
- **Hooks**: camelCase com prefixo `use` (`useDebounce`)
- **Tipos**: PascalCase (`Recipe`, `RecipeStatus`)
- **Constantes**: UPPER_SNAKE_CASE (`MOCK_RECIPES`)

### Organização
- 1 componente por arquivo
- Exports nomeados para utils
- Default export para componentes
- Index files para barrel exports

---

## 🚧 Roadmap

- [ ] Autenticação real com JWT
- [ ] Integração com API backend
- [ ] Tema dark/light switch
- [ ] PWA (Progressive Web App)
- [ ] Notificações push
- [ ] Exportação de relatórios (PDF)
- [ ] Multilíngue (i18n)

---

## 📄 Licença

Este projeto é privado e proprietário.

---

<div align="center">

**Desenvolvido com ❤️ para otimizar o gerenciamento farmacêutico**

</div>
