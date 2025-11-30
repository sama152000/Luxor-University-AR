import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { CentersService } from '../../../Services/real services/centers.service';
import { Center } from '../../../model/centers.model';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-university-centers-list',
  standalone: true,
  imports: [
    PageHeaderComponent,
    CommonModule,
    FormsModule,
    RouterModule,
    CardModule,
    ListboxModule,
    InputTextModule,
    IconField,
    InputIcon,
  ],
  templateUrl: './university-centers-list.component.html',
  styleUrls: ['./university-centers-list.component.css'],
})
export class UniversityCentersListComponent implements OnInit {
  centersList: Center[] = [];
  filteredCenters: Center[] = [];
  sidebarItems: Center[] = [];
  selectedCenterId: any;
  /** قيمة البحث */
  searchQuery: string = '';

  selectedCenter: Center | null = null;

  centerService = inject(CentersService);

  ngOnInit() {
    this.loadCenters();
  }

  loadCenters() {
    this.centerService.centers.subscribe({
      next: (res) => {
        // Full list without "كل المراكز"
        this.centersList = res.data;

        // Sidebar: أضف عنصر "كل المراكز" فقط هنا
        this.sidebarItems = [
          { centerName: 'كل المراكز', id: '' },
          ...this.centersList,
        ];

        // Grid: اعرض كل المراكز بدون عنصر "كل المراكز"
        this.filteredCenters = [...this.centersList];
      },
      error: (err) => console.error(err),
    });
  }

  /** 🔍 البحث في الكروت */
  searchCenters() {
    const q = this.searchQuery.toLowerCase().trim();

    if (q === '') {
      // ★ لو البحث فارغ اعرض كل الكروت بدون "كل المراكز"
      this.filteredCenters = [...this.centersList.filter((c) => c.id !== '')];
      return;
    }

    this.filteredCenters = this.centersList
      .filter((c) => c.id !== '') // استبعاد "كل المراكز" من البحث
      .filter((center) => center.centerName.toLowerCase().includes(q));
  }

  selectCenter(center: Center | { centerName: string; id: string }) {
    if (center.id === '') {
      // كل المراكز
      this.filteredCenters = [...this.centersList];
      this.selectedCenterId = '';
      return;
    }

    // مركز محدد
    this.filteredCenters = [center as Center];
    this.selectedCenterId = center.id;

    setTimeout(() => {
      const el = document.getElementById(center.id);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 200);
  }
}
