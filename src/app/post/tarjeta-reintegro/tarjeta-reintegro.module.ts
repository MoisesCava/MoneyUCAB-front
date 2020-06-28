import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarjetaReintegroPageRoutingModule } from './tarjeta-reintegro-routing.module';

import { TarjetaReintegroPage } from './tarjeta-reintegro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaReintegroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TarjetaReintegroPage]
})
export class TarjetaReintegroPageModule {}
