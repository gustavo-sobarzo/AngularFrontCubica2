import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { AgregarServicioComponent } from './pages/agregar-servicio/agregar-servicio.component';
import { BuscarClienteComponent } from './pages/buscar-cliente/buscar-cliente.component';
import { VerClienteComponent } from './pages/ver-cliente/ver-cliente.component';
import { ListadoClienteComponent } from './pages/listado-cliente/listado-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditarServicioComponent } from './pages/editar-servicio/editar-servicio.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [

        AgregarServicioComponent,
        BuscarClienteComponent,
        VerClienteComponent,
        ListadoClienteComponent,
        ClienteComponent,
        DashboardComponent,
        EditarServicioComponent,

    ],
    imports: [
        FlexLayoutModule,
        CommonModule,
        MaterialModule,
        AdminRoutingModule,
        FormsModule
    ],


})

export class AdminModule { }