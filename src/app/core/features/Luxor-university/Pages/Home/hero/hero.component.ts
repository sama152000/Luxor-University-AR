import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../../Services/hero.service';
import { Hero } from '../../../model/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  isVisible = false;
  heroData: Hero | null = null;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);

    this.heroService.getHeroData().subscribe((data: Hero) => {
      this.heroData = data;
    });
  }
}
