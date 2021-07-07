import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio, ListarClientes } from '../../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  

  public mostrarUser(): Observable<ListarClientes[]>{
    
    return this.http.get<ListarClientes[]>(`${this.baseUrl}/Project_Cubic/public/api/indexUS` );
  }

  getServicio(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${this.baseUrl}/Project_Cubic/public/api/indexSE`);
  }

  registrarServicio ( servicio: Servicio): Observable<Servicio>{
    return this.http.post<Servicio>(`${this.baseUrl}/Project_Cubic/public/api/crearSE`, servicio);
  }

  getServicioPorId ( idServicio: string ) : Observable <Servicio>{
    return this.http.get<Servicio>(`${this.baseUrl}/Project_Cubic/public/api/buscarSE/${idServicio}`);
  }

  modificarServicio ( servicio: Servicio): Observable<Servicio>{
    return this.http.post<Servicio>(`${this.baseUrl}/Project_Cubic/public/api/updateSE/${servicio.idServicio}`, servicio);
  }

}
