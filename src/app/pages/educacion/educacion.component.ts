import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/Educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { EduEditarComponent } from './edu-editar/edu-editar.component';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  
})
export class EducacionComponent implements OnInit {

  displayedColumns = ['titulo','institucion','fechaInicio','fechaFin', 'descripcion','editar-eliminar'];
  dataSource: MatTableDataSource<Educacion>
  educacion: Educacion;

  constructor(
    private dialog: MatDialog,
    private educacionService: EducacionService) { }

  ngOnInit(): void {

    this.educacionService.educacionActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    });

    this.educacionService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(estado=> {
      if(estado){
        this.educacionService.eliminar(id).subscribe(()=>{
          this.educacionService.listar().subscribe(data=>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    })
  }
  openEdit(educacion?: Educacion){
    let edu= educacion != null ? educacion: new Educacion();
    this.dialog.open(EduEditarComponent,{
      width: '260px',
      data: edu
    })
  }
  
  
}