import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Experiencia } from '../model/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expActualizar = new Subject<Experiencia[]>();

  private url: string = "http://localhost:8080/experiencia";

  constructor(private http: HttpClient) { }

verExperiencia(){
  return this.http.get<Experiencia[]>(this.url);
 }
 eliminar(id: number){
   return this.http.delete(`${this.url}/${id}`);
 }
 actualizarExp(exp: Experiencia){
     return this.http.put(this.url, exp);
 }
 registrarExp(exp: Experiencia){
   return this.http.post(this.url, exp);
 }
}