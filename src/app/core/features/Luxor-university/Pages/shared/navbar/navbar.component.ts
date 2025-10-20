import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;

  menuItems = [
    
    { label: 'تواصل معنا', link: 'contact-us' },
    { label: 'الكليات والبرامج', link: './faculties' },
    { label: 'حياة الطالب', link: './coming-soon' },
    // { label: 'Healthcare', link: '#healthcare' },
    {label :'الأدارات',link:'./departments'},
    {label :'الهيكل التنظيمي',link:'./OrganizationalStructure'},
    { label: 'القطاعات', link: 'sectors' },
    { label: 'الأخبار', link: '/all-news' },
    { label: 'عن الجامعة', link: './about' },
    { label: 'الرئيسية', link: '#home' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}