import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SkeletonComponent } from "@layout/skeleton/skeleton.component";
import { NopageComponent } from "@modules/nopage/nopage.component";
import { FormularioComponent } from "@shared/formulario/formulario.component";


const routes: Routes =[
  {
    path: ``,component: SkeletonComponent,

    children: [
      { path: '', loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)},
      { path: 'directivas', loadChildren: () => import('@modules/directivas/directivas.module').then(m => m.DirectivasModule) },
      { path: 'mascotas', loadChildren: () => import('@modules/mascotas/mascotas.module').then(m => m.MascotasModule) },
      //{ path: 'error404', loadComponent: () => import('@modules/nopage/nopage.module').then(m => m.NopageModule) }
      // falta esto
      { path: 'formulario', component:FormularioComponent },
    ]
  },
 // { path: '**', redirectTo:'', pathMatch: 'full' },
  { path: '**', component:NopageComponent }

];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule]
})
export
 class
 AppRoutingModule{

 }
