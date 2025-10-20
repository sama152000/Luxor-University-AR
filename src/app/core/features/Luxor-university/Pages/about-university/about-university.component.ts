import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { VisionMissionService } from '../../Services/vision-mission.service';
import { NavbarComponent } from "../shared/navbar/navbar.component";

interface Tab {
  id: string;
  title: string;
  icon: string;
  content: string | string[];
}

@Component({
  selector: 'app-about-university',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, FooterComponent, NavbarComponent],
  templateUrl: './about-university.component.html',
  styleUrls: ['./about-university.component.css']
})
export class AboutUniversityComponent implements OnInit {
  isVisible = false;
  activeTab = 'vision';
  tabs: Tab[] = [];

  constructor(private visionMissionService: VisionMissionService) {}

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
    this.tabs = [
      {
        id: 'vision',
        title: 'رؤيتنا',
        icon: 'pi pi-eye',
        content: this.visionMissionService.getVision()
      },
      {
        id: 'mission',
        title: 'رسالتنا',
        icon: 'pi pi-flag',
        content: this.visionMissionService.getMission()
      },
      {
        id: 'goals',
        title: 'أهدافنا',
        icon: 'pi pi-bullseye',
        content: this.visionMissionService.getGoals()
      },
      {
        id: 'history',
        title: 'تاريخنا',
        icon: 'pi pi-history',
        content: this.visionMissionService.getHistory()
      }
    ];

    setTimeout(() => {
      this.isVisible = true;
    }, 200);
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}