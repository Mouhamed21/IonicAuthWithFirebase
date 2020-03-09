import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HebergementsPageRoutingModule } from './hebergements-routing.module';

import { HebergementsPage } from './hebergements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HebergementsPageRoutingModule
  ],
  declarations: [HebergementsPage]
})
export class HebergementsPageModule {}
