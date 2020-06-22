import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AprobarReintegroPage } from './aprobar-reintegro.page';

const routes: Routes = [
  {
    path: '',
    component: AprobarReintegroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AprobarReintegroPageRoutingModule {}
