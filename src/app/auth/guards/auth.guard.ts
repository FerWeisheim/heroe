import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad,CanActivate {

  constructor(private authService:AuthService,private router:Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     
      return this.authService.verificacionSesion()
      .pipe(
        tap(autenticado=>{
          if(!autenticado){
            this.router.navigate(['./auth/login'])
          }
        })
      )
     
     
      // if(this.authService.user.id){
      //   return true;

      // }
      // return false ;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean>  | boolean {
      
      return this.authService.verificacionSesion()
      .pipe(
        tap( autenticado=>{
          if(!autenticado){
            this.router.navigate(['./auth/login'])
          }
        })
      )
      
   //       if(this.authService.user.id){
  //         return true;
  //       }
  //       return false ;
  }
}
