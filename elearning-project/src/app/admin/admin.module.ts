import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CourseManagePageComponent } from './course-manage-page/course-manage-page.component';
import { UserManagePageComponent } from './user-manage-page/user-manage-page.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'courses',
        component: CourseManagePageComponent,
      },
      {
        path: 'users',
        component: UserManagePageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    CourseManagePageComponent,
    UserManagePageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
