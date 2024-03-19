import { Routes } from '@angular/router';
import { LandingMainPageComponent } from './features/landing/pages/landing-main-page/landing-main-page.component';
import { LearnLayoutComponent } from './features/learn/layouts/learn-layout/learn-layout.component';
import { LearnMainPageComponent } from './features/learn/pages/learn-main-page/learn-main-page.component';
import { LearnLessonPageComponent } from './features/learn/pages/learn-lesson-page/learn-lesson-page.component';
import { LandingLayoutComponent } from './features/landing/layouts/landing-layout/landing-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        component: LandingMainPageComponent,
      },
    ],
  },
  {
    path: 'learn',
    component: LearnLayoutComponent,
    children: [
      {
        path: '',
        component: LearnMainPageComponent,
      },
      {
        path: ':categoryId/:lessonId',
        component: LearnLessonPageComponent,
      },
    ],
  },
];
