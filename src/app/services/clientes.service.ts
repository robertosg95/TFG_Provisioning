import { Injectable } from '@angular/core';

@Injectable()
export class ClientesService {

  private clientesArr:Cliente[] = [];

  private clientes:Cliente[] =
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

  constructor() {
    console.log ("Servicio listo");
   }

   getClientes(){
     return this.clientes;
   }

   getCliente(idx: string){
     return this.clientes[idx];
   }

   buscarCliente( idx:string ):Cliente[]{
     this.clientesArr = [];
     idx = idx.toLowerCase();
     for (let cliente of this.clientes ){
       let id = cliente.id.toLowerCase();
       if (id.indexOf(idx) >=0){
         this.clientesArr.push(cliente);
       }
     }
     return this.clientesArr;
   }

   getClienteBuscador(){
     return this.clientesArr;
   }
}

export interface Cliente {
  id: string,
  nombre: string,
  direccion: string,
  configuraciones_router: string,
  configuraciones_telefono: string
}
