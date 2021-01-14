import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';



@NgModule({
  declarations: [LayoutComponent, HomePageComponent, DetailPageComponent, CartPageComponent, UserInfoPageComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
