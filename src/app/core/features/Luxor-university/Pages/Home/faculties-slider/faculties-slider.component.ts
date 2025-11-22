import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule, SlickCarouselComponent } from 'ngx-slick-carousel';
import { Router } from '@angular/router';
import { FacultiesProgramsService } from '../../../Services/faculties-programs.service';
@Component({
  selector: 'app-faculties-slider',
  standalone: true,
  imports: [CommonModule, RouterModule, SlickCarouselModule],
  templateUrl: './faculties-slider.component.html',
  styleUrls: ['./faculties-slider.component.css']
})
export class FacultiesSliderComponent implements OnInit {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  constructor(private facultiesProgramsService: FacultiesProgramsService, private router: Router) {}

  isVisible = false;
  isMobile = false;

  slides: any[] = [];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: true,
    rtl: true,                    // مهم جدًا للعربية
    centerPadding: '40px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: '30px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px'
        }
      }
    ]
  };

  ngOnInit() {
    this.checkMobile();

    this.facultiesProgramsService.getFacultiesSlider().subscribe(data => {
      this.slides = data.map(item => ({
        type: 'logo',
        imageUrl: item.imageUrl,
        title: item.title
      }));
      // Insert pharaonic item at index 2
      this.slides.splice(0, 0, { type: 'pharaonic', imageUrl: '/assets/middle.png', title: 'Pharaonic Symbol' });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const element = document.querySelector('.faculties-slider-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);

    window.addEventListener('resize', () => {
      this.checkMobile();
    });
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  public pauseSlider() {
    if (this.slickModal) {
      this.slickModal.slickPause();
    }
  }

  public resumeSlider() {
    if (this.slickModal) {
      this.slickModal.slickPlay();
    }
  }

  navigateToFaculties() {
    this.router.navigate(['/faculties']);
  }
}