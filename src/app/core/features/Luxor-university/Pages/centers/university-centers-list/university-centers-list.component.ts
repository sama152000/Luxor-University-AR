import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CentersService } from '../../../Services/centers.service';
import { Center } from '../../../model/centers.model';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-university-centers-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, InputTextModule, ButtonModule, CardModule, PageHeaderComponent, FooterComponent],
  templateUrl: './university-centers-list.component.html',
  styleUrls: ['./university-centers-list.component.css']
})
export class UniversityCentersListComponent implements OnInit {
  centers: Center[] = [];
  filteredCenters: Center[] = [];
  searchQuery = '';
  selectedCenterId: string | null = null;

  constructor(private centersService: CentersService) {}

  ngOnInit() {
    this.centers = this.centersService.getCenters();
    this.filteredCenters = this.centers;
    setTimeout(() => {
      document.querySelectorAll('.center-card, .sidebar-item').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 100);
      });
    }, 200);
  }

  onSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredCenters = this.centers.filter(center =>
      center.name.toLowerCase().includes(query) ||
      center.description.toLowerCase().includes(query)
    );
  }

  selectCenter(id: string) {
    this.selectedCenterId = id;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}