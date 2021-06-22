import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListarClientes } from '../../interfaces/admin.interface';
import { AdminService } from '../services/admin.service';






@Component({
  selector: 'app-listado-cliente',
  styleUrls: ['listado-cliente.css'],
  templateUrl: './listado-cliente.component.html',
  styles: [
  ]
})
export class ListadoClienteComponent implements OnInit {

  

 
  displayedColumns = ['name', 'email', 'apellidoP', 'apellidoM', "telefono","fecha_nacimiento"];
dataSource: any;


  constructor(private adminService: AdminService) { }

ngOnInit() {
    this.renderDataTable();
  }

  renderDataTable() {  
    this.adminService.mostrarUser()  
      .subscribe(  
          x => {  
    this.dataSource = new MatTableDataSource();  
    this.dataSource.data = x;  
    console.log(this.dataSource.data);
  },  
  error => {  
    console.log('There was an error while retrieving Usuarios!' + error);  
  });  
} 

  

}
