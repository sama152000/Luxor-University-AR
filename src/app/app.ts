import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './core/features/Luxor-university/Pages/shared/page-header/page-header.component';
import { FooterComponent } from './core/features/Luxor-university/Pages/shared/footer/footer.component';
import { NavbarComponent } from './core/features/Luxor-university/Pages/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    ButtonModule,
    CommonModule,
    RouterModule,
    PageHeaderComponent,
    FooterComponent,
    NavbarComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'جامعة الاقصر';
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
