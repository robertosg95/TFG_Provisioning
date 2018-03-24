import { Component, OnInit } from '@angular/core';
import {ClientesService, Cliente} from '../../services/clientes.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instalaciones-buscador',
  templateUrl: './instalaciones-buscador.component.html',
  styleUrls: ['./instalaciones-buscador.component.css']
})
export class InstalacionesBuscadorComponent implements OnInit {

  clientesArr:Cliente[] = [];
  _texto:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _clientesService:ClientesService,
              private router:Router) {
                this.activatedRoute.params.subscribe(params => {
                  this._texto = params['id'];
                  this.clientesArr = this._clientesService.buscarCliente( params['id']);
                })
 }

  ngOnInit() { }
  buscar( _texto:string ){
    this.router.navigate(['/instalaciones-buscador', _texto]);

  }

}
