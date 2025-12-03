import React from 'react';
import { LayoutDashboard, ShoppingCart, Package, FileText, Users, UserCircle, Settings } from 'lucide-react';
import { NavItem, Recipe } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
  { label: 'Pedidos', icon: <ShoppingCart size={20} />, path: '/orders' },
  { label: 'Estoque', icon: <Package size={20} />, path: '/inventory' },
  { label: 'Receitas', icon: <FileText size={20} />, path: '/recipes' },
  { label: 'Clientes', icon: <Users size={20} />, path: '/clients' },
  { label: 'Usuários', icon: <UserCircle size={20} />, path: '/users' },
  { label: 'Configurações', icon: <Settings size={20} />, path: '/settings' },
];

export const MOCK_RECIPES: Recipe[] = [
  {
    id: 'REC-00125',
    patientName: 'Ana Silva',
    doctorName: 'Dr. Carlos Andrade',
    medication: 'Amoxicilina 500mg',
    dosage: '500mg',
    date: '2024-05-12',
    status: 'Pendente',
    quantity: 21,
    instructions: 'Tomar 1 comprimido a cada 8 horas por 7 dias.',
    doctorCRM: '123456-SP'
  },
  {
    id: 'REC-00124',
    patientName: 'Carlos Pereira',
    doctorName: 'Dra. Ana Beatriz Costa',
    medication: 'Losartana Potássica 50mg',
    dosage: '50mg',
    date: '2024-05-12',
    status: 'Pendente',
    quantity: 30,
    instructions: 'Tomar 1 comprimido pela manhã.',
    doctorCRM: '987654-RJ'
  },
  {
    id: 'REC-00123',
    patientName: 'Mariana Costa',
    doctorName: 'Dr. Ricardo Mendes',
    medication: 'Dipirona Monoidratada 1g',
    dosage: '1g',
    date: '2024-05-11',
    status: 'Processada',
    quantity: 10,
    instructions: 'Se houver dor ou febre.',
    doctorCRM: '456123-MG'
  },
  {
    id: 'REC-00122',
    patientName: 'João Ferreira',
    doctorName: 'Dr. Carlos Andrade',
    medication: 'Paracetamol 750mg',
    dosage: '750mg',
    date: '2024-05-11',
    status: 'Processada',
    quantity: 20,
    instructions: 'Em caso de dor, a cada 6 horas.',
    doctorCRM: '123456-SP'
  },
  {
    id: 'REC-00121',
    patientName: 'Beatriz Almeida',
    doctorName: 'Dra. Lúcia Ferraz',
    medication: 'Sinvastatina 20mg',
    dosage: '20mg',
    date: '2024-05-10',
    status: 'Cancelada',
    quantity: 30,
    instructions: 'Tomar 1 comprimido à noite.',
    doctorCRM: '789456-SP'
  },
  {
    id: 'REC-00120',
    patientName: 'Roberto Alves',
    doctorName: 'Dr. Ricardo Mendes',
    medication: 'Ibuprofeno 600mg',
    dosage: '600mg',
    date: '2024-05-09',
    status: 'Pronta para Retirada',
    quantity: 12,
    instructions: 'Tomar 1 comprimido após as refeições.',
    doctorCRM: '456123-MG'
  },
  {
    id: 'REC-00119',
    patientName: 'Fernanda Lima',
    doctorName: 'Dra. Ana Beatriz Costa',
    medication: 'Omeprazol 20mg',
    dosage: '20mg',
    date: '2024-05-08',
    status: 'Entregue',
    quantity: 28,
    instructions: 'Tomar 1 cápsula em jejum.',
    doctorCRM: '987654-RJ'
  }
];

export const CURRENT_USER = {
  name: 'Farmacêutico',
  role: 'ADMIN',
  avatarUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200'
};