import { Component, OnInit } from '@angular/core';
import {AuthService} from 'C:/AngularProjects/tfg-v0.1/src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService) {
    authService.handleAuthentication();
   }

  ngOnInit() {

    console.log("Usuario autenticado: " + this.authService.isAuthenticated());
  }

}
