import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItem } from '../../../model/gallery-item.model';
import { GalleryService } from '../../../Services/gallery.service';
import{FormsModule}from'@angular/forms';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,
FormsModule
  ],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  galleryItems: GalleryItem[] = [];
  isPaused = false;
  hoveredItem: GalleryItem | null = null;
  isVisible = false;

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryItems = this.galleryService.getGalleryItems();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const element = document.querySelector('.gallery-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }

  ngOnDestroy() {
    this.hoveredItem = null;
  }

  getItemTransform(index: number): string {
    const total = this.galleryItems.length;
    const angle = (360 / total) * index;
    const radiusX = 700; /* Increased from 280px */
    const radiusY = 150; /* Increased from 180px */

    const x = Math.cos((angle * Math.PI) / 180) * radiusX;
    const y = Math.sin((angle * Math.PI) / 180) * radiusY;

    return `translate3d(${x}px, ${y}px, 0px) rotateY(${-angle}deg)`;
  }

  pauseRotation(item: GalleryItem) {
    this.isPaused = true;
    this.hoveredItem = item;
  }

  resumeRotation() {
    this.isPaused = false;
    this.hoveredItem = null;
  }
}