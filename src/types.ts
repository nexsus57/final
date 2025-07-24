import type React from 'react';

export interface Product {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  features: string[];
  uses: string[];
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}
