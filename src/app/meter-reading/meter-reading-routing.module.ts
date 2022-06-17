import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeterReadingPage } from './meter-reading.page';

const routes: Routes = [
  {
    path: '',
    component: MeterReadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeterReadingPageRoutingModule {}
