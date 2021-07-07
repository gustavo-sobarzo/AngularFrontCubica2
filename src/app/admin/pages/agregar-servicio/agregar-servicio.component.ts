import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from '../../interfaces/admin.interface';
import { AdminService } from '../services/admin.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-agregar-servicio',
  styleUrls: ['agregar-servicio.component.css'],
  templateUrl: './agregar-servicio.component.html',
  styles: [
  ]
})
export class AgregarServicioComponent implements OnInit {

  servicio: Servicio = {
    nombre: '',
    descripcion: '',
    precio: 0
  }

  constructor(private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  guardarServicio() {

    if (this.servicio.idServicio) {
      //acutalizar
      this.adminService.modificarServicio(this.servicio)
        .subscribe(servicio => {
          this.router.navigate(['/admin/listarServicio'])
        })
    } else {
      //crear
      this.adminService.registrarServicio(this.servicio)
        .subscribe(servicio => {
          this.router.navigate(['/admin/listarServicio']);
        })
    }


  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.adminService.getServicioPorId(id)))
      .subscribe(servicio => this.servicio = servicio);
  }

}
