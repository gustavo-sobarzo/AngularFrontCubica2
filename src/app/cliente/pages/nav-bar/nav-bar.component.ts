import { Component, OnInit } from '@angular/core';
import { AuthResponse } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    logeado = true;
    logeado2 = false;
    /* token = localStorage.getItem('token'); */
     
    ocultarETQ(){
      /* let respuesta = this.token */
      
        this.logeado = false;
        this.logeado2 = true;
      
        
    }
  constructor(private clienteService: ClienteService) { 
    ///token => localstorage => false
    
    
  
  }

  get usuario(){
    return this.clienteService.usuario;
    
}

  ngOnInit(): void {
  }

   

}
