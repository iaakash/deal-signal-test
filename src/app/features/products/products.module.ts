import { SharedModule } from './../../shared/shared.module';
import { ProductsEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import {  reducer } from './store/reducer';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';

const productComponents = [
  fromContainers.ShellComponent,
  fromContainers.ProductListComponent,
  fromComponents.ProductCardComponent,
];

@NgModule({
  declarations: [...productComponents],
  imports: [CommonModule, SharedModule, ProductsRoutingModule,
    StoreModule.forFeature('products', reducer ),
    EffectsModule.forFeature([ProductsEffects])
  ],
})
export class ProductsModule {}
