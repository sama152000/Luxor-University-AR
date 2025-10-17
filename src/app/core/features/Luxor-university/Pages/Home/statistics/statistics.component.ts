import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  isVisible = false;

  stats = [
    { icon: 'pi pi-briefcase', number: 11, description: 'الموظفين' },
    { icon: 'pi pi-users', number: 1090, description: 'أعضاء هيئة التدريس' },
    { icon: 'pi pi-graduation-cap', number: 32090, description: 'طلاب البكالوريوس' },
    { icon: 'pi pi-book', number: 2090, description: 'طلاب الدراسات العليا' },
    { icon: 'pi pi-globe', number: 1201, description: 'طلاب دوليين' }
  ];

  ngOnInit() {
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