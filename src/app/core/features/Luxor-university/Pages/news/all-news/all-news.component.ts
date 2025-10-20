import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../../Services/news.service';
import { News, NewsFilter } from '../../../model/news.model';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-all-news',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,FooterComponent, PageHeaderComponent],
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {
  breakingNews: News[] = [];
  trendingNews: News[] = [];
  allNews: News[] = [];
  filteredNews: News[] = [];
  categories: string[] = [];
  
  // Filter properties
  searchTerm: string = '';
  selectedCategory: string = '';
  dateFrom: string = '';
  dateTo: string = '';
  
  // Pagination
  currentPage = 1;
  pageSize = 6;
  totalItems = 0;
  totalPages = 0;
  
  // UI states
  loading = false;
  currentLanguage = 'en';
  
  // Breaking news ticker
  breakingNewsIndex = 0;
  breakingNewsInterval: any;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadBreakingNews();
    this.loadTrendingNews();
    this.loadCategories();
    this.loadNews();
    this.startBreakingNewsTicker();
  }

  ngOnDestroy(): void {
    if (this.breakingNewsInterval) {
      clearInterval(this.breakingNewsInterval);
    }
  }

  loadBreakingNews(): void {
    this.breakingNews = this.newsService.getBreakingNews();
  }

  loadTrendingNews(): void {
    this.trendingNews = this.newsService.getTrendingNews();
  }

  loadCategories(): void {
    this.newsService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  loadNews(): void {
    this.loading = true;
    
    const filter: NewsFilter = {
      category: this.selectedCategory || undefined,
      searchTerm: this.searchTerm || undefined,
      dateFrom: this.dateFrom ? new Date(this.dateFrom) : undefined,
      dateTo: this.dateTo ? new Date(this.dateTo) : undefined
    };

    this.newsService.getNews(filter, this.currentPage, this.pageSize)
      .subscribe(response => {
        this.allNews = response.items;
        this.totalItems = response.total;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        this.loading = false;
      });
  }

  applyFilter(): void {
    this.currentPage = 1;
    this.loadNews();
  }

  clearFilter(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.dateFrom = '';
    this.dateTo = '';
    this.currentPage = 1;
    this.loadNews();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadNews();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  startBreakingNewsTicker(): void {
    if (this.breakingNews.length > 1) {
      this.breakingNewsInterval = setInterval(() => {
        this.breakingNewsIndex = (this.breakingNewsIndex + 1) % this.breakingNews.length;
      }, 4000);
    }
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat(this.currentLanguage === 'en' ? 'en-US' : 'ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  getNewsTitle(news: News): string {
    return news.title;
  }

  getNewsDescription(news: News): string {
    return news.description;
  }

  getNewsCategory(news: News): string {
    return news.category;
  }

  getPaginationArray(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  min(a: number, b: number): number {
    return Math.min(a, b);
  }

  navigateToNews(newsId: number): void {
    // Navigation will be handled by RouterModule
  }
}