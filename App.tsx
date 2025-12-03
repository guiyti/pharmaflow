import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetails';
import { SidebarProvider, useSidebar } from './contexts/SidebarContext';
import { useMediaQuery } from './hooks';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { isCollapsed } = useSidebar();
  const isDesktop = useMediaQuery('md');

  // Helper to determine title based on path
  const getTitle = () => {
    if (location.pathname === '/') return 'Dashboard';
    if (location.pathname === '/recipes') return 'Receitas';
    if (location.pathname.startsWith('/recipes/')) return 'Detalhes da Receita';
    return 'PharmaFlow';
  };

  const sidebarWidth = isDesktop ? (isCollapsed ? 80 : 256) : 0;

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar />

      <div
        className="flex flex-1 flex-col overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          marginLeft: isDesktop ? `${sidebarWidth}px` : '0',
        }}
      >
        <Header title={getTitle()} />
        <main className="flex-1 overflow-y-auto bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        {/* Redirect unknown routes to dashboard */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <SidebarProvider>
        <Routes>
          {/* We separate the Login route at the top level to avoid wrapping it in Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </SidebarProvider>
    </HashRouter>
  );
};

export default App;