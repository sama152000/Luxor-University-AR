export interface Sector {
  id: string;
  name: string;
  slug: string;
  description: string;
  overview: string;
  mission: string;
  objectives: string[];
  icon: string;
  image_url: string;
  display_order: number;
  created_at: string;
}

export interface Department {
  id: string;
  sector_id: string;
  name: string;
  responsible_person: string;
  phone: string;
  tasks: string[];
  display_order: number;
  created_at: string;
}

export interface SectorStatistic {
  id: string;
  sector_id: string;
  category: string;
  diploma: number;
  masters: number;
  phd: number;
  total: number;
  display_order: number;
  created_at: string;
}

export interface SectorWithDetails extends Sector {
  departments?: Department[];
  statistics?: SectorStatistic[];
}
