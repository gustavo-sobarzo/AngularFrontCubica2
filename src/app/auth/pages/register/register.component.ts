import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {  AuthRegistro, AuthResponse } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  styleUrls:['register.component.css'],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  /* @ViewChild ('miFormulario') miFormulario!: NgForm;

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
  } */

  miFormulario: FormGroup = this.fb.group({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    apellidoP: '',
    apellidoM: '',
    telefono: '',
    fecha_nacimiento: new Date(),
    tipousuario_idTipoUsuario: 4,
  });

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router:Router) { }

  /* ngOnInit(): void {
    this.authService.getAdmin()
      .subscribe(resp => console.log(resp));
  } */

  register(){
    /* if(this.admin.password_confirmation.trim().length === 0){
      return;
    } */

    const {name, email, password,password_confirmation, apellidoP,
      apellidoM, telefono, fecha_nacimiento, tipousuario_idTipoUsuario} = this.miFormulario.value;
    this.authService.registro( name, email, password, password_confirmation, apellidoP,
                           apellidoM, telefono, fecha_nacimiento, tipousuario_idTipoUsuario ) 
    .subscribe(  resp => {
      
      let dataResponse:AuthResponse = resp;
      console.log(resp);
      if(dataResponse.ok === false){
        Swal.fire('Error','Credenciales incorrectas');
      }else{
        this.router.navigateByUrl('/admin/listadoCliente');
      }
      
    });

     /* this.authService.registrarAdmin(this.admin).subscribe(resp => {
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
    }) */
  }
}
