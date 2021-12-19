import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { NextPageModule } from 'src/app/components/next-page/next-page.module';


@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
  CommonModule,
    RegisterRoutingModule,
    NextPageModule
  ]
})
export class RegisterModule { }
