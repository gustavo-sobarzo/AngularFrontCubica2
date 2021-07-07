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
import { ListarServicioComponent } from './pages/listar-servicio/listar-servicio.component';
import { ServicioTarjetaComponent } from './components/servicio-tarjeta/servicio-tarjeta.component';
import { MainMenuBarrasComponent } from './pages/main-menu-barras/main-menu-barras.component';
import { ChartsModule } from 'ng2-charts';
import { BarrasComponent } from './components/grafica-barra/barras/barras.component';





@NgModule({
    declarations: [

        AgregarServicioComponent,
        BuscarClienteComponent,
        VerClienteComponent,
        ListadoClienteComponent,
        ClienteComponent,
        DashboardComponent,
        EditarServicioComponent,
        ListarServicioComponent,
        ServicioTarjetaComponent,
        MainMenuBarrasComponent,
        BarrasComponent,
        

    ],
    imports: [
        FlexLayoutModule,
        CommonModule,
        MaterialModule,
        AdminRoutingModule,
        FormsModule,
        ChartsModule,
        
    ],


})

export class AdminModule { }