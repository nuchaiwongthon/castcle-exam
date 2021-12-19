import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestOtpComponent } from './request-otp.component';

const routes: Routes = [{
  path: '',
  component: RequestOtpComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RequestOtpRoutingModule { }
