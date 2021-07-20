import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Servicio, ListarClientes } from '../../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  
  /* retorna petición get  donde se obtienen lista de clientes */
  public mostrarUser(): Observable<ListarClientes>{
    
    return this.http.get<ListarClientes>(`${this.baseUrl}/Project_Cubic/public/api/indexUS` )
    
     
  }

  /* retorna petición get donde se obtiene la lista de servicio */
  getServicio(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${this.baseUrl}/Project_Cubic/public/api/indexSE`);
  }
/* retorna una peticion post  donde se se envian un obserbable de tipo servicio para insertar servicio */
  registrarServicio ( servicio: Servicio): Observable<Servicio>{
    return this.http.post<Servicio>(`${this.baseUrl}/Project_Cubic/public/api/crearSE`, servicio);
  }
/* retorna una peticion get en la cual se obtiene un servicio por id */
  getServicioPorId ( idServicio: string ) : Observable <Servicio>{
    return this.http.get<Servicio>(`${this.baseUrl}/Project_Cubic/public/api/buscarSE/${idServicio}`);
  }
/* retorna una peticion post en la cual se obtiene un servicio  */
  modificarServicio ( servicio: Servicio): Observable<Servicio>{
    return this.http.post<Servicio>(`${this.baseUrl}/Project_Cubic/public/api/updateSE/${servicio.idServicio}`, servicio);
  }

}
