import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprobarReintegroPageRoutingModule } from './aprobar-reintegro-routing.module';

import { AprobarReintegroPage } from './aprobar-reintegro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprobarReintegroPageRoutingModule
  ],
  declarations: [AprobarReintegroPage]
})
export class AprobarReintegroPageModule {}
