import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMeterReadingPageRoutingModule } from './add-meter-reading-routing.module';

import { AddMeterReadingPage } from './add-meter-reading.page';
import { FooterPage } from '../footer/footer.page';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMeterReadingPageRoutingModule,
    FooterPageModule
  ],
  declarations: [AddMeterReadingPage],
  exports: [FooterPage]
})
export class AddMeterReadingPageModule {}
