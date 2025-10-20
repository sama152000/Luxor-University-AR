// src/app/core/models/department.model.ts
export interface Department {
  id: string;
  name: string;
  slug: string;
  director: string;
  team: string[];
  responsibilities: string[];
  vision: string;
  mission: string;
  subDepartments?: string[];
  imageUrl?: string; // Optional for Pharaonic icons or images
  icon: string; // PrimeNG icon
}

export interface HierarchyNode {
  name: string;
  position: string;
  children?: HierarchyNode[];
  department?: Department; // Link to department details
}