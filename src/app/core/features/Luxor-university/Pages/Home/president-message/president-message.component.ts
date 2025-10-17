import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-president-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './president-message.component.html',
  styleUrls: ['./president-message.component.css']
})
export class PresidentMessageComponent implements OnInit {
  isVisible = false;

  presidentData = {
    name: ' الدكتورة صبرين جابر عبد الجليل',
    title: 'رئيس الجامعة',
    image: './assets/president.jpg',
    message: `يسعدني أن أرحب بكم في جامعة الأقصر، الجامعة المتميزة التي تُعدّ منارة للمعرفة والتنوير في صعيد مصر. نفخر بتاريخنا العريق والتراث الثقافي الغني الذي يمتد لآلاف السنين.

تسعى جامعة الأقصر للتميز في التعليم العالي والبحث العلمي، وإعداد خرّيجين مؤهلين لمنافسة الأسواق الوظيفية المحلية والإقليمية والعالمية. نؤمن بتطوير مهارات الطلاب وتمكينهم ليكونوا قادة الغد.`
  };

  ngOnInit() {
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