import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';

interface ContactInfo {
  title: string;
  titleAr: string; // ✅ إضافة عنوان عربي
  value: string;
  valueAr: string; // ✅ إضافة قيمة عربية
  icon: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterModule, ButtonModule,
    MessageModule,
    PageHeaderComponent,FooterComponent
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  // بيانات الجامعة الحقيقية
  contactInfo: ContactInfo[] = [
    { 
      title: 'Address', 
      titleAr: 'العنوان', 
      value: 'El Awamiya, Luxor, Egypt – University Administration Building', 
      valueAr: 'العوامية، الأقصر، مصر – مبنى إدارة الجامعة', 
      icon: 'pi pi-map-marker' 
    },
    { 
      title: 'Phone', 
      titleAr: 'الهاتف', 
      value: '+20 95 2287244', 
      valueAr: '+20 95 2287244', 
      icon: 'pi pi-phone' 
    },
    { 
      title: 'Fax', 
      titleAr: 'الفاكس', 
      value: '+20 95 2287245', 
      valueAr: '+20 95 2287245', 
      icon: 'pi pi-mobile' 
    },
    { 
      title: 'Email', 
      titleAr: 'البريد الإلكتروني', 
      value: 'info@luxor.edu.eg', 
      valueAr: 'info@luxor.edu.eg', 
      icon: 'pi pi-envelope' 
    },
    { 
      title: 'Website', 
      titleAr: 'الموقع الإلكتروني', 
      value: 'luxor.edu.eg', 
      valueAr: 'luxor.edu.eg', 
      icon: 'pi pi-globe' 
    },
    { 
      title: 'Working Hours', 
      titleAr: 'ساعات العمل', 
      value: 'Sun-Thu: 9:00 AM - 4:00 PM', 
      valueAr: 'أحد - الخميس: 9:00 ص - 4:00 م', 
      icon: 'pi pi-clock' 
    }
  ];

  // فورم
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  formSubmitted = false;
  isLoading = false;
  formValid = false;

  // Map coordinates for Luxor University
  mapCenter = [25.6872, 32.6396]; // Luxor coordinates
  zoomLevel = 14;

  onSubmit() {
    if (this.validateForm()) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.formSubmitted = true;
        this.formData = { name: '', email: '', subject: '', message: '' };
      }, 2000);
    }
  }

  validateForm(): boolean {
    this.formValid = !!(this.formData.name && this.formData.email && this.formData.subject && this.formData.message);
    return this.formValid;
  }
}