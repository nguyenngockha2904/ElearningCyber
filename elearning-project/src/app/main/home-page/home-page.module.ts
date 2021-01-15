import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { HomePageComponent } from './home-page.component';
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'cart',
        component: CartPageComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomePageModule {}
