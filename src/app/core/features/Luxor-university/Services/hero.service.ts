import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroData: Hero = {
    title: 'جامعة الأقصر',
    subtitle: 'منارة العلم في قلب الحضارة الفرعونية',
    backgroundImage: './assets/hero.background.gif'
  };

  getHeroData(): Observable<Hero> {
    return of(this.heroData);
  }
}