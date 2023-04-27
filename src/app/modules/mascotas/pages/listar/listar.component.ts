import { Component, OnInit } from '@angular/core';
import { IMascotas } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasservService } from '@modules/mascotas/services/mascotasserv.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mascotas: IMascotas[] = [] // array de mascotas
  parametroBuscar: string = ''; //parámetro de búsqueda

  constructor(private mascotasservService: MascotasservService, private toastr:ToastrService) {
  }


  ngOnInit(): void {
    this.mascotasservService.mascotas.subscribe((resp) =>{
      this.mascotas = resp;
    });
  }

  buscar(): void { //método para buscar
    this.mascotasservService.buscarMascotas(this.parametroBuscar).subscribe((resp)=>{
      this.mascotas = resp;
    });
  }

  eliminarMascota(pet:IMascotas){
    Swal.fire({
      title: '¿Estas Seguro de eliminar?',
      text: `Esta Seguro de borrar a${pet.raza}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: `#3085d6`,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar !'
    }).then((result:any) =>{
      if(result.isConfirmed) {
        this.mascotas=this.mascotas.filter((objMascota:IMascotas)=>objMascota.id!==pet.id)

        this.mascotasservService.borrarMascotas(pet)
        .subscribe((resp:any)=>{
          this.toastr.success('El registro fue eliminado con éxito', 'Eliminado',
          {positionClass: 'toast-top-right'});

        },(err:any)=>{
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.error.msg,
          });
        });
      }
    })
  }

}
