import { Injectable } from '@angular/core';
import { GalleryItem } from '../model/gallery-item.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private mockGalleryItems: GalleryItem[] = [
    {
      id: 1,
      imageUrl: './assets/new1.jpg',
      title: 'المبنى الرئيسي للحرم الجامعي',
      description: 'الهندسة المعمارية الحديثة تلتقي بالتراث المصري'
    },
    {
      id: 2,
      imageUrl: './assets/new2.jpg',
      title: 'أنشطة الطلاب',
      description: 'حياة طلابية نابضة بالحيوية في جامعة الأقصر'
    },
    {
      id: 3,
      imageUrl: './assets/new3.jpg',
      title: 'مختبر البحث العلمي',
      description: 'مرافق بحثية متطورة بأحدث التقنيات'
    },
    {
      id: 4,
      imageUrl: './assets/president.jpg',
      title: 'المكتبة',
      description: 'موارد رقمية حديثة وتقليدية متاحة'
    },
    {
      id: 5,
      imageUrl: './assets/new5.jpg',
      title: 'حفل التخرج',
      description: 'الاحتفال بالتميز الأكاديمي'
    },
    {
      id: 6,
      imageUrl: './assets/new6.jpg',
      title: 'الشراكات الدولية',
      description: 'تعاون وتبادل عالمي'
    },
    {
      id: 7,
      imageUrl: './assets/new7.jpg',
      title: 'الفعاليات الثقافية',
      description: 'الحفاظ على التقاليد المصرية'
    },
    {
      id: 8,
      imageUrl: './assets/new8.jpg',
      title: 'المرافق الرياضية',
      description: 'دعم الصحة واللياقة للطلاب'
    },
    {
      id: 9,
      imageUrl: './assets/new9.jpg',
      title: 'ورشة الهندسة',
      description: 'تجربة تعليمية عملية'
    },
    {
      id: 10,
      imageUrl: './assets/new2.jpg',
      title: 'التدريب الطبي',
      description: 'إعداد قادة الرعاية الصحية المستقبليين'
    }
  ];

  getGalleryItems(): GalleryItem[] {
    return this.mockGalleryItems;
  }
}