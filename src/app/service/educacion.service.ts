import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../model/Educacion';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionActualizar = new Subject<Educacion[]>();

  private url: string = "http://localhost:8080/educacion";

  constructor(private http: HttpClient) { }

  listar(){
   return this.http.get<Educacion[]>(this.url);
  }
  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
  editar(educacion: Educacion){
      return this.http.put(this.url, educacion);
  }
  registrar(educacion: Educacion){
    return this.http.post(this.url, educacion);
}
}
