import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../services/admin.service';






@Component({
  selector: 'app-listado-cliente',
  styleUrls: ['listado-cliente.css'],
  templateUrl: './listado-cliente.component.html',
  styles: [
  ]
})
export class ListadoClienteComponent implements OnInit {




  displayedColumns = ['name', 'email', 'apellidoP', 'apellidoM', "telefono", "fecha_nacimiento"];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private adminService: AdminService) { 

    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

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
