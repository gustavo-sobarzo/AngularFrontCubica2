import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable} from 'rxjs';
import { Auth, AuthRegistro } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;
  
  get auth(): Auth{
    return {...this._auth!}
  }
  
  
  constructor(private http: HttpClient) { }

  

  getAdmin(){
    return this.http.get('')
  }

  login ( auth: Auth): Observable<Auth>{
    return this.http.post<Auth>(`${this.baseUrl}/Project_Cubic/public/api/login`, auth)
    .pipe(tap(auth => this._auth = auth));
  }

  registrarAdmin ( admin: AuthRegistro): Observable<AuthRegistro>{
    return this.http.post<AuthRegistro>(`${this.baseUrl}/Project_Cubic/public/api/register`, admin)
    ;
  }
}
