import { Component, OnInit, Pipe } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { AdminService } from '../../../pages/services/admin.service';


@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [
    '2019', '2020', '2021', '2022', '2023', '2024', '2025'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
   

  public barChartData: ChartDataSets[] = [
    
    { data: [1980, 1990, 1995, 2000, 2001, 2004, 2005], label: 'clientes año anterior' }
  ];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.mostrarUser()
    .subscribe(data => {
      console.log(data);
      const name = data.map(data => data.name)
      const edad = data.map(data => data.fecha_nacimiento)
      
      /* 
      edad.forEach(result => {
        const nuevaEdad = new Date(result)
        edadParse = nuevaEdad
      });
      let edadParse = [Date]; */

      console.log(name);
      console.log(edad);
      this.barChartLabels = name;
      /* this.barChartData.push(edad); */
    });
  }

  
  

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [];
      
  }

}
