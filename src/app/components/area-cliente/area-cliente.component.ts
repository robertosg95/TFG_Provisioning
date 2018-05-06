import { Component, OnInit } from '@angular/core';
import { AuthClienteService } from 'C:/AngularProjects/tfg-v0.1/src/app/services/auth-cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-cliente',
  templateUrl: './area-cliente.component.html',
  styleUrls: ['./area-cliente.component.css']
})
export class AreaClienteComponent implements OnInit {

  constructor(private authService: AuthClienteService, private router: Router) {
    authService.handleAuthentication();

  }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  public acceder() {
    this.router.navigate(['/home-clientes']);
  }

}
