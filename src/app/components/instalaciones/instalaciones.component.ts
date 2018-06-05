import { Component, OnInit } from '@angular/core';
import { ClientesService, Cliente } from '../../services/clientes.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Instalaciones } from '../../interfaces/instalaciones.interface';
//import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styleUrls: ['./instalaciones.component.css']
})
export class InstalacionesComponent implements OnInit {

  clientes: Cliente[] = [];

  instalaciones: Instalaciones[];

  metadata: any;

  startAt = new Subject();
  endAt = new Subject();

  constructor(private _clientesService: ClientesService,
    private router: Router) {
    this._clientesService.getInstalaciones()
      .subscribe(instalaciones => {
        this.instalaciones = instalaciones;
      })

    // this._clientesService.getMetadata()
    //   .subscribe(metadata => this.metadata = metadata);
    //this.instalaciones = this._clientesService.getMovies();
  }

  ngOnInit() { }

  borrar(instalacion: Instalaciones) {
    this._clientesService.borrarInstalacion(instalacion);
    this.router.navigate(['/instalaciones']);
  }

  buscar(_texto: string) {
    // if (_texto == this.instalaciones.ID_cliente)) {
    //   this.router.navigate(['/area-cliente']);
    // }
    //console.log(this.instalaciones.key$);

  }

  search($event) {
    let q = $event.target.value
    this.startAt.next(q)
    this.endAt.next(q + "\uf8ff")
  }

}
