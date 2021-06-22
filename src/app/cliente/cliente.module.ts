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








@NgModule({
  declarations: [
    RegistrarComponent,
    HomeClienteComponent,
    NavBarComponent,
    LoginClienteComponent,
    DialogContentExampleDialog,
    
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AuthModule
  ],
  entryComponents: [LoginClienteComponent],
    
})
export class ClienteModule { }
