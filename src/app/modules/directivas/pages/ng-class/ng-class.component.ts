import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgCLASSComponent {
  tema: string = 'Uso de ngClass';

  // variable que cambiará la clase de la alerta con el ngClass
  alerta: string = 'alert-danger';

  //objeto a usar en el ngClass
  propiedad = {
    danger:false,
  };

  //para usar ngClass usando condición
  message:number = 5;

}
