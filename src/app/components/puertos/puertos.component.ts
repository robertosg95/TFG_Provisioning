import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../../../../AngularProjects/tfg-v0.1/src/app/services/clientes.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-puertos',
  templateUrl: './puertos.component.html',
  styleUrls: ['./puertos.component.css']
})
export class PuertosComponent implements OnInit {

  instalacion: any = {};

  profile: any;

  constructor(private clientesService: ClientesService, private authService: AuthService) {
    if (this.authService.userProfile) {
      //obtener usuario de Auth0
      this.profile = this.authService.userProfile;
      //this.profile.sub == id de usuario == ID_cliente
      this.clientesService.getInstalacion(this.profile.sub)
        .subscribe(instalacion => this.instalacion = instalacion[0]);
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        this.clientesService.getInstalacion(this.profile.sub)
          .subscribe(instalacion => this.instalacion = instalacion[0]);
      });
    }
  }

  ngOnInit() {
  }

  public guardar() {
    this.clientesService.abrirPuertos(this.instalacion);
  }

}
