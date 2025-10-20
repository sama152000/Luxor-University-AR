import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Pages/shared/navbar/navbar.component";

@Component({
  selector: 'app-Luxor-university',
  templateUrl: './Luxor-university.component.html',
  styleUrls: ['./Luxor-university.component.css'],
  imports: [
    RouterOutlet,
    NavbarComponent
]
})
export class LuxorUniversityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
