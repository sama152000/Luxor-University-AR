import { Routes } from '@angular/router';
import { LuxorUniversityComponent } from './core/features/Luxor-university/Luxor-university.component';
import { HomeComponent } from './core/features/Luxor-university/Pages/Home/Home.component';
import { SectorsPageComponent } from './core/features/Luxor-university/Pages/sectors-page/sectors-page.component';
import { SectorsOverviewComponent } from './core/features/Luxor-university/Pages/sectors-page/sectors-overview/sectors-overview.component';
import { SectorDetailsComponent } from './core/features/Luxor-university/Pages/sectors-page/sector-details/sector-details.component';
import { AllNewsComponent } from './core/features/Luxor-university/Pages/news/all-news/all-news.component';
import { Component } from '@angular/core';
import { NewsDetailsComponent } from './core/features/Luxor-university/Pages/news/news-details/news-details.component';
import { DepartmentsComponent } from './core/features/Luxor-university/Pages/departments/departments.component';
import { OrganizationalStructureComponent } from './core/features/Luxor-university/Pages/organizational-structure/organizational-structure.component';
import { KuliatesComponent } from './core/features/Luxor-university/Pages/kuliates/kuliates.component';
import { ContactUsComponent } from './core/features/Luxor-university/Pages/contact-us/contact-us.component';
import { AboutUniversityComponent } from './core/features/Luxor-university/Pages/about-university/about-university.component';
import { ComingSoonComponent } from './core/features/Luxor-university/Pages/shared/coming-soon/coming-soon.component';

export const routes: Routes = [

 {
    path: '',
    component: LuxorUniversityComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'sectors',
        component: SectorsPageComponent,
        children: [
          { path: '', component: SectorsOverviewComponent },
          { path: 'details/:slug', component: SectorDetailsComponent }
        ]
      },
      {path :'all-news',component:AllNewsComponent},
     { path :'news/:id',component:NewsDetailsComponent},

     { path :'departments',component:DepartmentsComponent},
         { path :'OrganizationalStructure',component:OrganizationalStructureComponent},
                  { path :'faculties',component:KuliatesComponent},
                                    { path :'contact-us',component:ContactUsComponent},
                                                                        { path :'about',component:AboutUniversityComponent},
                                 { path :'coming-soon',component:ComingSoonComponent},






      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }

];
