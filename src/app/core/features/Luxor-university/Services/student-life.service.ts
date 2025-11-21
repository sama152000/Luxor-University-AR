import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentLifeData, StudentLifeActivity, ActivityCategory } from '../model/student-life.model';

@Injectable({
  providedIn: 'root'
})
export class StudentLifeService {

  private categories: ActivityCategory[] = [
    { id: 'community', name: 'خدمة المجتمع', icon: 'pi pi-heart-fill', color: '#DC143C' },
    { id: 'sports', name: 'الرياضة والصحة', icon: 'pi pi-trophy', color: '#E49017' },
    { id: 'cultural', name: 'الفعاليات الثقافية', icon: 'pi pi-palette', color: '#8B4513' },
    { id: 'academic', name: 'الأكاديمي والتوعوي', icon: 'pi pi-graduation-cap', color: '#273075' },
    { id: 'digital', name: 'التوعية الرقمية', icon: 'pi pi-shield', color: '#4682B4' },
    { id: 'support', name: 'الدعم الطلابي', icon: 'pi pi-users', color: '#2E8B57' }
  ];

  private activities: StudentLifeActivity[] = [
    {
      id: 'polio-marathon',
      title: 'سباق ماراثون للقضاء على شلل الأطفال',
      description: 'شارك طلاب جامعة الأقصر في الماراثون العالمي "سباق للقضاء على شلل الأطفال" تحت شعار "الرياضة في خدمة الإنسانية"، لرفع الوعي بأهمية التطعيم ضد الشلل، مع مشاركة مئات الطلاب والمواطنين على كورنيش النيل.',
      category: this.categories[1], // الرياضة والصحة
      tags: ['ماراثون', 'توعية صحية', 'خدمة مجتمعية', 'حملة عالمية'],
      imageUrl: './assets/new1.jpg',
      location: 'معبد الأقصر → كورنيش النيل',
      schedule: '12 يناير 2025',
      contactInfo: {
        coordinator: 'قطاع خدمة المجتمع',
        email: 'community@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'dark-web-seminar',
      title: 'ندوة الويب المظلم والسلامة الرقمية',
      description: 'ندوة توعوية حول مخاطر الويب المظلم وممارسات السلامة الرقمية، نظمتها كلية الفنون الجميلة بالتعاون مع إدارة التحول الرقمي.',
      category: this.categories[4], // التوعية الرقمية
      tags: ['أمن سيبراني', 'سلامة رقمية', 'الويب المظلم', 'حماية الطلاب'],
      imageUrl: './assets/new2.jpg',
      location: 'قاعة كلية الفنون الجميلة',
      schedule: '11 يناير 2025',
      contactInfo: {
        coordinator: 'د. هنا حماد',
        email: 'digital.security@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'expat-support',
      title: 'الدعم النفسي للطلاب الوافدين',
      description: 'إطلاق مبادرة "الدعم النفسي للطلاب الوافدين" مع ندوات توعوية وجلسات استشارية للطلاب المقيمين بعيدًا عن أسرهم.',
      category: this.categories[5], // الدعم الطلابي
      tags: ['صحة نفسية', 'رفاهية الطلاب', 'استشارات', 'طلاب وافدون'],
      imageUrl: './assets/new3.jpg',
      location: 'السكن الجامعي للطالبات - مدينة طيبة',
      schedule: 'برنامج مستمر',
      contactInfo: {
        coordinator: 'د. هاني عبد الفتاح',
        email: 'counseling@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'unesco-celebration',
      title: 'الاحتفاء بتعيين الدكتور خالد العناني مديرًا عامًا لليونسكو',
      description: 'احتفال الجامعة باختيار الدكتور خالد العناني مديرًا عامًا لليونسكو تاريخيًا - الأول من المصريين في هذا المنصب المرموق.',
      category: this.categories[3], // الأكاديمي والتوعوي
      tags: ['اليونسكو', 'إنجاز دولي', 'تراث ثقافي', 'فخر مصري'],
      imageUrl: './assets/new5.jpg',
      location: 'القاعة الرئيسية للجامعة',
      schedule: '8 يناير 2025',
      contactInfo: {
        coordinator: 'مكتب رئاسة الجامعة',
        email: 'president@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'luxor-temple-discovery',
      title: 'اكتشاف نقش فرعوني جديد في معبد الأقصر',
      description: 'بعثة جامعة الأقصر الأثرية تكتشف نقشًا نادرًا من عصر رمسيس الثاني أثناء الحفريات في معبد الأقصر، يكشف تفاصيل جديدة عن عيد أوبيت.',
      category: this.categories[2], // الفعاليات الثقافية
      tags: ['آثار', 'اكتشاف فرعوني', 'معبد الأقصر', 'رمسيس الثاني'],
      imageUrl: './assets/new7.jpg',
      location: 'جدار معبد الأقصر الشرقي',
      schedule: 'حفريات مستمرة',
      contactInfo: {
        coordinator: 'د. أحمد فروق',
        email: 'archaeology@luxor.edu.eg'
      },
      isActive: true,
      featured: true
    },
    {
      id: 'blood-donation-drive',
      title: 'حملة تبرع بالدم الشهرية',
      description: 'حملات تبرع بالدم الدورية بالتعاون مع المستشفيات المحلية لدعم المرضى وإنقاذ الأرواح في مجتمع الأقصر.',
      category: this.categories[0], // خدمة المجتمع
      tags: ['تبرع بالدم', 'صحة', 'دعم مجتمعي', 'تطوع'],
      imageUrl: './assets/new6.jpg',
      location: 'المركز الطبي الجامعي',
      schedule: 'الخميس الأول من كل شهر',
      contactInfo: {
        coordinator: 'وحدة الخدمات الطبية',
        email: 'medical@luxor.edu.eg'
      },
      isActive: true,
      featured: false
    }
  ];

  private featuredActivities = this.activities.filter(a => a.featured);

  getStudentLifeData(): Observable<StudentLifeData> {
    return of({
      categories: this.categories,
      activities: this.activities,
      featuredActivities: this.featuredActivities
    });
  }

  getActivitiesByCategory(categoryId: string): Observable<StudentLifeActivity[]> {
    const filtered = this.activities.filter(
      activity => activity.category.id === categoryId && activity.isActive
    );
    return of(filtered);
  }

  getFeaturedActivities(): Observable<StudentLifeActivity[]> {
    return of(this.featuredActivities);
  }

  getActivityById(id: string): Observable<StudentLifeActivity | undefined> {
    const activity = this.activities.find(a => a.id === id);
    return of(activity);
  }

  getAllCategories(): Observable<ActivityCategory[]> {
    return of(this.categories);
  }
}