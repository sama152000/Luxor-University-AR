import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { FacultiesProgramsService } from '../../../Services/faculties-programs.service';

@Component({
  selector: 'app-faculties-slider',
  standalone: true,
  imports: [CommonModule, RouterModule, SlickCarouselModule],
  templateUrl: './faculties-slider.component.html',
  styleUrls: ['./faculties-slider.component.css']
})
export class FacultiesSliderComponent implements OnInit, AfterViewInit {
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  isVisible = false;
  isMobile = false;
  slides: any[] = [];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, centerPadding: '40px' }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3, centerPadding: '30px' }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: '20px' }
      }
    ]
  };

  constructor(
    private facultiesService: FacultiesProgramsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkMobile();
    this.loadSlides();

    // Intersection Observer للأنيميشن عند الظهور
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.isVisible = true;
        observer.unobserve(entries[0].target);
      }
    }, { threshold: 0.1 });

    setTimeout(() => {
      const el = document.querySelector('.faculties-slider-section');
      if (el) observer.observe(el);
    }, 100);

    window.addEventListener('resize', () => this.checkMobile());
  }

  ngAfterViewInit() {
    // تأكد إن السلايدر يتحدث بعد إضافة العنصر الفرعوني
    setTimeout(() => {
      if (this.slickModal && !this.isMobile) {
        this.slickModal.unslick();
        this.slickModal.initSlick();
      }
    }, 300);
  }

  loadSlides() {
    this.facultiesService.getFacultiesSlider().subscribe(data => {
      this.slides = data.map(item => ({
        type: 'logo',
        imageUrl: item.imageUrl,
        title: item.title
      }));

      // نضيف اللوجو الفرعوني الكبير في النص (أو في البداية لو حابة)
      this.slides.splice(Math.floor(this.slides.length / 2), 0, {
        type: 'pharaonic',
        imageUrl: '/assets/middle.png',  // أو '/assets/pharaonic-center.png'
        title: 'جامعة الأقصر'
      });
    });
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  pauseSlider() {
    if (this.slickModal && !this.isMobile) {
      this.slickModal.slickPause();
    }
  }

  resumeSlider() {
    if (this.slickModal && !this.isMobile) {
      this.slickModal.slickPlay();
    }
  }

  navigateToFaculties() {
    this.router.navigate(['/faculties']);
  }
}