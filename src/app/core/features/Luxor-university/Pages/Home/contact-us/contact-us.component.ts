import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  isVisible = false;
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
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
      const element = document.querySelector('.contact-us-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }

  submitForm() {
    console.log('Form submitted:', this.formData);
    // Add backend integration here
  }
}