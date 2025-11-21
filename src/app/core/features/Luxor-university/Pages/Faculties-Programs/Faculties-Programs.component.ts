import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Faculty } from '../../model/faculties-programs.model';
import { FacultiesProgramsService } from '../../Services/faculties-programs.service';

@Component({
  selector: 'app-Faculties-Programs',
  standalone: true,
  imports: [CommonModule, RouterModule,PageHeaderComponent,FooterComponent],
  templateUrl: './Faculties-Programs.component.html',
  styleUrls: ['./Faculties-Programs.component.css']
})
export class FacultiesProgramsComponent implements OnInit {
  faculties: Faculty[] = [];

  constructor(private facultiesProgramsService: FacultiesProgramsService) {}

  ngOnInit() {
    this.facultiesProgramsService.getFaculties().subscribe(data => {
      this.faculties = data;
    });
  }

  selectFaculty(faculty: Faculty) {
    // Navigate to faculty details
    console.log('Selected:', faculty.name);
  }
}