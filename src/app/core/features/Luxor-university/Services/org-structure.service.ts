import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrgNode, OrgStructureData } from '../model/org-structure.model';

@Injectable({
  providedIn: 'root'
})
export class OrgStructureService {

  private orgData: OrgNode = {
    id: 'president',
    label: 'رئيس الجامعة',
    title: 'رئيس جامعة الأقصر',
    type: 'president',
    expanded: true,
    icon: 'pi pi-crown',
    children: [
      {
        id: 'president-office',
        label: 'مكتب رئيس الجامعة',
        title: 'مكتب رئيس الجامعة',
        type: 'department',
        icon: 'pi pi-briefcase',
        expanded: false,
        children: [
          {
            id: 'executive-advisors',
            label: 'المستشارون التنفيذيون',
            title: 'المستشارون التنفيذيون',
            name: 'د. خميس الدريدي',
            type: 'unit',
            icon: 'pi pi-users'
          },
          {
            id: 'info-systems',
            label: 'نظم المعلومات والتحول الرقمي',
            title: 'نظم المعلومات والتحول الرقمي',
            type: 'unit',
            icon: 'pi pi-desktop',
            children: [
              { id: 'computing', label: 'الحوسبة والمعلومات', title: 'الحوسبة والمعلومات', type: 'unit', icon: 'pi pi-server' },
              { id: 'support-dev', label: 'الدعم والتطوير والتدريب', title: 'الدعم والتطوير والتدريب', type: 'unit', icon: 'pi pi-cog' },
              { id: 'citations', label: 'الاستشهادات والمكتبات والمستودعات الرقمية', title: 'الاستشهادات والمكتبات والمستودعات الرقمية', type: 'unit', icon: 'pi pi-book' },
              { id: 'networks', label: 'الشبكات والخوادم والأمن السيبراني', title: 'الشبكات والخوادم والأمن السيبراني', type: 'unit', icon: 'pi pi-shield' }
            ]
          },
          {
            id: 'public-relations',
            label: 'العلاقات العامة',
            title: 'العلاقات العامة',
            type: 'unit',
            icon: 'pi pi-comments',
            children: [
              { id: 'media', label: 'الإعلام والترجمة', title: 'الإعلام والترجمة', type: 'unit', icon: 'pi pi-megaphone' }
            ]
          },
          {
            id: 'quality',
            label: 'التطوير وضمان الجودة',
            title: 'التطوير وضمان الجودة',
            type: 'unit',
            icon: 'pi pi-check-circle',
            children: [
              { id: 'strategic', label: 'الإدارة الاستراتيجية', title: 'الإدارة الاستراتيجية', type: 'unit', icon: 'pi pi-chart-line' },
              { id: 'audit', label: 'المراقبة الداخلية والتدقيق', title: 'المراقبة الداخلية والتدقيق', type: 'unit', icon: 'pi pi-eye' }
            ]
          }
        ]
      },
      {
        id: 'vp-education',
        label: 'نائب رئيس الجامعة لشئون التعليم والطلاب',
        title: 'نائب رئيس الجامعة لشئون التعليم والطلاب',
        type: 'vice-president',
        icon: 'pi pi-user-edit',
        expanded: false,
        children: [
          {
            id: 'education-affairs',
            label: 'شئون التعليم',
            title: 'شئون التعليم',
            type: 'department',
            icon: 'pi pi-book',
            children: [
              { id: 'enrollment', label: 'التسجيل والقبول', title: 'التسجيل والقبول', type: 'unit', icon: 'pi pi-id-card' },
              { id: 'student-activities', label: 'الأنشطة الطلابية', title: 'الأنشطة الطلابية', type: 'unit', icon: 'pi pi-users' },
              { id: 'housing', label: 'الإسكان الجامعي', title: 'الإسكان الجامعي', type: 'unit', icon: 'pi pi-home' }
            ]
          },
          {
            id: 'postgrad-research',
            label: 'الدراسات العليا والبحوث',
            title: 'الدراسات العليا والبحوث',
            type: 'department',
            icon: 'pi pi-graduation-cap',
            children: [
              { id: 'research', label: 'البحث العلمي', title: 'البحث العلمي', type: 'unit', icon: 'pi pi-search' },
              { id: 'libraries', label: 'مكتبات الجامعة', title: 'مكتبات الجامعة', type: 'unit', icon: 'pi pi-book' },
              { id: 'publishing', label: 'النشر الأكاديمي', title: 'النشر الأكاديمي', type: 'unit', icon: 'pi pi-file' }
            ]
          },
          {
            id: 'open-learning',
            label: 'التعليم المفتوح والمدمج',
            title: 'التعليم المفتوح والمدمج',
            type: 'department',
            icon: 'pi pi-wifi',
            children: [
              { id: 'blended', label: 'التعليم المدمج', title: 'التعليم المدمج', type: 'unit', icon: 'pi pi-desktop' },
              { id: 'open-ed', label: 'التعليم المفتوح', title: 'التعليم المفتوح', type: 'unit', icon: 'pi pi-globe' }
            ]
          },
          {
            id: 'cultural-relations',
            label: 'العلاقات الثقافية والعلمية',
            title: 'العلاقات الثقافية والعلمية',
            type: 'department',
            icon: 'pi pi-globe',
            children: [
              { id: 'scholarships', label: 'المنح الدراسية', title: 'المنح الدراسية', type: 'unit', icon: 'pi pi-money-bill' },
              { id: 'secondments', label: 'الإعارات', title: 'الإعارات', type: 'unit', icon: 'pi pi-send' },
              { id: 'agreements', label: 'الاتفاقيات الثقافية', title: 'الاتفاقيات الثقافية', type: 'unit', icon: 'pi pi-file-edit' }
            ]
          },
          {
            id: 'community-service',
            label: 'خدمة المجتمع وتنمية البيئة',
            title: 'خدمة المجتمع وتنمية البيئة',
            type: 'department',
            icon: 'pi pi-heart',
            children: [
              { id: 'service', label: 'خدمة المجتمع', title: 'خدمة المجتمع', type: 'unit', icon: 'pi pi-users' },
              { id: 'env-dev', label: 'تنمية البيئة', title: 'تنمية البيئة', type: 'unit', icon: 'pi pi-sun' },
              { id: 'env-projects', label: 'المشاريع البيئية', title: 'المشاريع البيئية', type: 'unit', icon: 'pi pi-briefcase' }
            ]
          }
        ]
      },
      {
        id: 'vp-postgrad',
        label: 'نائب رئيس الجامعة للدراسات العليا والبحوث',
        title: 'نائب رئيس الجامعة للدراسات العليا والبحوث',
        type: 'vice-president',
        icon: 'pi pi-graduation-cap',
        expanded: false,
        children: [
          {
            id: 'postgrad-studies',
            label: 'الدراسات العليا',
            title: 'الدراسات العليا',
            type: 'department',
            icon: 'pi pi-book',
            children: [
              { id: 'faculty-affairs', label: 'شئون أعضاء هيئة التدريس', title: 'شئون أعضاء هيئة التدريس', type: 'unit', icon: 'pi pi-users' }
            ]
          },
          {
            id: 'research-affairs',
            label: 'شئون البحوث',
            title: 'شئون البحوث',
            type: 'department',
            icon: 'pi pi-search',
            children: [
              { id: 'scientific-research', label: 'البحث العلمي', title: 'البحث العلمي', type: 'unit', icon: 'pi pi-flask' },
              { id: 'applied-research', label: 'البحث التطبيقي', title: 'البحث التطبيقي', type: 'unit', icon: 'pi pi-sliders-h' },
              { id: 'innovation', label: 'الابتكار والاختراع', title: 'الابتكار والاختراع', type: 'unit', icon: 'pi pi-lightbulb' }
            ]
          },
          {
            id: 'scientific-publishing',
            label: 'النشر العلمي والتوثيق',
            title: 'النشر العلمي والتوثيق',
            type: 'department',
            icon: 'pi pi-file',
            children: []
          },
          {
            id: 'scientific-relations',
            label: 'العلاقات العلمية والثقافية',
            title: 'العلاقات العلمية والثقافية',
            type: 'department',
            icon: 'pi pi-globe',
            children: [
              { id: 'intl-relations', label: 'العلاقات الأكاديمية الدولية', title: 'العلاقات الأكاديمية الدولية', type: 'unit', icon: 'pi pi-flag' },
              { id: 'scholarships-missions', label: 'المنح والبعثات', title: 'المنح والبعثات', type: 'unit', icon: 'pi pi-send' },
              { id: 'conferences', label: 'المؤتمرات والندوات', title: 'المؤتمرات والندوات', type: 'unit', icon: 'pi pi-calendar' }
            ]
          }
        ]
      },
      {
        id: 'vp-community',
        label: 'نائب رئيس الجامعة لخدمة المجتمع وتنمية البيئة',
        title: 'نائب رئيس الجامعة لخدمة المجتمع وتنمية البيئة',
        type: 'vice-president',
        icon: 'pi pi-heart',
        expanded: false,
        children: [
          {
            id: 'community-service-dept',
            label: 'خدمة المجتمع',
            title: 'خدمة المجتمع',
            type: 'department',
            icon: 'pi pi-users',
            children: [
              { id: 'internal-service', label: 'خدمة المجتمع الداخلية', title: 'خدمة المجتمع الداخلية', type: 'unit', icon: 'pi pi-building' },
              { id: 'external-service', label: 'خدمة المجتمع الخارجية', title: 'خدمة المجتمع الخارجية', type: 'unit', icon: 'pi pi-sitemap' },
              { id: 'social-initiatives', label: 'المبادرات الاجتماعية', title: 'المبادرات الاجتماعية', type: 'unit', icon: 'pi pi-heart-fill' }
            ]
          },
          {
            id: 'env-development',
            label: 'تنمية البيئة',
            title: 'تنمية البيئة',
            type: 'department',
            icon: 'pi pi-sun',
            children: [
              { id: 'sustainable-dev', label: 'التنمية البيئية المستدامة', title: 'التنمية البيئية المستدامة', type: 'unit', icon: 'pi pi-refresh' },
              { id: 'awareness', label: 'برامج التوعية البيئية', title: 'برامج التوعية البيئية', type: 'unit', icon: 'pi pi-megaphone' },
              { id: 'green-projects', label: 'المشاريع والمبادرات الخضراء', title: 'المشاريع والمبادرات الخضراء', type: 'unit', icon: 'pi pi-sun' }
            ]
          },
          {
            id: 'env-projects-dept',
            label: 'المشاريع البيئية',
            title: 'المشاريع البيئية',
            type: 'department',
            icon: 'pi pi-briefcase',
            children: [
              { id: 'research-projects', label: 'المشاريع البحثية', title: 'المشاريع البحثية', type: 'unit', icon: 'pi pi-file' },
              { id: 'env-consultations', label: 'الاستشارات البيئية', title: 'الاستشارات البيئية', type: 'unit', icon: 'pi pi-comments' }
            ]
          }
        ]
      },
      {
        id: 'secretary-general',
        label: 'أمين عام الجامعة',
        title: 'أمين عام الجامعة',
        type: 'secretary',
        icon: 'pi pi-briefcase',
        expanded: false,
        children: [
          {
            id: 'council-legal',
            label: 'أمانة مجلس الجامعة والشئون القانونية',
            title: 'أمانة مجلس الجامعة والشئون القانونية',
            type: 'department',
            icon: 'pi pi-book',
            children: [
              { id: 'council', label: 'أمانة مجلس الجامعة', title: 'أمانة مجلس الجامعة', type: 'unit', icon: 'pi pi-users' },
              { id: 'legal', label: 'الشئون القانونية', title: 'الشئون القانونية', type: 'unit', icon: 'pi pi-file' }
            ]
          },
          {
            id: 'financial-affairs',
            label: 'الشئون المالية',
            title: 'الشئون المالية',
            type: 'department',
            icon: 'pi pi-money-bill',
            children: [
              { id: 'accounts', label: 'الحسابات', title: 'الحسابات', type: 'unit', icon: 'pi pi-calculator' },
              { id: 'procurement', label: 'المشتريات', title: 'المشتريات', type: 'unit', icon: 'pi pi-shopping-cart' }
            ]
          },
          {
            id: 'admin-affairs',
            label: 'الشئون الإدارية',
            title: 'الشئون الإدارية',
            type: 'department',
            icon: 'pi pi-cog',
            children: [
              { id: 'personnel', label: 'شئون الأفراد', title: 'شئون الأفراد', type: 'unit', icon: 'pi pi-users' },
              { id: 'general-services', label: 'الخدمات العامة', title: 'الخدمات العامة', type: 'unit', icon: 'pi pi-th-large' },
              { id: 'payroll', label: 'الرواتب والمميزات', title: 'الرواتب والمميزات', type: 'unit', icon: 'pi pi-dollar' }
            ]
          },
          {
            id: 'engineering-affairs',
            label: 'الشئون الهندسية',
            title: 'الشئون الهندسية',
            type: 'department',
            icon: 'pi pi-wrench',
            children: [
              { id: 'maintenance', label: 'الصيانة والمرافق', title: 'الصيانة والمرافق', type: 'unit', icon: 'pi pi-cog' },
              { id: 'eng-projects', label: 'المشاريع الهندسية', title: 'المشاريع الهندسية', type: 'unit', icon: 'pi pi-building' },
              { id: 'urban-planning', label: 'التخطيط العمراني', title: 'التخطيط العمراني', type: 'unit', icon: 'pi pi-map' }
            ]
          },
          {
            id: 'library-affairs',
            label: 'شئون المكتبات',
            title: 'شئون المكتبات',
            type: 'department',
            icon: 'pi pi-book',
            children: [
              { id: 'faculty-libraries', label: 'مكتبات الكليات', title: 'مكتبات الكليات', type: 'unit', icon: 'pi pi-book' },
              { id: 'central-library', label: 'المكتبة المركزية', title: 'المكتبة المركزية', type: 'unit', icon: 'pi pi-home' },
              { id: 'databases', label: 'قواعد البيانات ونظم المعلومات', title: 'قواعد البيانات ونظم المعلومات', type: 'unit', icon: 'pi pi-database' }
            ]
          },
          {
            id: 'academic-affairs',
            label: 'الشئون الأكاديمية',
            title: 'الشئون الأكاديمية',
            type: 'department',
            icon: 'pi pi-graduation-cap',
            children: [
              { id: 'university-education', label: 'التعليم الجامعي', title: 'التعليم الجامعي', type: 'unit', icon: 'pi pi-book' },
              { id: 'scheduling', label: 'الجداول والامتحانات', title: 'الجداول والامتحانات', type: 'unit', icon: 'pi pi-calendar' }
            ]
          }
        ]
      }
    ]
  };

