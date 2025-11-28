import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CentersService } from '../../../Services/real services/centers.service';
import { Center } from '../../../model/centers.model';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-university-centers-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    CardModule,
    PageHeaderComponent,
    FooterComponent,
  ],
  templateUrl: './university-centers-list.component.html',
  styleUrls: ['./university-centers-list.component.css'],
})
export class UniversityCentersListComponent implements OnInit {
  centersList: Center[] = [];
  filteredCenters: Center[] = [];
  searchQuery = '';
  selectedCenterId: string | null = null;

  centerService = inject(CentersService);

  // constructor(private centersService: CentersService) {}

  ngOnInit() {
    // this.centers = this.centersService.getCenters();
    this.filteredCenters = this.centersList;
    setTimeout(() => {
      document
        .querySelectorAll('.center-card, .sidebar-item')
        .forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 100);
        });
    }, 200);

    this.loadCenterList();
  }

  onSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredCenters = this.centersList.filter((center) =>
      center.pageName.toLowerCase().includes(query)
    );
  }

  selectCenter(id: string) {
    this.selectedCenterId = id;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  loadCenterList(): void {
    // const request: PageRequest = {
    //   pageNumber: 1,
    //   pageSize: 10,
    //   filter: { name: '', isDeleted: false },
    //   orderByValue: [{ colId: 'id', sort: 'asc' }],
    // };

    this.centerService.centers.subscribe({
      next: (res) => {
        this.centersList = res.data;
        console.log(this.centersList);
      },
      error: (err) => console.error('API Error:', err),
    });
  }
}
