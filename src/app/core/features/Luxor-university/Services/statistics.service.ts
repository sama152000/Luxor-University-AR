import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistic } from '../model/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private statisticsData: Statistic[] = [
    { 
      icon: 'pi pi-building', 
      number: 12, 
      description: 'كلية ومعهد عالٍ' 
    },
    { 
      icon: 'pi pi-users', 
      number: 1180, 
      description: 'عضو هيئة تدريس وهيئة معاونة' 
    },
    { 
      icon: 'pi pi-graduation-cap', 
      number: 28750, 
      description: 'طالب وطالبة في مرحلة البكالوريوس' 
    },
    { 
      icon: 'pi pi-book-open', 
      number: 1850, 
      description: 'طالب دراسات عليا (دبلوم - ماجستير - دكتوراه)' 
    },
    { 
      icon: 'pi pi-globe', 
      number: 950, 
      description: 'طالب وافد من 38 دولة' 
    }
  ];

  getStatistics(): Observable<Statistic[]> {
    return of(this.statisticsData);
  }
}