import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './components/layouts/default-layout/default-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [DefaultLayoutComponent]
})
export class SharedModule { }
