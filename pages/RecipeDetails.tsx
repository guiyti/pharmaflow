import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, AlertCircle, RefreshCw, HelpCircle, ArrowLeft } from 'lucide-react';
import { MOCK_RECIPES } from '../constants';

const InfoField: React.FC<{ label: string; value: string | number }> = React.memo(
  ({ label, value }) => (
    <div>
      <label className="text-sm font-medium text-slate-500">{label}</label>
      <p className="text-base font-semibold text-slate-900">{value}</p>
    </div>
  )
);

InfoField.displayName = 'InfoField';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const recipe = useMemo(
    () => MOCK_RECIPES.find((r) => r.id === id) || MOCK_RECIPES[0],
    [id]
  );

  const formattedDate = useMemo(
    () =>
      new Date(recipe.date).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    [recipe.date]
  );

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-10 mx-auto max-w-6xl w-full">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link to="/" className="hover:text-primary-600 transition-colors">
          Início
        </Link>
        <span>/</span>
        <Link to="/recipes" className="hover:text-primary-600 transition-colors">
          Minhas Receitas
        </Link>
        <span>/</span>
        <span className="font-medium text-slate-900">Detalhes da Receita</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Detalhes da Receita
          </h1>
          <p className="text-slate-500">
            Receita #{recipe.id} para {recipe.patientName}
          </p>
        </div>
        <span className="inline-flex self-start items-center rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 border border-green-200">
          Ativa
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Main Info */}
        <div className="flex flex-col gap-6 md:col-span-2">
          {/* Medication Info Card */}
          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50/50 px-6 py-4">
              <h2 className="text-lg font-bold text-slate-900">
                Informações do Medicamento
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <InfoField
                  label="Medicamento"
                  value={recipe.medication.split(' ')[0]}
                />
                <InfoField label="Dosagem e Forma" value={`${recipe.dosage}, Comprimido`} />
                <InfoField label="Quantidade" value={`${recipe.quantity} unidades`} />
              </div>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <label className="text-sm font-medium text-slate-500">
                  Instruções de Uso
                </label>
                <p className="mt-2 text-base leading-relaxed text-slate-700">
                  {recipe.instructions} Não exceder a dose recomendada em 24 horas.
                  Tomar preferencialmente após as refeições para evitar desconforto
                  gástrico.
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Info Card */}
          <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50/50 px-6 py-4">
              <h2 className="text-lg font-bold text-slate-900">
                Informações do Prescritor
              </h2>
            </div>
            <div className="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <InfoField label="Médico" value={recipe.doctorName} />
              <InfoField label="CRM" value={recipe.doctorCRM || 'N/A'} />
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="flex flex-col gap-6 md:col-span-1">
          {/* Dates Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Data de Emissão</p>
                <p className="text-base font-bold text-slate-900">{formattedDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                <AlertCircle size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Data de Validade</p>
                <p className="text-base font-bold text-slate-900">
                  15 de Agosto, 2024
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 py-3 text-base font-bold text-white transition-colors hover:bg-primary-700 active:scale-95">
              <RefreshCw size={20} />
              Solicitar Refil
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-100 py-3 text-base font-bold text-slate-700 transition-colors hover:bg-slate-200 active:scale-95">
              <HelpCircle size={20} />
              Esclarecer Dúvidas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;