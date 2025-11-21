import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUniversityService } from '../../../Services/about-university.service';

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

  tabs: Tab[] = [];

  constructor(private aboutUniversityService: AboutUniversityService) {}

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
    const data = this.aboutUniversityService.getAboutUniversity();
    this.tabs = [
      { id: 'vision', title: 'الرؤية', content: data.vision },
      { id: 'mission', title: 'الرسالة', content: data.mission },
      { id: 'goals', title: 'الاهداف', content: data.goals }
    ];

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
