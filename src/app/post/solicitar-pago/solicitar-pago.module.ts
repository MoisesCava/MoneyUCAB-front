import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarPagoPageRoutingModule } from './solicitar-pago-routing.module';

import { SolicitarPagoPage } from './solicitar-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarPagoPageRoutingModule
  ],
  declarations: [SolicitarPagoPage]
})
export class SolicitarPagoPageModule {}
