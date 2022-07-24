import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HobPageRoutingModule } from './hob-routing.module';

import { HobPage } from './hob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HobPageRoutingModule
  ],
  declarations: [HobPage]
})
export class HobPageModule {}
