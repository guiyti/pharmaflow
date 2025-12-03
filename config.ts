/**
 * Configurações globais da aplicação PharmaFlow
 */

export const APP_CONFIG = {
  name: 'PharmaFlow',
  version: '2.0.0',
  description: 'Sistema de Gerenciamento Farmacêutico',
  
  // Configurações de UI
  ui: {
    sidebarWidth: {
      expanded: 256,
      collapsed: 80,
    },
    sidebarAutoHideDelay: 150,
    sidebarExpandDelay: 300,
    sidebarProximityThreshold: 20,
    debounceDelay: 300,
    toastDuration: 3000,
  },
  
  // Configurações de paginação
  pagination: {
    defaultPageSize: 25,
    pageSizeOptions: [10, 25, 50, 100],
  },
  
  // Configurações de busca
  search: {
    minSearchLength: 2,
    debounceDelay: 300,
  },
  
  // Breakpoints (em pixels)
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  
  // Limites de dados
  limits: {
    maxRecipesPerPage: 100,
    maxSearchResults: 50,
  },
  
  // Rotas da aplicação
  routes: {
    home: '/',
    login: '/login',
    recipes: '/recipes',
    recipeDetails: (id: string) => `/recipes/${id}`,
    orders: '/orders',
    inventory: '/inventory',
    clients: '/clients',
    users: '/users',
    settings: '/settings',
  },
} as const;

export type AppConfig = typeof APP_CONFIG;
