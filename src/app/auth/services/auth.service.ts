import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { tap,map } from 'rxjs/operators';
import { Auth } from '../interfaces/auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth : Auth | undefined; 
  get user(){
    return {...this.auth!}
  }
  constructor(private http: HttpClient,private router: Router ) {}
  
  verificacionSesion(): Observable<boolean> {
    if(!localStorage.getItem('id')){
      return of(false);
    }
    return this.http.get<Auth>('http://localhost:3000/usuarios/1')
        .pipe(
          map(auth=> {
            this.auth = auth;
            return true;
          })
        );      
  }
  login(){
    return this.http.get<Auth>('http://localhost:3000/usuarios/1')
    .pipe(
      tap( auth => this.auth = auth),
      tap(auth=> localStorage.setItem('id',auth.id))//guarda el id en el localStorage... 
    )

  }

}
