import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../../../../../AngularProjects/tfg-v0.1/src/app/components/home/home.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
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
import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'instalaciones', canActivate: [AuthGuardService], component: InstalacionesComponent },
  { path: 'cliente/:id', canActivate: [AuthGuardService], component: ClienteComponent },
  { path: 'instalaciones-buscador/:id', canActivate: [AuthGuardService], component: InstalacionesBuscadorComponent },
  { path: 'crear', canActivate: [AuthGuardService], component: CrearInstalacionComponent },
  { path: 'area-cliente', component: AreaClienteComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'callback1', component: Callback1Component },
  { path: 'wifi', canActivate: [AuthGuardService], component: WifiComponent },
  { path: 'puertos', canActivate: [AuthGuardService], component: PuertosComponent },
  { path: 'red-local', canActivate: [AuthGuardService], component: RedLocalComponent },
  { path: 'mantenimiento', canActivate: [AuthGuardService], component: MantenimientoComponent },
  { path: 'home-clientes', canActivate: [AuthGuardService], component: HomeClientesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
