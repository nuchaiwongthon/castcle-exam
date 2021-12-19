import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequestOtpRoutingModule } from './request-otp-routing.module';
import { RequestOtpComponent } from './request-otp.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NextPageModule } from 'src/app/components/next-page/next-page.module';

@NgModule({
  declarations: [RequestOtpComponent],
  imports: [CommonModule, RequestOtpRoutingModule, NgSelectModule, FormsModule, NextPageModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RequestOtpModule {}
