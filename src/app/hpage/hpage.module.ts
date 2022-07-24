import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HpagePageRoutingModule } from './hpage-routing.module';

import { HpagePage } from './hpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HpagePageRoutingModule
  ],
  declarations: [HpagePage]
})
export class HpagePageModule {}
