import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';

import { ListarComponent } from './pages/listar/listar.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    CardComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule
  ]
})
export class MascotasModule {

}
