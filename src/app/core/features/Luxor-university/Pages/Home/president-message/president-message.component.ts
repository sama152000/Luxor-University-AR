import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresidentMessageService } from '../../../Services/president-message.service';
import { PresidentMessage } from '../../../model/president-message.model';

@Component({
  selector: 'app-president-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './president-message.component.html',
  styleUrls: ['./president-message.component.css']
})
export class PresidentMessageComponent implements OnInit {
  isVisible = false;
  presidentData!: PresidentMessage;

  constructor(private presidentMessageService: PresidentMessageService) {}

  ngOnInit() {
    this.presidentData = this.presidentMessageService.getPresidentMessage();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const element = document.querySelector('.president-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }
}
