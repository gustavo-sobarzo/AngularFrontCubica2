import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'
  ]
})
export class RegistrarComponent implements OnInit {

  

  cliente: Cliente = {
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

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes()
      .subscribe(resp => console.log(resp));

  }

  guardar(){
    if(this.cliente.password_confirmation.trim().length === 0){
      return;
    }

     this.clienteService.registrarCliente(this.cliente).subscribe(resp => {
    console.log('Respuesta', resp);
  })
  }

  

}
