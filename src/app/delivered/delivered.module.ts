import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveredPageRoutingModule } from './delivered-routing.module';

import { DeliveredPage } from './delivered.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveredPageRoutingModule,
    FooterPageModule
  ],
  declarations: [DeliveredPage],
  exports: [FooterPage]
})
export class DeliveredPageModule {}
