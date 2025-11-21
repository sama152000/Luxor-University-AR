import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { StudentLifeService } from '../../Services/student-life.service';
import { StudentLifeData, StudentLifeActivity, ActivityCategory } from '../../model/student-life.model';
import { FooterComponent } from "../shared/footer/footer.component";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { PageHeaderComponent } from "../shared/page-header/page-header.component";


@Component({
  selector: 'app-student-life',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ChipModule,
    FooterComponent,
    NavbarComponent,
    PageHeaderComponent
],
  templateUrl: './student-life.component.html',
  styleUrls: ['./student-life.component.css']
})
export class StudentLifeComponent implements OnInit {
  studentLifeData: StudentLifeData | null = null;
  featuredActivities: StudentLifeActivity[] = [];
  categories: ActivityCategory[] = [];
  selectedCategory: ActivityCategory | null = null;
  filteredActivities: StudentLifeActivity[] = [];
  loading = true;

  constructor(private studentLifeService: StudentLifeService) {}

  ngOnInit() {
    this.loadStudentLifeData();
  }

  loadStudentLifeData() {
    this.studentLifeService.getStudentLifeData().subscribe({
      next: (data) => {
        this.studentLifeData = data;
        this.featuredActivities = data.featuredActivities;
        this.categories = data.categories;
        this.filteredActivities = data.activities;
        if (this.filteredActivities.length > 0) {
          this.selectedActivity = this.filteredActivities[0];
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading student life data:', error);
        this.loading = false;
      }
    });
  }

  filterByCategory(category: ActivityCategory | null) {
    this.selectedCategory = category;
    
    if (category) {
      this.studentLifeService.getActivitiesByCategory(category.id).subscribe({
        next: (activities) => {
          this.filteredActivities = activities;
        }
      });
    } else {
      this.filteredActivities = this.studentLifeData?.activities || [];
    }
  }
selectedActivity: StudentLifeActivity | null = null;  // أضيفي السطر ده

selectActivity(activity: StudentLifeActivity) {
  this.selectedActivity = activity;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  getActivityImage(activity: StudentLifeActivity): string {
    return activity.imageUrl || 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800';
  }

  getCategoryIcon(category: ActivityCategory): string {
    return category.icon;
  }

  getCategoryColor(category: ActivityCategory): string {
    return category.color;
  }

  joinActivity(activity: StudentLifeActivity) {
    // Implement join activity logic
    console.log('Joining activity:', activity.title);
  }

  getMoreInfo(activity: StudentLifeActivity) {
    // Implement get more info logic
    console.log('Getting more info for:', activity.title);
  }}