import { Component, OnInit } from '@angular/core';
import {ClientesService, Cliente} from '../../services/clientes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {

  clientes:Cliente[] = [];

  constructor( private _clientesService:ClientesService,
               private router:Router) { }

  ngOnInit() {

    this.clientes = this._clientesService.getClientes();

  }

  buscar( _texto:string ){
    this.router.navigate(['/instalaciones-buscador', _texto])

  }

}
