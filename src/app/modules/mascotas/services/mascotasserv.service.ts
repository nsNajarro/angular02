import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMascotas } from '../interface/mascotas.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MascotasservService {

  private baseUrl:string = environment.baseUrl; //url backend

  constructor(private http : HttpClient){  }

  get mascotas() : Observable<IMascotas[]> {
    return this.http.get<IMascotas[]>(`${this.baseUrl}/mascotas`);
  }

  buscarMascotas( termino : string ) : Observable<IMascotas[]>{
    if(termino.length > 1){
      return this.http.get<IMascotas[]>(`${this.baseUrl}/mascotas/?q=${termino}&_limits=5`);
    } else {
      return this.http.get<IMascotas[]>(`${this.baseUrl}/mascotas`);
    }
  }

  mascotasById(id: string): Observable<IMascotas> {
    if (id.length > 0) {
      return this.http.get<IMascotas>(`${this.baseUrl}/mascotas/${id}`);
    } else {
      return this.http.get<IMascotas>(`${this.baseUrl}/mascotas/`);
    }
  }

  mascotasDelete(id: string): Observable<IMascotas> {
    if (id.length > 0) {
      return this.http.delete<IMascotas>(`${this.baseUrl}/mascotas/${id}`);
    } else {
      return this.http.delete<IMascotas>(`${this.baseUrl}/mascotas/`);
    }
  }

  borrarMascotas(id: IMascotas): Observable<IMascotas> {
      return this.http.delete<IMascotas>(`${this.baseUrl}/mascotas/${id}`);

  }

}
