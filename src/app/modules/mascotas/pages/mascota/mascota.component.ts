import { Component, OnInit } from '@angular/core';
import { IMascotas } from '@modules/mascotas/interface/mascotas.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MascotasservService } from '@modules/mascotas/services/mascotasserv.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit{

  mascota!: IMascotas;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mascotasService: MascotasservService,
    private router: Router
    ) {}

    ngOnInit(): void {
      //como devuelve un observable
      //witchMap, operador de transformacion
      this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.mascotasService.mascotasById(id)))
      .subscribe((resp: any) => {
        this.mascota = resp;
      });
    }
    regresar() {
      // para ir a la ruta indicada
      this.router.navigate(['mascotas/listar']);
    }

    eliminar(){
      this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.mascotasService.mascotasDelete(id)))
      .subscribe((resp: any) => {
        this.mascota = resp;

      });
      this.regresar();
    }



}
