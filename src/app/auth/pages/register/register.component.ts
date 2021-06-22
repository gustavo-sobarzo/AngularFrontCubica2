import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  AuthRegistro } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  styleUrls:['register.component.css'],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  @ViewChild ('miFormulario') miFormulario!: NgForm;

  admin: AuthRegistro = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    apellidoP: '',
    apellidoM: '',
    telefono: '',
    fecha_nacimiento: new Date(),
    tipousuario_idTipoUsuario: 5,
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAdmin()
      .subscribe(resp => console.log(resp));
  }

  register(){
    if(this.admin.password_confirmation.trim().length === 0){
      return;
    }

     this.authService.registrarAdmin(this.admin).subscribe(resp => {
    console.log('Respuesta', resp);
  })

    this.miFormulario.resetForm({
      name: '',
    email: '',
    password: '',
    password_confirmation: '',
    apellidoP: '',
    apellidoM: '',
    telefono: '',
    fecha_nacimiento: new Date(),
    tipousuario_idTipoUsuario: 5,
    })
  }
}
