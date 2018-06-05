import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';
import { ClientesService } from '../../../../../../AngularProjects/tfg-v0.1/src/app/services/clientes.service';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

  profile: any;

  reinicio: boolean = false;
  reseteo: boolean = false;
  actualiza: boolean = false;
  instalacion: any = {};

  constructor(private authService: AuthService, private clientesService: ClientesService, private afs: AngularFirestore) {
    //this.itemsCollection = db.collection<Item>('usuarios', ref => ref.where('sn', '==', '12345'));
    //this.items = this.itemsCollection.valueChanges();
    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
      this.clientesService.getInstalacion(this.profile.sub)
        .subscribe(instalacion => this.instalacion = instalacion[0]);
      //this.obtenerDatos();
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        this.clientesService.getInstalacion(this.profile.sub)
          .subscribe(instalacion => this.instalacion = instalacion[0]);
        //this.obtenerDatos();
      });
    }
  }

  ngOnInit() {
  }

  public confirmar_reiniciar() {
    this.reinicio = true;
  }

  public confirmar_resetear() {
    this.reseteo = true;
  }

  public confirmar_actualizar() {
    this.actualiza = true;
  }

  public cerrar_reiniciar() {
    this.reinicio = false;
  }

  public cerrar_resetear() {
    this.reseteo = false;
  }

  public cerrar_actualizar() {
    this.actualiza = false;
  }

  public reiniciar() {
    this.clientesService.reiniciar(this.instalacion);
  }

  public resetear() {
    this.clientesService.resetear(this.instalacion);
  }

  public actualizar() {
    this.clientesService.actualizar(this.instalacion);
  }



}
