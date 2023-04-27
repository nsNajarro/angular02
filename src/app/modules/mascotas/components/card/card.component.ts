import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMascotas } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasservService } from '@modules/mascotas/services/mascotasserv.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() obj!:IMascotas;

  @Output()
  eliminar=new EventEmitter<IMascotas>();


  constructor(private mascotasService: MascotasservService, private toastr: ToastrService, private router: Router){}
    borrar(pet:IMascotas){
  }

  eliminarPets(obj:IMascotas){
    this.eliminar.emit(obj);
  }
}
