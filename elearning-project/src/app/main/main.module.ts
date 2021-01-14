import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { CourseItemComponent } from './Components/course-item/course-item.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'cart',
        component: CartPageComponent,
      },
      {
        path: 'detail',
        component: DetailPageComponent,
      },
      {
        path: 'user-info',
        component: UserInfoPageComponent,
      },
      {
        path: '',
        component: HomePageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HomePageComponent,
    DetailPageComponent,
    CartPageComponent,
    UserInfoPageComponent,
    HeaderComponent,
    CourseItemComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
