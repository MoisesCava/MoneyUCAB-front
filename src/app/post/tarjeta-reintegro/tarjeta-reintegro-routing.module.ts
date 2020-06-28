import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaReintegroPage } from './tarjeta-reintegro.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaReintegroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaReintegroPageRoutingModule {}
