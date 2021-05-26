import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  id: number;
  nombre: string;
  apellido: string;
  numeroTel: number;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nombre: 'Pedro', apellido: 'Aros.', numeroTel: 45654546,estado: 'pagado'},
  {id: 2, nombre: 'Juan', apellido: 'Segura', numeroTel: 6544894,estado: 'pagado'},
  {id: 3, nombre: 'Pablo', apellido: 'Rodriguez', numeroTel: 654654654,estado: 'pagado'},
  {id: 4, nombre: 'Gustavo', apellido: 'Sobarzo', numeroTel: 132123123,estado: 'pagado'},
  {id: 5, nombre: 'Maria', apellido: 'Villa', numeroTel: 564654897,estado: 'pagado'},
];

@Component({
  selector: 'app-listado-cliente',
  styleUrls: ['listado-cliente.css'],
  templateUrl: './listado-cliente.component.html',
  styles: [
  ]
})
export class ListadoClienteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'numeroTel','estado'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
