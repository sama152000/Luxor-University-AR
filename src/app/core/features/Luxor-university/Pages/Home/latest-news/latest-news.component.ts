import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../../../model/news.model';
import { NewsService } from '../../../Services/news.service';
import{FormsModule}from'@angular/forms';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule,FormsModule

  ],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  featuredNews: News | undefined;
  smallNews: News[] = [];
  isVisible = false;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    const allNews = this.newsService.getLatestNews();
    this.featuredNews = this.newsService.getFeaturedNews() || allNews[0];
    this.smallNews = allNews.filter(news => news.id !== this.featuredNews?.id).slice(0, 4);

    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }

  selectNews(news: News) {
    if (this.featuredNews) {
      const previousFeatured = this.featuredNews;
      this.featuredNews = news;

      const index = this.smallNews.findIndex(n => n.id === news.id);
      if (index !== -1) {
        this.smallNews[index] = previousFeatured;
      }
    }
  }
}
