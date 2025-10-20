import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';

export interface Faculty {
  id: number;
  name: string;
  nameAr: string; // ✅ إضافة اسم عربي
  description: string;
  descriptionAr: string; // ✅ إضافة وصف عربي
  icon: string; // PrimeNG icon
  imageUrl: string; // صورة الكلية
  programs: string[];
  programsAr: string[]; // ✅ إضافة برامج عربية
  dean: string;
  deanAr: string; // ✅ إضافة اسم العميد عربي
  established: number;
}

@Component({
  selector: 'app-kuliates',
  standalone: true,
  imports: [CommonModule, RouterModule,PageHeaderComponent,FooterComponent],
  templateUrl: './kuliates.component.html',
  styleUrls: ['./kuliates.component.css']
})
export class KuliatesComponent implements OnInit {
  faculties: Faculty[] = [
    {
      id: 2,
      name: 'Faculty of Archaeology',
      nameAr: 'كلية الآثار',
      description: 'Exploring Egypt\'s ancient history with hands-on excavations near Luxor temples.',
      descriptionAr: 'استكشاف تاريخ مصر القديم بعمليات حفر ميدانية قرب معابد الأقصر',
      icon: 'pi pi-images',
      imageUrl: './assets/logo1.png',
      programs: ['Egyptology', 'Archaeological Conservation', 'Museum Studies'],
      programsAr: ['مصريات', 'حفظ الآثار', 'دراسات المتاحف'],
      dean: 'Dr. Fatima Hassan',
      deanAr: 'د. فاطمة حسن',
      established: 1996
    },
    {
      id: 3,
      name: 'Faculty of Fine Arts',
      nameAr: 'كلية الفنون الجميلة',
      description: 'Fostering creativity in visual arts, inspired by Pharaonic and modern Egyptian aesthetics.',
      descriptionAr: 'تنمية الإبداع في الفنون البصرية مستوحاة من الجماليات الفرعونية والمصرية الحديثة',
      icon: 'pi pi-palette',
      imageUrl: './assets/logo2.png',
      programs: ['Painting', 'Sculpture', 'Graphic Design'],
      programsAr: ['الرسم', 'النحت', 'التصميم الجرافيكي'],
      dean: 'Prof. Ali Karim',
      deanAr: 'أ.د. علي كريم',
      established: 1996
    },
    {
      id: 4,
      name: 'Faculty of Alsun (Languages)',
      nameAr: 'كلية الألسن',
      description: 'Mastering languages and translation, bridging cultures in the heart of ancient Egypt.',
      descriptionAr: 'إتقان اللغات والترجمة، ربط الثقافات في قلب مصر القديمة',
      icon: 'pi pi-language',
      imageUrl: './assets/logo5.png',
      programs: ['English', 'French', 'Translation Studies'],
      programsAr: ['اللغة الإنجليزية', 'اللغة الفرنسية', 'دراسات الترجمة'],
      dean: 'Dr. Nadia Fouad',
      deanAr: 'د. نادية فؤاد',
      established: 1996
    },
    {
      id: 5,
      name: 'Faculty of Education',
      nameAr: 'كلية التربية',
      description: 'Preparing future educators with innovative teaching methods rooted in educational excellence.',
      descriptionAr: 'إعداد معلمي المستقبل بأساليب تدريس مبتكرة متجذرة في التميز التعليمي',
      icon: 'pi pi-book',
      imageUrl: './assets/logo4.png',
      programs: ['Educational Sciences', 'Curriculum Development', 'Special Education'],
      programsAr: ['العلوم التربوية', 'تطوير المناهج', 'التعليم الخاص'],
      dean: 'Prof. Khaled Mahmoud',
      deanAr: 'أ.د. خالد محمود',
      established: 1996
    },
    {
      id: 7,
      name: 'Faculty of Medicine',
      nameAr: 'كلية الطب',
      description: 'Training healthcare professionals with modern medical facilities near Luxor\'s heritage sites.',
      descriptionAr: 'تدريب الكوادر الطبية بمرافق طبية حديثة قرب المواقع التراثية بالأقصر',
      icon: 'pi pi-heart',
      imageUrl: './assets/logo3.png',
      programs: ['MBBS', 'Nursing', 'Public Health'],
      programsAr: ['طب بشري', 'تمريض', 'الصحة العامة'],
      dean: 'Prof. Dr. Mariam Ali',
      deanAr: 'أ.د. مريم علي',
      established: 2020
    }
  ];

  ngOnInit() {
    // Optional: Add loading or animation
  }

  selectFaculty(faculty: Faculty) {
    // Navigate to faculty details
    console.log('Selected:', faculty.name);
  }
}