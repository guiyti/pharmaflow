import React, { useState } from 'react';
import { Calendar, User, Pill, FileText, AlertCircle } from 'lucide-react';
import { Recipe, RecipeStatus } from '../types';
import { generateId } from '../utils';

interface RecipeFormData {
  patientName: string;
  doctorName: string;
  doctorCRM: string;
  medication: string;
  dosage: string;
  quantity: number;
  instructions: string;
  date: string;
  expiryDate: string;
  status: RecipeStatus;
}

interface NewRecipeFormProps {
  onSubmit: (recipe: Recipe) => void;
  onCancel: () => void;
}

export const NewRecipeForm: React.FC<NewRecipeFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<RecipeFormData>({
    patientName: '',
    doctorName: '',
    doctorCRM: '',
    medication: '',
    dosage: '',
    quantity: 1,
    instructions: '',
    date: new Date().toISOString().split('T')[0],
    expiryDate: '',
    status: 'Pendente',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RecipeFormData, string>>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpar erro ao digitar
    if (errors[name as keyof RecipeFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RecipeFormData, string>> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Nome do paciente é obrigatório';
    }
    if (!formData.doctorName.trim()) {
      newErrors.doctorName = 'Nome do médico é obrigatório';
    }
    if (!formData.doctorCRM.trim()) {
      newErrors.doctorCRM = 'CRM é obrigatório';
    }
    if (!formData.medication.trim()) {
      newErrors.medication = 'Medicamento é obrigatório';
    }
    if (!formData.dosage.trim()) {
      newErrors.dosage = 'Dosagem é obrigatória';
    }
    if (formData.quantity < 1) {
      newErrors.quantity = 'Quantidade deve ser maior que 0';
    }
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Instruções são obrigatórias';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const newRecipe: Recipe = {
      id: `REC-${generateId().slice(-5).toUpperCase()}`,
      ...formData,
    };

    onSubmit(newRecipe);
  };

  const inputClasses =
    'w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all';
  const labelClasses = 'mb-2 block text-sm font-semibold text-slate-700';
  const errorClasses = 'mt-1 text-xs text-red-600 flex items-center gap-1';

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Informações do Paciente */}
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-2 text-primary-600">
            <User size={20} />
            <h3 className="font-bold text-slate-900">Informações do Paciente</h3>
          </div>
          
          <div>
            <label htmlFor="patientName" className={labelClasses}>
              Nome do Paciente *
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="Ex: João da Silva"
              className={inputClasses}
            />
            {errors.patientName && (
              <p className={errorClasses}>
                <AlertCircle size={14} />
                {errors.patientName}
              </p>
            )}
          </div>
        </div>

        {/* Informações do Médico */}
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-2 text-primary-600">
            <FileText size={20} />
            <h3 className="font-bold text-slate-900">Informações do Prescritor</h3>
          </div>
        </div>

        <div>
          <label htmlFor="doctorName" className={labelClasses}>
            Nome do Médico *
          </label>
          <input
            type="text"
            id="doctorName"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            placeholder="Ex: Dr. Carlos Andrade"
            className={inputClasses}
          />
          {errors.doctorName && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.doctorName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="doctorCRM" className={labelClasses}>
            CRM *
          </label>
          <input
            type="text"
            id="doctorCRM"
            name="doctorCRM"
            value={formData.doctorCRM}
            onChange={handleChange}
            placeholder="Ex: 123456-SP"
            className={inputClasses}
          />
          {errors.doctorCRM && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.doctorCRM}
            </p>
          )}
        </div>

        {/* Informações do Medicamento */}
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-2 text-primary-600">
            <Pill size={20} />
            <h3 className="font-bold text-slate-900">Informações do Medicamento</h3>
          </div>
        </div>

        <div>
          <label htmlFor="medication" className={labelClasses}>
            Medicamento *
          </label>
          <input
            type="text"
            id="medication"
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            placeholder="Ex: Amoxicilina"
            className={inputClasses}
          />
          {errors.medication && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.medication}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="dosage" className={labelClasses}>
            Dosagem *
          </label>
          <input
            type="text"
            id="dosage"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            placeholder="Ex: 500mg"
            className={inputClasses}
          />
          {errors.dosage && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.dosage}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quantity" className={labelClasses}>
            Quantidade *
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            className={inputClasses}
          />
          {errors.quantity && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.quantity}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="status" className={labelClasses}>
            Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="Pendente">Pendente</option>
            <option value="Processada">Processada</option>
            <option value="Pronta para Retirada">Pronta para Retirada</option>
            <option value="Entregue">Entregue</option>
            <option value="Cancelada">Cancelada</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="instructions" className={labelClasses}>
            Instruções de Uso *
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            placeholder="Ex: Tomar 1 comprimido a cada 8 horas por 7 dias"
            rows={3}
            className={inputClasses}
          />
          {errors.instructions && (
            <p className={errorClasses}>
              <AlertCircle size={14} />
              {errors.instructions}
            </p>
          )}
        </div>

        {/* Datas */}
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-2 text-primary-600">
            <Calendar size={20} />
            <h3 className="font-bold text-slate-900">Datas</h3>
          </div>
        </div>

        <div>
          <label htmlFor="date" className={labelClasses}>
            Data de Emissão
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="expiryDate" className={labelClasses}>
            Data de Validade
          </label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      {/* Footer com botões */}
      <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-300 px-6 py-2.5 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="rounded-lg bg-primary-600 px-6 py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 active:scale-95"
        >
          Criar Receita
        </button>
      </div>
    </form>
  );
};

NewRecipeForm.displayName = 'NewRecipeForm';
