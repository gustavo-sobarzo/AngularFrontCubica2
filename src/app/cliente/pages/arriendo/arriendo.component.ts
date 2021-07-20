import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio, TipoPago } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.component.html',
  styleUrls: ['./arriendo.component.css']
})
export class ArriendoComponent implements OnInit {

  labelPosition: 'before' | 'after' = 'after';
  
  tipoPago: TipoPago[] = [];
  servicio: Servicio[] = [];
  
  miFormulario: FormGroup = this.fb.group({



    vencido: 0,
    activo: 1,
    servicio_idServicio: [this.servicio],
    tipopago_IdTipoPago: [''],
    users_id: [''],
    
  });

  

  

  crearArriendo(){

    const {vencido, activo, servicio_idServicio,tipopago_IdTipoPago, users_id} = this.miFormulario.value;
    this.clienteService.arriendoCrear( vencido, activo, servicio_idServicio, tipopago_IdTipoPago, users_id ) 
    .subscribe(  resp => {
      
      
      console.log(resp);
     
      
    });
  }


  get usuario() {
    /* return this.clienteService.usuario; */
    var id
    return id;
  }

  constructor(
    private  clienteService: ClienteService,
    private fb: FormBuilder,
    private router:Router
  ) { 
    console.log(this.tipoPago)

    

  }

  ngOnInit(): void {
    this.clienteService.getServicio()
    .subscribe (servicio => this.servicio = servicio)

    this.clienteService.getTipoPago()
    .subscribe (tipoPago => this.tipoPago = tipoPago)
    
  }

 
}
