import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthResponse, Servicio, Usuario, TipoPago } from '../interfaces/cliente.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;


  

  get usuario() {
    return { ...this._usuario };
  }
  


  constructor(private http: HttpClient) { }

  /* retorna petición get donde se obtiene la lista de servicio */
  getServicio(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${this.baseUrl}/Project_Cubic/public/api/indexSE`);
  }

  getTipoPago(): Observable<TipoPago[]>{
    return this.http.get<TipoPago[]>(`${this.baseUrl}/Project_Cubic/public/api/indexTG`);
  }

  getAdmin() {
    return this.http.get('')
  }
  
  registro(name:string, email:string, password:string,
           password_confirmation:string, apellidoP:string,
           apellidoM:string, telefono:string, fecha_nacimiento: Date,
           tipousuario_idTipoUsuario: number){
            const url = `${this.baseUrl}/Project_Cubic/public/api/register`;
            const body = { name, email, password,password_confirmation, apellidoP,
                           apellidoM, telefono, fecha_nacimiento, tipousuario_idTipoUsuario };
            return this.http.post<AuthResponse>(url, body)
              .pipe(
                tap(resp => {
                  if (resp.token) {
                    
                    localStorage.setItem('token', resp.token);
                    this._usuario = {
                      email
                    }
                  }
                }),
                map(resp => resp.token),
                catchError(err => of(err))
              );
  }

  arriendoCrear(vencido:number, activo:number, servicio_idServicio:number,
    tipopago_IdTipoPago:number, users_id:number){
     const url = `${this.baseUrl}/Project_Cubic/public/api/crearAr`;
     const body = { vencido, activo, servicio_idServicio, tipopago_IdTipoPago, users_id };
     return this.http.post<AuthResponse>(url, body)
       .pipe(
         tap(resp => {
           console.log(resp)
         }),
         catchError(err => of(err))
       );
}

  login(email: string, password: string) {

    const url = `${this.baseUrl}/Project_Cubic/public/api/login`;
    const body = { email, password };
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.token) {
            
            localStorage.setItem('Authorization',  'Bearer ' + resp.token);
            this._usuario = {
              email
            }
            
          }
          localStorage.setItem('email', email);
          
        }),
        map(resp => resp.token),
        catchError(err => of(err))
      );
  }
  

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/Project_Cubic/public/api/user`;
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('Authorization') || '');
    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          
          this._usuario = {
            email: resp.email!,
            
          }
          if (localStorage.getItem('Authorization') && resp.tipousuario_idTipoUsuario === 5) {
            resp.ok = true;
          }
          return resp.ok;
          
        }),
        catchError(err => of(false))
      );
  }

  logOut() {
    localStorage.clear();
  }

}
