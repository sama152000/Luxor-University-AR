import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
// import { CentersService } from '../../../Services/centers.service';
import { Center } from '../../../model/centers.model';
import { ButtonModule } from 'primeng/button';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CentersService } from '../../../Services/real services/centers.service';

@Component({
  selector: 'app-center-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    PageHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.css'],
})
export class CenterDetailsComponent implements OnInit {
  center: Center | undefined;
  currentIndex: number = 0;
  centers: Center[] = [];

  breadcrumbs = [
    { label: 'الرئيسية', url: '/' },
    { label: 'مراكز الجامعة', url: '/Center-list' },
    { label: '', url: '' },
  ];

  constructor(
    private route: ActivatedRoute,
    private centersService: CentersService
  ) {}

  ngOnInit() {
    this.centersService.centers.subscribe({
      next: (res) => {
        this.centers = res.data;
      },
      error: (err) => console.error('API Error:', err),
    });

    setTimeout(() => {
      document
        .querySelectorAll('.center-card, .sidebar-item')
        .forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 100);
        });
    }, 200);
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.centersService.getById(id).subscribe({
          next: (res) => {
            this.center = res.data;
            console.log(this.center, 'his.center');

            this.currentIndex = this.centers.findIndex((c) => c.id === id);
            if (this.center) {
              this.breadcrumbs[2].label = this.center.centerName;
            }
          },
          error: (err) => console.error('API Error:', err),
        });
      }
    });
  }

  getPreviousCenterId(): string | null {
    return this.currentIndex > 0
      ? this.centers[this.currentIndex - 1].id
      : null;
  }

  getNextCenterId(): string | null {
    return this.currentIndex < this.centers.length - 1
      ? this.centers[this.currentIndex + 1].id
      : null;
  }
}
