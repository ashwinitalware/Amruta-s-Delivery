import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeterReadingPageRoutingModule } from './meter-reading-routing.module';

import { MeterReadingPage } from './meter-reading.page';
import { FooterPageModule } from '../footer/footer.module';
import { FooterPage } from '../footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeterReadingPageRoutingModule,
    FooterPageModule
  ],
  declarations: [MeterReadingPage],
  exports: [FooterPage]
})
export class MeterReadingPageModule {}
