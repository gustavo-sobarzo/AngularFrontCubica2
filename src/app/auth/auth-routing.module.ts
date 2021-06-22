import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MainAdminComponent } from './pages/main-admin/main-admin.component';

const routes: Routes = [
  {
    path: '',
    component: MainAdminComponent,
    children:[
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegisterComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes)
  ],
  exports:[
      RouterModule
  ]
})
export class AuthRoutingModule { }
