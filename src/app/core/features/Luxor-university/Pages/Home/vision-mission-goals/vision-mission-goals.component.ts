import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  id: string;
  title: string;
  content: string | string[];
}

@Component({
  selector: 'app-vision-mission-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-mission-goals.component.html',
  styleUrls: ['./vision-mission-goals.component.css']
})
export class VisionMissionGoalsComponent implements OnInit {
  isVisible = false;
  activeTab = 'vision';

  tabs: Tab[] = [
    { 
      id: 'vision', 
      title: 'رؤيتنا', 
      content: `تطمح جامعة الأقصر لتكون جامعة إقليمية رائدة، معترف بها عالمياً في التعليم العالي والبحث العلمي، تساهم في بناء مجتمع المعرفة وتطوير الموارد البشرية المؤهلة القادرة على المنافسة محلياً وإقليمياً وعالمياً، مع الحفاظ على التراث الثقافي والحضاري الغني لمصر.` 
    },
    { 
      id: 'mission', 
      title: 'رسالتنا', 
      content: `تلتزم جامعة الأقصر بتقديم تعليم عالي الجودة، وتعزيز البحث العلمي الابتكاري، وخدمة المجتمع من خلال إعداد خريجين مجهزين بالمهارات العملية والنظرية للتفوق في الأسواق الوظيفية المحلية والإقليمية والعالمية.` 
    },
    { 
      id: 'goals', 
      title: 'أهدافنا', 
      content: [
        `إعداد خريجين علمياً ومهنياً مؤهلين قادرين على المنافسة في الأسواق الوظيفية المحلية والإقليمية والعالمية، مع التركيز على تطوير المهارات العملية والنظرية.`,
        `رفع مستوى البحث العلمي والابتكار في الجامعة من خلال دعم المشاريع البحثية المتميزة وتعزيز التعاون البحثي الدولي.`,
        `المساهمة في التنمية المجتمعية المستدامة من خلال المبادرات التعليمية والبحثية التي تحافظ على التراث الثقافي وتلبي احتياجات المجتمع.`
      ]
    }
  ];

  get activeTabTitle(): string {
    const tab = this.tabs.find(t => t.id === this.activeTab);
    return tab ? tab.title : '';
  }

  get activeTabContent(): string {
    const tab = this.tabs.find(t => t.id === this.activeTab);
    return typeof tab?.content === 'string' ? tab.content : '';
  }

  get goals(): string[] {
    const tab = this.tabs.find(t => t.id === 'goals');
    return Array.isArray(tab?.content) ? tab.content : [];
  }

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const element = document.querySelector('.vision-mission-section');
      if (element) {
        observer.observe(element);
      }
    }, 100);
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}