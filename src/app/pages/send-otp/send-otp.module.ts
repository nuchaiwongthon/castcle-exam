import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SendOtpRoutingModule } from './send-otp-routing.module';
import { SendOtpComponent } from './send-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { NextPageModule } from 'src/app/components/next-page/next-page.module';

@NgModule({
  declarations: [SendOtpComponent],
  imports: [
    CommonModule,
    SendOtpRoutingModule,
    FormsModule,
    NgOtpInputModule,
    NextPageModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SendOtpModule {}
