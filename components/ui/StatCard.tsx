import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: string;
  trendDirection?: 'up' | 'down';
  alert?: boolean;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = React.memo(({
  label,
  value,
  trend,
  trendDirection = 'up',
  alert,
  icon
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
      {icon && (
        <div className="absolute right-4 top-4 opacity-10 group-hover:opacity-20 transition-opacity">
          {icon}
        </div>
      )}
      
      <div className="relative z-10">
        <p className="text-sm font-medium text-slate-500 mb-2">{label}</p>
        <div className="flex items-end justify-between">
          <h3 className={`text-3xl font-bold ${alert ? 'text-amber-500' : 'text-slate-900'}`}>
            {value}
          </h3>
          {trend && (
            <div className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${
              trendDirection === 'up' 
                ? 'bg-green-50 text-green-600' 
                : 'bg-red-50 text-red-600'
            }`}>
              {trendDirection === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              <span>{trend}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

StatCard.displayName = 'StatCard';
