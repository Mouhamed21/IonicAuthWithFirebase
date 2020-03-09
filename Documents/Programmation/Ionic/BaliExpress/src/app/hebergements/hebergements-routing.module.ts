import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HebergementsPage } from './hebergements.page';

const routes: Routes = [
  {
    path: '',
    component: HebergementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HebergementsPageRoutingModule {}
