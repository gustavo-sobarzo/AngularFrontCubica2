import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthResponse } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent  {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }
} 

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./dialog-content-example-dialog.css']
})
export class DialogContentExampleDialog {

  constructor(private router: Router,
    private clienteService: ClienteService,
    private fb: FormBuilder) { }

    miFormulario: FormGroup = this.fb.group({
      email:    ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.minLength(6) ]],
    });

  login() {

    /* this.authService.validarToken()
    .subscribe (resp => console.log(resp)); */
    
    const {email, password} = this.miFormulario.value;
    this.clienteService.login( email, password ) 
    .subscribe(  resp => {
      
      let dataResponse:AuthResponse = resp;
      
      if(dataResponse.ok === false){
        Swal.fire('Error','Credenciales incorrectas');
      }else{
        this.router.navigateByUrl('cliente/homeCliente');
      }
      
    });

  }


}