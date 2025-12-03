import React, { useState, useMemo, useCallback } from 'react';
import { Filter, MoreVertical, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { MOCK_RECIPES } from '../constants';
import { useNavigate } from 'react-router-dom';
import { StatusBadge, SearchInput } from '../components/ui';
import { RecipeStatus } from '../types';

const FILTER_OPTIONS: (RecipeStatus | 'Todos')[] = [
  'Todos',
  'Pendente',
  'Pronta para Retirada',
  'Entregue',
];

const RecipeList: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<RecipeStatus | 'Todos'>('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredRecipes = useMemo(() => {
    let recipes = MOCK_RECIPES;

    if (filterStatus !== 'Todos') {
      recipes = recipes.filter((r) => r.status === filterStatus);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      recipes = recipes.filter(
        (r) =>
          r.medication.toLowerCase().includes(term) ||
          r.doctorName.toLowerCase().includes(term) ||
          r.patientName.toLowerCase().includes(term)
      );
    }

    return recipes;
  }, [filterStatus, searchTerm]);

  const handleRowClick = useCallback(
    (id: string) => {
      navigate(`/recipes/${id}`);
    },
    [navigate]
  );

  return (
    <div className="flex flex-col p-6 lg:p-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Minhas Receitas
          </h1>
          <p className="mt-2 text-slate-500">
            Gerencie e acompanhe o status de todas as suas receitas médicas.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary-700 transition-colors">
          <Plus size={18} />
          Nova Receita
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-slate-200 p-4 md:flex-row md:items-center">
          <div className="flex-1">
            <SearchInput
              placeholder="Buscar por medicamento, médico, paciente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {FILTER_OPTIONS.map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  filterStatus === status
                    ? 'bg-primary-50 text-primary-700'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/50">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Medicamento
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Médico
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Data da Prescrição
                </th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredRecipes.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    Nenhuma receita encontrada
                  </td>
                </tr>
              ) : (
                filteredRecipes.map((recipe) => (
                  <tr
                    key={recipe.id}
                    className="hover:bg-slate-50 cursor-pointer transition-colors"
                    onClick={() => handleRowClick(recipe.id)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={recipe.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-semibold text-slate-900">
                        {recipe.medication}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {recipe.doctorName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                      {new Date(recipe.date).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle menu actions
                        }}
                      >
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredRecipes.length > 0 && (
          <div className="flex items-center justify-between border-t border-slate-200 p-4">
            <span className="text-sm text-slate-500">
              Exibindo {filteredRecipes.length} de {MOCK_RECIPES.length} receitas
            </span>
            <div className="flex items-center gap-1">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-50"
                disabled
              >
                <ChevronLeft size={18} />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-sm font-bold text-primary-600">
                1
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">
                2
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">
                3
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeList;