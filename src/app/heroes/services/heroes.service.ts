import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';

const url = "https://my-json-server.typicode.com/FerWeisheim/heroesApp/db.json"

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor(private http: HttpClient) { }
  getHeroes(): Observable<Heroe[]>{//obserbabol de arreglo de heroes
   return this.http.get<Heroe[]>(url)
  }

  getHeroeId(id:string): Observable < Heroe >{
      return this.http.get<Heroe>(`url${id}`)
  }

  getSugerencias(termino:string): Observable <Heroe[]>{
    return this.http.get<Heroe[]>(`url?q=${termino}&_limit=6`)
  }
  agregarHeroe(heroe:Heroe):Observable<Heroe>{
      return this.http.post<Heroe>(`url`,heroe)
  }
  actualizandoHeroe(heroe: Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`http://localhost:3000/heroes/${heroe.id}`,heroe);
  }
  borrarHeroe(id : string):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/heroes/${id}`);
  }
  
}
