export interface StudentLifeActivity {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  tags: string[];
  imageUrl?: string;
  location?: string;
  schedule?: string;
  contactInfo?: ContactInfo;
  isActive: boolean;
  featured: boolean;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  office?: string;
  coordinator?: string;
}

export interface ActivityCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface StudentLifeData {
  categories: ActivityCategory[];
  activities: StudentLifeActivity[];
  featuredActivities: StudentLifeActivity[];
}