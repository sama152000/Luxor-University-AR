import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FooterData } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private footerData: FooterData = {
    universityInfo: {
      description: 'جامعة الأقصر مؤسسة أكاديمية ملتزمة بتقديم تعليم عالي الجودة وبحث علمي متميز في قلب الحضارة المصرية العريقة.',
      slogan: 'من تراث حضارتنا.. نصنع المستقبل'
    },
    quickLinks: [
      { label: 'الرئيسية', link: '/home' },
      { label: 'عن الجامعة', link: '/about' },
      { label: 'الكليات والبرامج', link: '/faculties' },
      { label: 'الحياة الطلابية', link: '/student-life' },
      { label: 'اتصل بنا', link: '/contact-us' }
    ],
    importantLinks: [
      { label: 'الهيكل التنظيمي', link: '/org-structure' },
      { label: 'الإدارات والوحدات', link: '/departments' },
      { label: 'المراكز والمعاهد', link: '/center-list' }
    ],
    contactInfo: {
      address: 'مدينة الأقصر - طريق الكباش - جمهورية مصر العربية',
      phone: '+20 95 000 0000',
      email: 'info@luxoruniv.edu.eg'
    },
    socialLinks: [
      { 
        icon: 'pi-facebook', 
        link: 'https://www.facebook.com/LuxorUniversityOfficial', 
        label: 'فيسبوك' 
      },
      { 
        icon: 'pi-twitter', 
        link: 'https://twitter.com/LuxorUniv', 
        label: 'تويتر' 
      },
      { 
        icon: 'pi-linkedin', 
        link: 'https://www.linkedin.com/school/luxor-university', 
        label: 'لينكد إن' 
      },
      { 
        icon: 'pi-youtube', 
        link: 'https://www.youtube.com/@LuxorUniversityOfficial', 
        label: 'يوتيوب' 
      }
    ]
  };

  getFooterData(): Observable<FooterData> {
    return of(this.footerData);
  }
}