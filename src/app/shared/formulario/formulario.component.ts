import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPais } from '@shared/interfaces/pais';
import { UbicacionPaisService } from '@shared/services/ubicacion-pais.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { EMAIL_VALIDATE, NAME_VALIDATE, NUMBER_VALIDATE } from 'src/app/constants/constants';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  formularioGeneral!: FormGroup;
  private isEmail: string = EMAIL_VALIDATE;
  private isName: string = NAME_VALIDATE;
  private isMoney: string = NUMBER_VALIDATE;
  private isDate: string = '';
  public departamentos!: IPais[];
  public municipios!: IPais[];
  public cantones!: IPais[];
  constructor(private fb: FormBuilder, private toaster: ToastrService,
    private ubicacionPais: UbicacionPaisService) { }



  ngOnInit(): void {
    this.formularioGeneral = this.iniciarFormulario();
    this.llenarComboDepartamentos();
  }
  private iniciarFormulario(): FormGroup{
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.isName)]],
      apellido: ['', [Validators.required, Validators.pattern(this.isName)]],
      correo: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      genero: ['', [Validators.required]],
      fecha: ['', [Validators.required, Validators.pattern(this.isDate)]],
      mensaje: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      departamento: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      canton: ['', [Validators.required]],

      direccion: this.fb.group({
        ubicacion: ['', {}],
        colonia: ['', [Validators.nullValidator]],
      }),

    });
  }
  esCampoValido(campo: string){
    const ValidarCampo = this.formularioGeneral.get(campo);
    return !ValidarCampo?.valid && ValidarCampo?.touched
    ? 'is-invalid' : ValidarCampo?.touched ? 'is-valid' : '';
  }

  llenarComboDepartamentos() {
    this.ubicacionPais
    .getDepa()
    .pipe(map((dp)=> dp.filter((depa) => depa.codigo.length === 2 )))
    .subscribe((resp) => {
      this.departamentos = resp;
      console.log(this.departamentos)
    });
  }

  deptoChange(id: string): void{
    this.ubicacionPais .getDepa()
    .pipe(map((dp) => dp.filter ((muni) => muni.codigo.startsWith(id) && muni.codigo.length == 4)))
    .subscribe((resp) => {
      this.municipios = resp;
      console.log(this.municipios);
    });
  }

  muniChange(id: string): void{
    this.ubicacionPais .getDepa()
    .pipe(map((dp) => dp.filter ((cton) => cton.codigo.startsWith(id) && cton.codigo.length == 6)))
    .subscribe((resp) => {
      this.cantones = resp;
      console.log(this.cantones);
    });
  }

  noRequiereValor(campo: string): string{
    return this.formularioGeneral.get(campo)?.value ? 'is-valid' : '';
  }

guardar(){
  if (this.formularioGeneral.valid){
    Swal.fire({
      position: 'center',
      title: 'Buen trabajo!',
      text: `submit disparado, formulario es valido`,
      icon: 'info',
    });
    console.log(this.formularioGeneral.value);
  }else{
    Swal.fire({
      position: 'center',
      title: 'Faltan datos en el formulario',
      text: `submit disparado, formulario No valido`,
      icon: 'warning',
    });

    return Object.values(this.formularioGeneral.controls)
    .forEach((control) => control.markAllAsTouched()
    );
  }
}

}
