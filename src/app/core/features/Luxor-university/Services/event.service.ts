import { Injectable } from '@angular/core';
import { Event } from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private mockEvents: Event[] = [
    {
      id: 1,
      title: 'جامعة الأقصر تشارك في مارثون عالمي للتوعية ضد شلل الأطفال',
      description:
        'برعاية السيدة الدكتورة صبرين عبد الجليل، رئيس جامعة الأقصر، شاركت الجامعة صباح اليوم في مارثون "سباق من أجل القضاء على شلل الأطفال"',
      imageUrl:
        './assets/new1.jpg',
      date: new Date('2025-10-12'),
      type: 'event'
    },
    {
      id: 2,
      title: 'ندوة توعوية حول الويب المظلم والحياة الرقمية بكلية الفنون الجميلة',
      description:
        'برعاية السيدة الدكتورة صبرين عبد الجليل، رئيس جامعة الأقصر، نظمت كلية الفنون الجميلة ندوة توعوية بعنوان "الويب المظلم والحياة الرقمية" بحضور عدد كبير من الطلاب وأعضاء هيئة التدريس',
      imageUrl:
        './assets/new2.jpg',
      date: new Date('2025-10-11'),
      type: 'event'
    },

    {
      id: 8,
      title: 'ندوة دولية حول التحول الرقمي في التعليم',
      description:
        'برعاية السيدة الدكتورة صبرين عبد الجليل، رئيس جامعة الأقصر، انطلقت الندوة الدولية حول "التحول الرقمي في التعليم" بمشاركة خبراء من جامعات عالمية ومصرية لمناقشة أحدث الاتجاهات في التعليم الرقمي',
      imageUrl:
        './assets/new3.jpg',
      date: new Date('2025-12-05'),
      type: 'conference'
    },
    {
      id: 9,
      title: 'مؤتمر علم المصريات وحفظ التراث',
      description:
        'برعاية السيدة الدكتورة صبرين عبد الجليل، رئيس جامعة الأقصر، انعقد مؤتمر "علم المصريات وحفظ التراث" بمشاركة علماء مصريات من المتحف المصري وجامعات أوروبية لتعزيز جهود حفظ التراث الفرعوني',
      imageUrl:
        './assets/new4.jpg',
      date: new Date('2025-12-12'),
      type: 'conference'
    }
  ];

  getEvents(): Event[] {
    return this.mockEvents.filter(event => event.type === 'event');
  }

  getConferences(): Event[] {
    return this.mockEvents.filter(event => event.type === 'conference');
  }
}