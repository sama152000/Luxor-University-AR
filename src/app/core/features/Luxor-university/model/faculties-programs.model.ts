export interface Faculty {
  id: number;
  name: string;
  description: string;
  icon: string; // PrimeNG icon
  imageUrl: string; // صورة الكلية
  programs: string[];
  dean: string;
  established: number;
}
