import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';

//Routes
import { APP_ROUTING } from './app.routes';


//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { InstalacionesBuscadorComponent } from './components/instalaciones-buscador/instalaciones-buscador.component';
import { CrearInstalacionComponent } from './components/crear-instalacion/crear-instalacion.component';
import { AreaClienteComponent } from './components/area-cliente/area-cliente.component';
import { CallbackComponent } from './components/callback/callback.component';
import { Callback1Component } from './components/callback1/callback1.component';
import { HomeClientesComponent } from './components/home-clientes/home-clientes.component';
import { WifiComponent } from './components/wifi/wifi.component';
import { PuertosComponent } from './components/puertos/puertos.component';
import { RedLocalComponent } from './components/red-local/red-local.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';

//services
import { ClientesService } from './services/clientes.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { KeysPipe } from './pipes/keys.pipe';
import { AuthClienteService } from './services/auth-cliente.service';


const firebaseConfig = {
  apiKey: "AIzaSyBv6xxDNxUOZx5yjnqCwr55BMwVj-Di1zo",
  authDomain: "provisioning-tfg.firebaseapp.com",
  databaseURL: "https://provisioning-tfg.firebaseio.com",
  projectId: "provisioning-tfg",
  storageBucket: "provisioning-tfg.appspot.com",
  messagingSenderId: "190688652195"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    InstalacionesComponent,
    FooterComponent,
    ClienteComponent,
    InstalacionesBuscadorComponent,
    CrearInstalacionComponent,
    KeysPipe,
    AreaClienteComponent,
    CallbackComponent,
    Callback1Component,
    HomeClientesComponent,
    WifiComponent,
    PuertosComponent,
    RedLocalComponent,
    MantenimientoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    ClientesService,
    AuthService,
    AuthGuardService,
    AuthClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
