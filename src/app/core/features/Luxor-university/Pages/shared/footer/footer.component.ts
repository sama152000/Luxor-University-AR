import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterService } from '../../../Services/footer.service';
import { FooterData } from '../../../model/footer.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  footerData: FooterData | null = null;

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.footerService.getFooterData().subscribe(data => {
      this.footerData = data;
    });
  }

  get universityInfo() {
    return this.footerData?.universityInfo || { description: '', slogan: '' };
  }

  get quickLinks() {
    return this.footerData?.quickLinks || [];
  }

  get importantLinks() {
    return this.footerData?.importantLinks || [];
  }

  get contactInfo() {
    return this.footerData?.contactInfo || { address: '', phone: '', email: '' };
  }

  get socialLinks() {
    return this.footerData?.socialLinks || [];
  }
}
