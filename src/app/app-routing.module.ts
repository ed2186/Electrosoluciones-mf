import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/component/home/home.component';
import { CreateProductComponent } from './pages/component/create-product/create-product.component';
import { ViewProductsComponent } from './pages/component/view-products/view-products.component';

const routes: Routes = [
  {path:"login", component:LoginComponent, pathMatch:"full"},
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"Admin", component:ViewProductsComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
