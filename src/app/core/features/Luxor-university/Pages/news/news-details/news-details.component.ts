import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { News } from '../../../model/news.model';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule, RouterModule,FooterComponent, PageHeaderComponent],
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  currentNews: News | null = null;
  relatedNews: News[] = [];
  mostReadNews: News[] = [];
  nextNews: News | null = null;
  previousNews: News | null = null;
  currentImageIndex = 0;
  currentLanguage = 'en';
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.loadNewsDetails(id);
      }
    });
  }

  loadNewsDetails(id: number): void {
    this.loading = true;
    
    this.newsService.getNewsById(id).subscribe(news => {
      if (news) {
        this.currentNews = news;
        this.loadRelatedNews(news);
        this.loadMostReadNews();
        this.loadNavigationNews(id);
        
        // Increment view count (in a real app, this would be handled by the backend)
        news.views++;
      } else {
        this.router.navigate(['/news']);
      }
      this.loading = false;
    });
  }

  loadRelatedNews(news: News): void {
    this.newsService.getRelatedNews(news.id, news.category, 5)
      .subscribe(related => {
        this.relatedNews = related;
      });
  }

  loadMostReadNews(): void {
    this.mostReadNews = this.newsService.getMostReadNews();
  }

  loadNavigationNews(id: number): void {
    this.newsService.getNextNews(id).subscribe(news => {
      this.nextNews = news;
    });
    
    this.newsService.getPreviousNews(id).subscribe(news => {
      this.previousNews = news;
    });
  }

  navigateToNews(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }

  navigateToNext(): void {
    if (this.nextNews) {
      this.navigateToNews(this.nextNews.id);
    }
  }

  navigateToPrevious(): void {
    if (this.previousNews) {
      this.navigateToNews(this.previousNews.id);
    }
  }

  nextImage(): void {
    if (this.currentNews && this.currentNews.images.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.currentNews.images.length;
    }
  }

  previousImage(): void {
    if (this.currentNews && this.currentNews.images.length > 1) {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.currentNews.images.length - 1 
        : this.currentImageIndex - 1;
    }
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat(this.currentLanguage === 'en' ? 'en-US' : 'ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    }).format(date);
  }

  getNewsTitle(news: News): string {
    return news.title;
  }

  getNewsContent(news: News): string {
    return news.content;
  }

  getNewsCategory(news: News): string {
    return news.category;
  }

  getNewsAuthor(news: News): string {
    return news.author;
  }

  shareOnFacebook(): void {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(this.getNewsTitle(this.currentNews!));
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank');
  }

  shareOnTwitter(): void {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(this.getNewsTitle(this.currentNews!));
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
  }

  shareOnLinkedIn(): void {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(this.getNewsTitle(this.currentNews!));
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank');
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href).then(() => {
      // You could add a toast notification here
      console.log('Link copied to clipboard');
    });
  }

  printArticle(): void {
    window.print();
  }
}