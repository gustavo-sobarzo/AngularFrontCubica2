import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { ClienteGuard } from './guards/cliente.guard';
import { ArriendoComponent } from './pages/arriendo/arriendo.component';

const rutes: Routes = [
{
  path: '',
  component:HomeClienteComponent,
  children:[
    {
      path: 'registrar',
      component: RegistrarComponent
    },
    {
      path: 'loginCliente',
      component: LoginClienteComponent
    },
    {
      path: 'inicio',
      component: InicioComponent
    },
    {            
    path: 'servicio',
      component: ServicioComponent,
      
    },
    {
      path: 'arriendo',
      component: ArriendoComponent,
      canActivate:[ClienteGuard],
    canLoad:[ClienteGuard]
    },
    {
      path: '**',
      redirectTo: 'inicio'
    }
  ],
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ClienteRoutingModule { }
