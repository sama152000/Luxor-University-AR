import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;
isMenuOpen = false;

  menuItems = [
    
    { label: 'الرئيسية', link: '/home' },
    { label: 'عن الجامعة', link: '/about' },
    { label: 'الأخبار', link: '/all-news' },
    // { label: 'Healthcare', link: '#healthcare' },
    {label :'الأدارات',link:'./departments'},
    {label :'الهيكل التنظيمي',link:'/org-structure'},
    { label: 'المراكز', link: '/Center-list' },
    
    { label: 'القطاعات', link: '/sectors' },
    { label: 'حياة الطالب', link: '/coming-soon' },
    { label: 'الكليات والبرامج', link: '/faculties' },
    { label: 'تواصل معنا', link: '/contact-us' },
  ];

 

  
toggleMenu() {
this.isMenuOpen = !this.isMenuOpen;
}
closeMenu() {
this.isMenuOpen = false;
}
@HostListener('window:scroll', [])
onWindowScroll() {
this.isScrolled = window.pageYOffset > 50;
}
@HostListener('window:resize')
onResize() {
if (window.innerWidth >= 992) {
this.isMenuOpen = false;
}
}
}
