import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { PagesService } from '../../Services/pages.service';
import { AboutUniversityService } from '../../Services/about-university.service';
import { PageRequest } from '../../model/page-request.model';

interface Tab {
  id: string;
  title: string;
  icon: string;
  content: string | string[];
}

@Component({
  selector: 'app-about-university',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],
  templateUrl: './about-university.component.html',
  styleUrls: ['./about-university.component.css'],
})
export class AboutUniversityComponent implements OnInit {
  // UI
  isVisible = false;
  activeTab = 'vision';

  // Data
  tabs: Tab[] = [];
  aboutData!: any;
  goalsList: string[] = [];

  // Services
  pagesService = inject(PagesService);

  constructor(private aboutUniversityService: AboutUniversityService) {}

  ngOnInit(): void {
    this.loadGoals();
    this.loadAboutData();

    // Smooth fade-in animation
    setTimeout(() => (this.isVisible = true), 200);
  }

  // ---------------------------------------------------------------------
  // 1️⃣ جلب البيانات من الـ API
  // ---------------------------------------------------------------------
  loadAboutData(): void {
    const request: PageRequest = {
      pageNumber: 1,
      pageSize: 10,
      filter: { name: '', isDeleted: false },
      orderByValue: [{ colId: 'id', sort: 'asc' }],
    };

    this.pagesService.getPaged(request).subscribe({
      next: (res) => {
        this.aboutData = res.data.find(
          (item: any) => item.pageName === 'عن الجامعة'
        );

        this.buildTabs();
      },
      error: (err) => console.error('API Error:', err),
    });
  }

  // ---------------------------------------------------------------------
  // 2️⃣ تحميل الأهداف من الخدمة المحلية
  // ---------------------------------------------------------------------
  loadGoals(): void {
    this.goalsList = this.aboutUniversityService.getAboutUniversity().goals;
  }

  // ---------------------------------------------------------------------
  // 3️⃣ بناء Tabs بعد وصول جميع البيانات
  // ---------------------------------------------------------------------
  buildTabs(): void {
    if (!this.aboutData) return;

    this.tabs = [
      {
        id: 'vision',
        title: 'رؤيتنا',
        icon: 'pi pi-eye',
        content: this.aboutData.vision,
      },
      {
        id: 'mission',
        title: 'رسالتنا',
        icon: 'pi pi-flag',
        content: this.aboutData.mission,
      },
      {
        id: 'history',
        title: 'تاريخ الجامعة',
        icon: 'pi pi-history',
        content: this.aboutData.history,
      },
      {
        id: 'goals',
        title: 'أهدافنا',
        icon: 'pi pi-bullseye',
        content: this.goalsList,
      },
    ];
  }

  // ---------------------------------------------------------------------
  // 4️⃣ Getter Helpers
  // ---------------------------------------------------------------------
  get activeTabTitle(): string {
    return this.tabs.find((t) => t.id === this.activeTab)?.title || '';
  }

  get activeTabContent(): string | string[] {
    return this.tabs.find((t) => t.id === this.activeTab)?.content || '';
  }

  // ---------------------------------------------------------------------
  // 5️⃣ تغيير التاب
  // ---------------------------------------------------------------------
  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
