// src/app/core/services/sector.service.ts
import { Injectable } from '@angular/core';
import { 
  Sector, 
  Department, 
  SectorStatistic, 
  SectorWithDetails 
} from '../model/sector.model';

// ✅ STATIC DATA - مبنية على المذكرة اللي بعتتيها
@Injectable({
  providedIn: 'root'
})
export class SectorService {
  
  // ✅ القطاعات الرئيسية (2 قطاعات من المذكرة)
  private sectors: Sector[] = [
    {
      id: '1',
      name: 'قطاع  اللدراسات العليا والبحث العلمي',
      slug: 'graduate-studies-research',
      description: 'مسؤولة عن إدارة جميع برامج الدراسات العليا والأنشطة البحثية والخدمات الأكاديمية لطلاب الدبلوم والماجستير والدكتوراه.',
      overview: 'يشرف القطاع العام للدراسات العليا والبحث العلمي على جميع جوانب التعليم العالي في جامعة الأقصر، مُضمنةً المعايير الأكاديمية العالية والتميز البحثي.',
      mission: 'توفير فرص تعليمية وبحثية استثنائية لطلاب الدراسات العليا مع الحفاظ على الكفاءة الإدارية والنزاهة الأكاديمية.',
      objectives: [
        'تبسيط إجراءات التسجيل والمعاملات الأكاديمية لطلاب الدراسات العليا',
        'تسهيل الأنشطة البحثية والإشراف على الرسائل العلمية',
        'ضمان إجراءات التقييم العادل ومنح الدرجات العلمية',
        'توفير خدمات دعم شاملة لطلاب الدراسات العليا',
        'الحفاظ على السجلات الأكاديمية والإحصائيات الدقيقة'
      ],
      icon: 'pi pi-graduation-cap',
      image_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      display_order: 1,
      created_at: '2024-01-01'
    },
    {
      id: '2',
      name: 'قطاع التعليم وشؤون الطلاب',
      slug: 'education-student-affairs',
      description: 'تدير قبول الطلاب الجامعيين والتسجيل والامتحانات وخدمات الطلاب الشاملة في جميع الكليات.',
      overview: 'تُعد قطاع التعليم وشؤون الطلاب النقطة الرئيسية للتواصل مع جميع طلاب البكالوريوس، مُديرةً رحلتهم الأكاديمية من القبول إلى التخرج.',
      mission: 'تقديم خدمات تعليمية فعالة ومُركزة على الطالب تضمن النجاح الأكاديمي وتجربة جامعية داعمة.',
      objectives: [
        'تنسيق إجراءات القبول والتسجيل على مستوى الجامعة',
        'تنظيم وإشراف إجراءات الامتحانات',
        'توفير خدمات دعم شاملة للطلاب',
        'الحفاظ على السجلات الأكاديمية والإحصائيات الدقيقة',
        'تسهيل الانتقال السلس من القبول إلى التخرج'
      ],
      icon: 'pi pi-users',
      image_url: 'https://images.unsplash.com/photo-1524178232363-933d15b4d9e9?w=800',
      display_order: 2,
      created_at: '2024-01-01'
    }
  ];

  // ✅ الإدارات الفرعية للقطاع الأول (الدراسات العليا)
  private departments: Department[] = [
    {
      id: '1',
      sector_id: '1',
      name: 'إدارة التسجيل والتسجيل الجامعي',
      responsible_person: 'الأستاذ محمود خليل علي',
      phone: '002-095-2287244',
      tasks: [
        'تسجيل الطلاب في برامج الدبلوم والماجستير والدكتوراه',
        'تسجيل واعتماد خطط البحث',
        'تشكيل لجان الامتحانات',
        'إجراءات منح الدرجات العلمية',
        'معالجة طلبات تخفيض الرسوم الدراسية'
      ],
      display_order: 1,
      created_at: '2024-01-01'
    },
    {
      id: '2',
      sector_id: '1',
      name: 'إدارة الوثائق والشهادات',
      responsible_person: 'الأستاذ محمود خليل علي',
      phone: '002-095-2287244',
      tasks: [
        'إصدار شهادات التسجيل (عربي/إنجليزي)',
        'توفير وثائق محتوى المقررات الدراسية',
        'معالجة طلبات معادلة المقررات',
        'تصديق مقررات المختبرات لطلاب المنح',
        'خدمات توثيق الوثائق'
      ],
      display_order: 2,
      created_at: '2024-01-01'
    }
  ];

