import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  
  @Output() toggleSidenav = new EventEmitter<void>();

  /* retorna un objeto de tipo usuario */
  get usuario(){
      return this.authService.usuario;
  }
  
  constructor(private router: Router,
              private authService: AuthService) { }

  logout(){
    this.router.navigate(['./auth/login']);
    this.authService.logOut();
  }

  ngOnInit(): void {
  }

  onToggleSidenav():void{
    this.toggleSidenav.emit();
  }

}
