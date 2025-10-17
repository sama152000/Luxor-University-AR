import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ServiceCard {
  title: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-services-cards',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './services-cards.component.html',
  styleUrls: ['./services-cards.component.css']
})
export class ServicesCardsComponent implements OnInit {
  cards: ServiceCard[] = [
    {
      title: 'خدمات الطلاب',
      icon: 'pi-user',
      color: 'primary'
    },
    {
      title: 'خدمات الدراسات العليا',
      icon: 'pi-graduation-cap',
      color: 'accent'
    },
    {
      title: 'خدمات الكليات',
      icon: 'pi-users',
      color: 'primary'
    },
    {
      title: 'خدمات إدارية',
      icon: 'pi-file',
      color: 'accent'
    }
  ];

  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 500);
  }
}