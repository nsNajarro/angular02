import { Component } from '@angular/core';

@Component({
  selector: 'app-bin-ding',
  templateUrl: './bin-ding.component.html',
  styleUrls: ['./bin-ding.component.scss']
})
export class BinDINGComponent {

  habilitar: boolean = false;

  clase: string = 'btn btn-danger';

  txtPlaceHolder: string = 'Su nombre';

  txtType: string = 'radio';

  isChecked: boolean = true;

  cambiarPropiedad(){
    this.habilitar =! this.habilitar;
    this.txtPlaceHolder = 'Deshabilitado';
    this.txtType = 'checkbox';
    this.isChecked =! this.isChecked;
    this.clase = 'btn btn-primary';
  }


}
