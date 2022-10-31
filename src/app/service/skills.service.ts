import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Skills } from '../model/Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  actualizarSkill = new Subject<Skills[]>();
  
   private url: string = "http://localhost:8080/skills";
  
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Skills[]>(this.url);
  }
  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
  actualizar(skill:Skills){
    return this.http.put(this.url, skill);

  }
  agregar(skill:Skills){
    return this.http.post(this.url, skill);
  }
}
