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
    { label: 'اتصل بنا', link: '#contact' },
    { label: 'الأخبار', link: '#news' },
    { label: 'الكليات والبرامج', link: '#faculties' },
    { label: 'حياة الطالب', link: '#student-life' },
    { label: 'القطاعات', link: '#sectors' },
    { label: 'الرعاية الصحية', link: '#healthcare' },
    { label: 'عن الجامعة', link: '#about' },
    { label: 'الرئيسية', link: '#home' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}