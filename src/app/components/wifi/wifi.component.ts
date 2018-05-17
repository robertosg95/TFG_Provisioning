import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../services/auth.service';
export interface Item { name: string; }
import { Instalaciones } from '../../interfaces/instalaciones.interface';
import { ClientesService, Cliente } from '../../../../../../AngularProjects/tfg-v0.1/src/app/services/clientes.service';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html'
})
export class WifiComponent implements OnInit {

  profile: any;

  instalacion: any = {};

  actualizado: boolean = false;

  private itemsCollection: AngularFirestoreCollection<Instalaciones>;
  items: Observable<Instalaciones[]>;

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

  public guardar() {
    this.clientesService.actualizarWifi(this.instalacion);
    this.actualizado = true;
  }














}
