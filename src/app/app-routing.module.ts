import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'solicitar-pago',
    loadChildren: () => import('./post/solicitar-pago/solicitar-pago.module').then( m => m.SolicitarPagoPageModule)
  },
  {
    path: 'aprobar-reintegro',
    loadChildren: () => import('./post/aprobar-reintegro/aprobar-reintegro.module').then( m => m.AprobarReintegroPageModule)
  },
  {
    path: 'cierre',
    loadChildren: () => import('./post/cierre/cierre.module').then( m => m.CierrePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./post/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'billetera',
    loadChildren: () => import('./post/billetera/billetera.module').then( m => m.BilleteraPageModule)
  },
  {
    path: 'cobros',
    loadChildren: () => import('./post/cobros/cobros.module').then( m => m.CobrosPageModule)
  },
  {
    path: 'tarjeta-reintegro',
    loadChildren: () => import('./post/tarjeta-reintegro/tarjeta-reintegro.module').then( m => m.TarjetaReintegroPageModule)
  },
  {
    path: 'cuenta-reintegro',
    loadChildren: () => import('./post/cuenta-reintegro/cuenta-reintegro.module').then( m => m.CuentaReintegroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
