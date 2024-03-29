import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ClienteGuard } from './cliente/guards/cliente.guard';

import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule),
    /* canActivate:[ClienteGuard],
    canLoad:[ClienteGuard] */
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    /* component: ErrorPageComponent */
    redirectTo: '404',
  }
]


@NgModule({

  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }
