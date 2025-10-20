// src/app/core/services/department.service.ts
import { Injectable } from '@angular/core';
import { Department, HierarchyNode } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [
    {
      id: '1',
      name: 'إدارة العقود',
      slug: 'contracts-administration',
      director: 'الأستاذ صلاح عبد العاطي محمد',
      team: ['بركات صبحي إسحاق', 'سماح سيد بدوي'],
      responsibilities: [
        'استلام ومراجعة طلبات الشراء وإعداد خطط العروض.',
        'نشر المناقصات على بوابة الشراء العام.',
        'إدارة العلاقات مع الموردين والعقود.',
        'مراقبة أداء الموردين وضمان التسليم في الوقت المحدد.',
        'التعامل مع الفوترة الإلكترونية والحفظ.',
        'العمل ضمن نظام الشراء الموحد.'
      ],
      vision: 'استخدام التكنولوجيا الحديثة في أنظمة الشراء والمخزون. تدريب وتأهيل الكوادر للتميز المهني. تعزيز الشفافية والعدالة في الشراء التنافسي.',
      mission: 'تأمين جميع احتياجات الجامعة بكفاءة واقتصادية. تعزيز التعاون مع الإدارات الأخرى. بناء قاعدة بيانات داخلية متاحة لإدارة العقود.',
      icon: 'pi pi-file-contract'
    },
    {
      id: '2',
      name: 'إدارة العلاقات العامة والإعلام',
      slug: 'public-relations-media',
      director: 'الدكتورة علا علي إبراهيم',
      team: ['نرمين محمد', 'حسين أبو الهمد', 'أحمد حافظ', 'أسماء حمودة', 'آخرون'],
      responsibilities: [
        'إعداد البيانات الصحفية والبيانات الرسمية.',
        'إدارة الموقع الإلكتروني وصفحات التواصل الاجتماعي.',
        'الترويج للأنشطة الأكاديمية والبحثية والطلابية.',
        'الإشراف على المؤتمرات والحفلات وأعياد التخرج.',
        'نشر التحديثات والقرارات الداخلية.',
        'إطلاق حملات توعية ومبادرات اجتماعية.',
        'متابعة التغطية الإعلامية والرد على المعلومات المضللة.',
        'تطوير استراتيجيات التواصل للحالات الطارئة.'
      ],
      vision: 'تعزيز الصورة العامة للجامعة من خلال الإعلام الفعّال والمشاركة المجتمعية.',
      mission: 'تعزيز العلاقات القوية مع أصحاب المصلحة والترويج لإنجازات الجامعة.',
      icon: 'pi pi-megaphone'
    },
    {
      id: '3',
      name: 'إدارة نظم المعلومات والتحول الرقمي',
      slug: 'information-systems-digital-transformation',
      director: 'ياسر محمد خضري',
      team: ['محمود يوسف', 'شيماء سلطان', 'أسماء سيد', 'آخرون'],
      responsibilities: [
        'أتمتة نظم المعلومات الجامعية.',
        'تدريب الموظفين على الأنظمة والأدوات الرقمية.',
        'إدارة وتأمين قواعد البيانات وموقع الجامعة.',
        'ضمان الامتثال لمعايير الأمن السيبراني.'
      ],
      vision: 'قيادة التحول الرقمي لإنشاء بيئة جامعية ذكية.',
      mission: 'توفير نظم معلومات موثوقة ودعم الابتكار الرقمي في جميع الإدارات.',
      subDepartments: [
        'البنية التحتية والأمن المعلوماتي',
        'الإحصاء والتقارير والنشر الإلكتروني',
        'الأنظمة والتطبيقات والدعم الفني'
      ],
      icon: 'pi pi-database'
    },
    {
      id: '4',
      name: 'الإدارة العامة لمكتبات الجامعة',
      slug: 'university-libraries',
      director: 'سيتم الإضافة', // Missing data - added placeholder
      team: ['فريق مكتبات الجامعة'], // Missing - added placeholder
      responsibilities: [
        'الإشراف وتطوير المكتبات في جميع كليات الجامعة.',
        'تنظيم عمليات التصنيف والفهرسة والإعارة.',
        'توفير قواعد بيانات رقمية للباحثين.',
        'دعم التعليم الإلكتروني من خلال خدمات المكتبة الرقمية.'
      ],
      vision: 'إنشاء مركز معرفي عالمي المستوى للتميز الأكاديمي.',
      mission: 'تسهيل الوصول إلى الموارد المعلوماتية للطلاب والباحثين.',
      icon: 'pi pi-book'
    },
    {
      id: '5',
      name: 'إدارة الهندسة',
      slug: 'engineering-administration',
      director: 'سيتم الإضافة', // Missing - added placeholder
      team: ['فريق الهندسة'], // Missing - added placeholder
      responsibilities: [
        'الإشراف على مشاريع البنية التحتية والبناء.',
        'مراقبة الصيانة والمرافق وإدارة المباني.',
        'تصميم وتنفيذ مشاريع المباني الجديدة.',
        'ضمان الامتثال لمعايير السلامة والجودة.'
      ],
      vision: 'بناء وصيانة مرافق متطورة لجامعة عصرية.',
      mission: 'توفير دعم بنية تحتية آمن وفعّال لجميع أنشطة الجامعة.',
      icon: 'pi pi-wrench'
    }
  ];

  private orgStructure: HierarchyNode = {
    name: 'السيدة الدكتورة صبرين جابر عبد الجليل',
    position: 'رئيس الجامعة',
    children: [
      {
        name: 'نائب الرئيس للتعليم وشؤون الطلاب',
        position: 'نائب رئيس',
        children: [
          {
            name: 'إدارة التعليم وشؤون الطلاب',
            position: 'إدارة',
            department: this.departments.find(d => d.slug === 'education-student-affairs') // Link if exists
          }
        ]
      },
      {
        name: 'نائب الرئيس للدراسات العليا والبحث العلمي',
        position: 'نائب رئيس',
        children: [
          {
            name: 'الإدارة العامة للدراسات العليا والبحث العلمي',
            position: 'إدارة',
            department: this.departments.find(d => d.slug === 'graduate-studies-research')
          }
        ]
      },
      {
        name: 'نائب الرئيس لخدمة المجتمع وتنمية البيئة',
        position: 'نائب رئيس',
        children: [
          // Add relevant departments
        ]
      },
      {
        name: 'أمين عام الجامعة',
        position: 'أمين عام',
        children: this.departments.map(dep => ({
          name: dep.name,
          position: 'إدارة',
          department: dep
        }))
      }
    ]
  };

  getAllDepartments(): Department[] {
    return this.departments;
  }

  getDepartmentBySlug(slug: string): Department | undefined {
    return this.departments.find(d => d.slug === slug);
  }

  getOrgStructure(): HierarchyNode {
    return this.orgStructure;
  }
}