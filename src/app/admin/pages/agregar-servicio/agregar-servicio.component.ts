import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioAdd } from '../../interfaces/admin.interface';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-agregar-servicio',
  styleUrls: ['agregar-servicio.component.css'],
  templateUrl: './agregar-servicio.component.html',
  styles: [ 
  ]
})
export class AgregarServicioComponent implements OnInit {

  servicioAdd: ServicioAdd = {
    nombre: '',
    descripcion: '',
    precio: 0
  }

  constructor(private adminService: AdminService,
              private activatedRoute: ActivatedRoute) { }

  guardarServicio(){
    this.adminService.registrarServicio(this.servicioAdd).subscribe(resp => {
      console.log('Respuesta', resp);
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(({id}) => console.log(id));
  }

}
