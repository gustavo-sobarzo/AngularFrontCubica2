import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { ClienteService } from '../services/cliente.service';


@Injectable({
    providedIn: 'root'
  })
  export class ClienteGuard implements  CanLoad {
  
    constructor(private clienteService:ClienteService,
                private router: Router){}
  
    canActivate(): Observable<boolean>| boolean   {
      console.log('canActivate');
      return this.clienteService.validarToken()
        .pipe(
          tap( valid =>{
            if(!valid){
              this.router.navigateByUrl('/cliente/inicio');
            }
          })
        );
    }
    canLoad(): Observable<boolean> | boolean {
      console.log('canLoad')
      return this.clienteService.validarToken()
      .pipe(
        tap( valid =>{
          if(!valid){
            this.router.navigateByUrl('/cliente/inicio');
          }
        })
      );
    }
  }