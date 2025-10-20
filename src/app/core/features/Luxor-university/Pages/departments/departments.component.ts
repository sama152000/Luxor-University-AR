// src/app/core/features/Luxor-university/Pages/departments/departments.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Department } from '../../model/department.model';
import { DepartmentService } from '../../Services/department.service';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, RouterModule, DrawerModule, ButtonModule, PageHeaderComponent, FooterComponent],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  selectedDepartment: Department | null = null;
  isMobileSidebarVisible = false;

  constructor(
    private departmentService: DepartmentService
  ) {}

  ngOnInit() {
    this.departments = this.departmentService.getAllDepartments();
    if (this.departments.length > 0) {
      this.selectDepartment(this.departments[0].slug);
    }
  }

  selectDepartment(slug: string) {
    this.selectedDepartment = this.departmentService.getDepartmentBySlug(slug) ?? null;
    this.isMobileSidebarVisible = false;
  }

  toggleMobileSidebar() {
    this.isMobileSidebarVisible = !this.isMobileSidebarVisible;
  }
}