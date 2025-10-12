import { Routes } from '@angular/router';
import { LuxorUniversityComponent } from './core/features/Luxor-university/Luxor-university.component';
import { HomeComponent } from './core/features/Luxor-university/Pages/Home/Home.component';

export const routes: Routes = [

 {
    path: '',
    component: LuxorUniversityComponent,
    children: [
      { path: 'home', component: HomeComponent },
 
    { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }

];
