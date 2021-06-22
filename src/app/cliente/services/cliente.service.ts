import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, Cliente } from '../interfaces/cliente.interface';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;
  constructor( private http: HttpClient ) { }

  getClientes(){
    return this.http.get('')
  }

  login ( auth: Auth): Observable<Auth>{
    return this.http.post<Auth>(`${this.baseUrl}/Project_Cubic/public/api/login`, auth)
    .pipe(tap(auth => this._auth = auth));
  }

  registrarCliente ( cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseUrl}/Project_Cubic/public/api/register`, cliente);
  }

}
