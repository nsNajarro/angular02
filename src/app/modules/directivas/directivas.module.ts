import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgIFComponent } from './pages/ng-if/ng-if.component';
import { NgFORComponent } from './pages/ng-for/ng-for.component';
import { NgSWITCHComponent } from './pages/ng-switch/ng-switch.component';
import { BinDINGComponent } from './pages/bin-ding/bin-ding.component';
import { NgSTYLEComponent } from './pages/ng-style/ng-style.component';
import { NgCLASSComponent } from './pages/ng-class/ng-class.component';
import { NgMODELComponent } from './pages/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NgIFComponent,
    NgFORComponent,
    NgSWITCHComponent,
    BinDINGComponent,
    NgSTYLEComponent,
    NgCLASSComponent,
    NgMODELComponent,
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule,
    FormsModule
  ]
})
export class DirectivasModule { }
