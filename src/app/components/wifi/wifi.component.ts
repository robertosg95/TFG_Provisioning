import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html'
})
export class WifiComponent implements OnInit {

  actualizar_wifi: any = {
    SSID: "",
    contrasena_wifi: ""
  }

  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
  }

  public guardar() {

  }

}
