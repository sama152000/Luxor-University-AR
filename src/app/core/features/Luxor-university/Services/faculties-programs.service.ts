import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Faculty } from '../model/faculties-programs.model';

@Injectable({
  providedIn: 'root'
})
export class FacultiesProgramsService {

  private faculties: Faculty[] = [
    {
      id: 2,
      name: 'كلية الآثار',
      description: 'تستكشف تاريخ مصر القديم من خلال الحفائر العملية في محيط معابد الأقصر العريقة، وتُعدّ طلابها ليكونوا علماء آثار مؤهلين عالميًا.',
      icon: 'pi pi-images',
      imageUrl: '/assets/logo1.png',
      programs: ['علم المصريات', 'ترميم الآثار', 'إدارة المتاحف والتراث'],
      dean: 'أ.د/ فاطمة حسن',
      established: 1996
    },
    {
      id: 3,
      name: 'كلية الفنون الجميلة',
      description: 'تنمي الإبداع الفني في مجالات الرسم والنحت والتصميم، مستلهمةً من الجماليات الفرعونية والفن المصري المعاصر.',
      icon: 'pi pi-palette',
      imageUrl: '/assets/logo2.png',
      programs: ['الرسم والتصوير', 'النحت', 'التصميم الجرافيكي والوسائط المتعددة'],
      dean: 'أ.د/ علي كريم',
      established: 1996
    },
    {
      id: 4,
      name: 'كلية الألسن',
      description: 'تُعِدّ متخصصين في اللغات والترجمة، وتُشكّل جسرًا ثقافيًا ولغويًا في قلب الحضارة المصرية القديمة.',
      icon: 'pi pi-language',
      imageUrl: '/assets/logo5.png',
      programs: ['اللغة الإنجليزية وآدابها', 'اللغة الفرنسية وآدابها', 'الترجمة التحريرية والفورية'],
      dean: 'أ.د/ نادية فؤاد',
      established: 1996
    },
    {
      id: 5,
      name: 'كلية التربية',
      description: 'تُعدّ المعلمين والتربويين المتميزين بأحدث طرق التدريس والمناهج التربوية المتطورة، مع التركيز على الجودة والابتكار في التعليم.',
      icon: 'pi pi-book',
      imageUrl: '/assets/logo4.png',
      programs: ['العلوم التربوية', 'تخطيط المناهج وتطويرها', 'التربية الخاصة'],
      dean: 'أ.د/ خالد محمود',
      established: 1996
    },
    {
      id: 7,
      name: 'كلية الطب',
      description: 'تُخرّج أطباء ومتخصصين في الرعاية الصحية باستخدام أحدث المرافق الطبية في مدينة تضم أعظم آثار العالم.',
      icon: 'pi pi-heart',
      imageUrl: '/assets/logo3.png',
      programs: ['البكالوريوس في الطب والجراحة', 'التمريض', 'الصحة العامة وطب المجتمع'],
      dean: 'أ.د/ مريم علي',
      established: 2020
    }
  ];

  getFaculties(): Observable<Faculty[]> {
    return of(this.faculties);
  }

  getFacultiesSlider(): Observable<{ id: number; imageUrl: string; title: string }[]> {
    const sliderData = this.faculties.map(faculty => ({
      id: faculty.id,
      imageUrl: faculty.imageUrl,
      title: faculty.name
    }));
    return of(sliderData);
  }
}