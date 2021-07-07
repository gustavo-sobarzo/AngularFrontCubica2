import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListadoClienteComponent } from './pages/listado-cliente/listado-cliente.component';
import { AgregarServicioComponent } from './pages/agregar-servicio/agregar-servicio.component';
import { BuscarClienteComponent } from './pages/buscar-cliente/buscar-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListarServicioComponent } from './pages/listar-servicio/listar-servicio.component';
import { MainMenuBarrasComponent } from './pages/main-menu-barras/main-menu-barras.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'listadoCliente',
        component: ListadoClienteComponent
      },
      {
        path: 'agregarServicio',
        component: AgregarServicioComponent
      },
      {
        path: 'listarServicio',
        component: ListarServicioComponent
      },
      {
        path: 'editar/:id',
        component: AgregarServicioComponent
      },
      {
        path: 'mainMenuBarras',
        component: MainMenuBarrasComponent
      },
      {
        path: 'buscarCliente',
        component: BuscarClienteComponent
      },
      { 
        path: ':id',
        component: ClienteComponent
      },
      
      {
        path: '**',
        redirectTo: 'listadoCliente'
      },
      
    ],

    

  }
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports:[
      RouterModule
  ]
})
export class AdminRoutingModule { }
