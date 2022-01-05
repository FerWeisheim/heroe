import { NgModule} from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import {Routes} from '@angular/router'
import { ErrorPageComponent } from './shared/error-page/error-page.component';
// import { AuthGuard } from './auth/guards/auth.guard';


const routes : Routes=[
  {
    path:'auth',
    loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
    //cuando entran al auth, carga los hijos en momoria, y despues carga el authmodule
  },
  {
    path:'heroe',
    loadChildren:()=> import('./heroes/heroes.module').then(m =>m.HeroesModule ),
    // canLoad: [AuthGuard],// el canLoad no bloquea la ruta cuando el modulo esta cargado
    // canActivate:[AuthGuard]//el canactivate bloquea la ruta auque el modulo este cargado
  },
  {
    path:'404',
    component: ErrorPageComponent
  },

  {
    path:'**',
   // component:ErrorPageComponent
   redirectTo:'404'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)//aca estan las rutas principales
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
