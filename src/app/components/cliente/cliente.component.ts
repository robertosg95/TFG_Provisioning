import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientesService, Cliente} from '../../../../../../AngularProjects/tfg-v0.1/src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private clientesService: ClientesService) {
    this.activatedRoute.params.subscribe(params => {
      this.cliente = this.clientesService.getCliente( params['id']);
    })
   }

  ngOnInit() {
  }

}
