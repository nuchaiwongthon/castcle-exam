import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((module) => module.RegisterModule),
  },
  {
    path: 'request-otp',
    loadChildren: () =>
      import('./pages/request-otp/request-otp.module').then((module) => module.RequestOtpModule),
  },
  {
    path: 'send-otp',
    loadChildren: () =>
      import('./pages/send-otp/send-otp.module').then((module) => module.SendOtpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
