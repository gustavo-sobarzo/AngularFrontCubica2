import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { LoginClienteComponent } from './pages/login-cliente/login-cliente.component';

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
