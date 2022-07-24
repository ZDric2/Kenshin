import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HobPage } from './hob.page';

const routes: Routes = [
  {
    path: '',
    component: HobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HobPageRoutingModule {}
