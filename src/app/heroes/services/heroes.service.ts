import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';

  const url = "https://my-json-server.typicode.com/FerWeisheim/heroe/heroe"


@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor(private http: HttpClient) { }
  getHeroes(): Observable<Heroe[]>{//obserbabol de arreglo de heroes
   return this.http.get<Heroe[]>("https://my-json-server.typicode.com/FerWeisheim/heroe/heroe")
  }

  getHeroeId(id:string): Observable < Heroe >{
      return this.http.get<Heroe>(`https://my-json-server.typicode.com/FerWeisheim/heroe/heroe/${id}`)
  }

  getSugerencias(termino:string): Observable <Heroe[]>{
    return this.http.get<Heroe[]>(`https://my-json-server.typicode.com/FerWeisheim/heroe/heroe?q=${termino}&_limit=6`)
  }
  agregarHeroe(heroe:Heroe):Observable<Heroe>{
      return this.http.post<Heroe>(`https://my-json-server.typicode.com/FerWeisheim/heroe/heroe`,heroe)
  }
  actualizandoHeroe(heroe: Heroe):Observable<Heroe>{
    return this.http.put<Heroe>(`https://my-json-server.typicode.com/FerWeisheim/heroe/heroe/${heroe.id}`,heroe);
  }
  borrarHeroe(id : string):Observable<any>{
    return this.http.delete<any>(`https://my-json-server.typicode.com/FerWeisheim/heroe/heroe/${id}`);
  }
  
}
