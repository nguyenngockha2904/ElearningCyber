import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { CourseItemComponent } from './Components/course-item/course-item.component';
import { NavDetailComponent } from './Components/nav-detail/nav-detail.component';
import { IntroducePageComponent } from './introduce-page/introduce-page.component';
import { BannerHomeComponent } from './Components/banner-home/banner-home.component';
import { AsAwnPageComponent } from './as-awn-page/as-awn-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home-page/home-page.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        component: IntroducePageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HomePageComponent,
    CartPageComponent,
    UserInfoPageComponent,
    HeaderComponent,
    CourseItemComponent,
    NavDetailComponent,
    IntroducePageComponent,
    BannerHomeComponent,
    AsAwnPageComponent,
    BlogPageComponent,
    ContactPageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
