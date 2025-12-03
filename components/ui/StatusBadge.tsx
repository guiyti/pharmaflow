import React from 'react';
import { RecipeStatus } from '../../types';

interface StatusBadgeProps {
  status: RecipeStatus;
}

const statusStyles: Record<RecipeStatus, string> = {
  'Pendente': 'bg-amber-100 text-amber-800 border-amber-200',
  'Processada': 'bg-green-100 text-green-800 border-green-200',
  'Entregue': 'bg-blue-100 text-blue-800 border-blue-200',
  'Cancelada': 'bg-red-100 text-red-800 border-red-200',
  'Pronta para Retirada': 'bg-indigo-100 text-indigo-800 border-indigo-200',
};

export const StatusBadge: React.FC<StatusBadgeProps> = React.memo(({ status }) => {
  const styles = statusStyles[status] || 'bg-slate-100 text-slate-800 border-slate-200';

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
});

StatusBadge.displayName = 'StatusBadge';
