import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edu-editar',
  templateUrl: './edu-editar.component.html',
  styleUrls: ['./edu-editar.component.css']
})
export class EduEditarComponent implements OnInit {

  educacion: Educacion;


  constructor(
    private dialogRef: MatDialogRef<EduEditarComponent>,
    private educacionService: EducacionService,
    @Inject(MAT_DIALOG_DATA) private data: Educacion) { }

  ngOnInit(): void {
    this.educacion = new Educacion();
    this.educacion.idEducacion=this.data.idEducacion;
    this.educacion.titulo=this.data.titulo;
    this.educacion.institucion=this.data.institucion;
    this.educacion.fechaInicio=this.data.fechaInicio;
    this.educacion.fechaFin=this.data.fechaFin;
    this.educacion.descripcion=this.data.descripcion;

  }
  
  guardar(){ 
    if(this.educacion != null && this.educacion.idEducacion >0){   
      this.educacionService.editar(this.educacion).subscribe(()=>{
        return this.educacionService.listar().subscribe(data=>{
          this.educacionService.educacionActualizar.next(data);
        })
      })
    }else{
        this.educacionService.registrar(this.educacion).subscribe(()=>{
          this.educacionService.listar().subscribe(data=>{
            this.educacionService.educacionActualizar.next(data)
          })
        })
    }      
    this.cancelar();
    }

  

  cancelar(){
    this.dialogRef.close();
  }
 

}
