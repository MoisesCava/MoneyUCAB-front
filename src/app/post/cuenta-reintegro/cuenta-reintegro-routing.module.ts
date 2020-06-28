import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaReintegroPage } from './cuenta-reintegro.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaReintegroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaReintegroPageRoutingModule {}