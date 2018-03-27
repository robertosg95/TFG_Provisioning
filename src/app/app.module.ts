import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


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

//services
import { ClientesService } from './services/clientes.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { KeysPipe } from './pipes/keys.pipe';



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
    KeysPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ClientesService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
