import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home/home.component';
import { BinDINGComponent } from './pages/bin-ding/bin-ding.component';
import { NgCLASSComponent } from './pages/ng-class/ng-class.component';
import { NgFORComponent } from './pages/ng-for/ng-for.component';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgSTYLEComponent } from './pages/ng-style/ng-style.component';
import { NgSWITCHComponent } from './pages/ng-switch/ng-switch.component';
import { NgMODELComponent } from './pages/ng-model/ng-model.component';
import { MascotaComponent } from '@modules/mascotas/pages/mascota/mascota.component';

const routes: Routes = [
  {path:'',component:HomeComponent,title:'Home'},
  {path:'ngIf',component:NgIFComponent,title:'ngIf'},
  {path:'ngFor',component:NgFORComponent,title:'ngFor'},
  {path:'ngSwitch',component:NgSWITCHComponent,title:'ngSwitch'},
  {path:'binDing',component:BinDINGComponent,title:'binDing'},
  {path:'ngStyle',component:NgSTYLEComponent,title:'ngStyle'},
  {path:'ngClass',component:NgCLASSComponent,title:'ngClass'},
  {path:'ngModel',component:NgMODELComponent,title:'ngModel'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivasRoutingModule { }
