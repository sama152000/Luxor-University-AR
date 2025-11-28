import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarService } from '../../../Services/navbar.service';
import { FooterService } from '../../../Services/footer.service';
import { NavbarItem } from '../../../model/navbar.model';
import { ContactInfo } from '../../../model/footer.model';

@Component({
selector: 'app-navbar',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './navbar.component.html',
styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isScrolled = false;
isMenuOpen = false;
menuItems: NavbarItem[] = [];
contactInfo: ContactInfo | null = null;

constructor(private navbarService: NavbarService, private footerService: FooterService) {}

ngOnInit() {
this.navbarService.getNavbarItems().subscribe(items => {
this.menuItems = items;
});
this.footerService.getFooterData().subscribe(data => {
this.contactInfo = data.contactInfo;
});
}
toggleMenu() {
this.isMenuOpen = !this.isMenuOpen;
}
closeMenu() {
this.isMenuOpen = false;
}
@HostListener('window:scroll', [])
onWindowScroll() {
this.isScrolled = window.pageYOffset > 50;
}
@HostListener('window:resize')
onResize() {
if (window.innerWidth >= 992) {
this.isMenuOpen = false;
}
}
}