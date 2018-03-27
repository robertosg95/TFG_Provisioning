import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../../../../../../AngularProjects/tfg-v0.1/src/app/components/home/home.component';
import {InstalacionesComponent} from './components/instalaciones/instalaciones.component';
import {ClienteComponent} from './components/cliente/cliente.component';
import {InstalacionesBuscadorComponent} from './components/instalaciones-buscador/instalaciones-buscador.component';
import {CrearInstalacionComponent} from './components/crear-instalacion/crear-instalacion.component';
import {AuthGuardService} from './services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'instalaciones', canActivate: [AuthGuardService], component: InstalacionesComponent },
  { path: 'cliente/:id', canActivate: [AuthGuardService], component: ClienteComponent },
  { path: 'instalaciones-buscador/:id', canActivate: [AuthGuardService], component: InstalacionesBuscadorComponent },
  { path: 'crear', canActivate: [AuthGuardService], component: CrearInstalacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
