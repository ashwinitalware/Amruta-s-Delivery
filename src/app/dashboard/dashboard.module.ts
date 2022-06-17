import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { FooterPage } from '../footer/footer.page';
import { FooterPageRoutingModule } from '../footer/footer-routing.module';
import { FooterPageModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    FooterPageModule
  ],
  declarations: [DashboardPage],
  exports: [FooterPage]
})
export class DashboardPageModule {}
