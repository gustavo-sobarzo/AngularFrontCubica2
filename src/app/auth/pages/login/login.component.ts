import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  styleUrls: ['login.component.css'],
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  auth: Auth = {
    email: '',
    password: '',
  }

  constructor(private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) { }

    miFormulario: FormGroup = this.fb.group({
      email:    ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]],
    });

  login() {
    
    this.router.navigate(['./admin/listadoCliente']);
    this.authService.login(this.auth).subscribe(resp => {
      console.log('Respuesta', resp);
    })
  }






}
