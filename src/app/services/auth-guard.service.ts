import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthService) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    // on the data property
    const token = localStorage.getItem('token');
    if (this.authService.isAuthenticated() && this.authService.isAdmin()){
      console.log("Pasó el guard ");
      return true;
    }else{
      console.log("No pasó el guard");
      return false;
    }
  }





}
