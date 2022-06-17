import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancledPage } from './cancled.page';

const routes: Routes = [
  {
    path: '',
    component: CancledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancledPageRoutingModule {}
