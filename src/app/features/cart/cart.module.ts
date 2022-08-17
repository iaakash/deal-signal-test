import { SharedModule } from './../../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import { CartItemComponent } from './components/cart-item/cart-item.component';

const cartComponents = [fromContainers.ShellComponent, fromContainers.ListingComponent];


@NgModule({
  declarations: [
   ...cartComponents,
   CartItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
