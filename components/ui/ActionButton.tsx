import React from 'react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const ActionButton: React.FC<ActionButtonProps> = React.memo(({
  icon,
  label,
  onClick,
  variant = 'primary'
}) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-md active:translate-y-0"
    >
      <div className={`flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${
        variant === 'primary'
          ? 'bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white'
          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-600 group-hover:text-white'
      }`}>
        {icon}
      </div>
      <span className="font-medium text-slate-700 group-hover:text-primary-700">
        {label}
      </span>
    </button>
  );
});

ActionButton.displayName = 'ActionButton';
