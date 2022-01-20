import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [ `
  img{
    width:50%;
    border-radius:10px;
  }
  `
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc:'DC -Comics'
    },
    {
      id: 'Marvel Comics',
      desc:'Marvel -Comics'
    }
  ];
  heroe: Heroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.MarvelComics, //va a estar por defecto en el publisher dc comics(creador)
    alt_img:'',
  }
  constructor(private heroesService:HeroesService,private activatedRouter: ActivatedRoute,
    private router: Router,
    private snakbar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    
    if(!this.router.url.includes("editar")){
      return;
    }
    this.activatedRouter.params.pipe(
      switchMap(({id})=>this.heroesService.getHeroeId(id))
    ).subscribe(heroe=>this.heroe=heroe); 
   }
   
  
     guardar(){
      if(this.heroe.superhero.trim().length === 0){
        return(alert("El nombre es obligatorio"))
      }
      //actualizar
     if(this.heroe.id){
      this.heroesService.actualizandoHeroe(this.heroe).subscribe
      (heroe => this.mostrarSnakbar('registro actualizado'))}
    // sino crea uno nuevo
      else{
        this.heroesService.agregarHeroe(this.heroe).subscribe
        (heroe=> {this.router.navigate(['/heroe/editar',heroe.id])
                  this.mostrarSnakbar('registro creado')})
    }
    }


    borrarHeroe(){
     const dialog = this.dialog.open(ConfirmarComponent,{
      width: '250px',
      data:this.heroe
    });
    dialog.afterClosed().subscribe(
      (result)=>{
        if(result){
          this.heroesService.borrarHeroe(this.heroe.id!)
          .subscribe(resp=>{
            this.router.navigate(['/heroe/listado'])
          })
        }
      }
    )
  
  
  
  }
    mostrarSnakbar(mensaje:string ){
      this.snakbar.open(mensaje,'ok!',{
        duration:2500
      });
    }
}
