import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpassPage } from './newpass.page';

const routes: Routes = [
  {
    path: '',
    component: NewpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpassPageRoutingModule {}
