import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { AuthResponse } from '../../interfaces/cliente.interface';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'
  ]
})
export class RegistrarComponent {

  

  miFormulario: FormGroup = this.fb.group({
    name: ['', [ Validators.required]],
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password_confirmation: ['', [ Validators.required, Validators.minLength(6)]],
    apellidoP: ['', [ Validators.required]],
    apellidoM: ['', [ Validators.required]],
    telefono: ['', [ Validators.required]],
    fecha_nacimiento: [new Date(), [ Validators.required]],
    tipousuario_idTipoUsuario: 5,
  });

  constructor(private clienteService: ClienteService,
              private fb: FormBuilder,
              private router:Router) { }

 
  register(){

    const {name, email, password,password_confirmation, apellidoP,
      apellidoM, telefono, fecha_nacimiento, tipousuario_idTipoUsuario} = this.miFormulario.value;
    this.clienteService.registro( name, email, password, password_confirmation, apellidoP,
                           apellidoM, telefono, fecha_nacimiento, tipousuario_idTipoUsuario ) 
    .subscribe(  resp => {
      
      let dataResponse:AuthResponse = resp;
      console.log(resp);
      if(dataResponse.ok === false){
        Swal.fire('Error','Credenciales incorrectas');
      }else{
        this.router.navigateByUrl('/cliente/inicio');
      }
      
    });

     
  }

  

}
