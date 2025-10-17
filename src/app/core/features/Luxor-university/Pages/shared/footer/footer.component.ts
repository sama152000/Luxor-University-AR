import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  link: string;
}

interface SocialLink {
  icon: string;
  link: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  universityInfo = {
    description: 'جامعة الأقصر هي مؤسسة أكاديمية ملتزمة بتقديم تعليم وأبحاث عالية الجودة.',
    slogan: 'من تراث حضارتنا نشكّل المستقبل.'
  };

  quickLinks: FooterLink[] = [
    { label: 'الرئيسية', link: '#home' },
    { label: 'عن الجامعة', link: '#about' },
    { label: 'الكليات والبرامج', link: '#faculties' },
    { label: 'حياة الطالب', link: '#student-life' },
    { label: 'اتصل بنا', link: '#contact' }
  ];

  importantLinks: FooterLink[] = [
    { label: 'مجلس الجامعة', link: '#council' },
    { label: 'أعضاء هيئة التدريس', link: '#faculty' },
    { label: 'الدراسات العليا', link: '#postgraduate' },
    { label: 'الشؤون الإدارية', link: '#administration' },
    { label: 'التقويم الأكاديمي', link: '#calendar' }
  ];

  contactInfo = {
    address: 'الأقصر، طريق السبعة أبو الهول، جمهورية مصر العربية',
    phone: '+20 95 000 0000',
    email: 'info@luxoruniv.edu.eg'
  };

  socialLinks: SocialLink[] = [
    { icon: 'pi-facebook', link: '#', label: 'فيسبوك' },
    { icon: 'pi-twitter', link: '#', label: 'إكس' },
    { icon: 'pi-linkedin', link: '#', label: 'لينكدإن' },
    { icon: 'pi-youtube', link: '#', label: 'يوتيوب' }
  ];
}