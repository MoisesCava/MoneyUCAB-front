import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaReintegroPageRoutingModule } from './cuenta-reintegro-routing.module';

import { CuentaReintegroPage } from './cuenta-reintegro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaReintegroPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CuentaReintegroPage]
})
export class CuentaReintegroPageModule {}