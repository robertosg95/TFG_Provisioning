import { Component, OnInit } from '@angular/core';
import { ClientesService, Cliente } from '../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {

  clientes: Cliente[] = [];

  instalaciones: any[] = [];

  constructor(private _clientesService: ClientesService,
    private router: Router) {
    this._clientesService.getInstalaciones()
      .subscribe(instalaciones => this.instalaciones = instalaciones);
  }

  ngOnInit() { }

  buscar(_texto: string) {
    console.log(this.instalaciones);

  }

}
