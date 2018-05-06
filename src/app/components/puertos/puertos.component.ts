import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puertos',
  templateUrl: './puertos.component.html',
  styleUrls: ['./puertos.component.css']
})
export class PuertosComponent implements OnInit {

  abrir_puerto: any = {
    nombre: "",
    direccion_ip: "",
    protocolo: "",
    puerto_inicio: "",
    puerto_fin: ""
  }

  constructor() { }

  ngOnInit() {
  }

  public guardar() {

  }

}
