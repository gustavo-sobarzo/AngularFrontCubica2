import { Component, Input} from '@angular/core';
import { Servicio } from '../../interfaces/admin.interface';

@Component({
  selector: 'app-servicio-tarjeta',
  templateUrl: './servicio-tarjeta.component.html',
  styleUrls: ['./servicio-tarjeta.component.css']
})
export class ServicioTarjetaComponent {

  @Input() servicio!: Servicio;

}
