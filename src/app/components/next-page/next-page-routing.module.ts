import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextPageComponent } from './next-page.component';

const routes: Routes = [
  {
    path: '',
    component: NextPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextPageRoutingModule {}
