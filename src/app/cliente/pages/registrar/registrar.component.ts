import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { AuthResponse } from '../../interfaces/cliente.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    apellidoP: '',
    apellidoM: '',
    telefono: '',
    fecha_nacimiento: new Date(),
    tipousuario_idTipoUsuario: 5,
  });

  constructor(private clienteService: ClienteService,
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
