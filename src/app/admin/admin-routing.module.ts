import { NgModule} from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListadoClienteComponent } from './pages/listado-cliente/listado-cliente.component';
import { AgregarServicioComponent } from './pages/agregar-servicio/agregar-servicio.component';
import { BuscarClienteComponent } from './pages/buscar-cliente/buscar-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditarServicioComponent } from './pages/editar-servicio/editar-servicio.component';


const rutas: Routes = [
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
        path: 'editar/:id',
        component: EditarServicioComponent
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
      }
    ]

  }
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(rutas)
  ],
  exports:[
      RouterModule
  ]
})
export class AdminRoutingModule { }
