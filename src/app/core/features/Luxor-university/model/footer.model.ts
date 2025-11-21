export interface FooterLink {
  label: string;
  link: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  label: string;
  link: string;
  icon: string;
}

export interface UniversityInfo {
  description: string;
  slogan: string;
}

export interface FooterData {
  universityInfo: UniversityInfo;
  quickLinks: FooterLink[];
  importantLinks: FooterLink[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}
