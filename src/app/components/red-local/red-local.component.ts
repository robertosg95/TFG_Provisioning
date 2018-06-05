import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ClientesService } from '../../../../../../AngularProjects/tfg-v0.1/src/app/services/clientes.service';


@Component({
  selector: 'app-red-local',
  templateUrl: './red-local.component.html',
  styleUrls: ['./red-local.component.css']
})
export class RedLocalComponent implements OnInit {

  profile: any;

  instalacion: any = {};

  constructor(private authService: AuthService, private clientesService: ClientesService) {
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
    this.clientesService.configurar_lan(this.instalacion);
  }

}
