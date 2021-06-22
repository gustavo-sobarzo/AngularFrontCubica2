import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  get auth(){
    return this.autService.auth;
  }
  
  constructor(private router: Router,
              private autService: AuthService) { }

  logout(){
    this.router.navigate(['./auth/login']);
    
  }

  ngOnInit(): void {
  }

}
