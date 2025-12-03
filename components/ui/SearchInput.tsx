import React, { InputHTMLAttributes } from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onSearch?: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = React.memo(({
  placeholder = 'Buscar...',
  className = '',
  onSearch,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border-0 bg-slate-100 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-shadow"
        {...props}
      />
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
