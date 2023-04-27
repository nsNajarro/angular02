import { Component, OnInit } from '@angular/core';
import { MODULO1 } from 'src/app/constants/constants'
import { MODULO2 } from 'src/app/constants/constants'
import { MODULO3 } from 'src/app/constants/constants'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})

export class DetalleComponent implements OnInit {

modulo1:string = MODULO1;
modulo2:string = MODULO2;
modulo3:string = MODULO3;

  constructor() { }

  ngOnInit(): void {
  }

}
