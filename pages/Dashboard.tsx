import React, { useMemo, useState } from 'react';
import { Pill, ShoppingBag, UserCog, FileBarChart, ArrowUpRight, Package, TrendingUp, Users } from 'lucide-react';
import { MOCK_RECIPES } from '../constants';
import { Link } from 'react-router-dom';
import { StatCard, ActionButton, StatusBadge, Modal } from '../components/ui';
import { NewRecipeForm } from '../components/NewRecipeForm';
import { Recipe } from '../types';
import { useToast } from '../contexts';

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { success } = useToast();
  const recentRecipes = useMemo(() => MOCK_RECIPES.slice(0, 5), []);

  const stats = useMemo(() => ({
    pendingOrders: 12,
    lowStock: 8,
    newRecipes: 5,
    activeClients: 245,
  }), []);

  const handleCreateRecipe = (recipe: Recipe) => {
    console.log('Nova receita criada:', recipe);
    // Aqui você adicionaria a receita ao estado global ou enviaria para a API
    setIsModalOpen(false);
    success(`Receita ${recipe.id} criada com sucesso!`);
  };

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Pedidos Pendentes"
          value={stats.pendingOrders}
          trend="+2.5%"
          trendDirection="up"
          icon={<ShoppingBag size={40} />}
        />
        <StatCard
          label="Nível de Estoque Baixo"
          value={stats.lowStock}
          alert
          icon={<Package size={40} />}
        />
        <StatCard
          label="Novas Receitas"
          value={stats.newRecipes}
          icon={<FileBarChart size={40} />}
        />
        <StatCard
          label="Clientes Ativos"
          value={stats.activeClients}
          trend="+12%"
          trendDirection="up"
          icon={<Users size={40} />}
        />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <h3 className="mb-4 text-lg font-bold text-slate-900">Acesso Rápido</h3>
          <div className="grid grid-cols-2 gap-4">
            <ActionButton icon={<Pill size={28} />} label="Add Medicamento" />
            <ActionButton icon={<ShoppingBag size={28} />} label="Nova Venda" />
            <ActionButton icon={<UserCog size={28} />} label="Gerenciar Usuários" />
            <ActionButton icon={<FileBarChart size={28} />} label="Gerar Relatório" />
          </div>
        </div>

        {/* Recent Recipes Table */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              Receitas Recentes a Processar
            </h3>
            <Link
              to="/recipes"
              className="flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
            >
              Ver todas <ArrowUpRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold">ID da Receita</th>
                    <th className="px-6 py-4 font-semibold">Paciente</th>
                    <th className="px-6 py-4 font-semibold">Data de Emissão</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentRecipes.map((recipe) => (
                    <tr
                      key={recipe.id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {recipe.id}
                      </td>
                      <td className="px-6 py-4 text-slate-600">{recipe.patientName}</td>
                      <td className="px-6 py-4 text-slate-600">
                        {new Date(recipe.date).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={recipe.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Nova Receita */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Nova Receita"
        size="xl"
      >
        <NewRecipeForm
          onSubmit={handleCreateRecipe}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;