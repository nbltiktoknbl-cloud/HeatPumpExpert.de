import React from 'react';

export interface ComparisonData {
  year: number;
  gasCost: number;
  heatPumpCost: number;
}

export interface SubsidyState {
  base: boolean;
  efficiency: boolean;
  speed: boolean;
  income: boolean;
  totalCost: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LeadFormData {
  zip: string;
  buildingType: string;
  currentHeating: string;
  email: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
  readTime: string;
  authorImageUrl: string;
  prompt?: string;
}