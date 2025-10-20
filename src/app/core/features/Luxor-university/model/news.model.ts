export interface News {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  images: string[];
  date: Date;
  author: string;
  category: string;
  isFeatured?: boolean;
  isBreaking?: boolean;
  isTrending?: boolean;
  views: number;
  tags: string[];
}

export interface NewsFilter {
  category?: string;
  dateFrom?: Date;
  dateTo?: Date;
  searchTerm?: string;
}

export interface NewsResponse {
  items: News[];
  total: number;
  page: number;
  pageSize: number;
}