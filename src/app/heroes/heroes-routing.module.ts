import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/heroes.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';

const routes : Routes= [
  {
    path:'',
    component:HomeComponent,
  children:[
      {path:'heroes',component:ListadoComponent},
      {path:'agregar',component:AgregarComponent},
      {path:'editar/:id', component:AgregarComponent},
      { path:'buscar', component:BuscarComponent},
      {path:':id', component:HeroeComponent},
      {path:'404', redirectTo:'404'}
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