  // ✅ الإدارات الفرعية للقطاع الثاني (التعليم وشؤون الطلاب)
  private moreDepartments: Department[] = [
    {
      id: '3',
      sector_id: '2',
      name: 'إدارة التسجيل والدراسة',
      responsible_person: 'الأستاذ محمد حسين أحمد',
      phone: '01140116223',
      tasks: [
        'إعداد أعداد القبول لكليات الجامعة',
        'مراجعة ملفات الطلاب والفحوصات الطبية',
        'معالجة نقل الطلاب بين الأقسام',
        'إعداد الجداول والتقويم الأكاديمي',
        'الحفاظ على سجلات حضور الطلاب'
      ],
      display_order: 1,
      created_at: '2024-01-01'
    },
    {
      id: '4',
      sector_id: '2',
      name: 'إدارة الامتحانات',
      responsible_person: 'الأستاذ محمد حسين أحمد',
      phone: '01140116223',
      tasks: [
        'مراجعة جداول الامتحانات والمواعيد',
        'تنسيق لجان الامتحانات',
        'إعداد إحصائيات الامتحانات اليومية',
        'معالجة طلبات الإعفاء من الامتحانات',
        'مراجعة واعتماد النتائج النهائية'
      ],
      display_order: 2,
      created_at: '2024-01-01'
    },
    {
      id: '5',
      sector_id: '2',
      name: 'إدارة الخريجين والشهادات',
      responsible_person: 'الأستاذ عيسى أحمد خليفة',
      phone: '01006553358',
      tasks: [
        'إعداد إحصائيات التخرج والشهادات',
        'مراجعة وتوثيق شهادات الدرجات',
        'معالجة طلبات تصحيح الأسماء',
        'إصدار الشهادات الدائمة والبدل',
        'الحفاظ على قاعدة بيانات الخريجين'
      ],
      display_order: 3,
      created_at: '2024-01-01'
    },
    {
      id: '6',
      sector_id: '2',
      name: 'إدارة الطلاب الدوليين',
      responsible_person: 'الأستاذ سالم محمد أبو الوفاء سالم',
      phone: '01014466444',
      tasks: [
        'مراجعة طلبات الطلاب الدوليين',
        'التحقق من وثائق القبول والأمان',
        'معالجة دفعات الرسوم للطلاب الدوليين',
        'الحفاظ على إحصائيات الطلاب الدوليين',
        'التنسيق مع السفارات والوزارات'
      ],
      display_order: 4,
      created_at: '2024-01-01'
    }
  ];

  // ✅ الإحصائيات من المذكرة (2024/2025)
  private statistics: SectorStatistic[] = [
    // إحصائيات الدراسات العليا
    {
      id: '1',
      sector_id: '1',
      category: 'كلية السياحة والفنادق',
      diploma: 225,
      masters: 24,
      phd: 7,
      total: 256,
      display_order: 1,
      created_at: '2024-01-01'
    },
    {
      id: '2',
      sector_id: '1',
      category: 'كلية الآثار',
      diploma: 8,
      masters: 16,
      phd: 0,
      total: 24,
      display_order: 2,
      created_at: '2024-01-01'
    },
    {
      id: '3',
      sector_id: '1',
      category: 'كلية الفنون الجميلة',
      diploma: 0,
      masters: 27,
      phd: 2,
      total: 29,
      display_order: 3,
      created_at: '2024-01-01'
    },
    {
      id: '4',
      sector_id: '1',
      category: 'كلية الألسن',
      diploma: 2,
      masters: 2,
      phd: 1,
      total: 5,
      display_order: 4,
      created_at: '2024-01-01'
    },
    {
      id: '5',
      sector_id: '1',
      category: 'كلية التربية',
      diploma: 248,
      masters: 0,
      phd: 0,
      total: 248,
      display_order: 5,
      created_at: '2024-01-01'
    },
    {
      id: '6',
      sector_id: '1',
      category: 'الإجمالي',
      diploma: 483,
      masters: 69,
      phd: 10,
      total: 562,
      display_order: 6,
      created_at: '2024-01-01'
    }
  ];

  // ✅ METHODS - Static بدل Supabase
  async getAllSectors(): Promise<Sector[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.sectors;
  }

  async getSectorBySlug(slug: string): Promise<SectorWithDetails | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const sector = this.sectors.find(s => s.slug === slug);
    if (!sector) return null;

    const departments = [
      ...this.departments.filter(d => d.sector_id === sector.id),
      ...this.moreDepartments.filter(d => d.sector_id === sector.id)
    ];

    const sectorStats = this.statistics.filter(s => s.sector_id === sector.id);

    return {
      ...sector,
      departments,
      statistics: sectorStats
    };
  }

  async getDepartmentsBySectorId(sectorId: string): Promise<Department[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      ...this.departments.filter(d => d.sector_id === sectorId),
      ...this.moreDepartments.filter(d => d.sector_id === sectorId)
    ];
  }

  async getStatisticsBySectorId(sectorId: string): Promise<SectorStatistic[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.statistics.filter(s => s.sector_id === sectorId);
  }

  async getAdjacentSectors(currentSlug: string): Promise<{ previous: Sector | null; next: Sector | null }> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const sectors = await this.getAllSectors();
    const currentIndex = sectors.findIndex(s => s.slug === currentSlug);

    return {
      previous: currentIndex > 0 ? sectors[currentIndex - 1] : null,
      next: currentIndex < sectors.length - 1 ? sectors[currentIndex + 1] : null
    };
  }
}