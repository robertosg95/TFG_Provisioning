import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Instalaciones } from '../interfaces/instalaciones.interface';
import 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ClientesService {

  firebaseURL: string = "https://provisioning-tfg.firebaseio.com/instalaciones.json";
  instalacionesURL: string = "https://provisioning-tfg.firebaseio.com/instalaciones";

  private clientesArr: Cliente[] = [];

  public nuevo: boolean = false;

  private clientes: Cliente[] =
    [
      {
        id: "0",
        nombre: "Pepe Juan",
        direccion: "Tamaraceite, Las Palmas",
        configuraciones_router: "Todas las configuraciones necesarias del router",
        configuraciones_telefono: "Todas las configuraciones necesarias del teléfono"
      },
      {
        id: "1",
        nombre: "Marisa Vicenta",
        direccion: "La Laguna, Santa Cruz",
        configuraciones_router: "Todas las configuraciones necesarias del router",
        configuraciones_telefono: "Todas las configuraciones necesarias del teléfono"
      },
      {
        id: "2",
        nombre: "Domingo Alfredo",
        direccion: "Alcovendas, Madrid",
        configuraciones_router: "Todas las configuraciones necesarias del router",
        configuraciones_telefono: "Todas las configuraciones necesarias del teléfono"
      }
    ];

  constructor(private http: Http, private db: AngularFireDatabase, private afs: AngularFirestore) {
    console.log("Servicio listo");
  }

  crearInstalacion(instalacion: Instalaciones) {
    // let body = JSON.stringify(instalacion);
    // let headers = new Headers({
    //   'Content-type': 'application/json'
    // });
    // return this.http.post(this.firebaseURL, body, { headers })
    //   .map(res => {
    //     console.log(res.json());
    //     return res.json();
    //   })
    let userRef = this.afs.collection('usuarios');
    let set = userRef.doc(instalacion.ID_cliente).set(instalacion);
    this.nuevo == true;
    return set;
  }

  actualizarInstalacion(instalacion: Instalaciones) {
    // let body = JSON.stringify(instalacion);
    // let headers = new Headers({
    //   'Content-type': 'application/json'
    // });
    // let url = `${this.instalacionesURL}/${key$}.json`
    // return this.http.put(url, body, { headers })
    //   .map(res => {
    //     console.log(res.json());
    //     return res.json();
    //   })
    let userRef = this.afs.collection('usuarios');
    let set = userRef.doc(instalacion.ID_cliente).set(instalacion);
    return set;
  }

  actualizarWifi(instalacion: Instalaciones) {
    let userRef = this.afs.collection('usuarios');
    let set = userRef.doc(instalacion.ID_cliente).update({
      SSID: instalacion.SSID,
      contrasena_wifi: instalacion.contrasena_wifi
    });
    return set;
  }

  getInstalacion(id: string) {
    // let url = `${this.instalacionesURL}/${id}.json`;
    // return this.http.get(url)
    //   .map(res => {
    //     console.log(res.json());
    //     return res.json();
    //   })
    let userRef = this.afs.collection<Instalaciones>('usuarios', ref => ref.where('ID_cliente', '==', id));
    //let query = userRef.
    return userRef.valueChanges()
      .map((cliente: Instalaciones[]) => {
        console.log(cliente);
        return cliente;
      })
  }

  getInstalaciones() {
    // return this.http.get(this.firebaseURL)
    //   .map(res => {
    //     console.log(res.json());
    //     return res.json();
    //   })

    let userRef = this.afs.collection<Instalaciones>('usuarios');
    return userRef.valueChanges()
      .map((cliente: Instalaciones[]) => {
        console.log(cliente);
        return cliente;
      })
  }



  getClientes() {
    return this.clientes;
  }

  getCliente(idx: string) {
    return this.clientes[idx];
  }

  buscarCliente(idx: string): Cliente[] {
    this.clientesArr = [];
    idx = idx.toLowerCase();
    for (let cliente of this.clientes) {
      let id = cliente.id.toLowerCase();
      if (id.indexOf(idx) >= 0) {
        this.clientesArr.push(cliente);
      }
    }
    return this.clientesArr;
  }

  getClienteBuscador() {
    return this.clientesArr;
  }

  public getMetadata() {
    let url = "https://roberto-tfg.eu.auth0.com/api/v2/users/user_id?fields=user_metadata&include_fields=true";
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    return this.http.get(url)
      .map(res => {
        console.log(res.json());
        return res.json();
      })
  }
}

export interface Cliente {
  id: string,
  nombre: string,
  direccion: string,
  configuraciones_router: string,
  configuraciones_telefono: string
}
