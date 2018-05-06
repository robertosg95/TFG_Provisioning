import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-local',
  templateUrl: './red-local.component.html',
  styleUrls: ['./red-local.component.css']
})
export class RedLocalComponent implements OnInit {

  red_local: any = {
    ip_router: "",
    direccion_ip: "",
    inicio_dhcp: "",
    fin_dhcp: "",
    dns_primario: "",
    dns_secundario: ""
  }

  constructor() { }

  ngOnInit() {
  }


  public guardar() {

  }

}
