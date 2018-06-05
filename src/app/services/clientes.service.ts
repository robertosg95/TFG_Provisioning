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

  constructor(private http: Http, private afs: AngularFirestore) {
    console.log("Servicio listo");
  }

  crearInstalacion(instalacion: Instalaciones) {
    //Ir a la colección usuarios o crearla si no existiera
    let userRef = this.afs.collection('usuarios');
    //Crear un nuevo documento con el ID de usuario establecido en el formulario y con los datos introducidos
    let set = userRef.doc(instalacion.ID_cliente).set(instalacion);
    this.nuevo == true;
    return set;
  }

  getInstalacion(id: string) {
    //query para obtener el documento de la coleccion usuarios
    //cuyo identificador coincide con el del pasado por parametros
    let userRef = this.afs.collection<Instalaciones>('usuarios', ref => ref.where('ID_cliente', '==', id));
    return userRef.valueChanges()
      .map((cliente: Instalaciones[]) => {
        console.log(cliente);
        return cliente;
      })
  }

  getInstalaciones() {
    //Se desplaza hasta la colección usuarios
    let userRef = this.afs.collection<Instalaciones>('usuarios');
    //devuelve un objeto de tipo Instalacion que incluye todos los documentos en forma de objetos
    return userRef.valueChanges()
      .map((cliente: Instalaciones[]) => {
        console.log(cliente);
        return cliente;
      })
  }


  actualizarInstalacion(instalacion: Instalaciones) {
    let userRef = this.afs.collection('usuarios');
    let set = userRef.doc(instalacion.ID_cliente).set(instalacion);
    return set;
  }

  borrarInstalacion(instalacion: Instalaciones) {
    //se desplaza hasta la colección usuarios
    let userRef = this.afs.collection('usuarios');
    //elimina la instacion con el id pasado
    let set = userRef.doc(instalacion.ID_cliente).delete();
    return set;
  }

  actualizarWifi(instalacion: Instalaciones) {
    //actualizar datos db
    let userRef = this.afs.collection('usuarios');
    let set = userRef.doc(instalacion.ID_cliente).update({
      SSID: instalacion.SSID,
      contrasena_wifi: instalacion.contrasena_wifi
    });
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    //Código API GenieACS
    let body = `{"name":"setParameterValues", "parameterValues":[["InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID", ${instalacion.SSID}],["InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.PreSharedKey.1.PreSharedKey", ${instalacion.contrasena_wifi}]]}`;
    let GenieAPI = this.http.post(`http://54.167.200.234:7557/devices/${instalacion.modelo_router}${instalacion.SN}/tasks?connection_request`, body, { headers });
    return GenieAPI;
  }

  abrirPuertos(instalacion: Instalaciones) {
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    //Código API GenieACS
    let body = `{"name":"setParameterValues", "parameterValues":[["InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.1.PortMapping.1.PortMappingDescription", ${instalacion.nombre_puerto}],["InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.1.PortMapping.1.InternalClient", ${instalacion.direccion_puerto}],["InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.1.PortMapping.1.PortMappingProtocol", ${instalacion.protocolo_puerto}],["InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.1.PortMapping.1.ExternalPort", ${instalacion.puerto_inicio}], ,["InternetGatewayDevice.WANDevice.1.WANConnectionDevice.1.WANIPConnection.1.PortMapping.1.ExternalPortEndRange", ${instalacion.puerto_fin}]]}`;
    let GenieAPI = this.http.post(`http://54.167.200.234:7557/devices/${instalacion.modelo_router}${instalacion.SN}/tasks?connection_request`, body, { headers });
    return GenieAPI;
  }

  reiniciar(instalacion: Instalaciones) {
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    let body = `{ "name": "reboot" }`;
    let GenieAPI = this.http.post(`http://54.167.200.234:7557/devices/${instalacion.modelo_router}${instalacion.SN}/tasks?connection_request`, body, { headers });
    return GenieAPI;
  }

  resetear(instalacion: Instalaciones) {
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    let body = `{ "name": "factoryReset" }`;
    let GenieAPI = this.http.post(`http://54.167.200.234:7557/devices/${instalacion.modelo_router}${instalacion.SN}/tasks?connection_request`, body, { headers });
    return GenieAPI;
  }

  actualizar(instalacion: Instalaciones) {
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    let body = `{ "name": "download", "file": "firmware.xml"}`;
    let GenieAPI = this.http.post(`http://54.167.200.234:7557/devices/${instalacion.modelo_router}${instalacion.SN}/tasks?connection_request`, body, { headers });
    return GenieAPI;
  }

  configurar_lan(instalacion: Instalaciones) {
    let headers = new Headers({
      'Content-type': 'application/json'
    });
    //Código API GenieACS
    let body = `{"name":"setParameterValues", "parameterValues":[["InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.IPInterface.1.IPInterfaceIPAddress", ${instalacion.direccion_ip}],["InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.IPInterface.1.IPInterfaceSubnetMask", ${instalacion.mascara}],["InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.MinAddress", ${instalacion.dhcp_inicio}],["InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.MaxAddress", ${instalacion.dhcp_fin}], ,["InternetGatewayDevice.LANDevice.1.LANHostConfigManagement.DNSServers", ${instalacion.dns_primario},${instalacion.dns_secundario}]]}`;
    let GenieAPI = this.http.post(`http://54.167.200.234:7557/devices/${instalacion.modelo_router}${instalacion.SN}/tasks?connection_request`, body, { headers });
    return GenieAPI;
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
