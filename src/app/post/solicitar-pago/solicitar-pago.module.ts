import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarPagoPageRoutingModule } from './solicitar-pago-routing.module';

import { SolicitarPagoPage } from './solicitar-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarPagoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SolicitarPagoPage]
})
export class SolicitarPagoPageModule {}
