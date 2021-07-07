import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { DialogContentExampleDialog, LoginClienteComponent } from './pages/login-cliente/login-cliente.component';
import { AuthModule } from '../auth/auth.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ArriendoComponent } from './pages/arriendo/arriendo.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ServicioComponent } from './pages/servicio/servicio.component';







@NgModule({
  declarations: [
    RegistrarComponent,
    HomeClienteComponent,
    NavBarComponent,
    LoginClienteComponent,
    DialogContentExampleDialog,
    InicioComponent,
    ArriendoComponent,
    FooterComponent,
    ServicioComponent,
    
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AuthModule,
    IvyCarouselModule
  ],
  entryComponents: [LoginClienteComponent],
    
})
export class ClienteModule { }
