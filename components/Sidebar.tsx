import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, ChevronLeft, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useSidebar } from '../contexts/SidebarContext';
import { useMediaQuery } from '../hooks';

const Sidebar: React.FC = () => {
  const { isCollapsed, isMobileOpen, toggleSidebar, closeMobile } = useSidebar();
  const isDesktop = useMediaQuery('md');

  const shouldCollapse = isDesktop && isCollapsed;
  const shouldShowMobile = !isDesktop && isMobileOpen;

  return (
    <>
      {/* Mobile Backdrop */}
      {shouldShowMobile && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen border-r border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          shouldCollapse ? 'w-20' : 'w-64'
        } ${
          shouldShowMobile
            ? 'translate-x-0'
            : isDesktop
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col px-4 py-6 relative">
          {/* Collapse Toggle Button (Desktop only) */}
          {isDesktop && (
            <button
              onClick={toggleSidebar}
              className="absolute -right-3 top-8 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm hover:bg-slate-50 hover:text-primary-600 transition-colors"
              aria-label={isCollapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
            >
              {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>
          )}

          {/* Logo */}
          <div className={`mb-8 flex items-center gap-3 px-2 transition-all duration-300 ${
            shouldCollapse ? 'justify-center' : ''
          }`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
              <Activity size={24} strokeWidth={2.5} />
            </div>
            {!shouldCollapse && (
              <div className="flex flex-col overflow-hidden">
                <h1 className="text-lg font-bold text-slate-900 leading-none whitespace-nowrap">
                  PharmaFlow
                </h1>
                <span className="text-xs font-medium text-slate-500 mt-1 whitespace-nowrap">
                  Gerenciamento
                </span>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => !isDesktop && closeMobile()}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  } ${shouldCollapse ? 'justify-center' : ''}`
                }
                title={shouldCollapse ? item.label : ''}
              >
                <span className="shrink-0">{item.icon}</span>
                {!shouldCollapse && <span className="whitespace-nowrap">{item.label}</span>}
              </NavLink>
            ))}
          </nav>

          {/* Status Footer */}
          <div className={`mt-auto border-t border-slate-200 pt-4 ${
            shouldCollapse ? 'flex justify-center' : ''
          }`}>
            <div className={`flex items-center gap-3 px-2 ${shouldCollapse ? 'flex-col gap-1' : ''}`}>
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shrink-0"></div>
              {!shouldCollapse && (
                <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                  Sistema Online
                </span>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;