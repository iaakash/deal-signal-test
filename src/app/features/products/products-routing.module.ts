import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainers from './containers';

const routes: Routes = [
{
  path: '',
  component: fromContainers.ShellComponent,
  children: [
    {
      path: '',
      redirectTo: 'product-list'
    },
    {
      path: 'product-list',
      component: fromContainers.ProductListComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
