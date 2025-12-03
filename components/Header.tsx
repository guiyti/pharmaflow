import React from 'react';
import { Search, Bell, HelpCircle, Menu } from 'lucide-react';
import { CURRENT_USER } from '../constants';
import { useSidebar } from '../contexts/SidebarContext';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { toggleMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-4 md:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMobile}
          className="mr-2 rounded-lg p-1 text-slate-500 hover:bg-slate-100 md:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-lg font-bold text-slate-900 hidden md:block">
          {title || 'Dashboard'}
        </h2>
      </div>

      <div className="flex flex-1 items-center justify-end gap-4 md:gap-6">
        {/* Search Bar - Hidden on small mobile */}
        <div className="hidden max-w-md flex-1 md:block">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar..."
              className="h-10 w-full rounded-lg border-none bg-slate-100 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-primary-600 transition-colors">
            <Bell size={20} />
          </button>
          <button className="hidden h-10 w-10 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-primary-600 transition-colors md:flex">
            <HelpCircle size={20} />
          </button>

          <div className="h-8 w-[1px] bg-slate-200 mx-1 hidden md:block"></div>

          <button className="flex items-center gap-3 rounded-full md:hover:bg-slate-50 md:py-1 md:pr-3">
            <img
              src={CURRENT_USER.avatarUrl}
              alt="User"
              className="h-9 w-9 rounded-full object-cover border border-slate-200"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;