import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavbarItem } from '../model/navbar.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbarItems: NavbarItem[] = [
    { label: 'الرئيسية', link: '/home' },
    { label: 'عن الجامعة', link: '/about' },
    { label: 'الأخبار والأنشطة', link: '/all-news' },
    { label: 'الكليات والبرامج', link: '/faculties' },
    { label: 'الحياة الطلابية', link: '/student-life' },
    { label: 'الهيكل التنظيمي', link: '/org-structure' },
    { label: 'الإدارات والقطاعات', link: '/sectors' },
    { label: 'المراكز والمعاهد', link: '/center-list' },
    { label: 'اتصل بنا', link: '/contact-us' }
  ];

  getNavbarItems(): Observable<NavbarItem[]> {
    return of(this.navbarItems);
  }
}