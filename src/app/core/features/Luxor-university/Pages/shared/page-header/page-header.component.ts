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
  @Input() title: string = 'جامعة الأقصر';
  @Input() breadcrumbs: Array<{label: string, url?: string}> = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateHeader(event.urlAfterRedirects);
      });

    // Initial load
    this.updateHeader(this.router.url);
  }

  private updateHeader(url: string) {
    const pageConfig = this.getPageConfig(url);
    this.title = pageConfig.title;
    this.breadcrumbs = pageConfig.breadcrumbs;
  }

  private getPageConfig(url: string): { title: string; breadcrumbs: Array<{label: string, url?: string}> } {
    const configMap: { [key: string]: any } = {
      '/': { title: 'الرئيسية', breadcrumbs: [] },
      '/home': { title: 'الرئيسية', breadcrumbs: [] },
      '/sectors': { title: 'قطاعات الجامعة', breadcrumbs: [{label: 'القطاعات', url: '/sectors'}] },
      '/sectors-overview': { title: 'نظرة عامة على القطاعات', breadcrumbs: [{label: 'القطاعات', url: '/sectors'}] },
      '/sector-details/graduate-studies-research': {
        title: 'الدراسات العليا والبحث العلمي',
        breadcrumbs: [
          {label: 'القطاعات', url: '/sectors'},
          {label: 'الدراسات العليا', url: undefined}
        ]
      },
      '/sector-details/education-student-affairs': {
        title: 'التعليم وشؤون الطلاب',
        breadcrumbs: [
          {label: 'القطاعات', url: '/sectors'},
          {label: 'شؤون الطلاب', url: undefined}
        ]
      },
      '/faculties': { title: 'الكليات والبرامج', breadcrumbs: [{label: 'الكليات', url: '/faculties'}] },
      '/about': { title: 'عن الجامعة', breadcrumbs: [{label: 'عن الجامعة', url: '/about'}] },
      '/news': { title: 'الأخبار والإعلانات', breadcrumbs: [{label: 'الأخبار', url: '/news'}] },
      '/Departments': { title: 'إدارات الجامعة', breadcrumbs: [{label: 'الإدارات', url: '/Departments'}] },
      '/organizational-structure': { title: 'الهيكل التنظيمي', breadcrumbs: [{label: 'الهيكل التنظيمي', url: '/organizational-structure'}] },

      '/all-news': { title: 'جميع الأخبار والتحديثات', breadcrumbs: [{label: 'الأخبار', url: '/news'}, {label: 'جميع الأخبار', url: '/all-news'}] },
      '/student-life': { title: 'حياة الطالب', breadcrumbs: [{label: 'حياة الطالب', url: '/student-life'}] },
      '/healthcare': { title: 'خدمات الرعاية الصحية', breadcrumbs: [{label: 'الرعاية الصحية', url: '/healthcare'}] },
      '/contact': { title: 'اتصل بنا', breadcrumbs: [{label: 'اتصل بنا', url: '/contact'}] }
    };

    // Sector details dynamic
    if (url.includes('/sector-details/')) {
      const slug = url.split('/').pop();
      if (slug === 'graduate-studies-research') {
        return configMap['/sector-details/graduate-studies-research'];
      } else if (slug === 'education-student-affairs') {
        return configMap['/sector-details/education-student-affairs'];
      }
    }

    // News details dynamic
    if (url.includes('/news/') && url !== '/news') {
      return { title: 'تفاصيل الخبر', breadcrumbs: [{label: 'الأخبار', url: '/news'}, {label: 'التفاصيل', url: undefined}] };
    }

    // Department details dynamic
    if (url.includes('/departments')) {
      return { title: 'إدارات الجامعة', breadcrumbs: [{label: 'الإدارات', url: '/Departments'}] };
    }
 if (url.includes('/OrganizationalStructure')) {
      return { title: 'الهيكل التنظيمي', breadcrumbs: [{label: 'الهيكل التنظيمي', url: '/OrganizationalStructure'}] };
    }

if (url.includes('/contact-us')) {
      return { title: 'اتصل بنا', breadcrumbs: [{label: 'اتصل بنا', url: '/contact-us'}] };
    }

   
    return configMap[url] || { title: 'جامعة الأقصر', breadcrumbs: [] };
  }
}