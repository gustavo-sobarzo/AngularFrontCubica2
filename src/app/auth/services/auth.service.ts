import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import {  AuthResponse, Usuario } from '../interfaces/auth.interface';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;




  get usuario() {
    return { ...this._usuario };
  }



  constructor(private http: HttpClient) { }



  getAdmin() {
    return this.http.get('')
  }

  registro(name: string, email: string, password: string,
    password_confirmation: string, apellidoP: string,
    apellidoM: string, telefono: string, fecha_nacimiento: Date,
    tipousuario_idTipoUsuario: number) {
    const url = `${this.baseUrl}/Project_Cubic/public/api/register`;
    const body = {
      name, email, password, password_confirmation, apellidoP,
      apellidoM, telefono, fecha_nacimiento, tipousuario_idTipoUsuario
    };
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.token) {

            localStorage.setItem('token', resp.token!);
            this._usuario = {
              email
            }
          }
        }),
        map(resp => resp.token),
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
            localStorage.setItem('Authorization', 'Bearer ' + resp.token!);
            this._usuario = {
              email
            }
          }
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
          if (localStorage.getItem('Authorization') && resp.tipousuario_idTipoUsuario === 4) {
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


