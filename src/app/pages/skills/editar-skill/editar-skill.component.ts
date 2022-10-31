import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Skills } from 'src/app/model/Skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  skill:Skills;
  constructor(
    private dialogRef: MatDialogRef<EditarSkillComponent>,
    private skillService: SkillsService,
    @Inject(MAT_DIALOG_DATA) private data: Skills
  ) { }

  ngOnInit(): void {
    this.skill = new Skills();
    this.skill.id = this.data.id;
    this.skill.nombre = this.data.nombre;
    this.skill.nivel = this.data.nivel;
    this.skill.descripcion=this.data.descripcion;
  }
  guardar(){
    this.skillService.actualizar(this.skill).subscribe(()=>{
      return this.skillService.listar().subscribe(data=>{
        this.skillService.actualizarSkill.next(data)
      })
    })
    this.cancelar();
  }
  cancelar(){
    this.dialogRef.close();
  }


}
