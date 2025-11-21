import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarService } from '../../../Services/navbar.service';
import { NavbarItem } from '../../../model/navbar.model';

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

constructor(private navbarService: NavbarService) {}

ngOnInit() {
this.navbarService.getNavbarItems().subscribe(items => {
this.menuItems = items;
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