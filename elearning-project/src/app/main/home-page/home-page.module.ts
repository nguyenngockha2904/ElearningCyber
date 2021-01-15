import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { HomePageComponent } from './home-page.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { AsAwnPageComponent } from '../as-awn-page/as-awn-page.component';
import { CoursePageComponent } from '../course-page/course-page.component';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { BlogPageComponent } from '../blog-page/blog-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'cart',
        component: CartPageComponent,
      },
      {
        path: 'ask-answers',
        component: AsAwnPageComponent,
      },
      {
        path: 'contact',
        component: ContactPageComponent,
      },
      {
        path: 'course-detail',
        component: CourseDetailComponent,
      },
      {
        path: 'blogs',
        component: BlogPageComponent,
      },
      {
        path: '',
        component: CoursePageComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomePageModule {}
