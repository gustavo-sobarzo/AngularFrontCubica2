import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicioAdd, ListarClientes } from '../../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getServicio(): Observable<ServicioAdd[]>{
    return this.http.get<ServicioAdd[]>('asda')
  }

  registrarServicio ( servicioAdd: ServicioAdd): Observable<ServicioAdd>{
    return this.http.post<ServicioAdd>(`${this.baseUrl}/Project_Cubic/public/api/crearSE`, servicioAdd);
  }

  public mostrarUser(): Observable<ListarClientes[]>{
    
    return this.http.get<ListarClientes[]>(`${this.baseUrl}/Project_Cubic/public/api/indexUS` );
  }

  getServicioPorId ( id: string ) : Observable <ServicioAdd>{
    return this.http.get<ServicioAdd>(`${this.baseUrl}/Project_Cubic/public/api/crearSE/2`);
  }

}
