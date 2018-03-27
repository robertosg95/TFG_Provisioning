import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Instalaciones } from '../../interfaces/instalaciones.interface';
import { ClientesService } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-instalacion',
  templateUrl: './crear-instalacion.component.html',
  styleUrls: ['./crear-instalacion.component.css']
})
export class CrearInstalacionComponent implements OnInit {

  profile: any;

  instalacion: Instalaciones = {
    ID_cliente: "",
    nombre: "",
    apellidos: "",
    direccion: "",
    modelo_router: "",
    SN: "",
    usuario_ppoe: "",
    contrasena_ppoe: "",
    perfil_configuracion: "",
    habilitar_wifi: true,
    SSID: "",
    contrasena_wifi: "",
    habilitar_voip: true,
    telefono: "",
    contrasena_telefono: "",
    usuario_web: "",
    contrasena_web: ""

  }

  constructor(private authService: AuthService,
    private clientesService: ClientesService,
    private router: Router) { }

  ngOnInit() {
    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  public isAdmin() {
    if (this.profile.sub == "auth0|5ab0d7c371b5ad0e62997fae") {
      return true;
    } else {
      return false;
    }
  }
  public guardar() {
    console.log(this.instalacion);
    this.clientesService.crearInstalacion(this.instalacion)
      .subscribe(data => {
        this.router.navigate(['cliente', data.name])
      },
        error => console.error(error));
  }

}
