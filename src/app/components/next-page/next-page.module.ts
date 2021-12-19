import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NextPageRoutingModule } from './next-page-routing.module';
import { NextPageComponent } from './next-page.component';

@NgModule({
  declarations: [NextPageComponent],
  imports: [CommonModule, NextPageRoutingModule],

  exports: [NextPageComponent],
})
export class NextPageModule {}
