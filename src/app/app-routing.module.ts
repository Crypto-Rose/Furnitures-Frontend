import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'paneladmin',
    component: ListComponent
  },
  {
    path:'',
    redirectTo: '/paneladmin',
    pathMatch: 'full'
  },

  { path: 'products', component: ProductsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
