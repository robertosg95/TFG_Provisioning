import { Component, OnInit } from '@angular/core';
import {AuthService} from 'C:/AngularProjects/tfg-v0.1/src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private authService:AuthService) {
    authService.handleAuthentication();

  }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
