import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPage } from './post.page';

const routes: Routes = [
  {
    path: '',
    component: PostPage
  },
  {
    path: 'aprobar-reintegro',
    loadChildren: () => import('./aprobar-reintegro/aprobar-reintegro.module').then( m => m.AprobarReintegroPageModule)
  },
  {
    path: 'cierre',
    loadChildren: () => import('./cierre/cierre.module').then( m => m.CierrePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'solicitar-pago',
    loadChildren: () => import('./solicitar-pago/solicitar-pago.module').then( m => m.SolicitarPagoPageModule)
  },
  {
    path: 'billetera',
    loadChildren: () => import('./billetera/billetera.module').then( m => m.BilleteraPageModule)
  },
  {
    path: 'cobros',
    loadChildren: () => import('./cobros/cobros.module').then( m => m.CobrosPageModule)
  },  {
    path: 'tarjeta-reintegro',
    loadChildren: () => import('./tarjeta-reintegro/tarjeta-reintegro.module').then( m => m.TarjetaReintegroPageModule)
  },
  {
    path: 'cuenta-reintegro',
    loadChildren: () => import('./cuenta-reintegro/cuenta-reintegro.module').then( m => m.CuentaReintegroPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostPageRoutingModule {}
