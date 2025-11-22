import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './core/features/Luxor-university/Luxor-university.component'
      ).then((c) => c.LuxorUniversityComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      {
        path: 'home',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/Home/Home.component'
          ).then((c) => c.HomeComponent),
        data: { preload: true },
      },

      {
        path: 'sectors',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/sectors-page/sectors-page.component'
          ).then((c) => c.SectorsPageComponent),
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './core/features/Luxor-university/Pages/sectors-page/sectors-overview/sectors-overview.component'
              ).then((c) => c.SectorsOverviewComponent),
          },
          {
            path: 'details/:slug',
            loadComponent: () =>
              import(
                './core/features/Luxor-university/Pages/sectors-page/sector-details/sector-details.component'
              ).then((c) => c.SectorDetailsComponent),
          },
        ],
      },

      {
        path: 'all-news',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/news/all-news/all-news.component'
          ).then((c) => c.AllNewsComponent),
      },

      {
        path: 'news/:id',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/news/news-details/news-details.component'
          ).then((c) => c.NewsDetailsComponent),
      },

      {
        path: 'departments',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/departments/departments.component'
          ).then((c) => c.DepartmentsComponent),
      },

      {
        path: 'org-structure',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/org-structure/org-structure.component'
          ).then((c) => c.OrgStructureComponent),
      },

      {
        path: 'faculties',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/Faculties-Programs/Faculties-Programs.component'
          ).then((c) => c.FacultiesProgramsComponent),
      },

      {
        path: 'contact-us',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/contact-us/contact-us.component'
          ).then((c) => c.ContactUsComponent),
      },

      {
        path: 'about',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/about-university/about-university.component'
          ).then((c) => c.AboutUniversityComponent),
      },

      {
        path: 'coming-soon',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/shared/coming-soon/coming-soon.component'
          ).then((c) => c.ComingSoonComponent),
      },

      {
        path: 'center-list',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/centers/university-centers-list/university-centers-list.component'
          ).then((c) => c.UniversityCentersListComponent),
      },

      {
        path: 'centers/:id',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/centers/center-details/center-details.component'
          ).then((c) => c.CenterDetailsComponent),
      },

      {
        path: 'student-life',
        loadComponent: () =>
          import(
            './core/features/Luxor-university/Pages/student-life/student-life.component'
          ).then((c) => c.StudentLifeComponent),
      },
    ],
  },
];
