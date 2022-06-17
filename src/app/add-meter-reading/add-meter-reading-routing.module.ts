import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMeterReadingPage } from './add-meter-reading.page';

const routes: Routes = [
  {
    path: '',
    component: AddMeterReadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMeterReadingPageRoutingModule {}
