import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CentersService } from '../../../Services/centers.service';
import { Center } from '../../../model/centers.model';
import { ButtonModule } from 'primeng/button';
import { PageHeaderComponent } from '../../shared/page-header/page-header.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-center-details',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, PageHeaderComponent, FooterComponent],
  templateUrl: './center-details.component.html',
  styleUrls: ['./center-details.component.css']
})
export class CenterDetailsComponent implements OnInit {
  center: Center | undefined;
  currentIndex: number = 0;
  centers: Center[] = [];

  breadcrumbs = [
    { label: 'الرئيسية', url: '/' },
    { label: 'مراكز الجامعة', url: '/Center-list' },
    { label: '', url: '' }
  ];

  constructor(
    private route: ActivatedRoute,
    private centersService: CentersService
  ) {}

  ngOnInit() {
    this.centers = this.centersService.getCenters();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.center = this.centersService.getCenterById(id);
        this.currentIndex = this.centers.findIndex(c => c.id === id);
        if (this.center) {
          this.breadcrumbs[2].label = this.center.name;
        }
      }
    });
    setTimeout(() => {
      document.querySelectorAll('.center-details').forEach(el => el.classList.add('visible'));
    }, 200);
  }

  getPreviousCenterId(): string | null {
    return this.currentIndex > 0 ? this.centers[this.currentIndex - 1].id : null;
  }

  getNextCenterId(): string | null {
    return this.currentIndex < this.centers.length - 1 ? this.centers[this.currentIndex + 1].id : null;
  }

  getServices(centerId: string): string[] {
    const servicesMap: { [key: string]: string[] } = {
      'fine-arts': ['الديكور', 'التصوير', 'التصميم الجرافيكي', 'الموضة', 'الإعلام', 'برامج الكمبيوتر', 'النحت'],
      'design-media': ['خدمات التصميم', 'دورات احترافية', 'تدريب عملي', 'الإعلام الرقمي'],
      'cultural-heritage': ['دورات تدريبية', 'استشارات علمية', 'بحوث حول التراث'],
      'tourism-hospitality': ['التوعية السياحية', 'تدريب في السياحة', 'تدريب في الضيافة', 'بحوث متخصصة'],
      'it-consulting': ['تكامل البرمجيات', 'تدريب تقنية المعلومات', 'استشارات فنية', 'تطوير قواعد البيانات'],
      'carpentry': ['توريد الأثاث', 'المنتجات الخشبية', 'استشارات تصميمات النجارة'],
      'digital-printing': ['خدمات الطباعة', 'خدمات النشر', 'تدريب', 'بحوث في الطباعة'],
      'laundry': ['خدمات غسيل الملابس للطلاب'],
      'psych-support': ['الدعم النفسي', 'الدعم التربوي'],
      'project-management': ['خدمات إدارة المشروعات'],
      'career-development': ['التوعية المهنية', 'تدريب الميسرين', 'تدريب مهارات التوظيف'],
      'measurement-evaluation': ['خطط التقييم', 'تدريب', 'بحوث لتحسين الأداء'],
      'ict': ['خدمات تكنولوجيا المعلومات والاتصالات', 'تدريب', 'استشارات'],
      'al-alsun': ['تدريب لغوي', 'تدقيق لغوي', 'ترجمة', 'استشارات لغوية'],
      'handicrafts': ['دعم الحرف التقليدية', 'تدريب', 'بحوث للمشروعات الصغيرة'],
      'bronze-foundry': ['خدمات سباكة البرونز', 'استشارات', 'تدريب']
    };
    return servicesMap[centerId] || [];
  }
}