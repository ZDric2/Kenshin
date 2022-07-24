import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HpagePage } from './hpage.page';

const routes: Routes = [
  {
    path: '',
    component: HpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HpagePageRoutingModule {}
