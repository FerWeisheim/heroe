import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img{
    width:45%;
    border-radius:10px;  
    }`
  ]
})
export class HeroeComponent implements OnInit {

heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute,private heroesService: HeroesService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({id}) => this.heroesService.getHeroeId(id)))
    .subscribe(heroe=> this.heroe=heroe);  
  }
  regresar(){
    this.router.navigate(['/heroes/listado'])
    }

}