  getOrgStructure(): Observable<OrgStructureData> {
    return of({
      root: this.orgData,
      lastUpdated: new Date()
    });
  }

  searchNode(query: string, node: OrgNode = this.orgData): OrgNode[] {
    const results: OrgNode[] = [];

    if (node.label.toLowerCase().includes(query.toLowerCase()) ||
        node.title.toLowerCase().includes(query.toLowerCase()) ||
        (node.name && node.name.toLowerCase().includes(query.toLowerCase()))) {
      results.push(node);
    }

    if (node.children) {
      node.children.forEach(child => {
        results.push(...this.searchNode(query, child));
      });
    }

    return results;
  }

  expandNode(nodeId: string, node: OrgNode = this.orgData): boolean {
    if (node.id === nodeId) {
      node.expanded = true;
      return true;
    }

    if (node.children) {
      for (const child of node.children) {
        if (this.expandNode(nodeId, child)) {
          node.expanded = true;
          return true;
        }
      }
    }

    return false;
  }

  collapseAll(node: OrgNode = this.orgData): void {
    node.expanded = false;
    if (node.children) {
      node.children.forEach(child => this.collapseAll(child));
    }
  }

  expandAll(node: OrgNode = this.orgData): void {
    node.expanded = true;
    if (node.children) {
      node.children.forEach(child => this.expandAll(child));
    }
  }
}