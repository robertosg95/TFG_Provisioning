import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService, Cliente } from '../../../../../../AngularProjects/tfg-v0.1/src/app/services/clientes.service';
import { Instalaciones } from '../../interfaces/instalaciones.interface';
import { AuthService } from '../../services/auth.service';
import { FormGroup, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  instalacion: any = {};

  cliente: any = {};

  id: string;

  profile: any;

  editar: boolean = false;

  actualizado: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService,
    private authService: AuthService,
    private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.clientesService.getInstalacion(this.id)
        .subscribe(instalacion => this.instalacion = instalacion[0]);
    })
  }

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

  public editable(forma: NgForm) {
    this.editar = true;
  }


  public cancelar() {
    this.router.navigate(['/instalaciones']);

  }

  public actualizar() {
    this.clientesService.actualizarInstalacion(this.instalacion);
    this.router.navigate(['cliente', this.id]);
    this.actualizado = true;
    this.editar = false;

  }
}
