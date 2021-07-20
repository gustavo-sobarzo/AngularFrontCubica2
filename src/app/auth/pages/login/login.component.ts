import { Component  } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

import { AuthResponse } from '../../interfaces/auth.interface';







@Component({
  selector: 'app-login',
  styleUrls: ['login.component.css'],
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  

  /* auth: Auth = {
    email: '',
    password: '',
  } */

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) { }

    miFormulario: FormGroup = this.fb.group({
      email:    ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]],
    });


    /* recibe email y password de usuario */
  login() {

    
    
    const {email, password} = this.miFormulario.value;
    this.authService.login( email, password ) 
    .subscribe(  resp => {
      
      let dataResponse:AuthResponse = resp;
      console.log(resp);
      if(dataResponse.ok === false){
        Swal.fire('Error','Credenciales incorrectas');
      }else{
        this.router.navigateByUrl('/admin/listadoCliente');
      }
      
    });
    
    
    /* this.authService.validarToken()
    .subscribe(console.log); */

  }

}
