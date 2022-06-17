import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancledPageRoutingModule } from './cancled-routing.module';

import { CancledPage } from './cancled.page';
import { FooterPage } from '../footer/footer.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancledPageRoutingModule,
    FooterPageModule
  ],
  declarations: [CancledPage],
  exports: [FooterPage]
})
export class CancledPageModule {}
