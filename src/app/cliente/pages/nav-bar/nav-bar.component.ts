import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthResponse } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../services/cliente.service';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {



  constructor(private router: Router,
    private clienteService: ClienteService,
  ) {


  }

  get usuario() {
    /* return this.clienteService.usuario; */
    var email = localStorage.getItem('email')
    return email;
  }

  validar(): boolean {

    if (localStorage.getItem('email')) {
      return false
    }
      return true;
  }

  validar2(): boolean {

    if (localStorage.getItem('email')) {
      return true
    }
      return false;
  }

  ngOnInit(): void {
  }

  logout() {
    this.clienteService.logOut();
  }





}
