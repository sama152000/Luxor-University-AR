import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule}from'@angular/forms';
import { StatisticsService } from '../../../Services/statistics.service';
import { Statistic } from '../../../model/statistics.model';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  isVisible = false;
  stats: Statistic[] = [];

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit() {
    this.statisticsService.getStatistics().subscribe(stats => {
      this.stats = stats;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const element = document.querySelector('.statistics-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }
}