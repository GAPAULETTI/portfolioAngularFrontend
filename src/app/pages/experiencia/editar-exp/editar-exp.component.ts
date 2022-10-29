import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editar-exp',
  templateUrl: './editar-exp.component.html',
  styleUrls: ['./editar-exp.component.css']
})
export class EditarExpComponent implements OnInit {

  experiencia: Experiencia;

  constructor(
    private dialogRef: MatDialogRef<EditarExpComponent>,
    private experienciaService: ExperienciaService,
    @Inject(MAT_DIALOG_DATA) private data: Experiencia
  ) { }

  ngOnInit(): void {
    this.experiencia = new Experiencia();
    this.experiencia.id=this.data.id;
    this.experiencia.cargo=this.data.cargo;
    this.experiencia.empresa=this.data.empresa;
    this.experiencia.ciudad=this.data.ciudad;
    this.experiencia.inicio=this.data.inicio;
    this.experiencia.finalizacion=this.data.finalizacion;
    this.experiencia.tareasRealizadas=this.data.tareasRealizadas;

  }
  guardar(){
    this.experienciaService.actualizarExp(this.experiencia).subscribe(()=>{
      return this.experienciaService.verExperiencia().subscribe(data=>{
        this.experienciaService.expActualizar.next(data)
      })
    })
    this.cancelar();
  }
  cancelar(){
    this.dialogRef.close();
  }
}
