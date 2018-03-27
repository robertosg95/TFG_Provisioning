import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService, Cliente } from '../../../../../../AngularProjects/tfg-v0.1/src/app/services/clientes.service';
import { Instalaciones } from '../../interfaces/instalaciones.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  instalacion: any = {};

  cliente: any = {};

  id: string;

  constructor(private activatedRoute: ActivatedRoute,
    private clientesService: ClientesService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.clientesService.getInstalacion(this.id)
        .subscribe(instalacion => this.instalacion = instalacion);
    })
  }

  ngOnInit() {
  }

}
