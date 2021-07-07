import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from '../../interfaces/admin.interface';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html',
  styleUrls: ['./listar-servicio.component.css']
})
export class ListarServicioComponent implements OnInit {


  servicio: Servicio[] = [];

  constructor(private adminService: AdminService,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.adminService.getServicio()
    .subscribe (servicio => this.servicio = servicio)
  }

}
