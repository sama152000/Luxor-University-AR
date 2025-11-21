import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutUniversityService } from '../../Services/about-university.service';
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
      {
        id: 'vision',
        title: 'رؤيتنا',
        icon: 'pi pi-eye',
        content: data.vision
      },
      {
        id: 'mission',
        title: 'رسالتنا',
        icon: 'pi pi-flag',
        content: data.mission
      },
      {
        id: 'goals',
        title: 'اهدافنا',
        icon: 'pi pi-bullseye',
        content: data.goals
      },
      {
        id: 'history',
        title: 'تاريخ الكلية',
        icon: 'pi pi-history',
        content: data.history
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
