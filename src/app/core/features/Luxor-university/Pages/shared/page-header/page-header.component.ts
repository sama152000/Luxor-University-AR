import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() title?: string; // عنوان الصفحة (يقدر يتُرسل من الخارج)
  @Input() breadcrumbs: Array<{label: string, url?: string}> = []; // مسار التنقل (الـ breadcrumbs)

  constructor(private router: Router) {}

  ngOnInit() {
    // كل ما يحصل تغيير في الرابط، نعيد تحديث العنوان ومسار التنقل
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateHeader(event.urlAfterRedirects);
      });

    // عند تحميل الصفحة أول مرة
    this.updateHeader(this.router.url);
  }

  private updateHeader(url: string) {
    const pageConfig = this.getPageConfig(url);

    // لو ما كان في عنوان مُرسل من الخارج، نأخذ العنوان من الإعدادات
    if (!this.title) {
      this.title = pageConfig.title;
    }
    // لو ما كان في مسار تنقل مُرسل، نأخذه من الإعدادات
    if (this.breadcrumbs.length === 0) {
      this.breadcrumbs = pageConfig.breadcrumbs;
    }
  }

  private getPageConfig(url: string): { title: string; breadcrumbs: Array<{label: string, url?: string}> } {
    const configMap: { [key: string]: any } = {
      '/': { title: 'الرئيسية', breadcrumbs: [] },
      '/home': { title: 'الرئيسية', breadcrumbs: [] },
      '/sectors': { title: 'قطاعات الجامعة', breadcrumbs: [{label: 'القطاعات', url: '/sectors'}] },
      '/sectors-overview': { title: 'نظرة عامة على القطاعات', breadcrumbs: [{label: 'القطاعات', url: '/sectors'}] },
      
      '/sector-details/graduate-studies-research': {
        title: 'الدراسات العليا والبحوث',
        breadcrumbs: [
          {label: 'القطاعات', url: '/sectors'},
          {label: 'الدراسات العليا والبحوث', url: undefined}
        ]
      },
      '/sector-details/education-student-affairs': {
        title: 'الشؤون التعليمية وشؤون الطلاب',
        breadcrumbs: [
          {label: 'القطاعات', url: '/sectors'},
          {label: 'الشؤون التعليمية وشؤون الطلاب', url: undefined}
        ]
      },

      '/faculties': { title: 'الكليات والبرامج', breadcrumbs: [{label: 'الكليات', url: '/faculties'}] },
      '/about': { title: 'عن الجامعة', breadcrumbs: [{label: 'عن الجامعة', url: '/about'}] },
      '/news': { title: 'الأخبار والإعلانات', breadcrumbs: [{label: 'الأخبار', url: '/news'}] },
      '/Departments': { title: 'الإدارات', breadcrumbs: [{label: 'الإدارات', url: '/Departments'}] },
      '/organizational-structure': { title: 'الهيكل التنظيمي', breadcrumbs: [{label: 'الهيكل التنظيمي', url: '/organizational-structure'}] },

      '/all-news': { title: 'آخر الأخبار والتحديثات', breadcrumbs: [{label: 'الأخبار', url: '/news'}, {label: 'جميع الأخبار', url: '/all-news'}] },
      '/student-life': { title: 'الحياة الطلابية', breadcrumbs: [{label: 'الحياة الطلابية', url: '/student-life'}] },
      '/healthcare': { title: 'الخدمات الصحية', breadcrumbs: [{label: 'الرعاية الصحية', url: '/healthcare'}] },
      '/contact-us': { title: 'تواصل معنا', breadcrumbs: [{label: 'تواصل معنا', url: '/contact-us'}] },
      '/OrganizationalStructure': { title: 'الهيكل التنظيمي', breadcrumbs: [{label: 'الهيكل التنظيمي', url: '/OrganizationalStructure'}] },
      '/Center-list': { title: 'مراكز الجامعة', breadcrumbs: [{label: 'المراكز'}] },
    };

    // تفاصيل القطاعات (ديناميكي)
    if (url.includes('/sector-details/')) {
      const slug = url.split('/').pop();
      if (slug === 'graduate-studies-research') {
        return configMap['/sector-details/graduate-studies-research'];
      } else if (slug === 'education-student-affairs') {
        return configMap['/sector-details/education-student-affairs'];
      }
    }

    // تفاصيل الخبر (ديناميكي)
    if (url.includes('/news/') && url !== '/news') {
      return { 
        title: 'تفاصيل الخبر', 
        breadcrumbs: [
          {label: 'الأخبار', url: '/news'}, 
          {label: 'التفاصيل', url: undefined}
        ] 
      };
    }

    // صفحات الإدارات
    if (url.includes('/departments')) {
      return { title: 'إدارات الجامعة', breadcrumbs: [{label: 'الإدارات', url: '/Departments'}] };
    }

    if (url.includes('/OrganizationalStructure')) {
      return { title: 'الهيكل التنظيمي', breadcrumbs: [{label: 'الهيكل التنظيمي', url: '/OrganizationalStructure'}] };
    }

    if (url.includes('/contact-us')) {
      return { title: 'تواصل معنا', breadcrumbs: [{label: 'تواصل معنا', url: '/contact-us'}] };
    }

    // صفحات المراكز (مثال ديناميكي)
    if (url.includes('/centers/')) {
      return { title: 'تفاصيل المركز', breadcrumbs: [{label: 'المراكز', url: '/Center-list'}] };
    }

    // إذا الصفحة موجودة في القائمة نرجع بياناتها، وإلا نرجع عنوان افتراضي
    return configMap[url] || { title: 'جامعة الأقصر', breadcrumbs: [] };
  }
}