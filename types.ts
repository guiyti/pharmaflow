import React from 'react';

export type RecipeStatus = 'Pendente' | 'Processada' | 'Entregue' | 'Cancelada' | 'Pronta para Retirada';

export interface Recipe {
  id: string;
  patientName: string;
  doctorName: string;
  medication: string;
  dosage: string;
  date: string; // ISO date string or formatted string
  expiryDate?: string;
  status: RecipeStatus;
  quantity?: number;
  instructions?: string;
  doctorCRM?: string;
}

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface StatCardProps {
  label: string;
  value: string | number;
  highlight?: boolean;
  colorClass?: string;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  PHARMACIST = 'PHARMACIST'
}

export interface User {
  name: string;
  role: UserRole;
  avatarUrl: string;
}