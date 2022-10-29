import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Experiencia } from 'src/app/model/Experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ConfirmDialogComponent } from '../educacion/confirm-dialog/confirm-dialog.component';
import { EditarExpComponent } from './editar-exp/editar-exp.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  displayedColumns = ['cargo','empresa','ciudad','inicio', 'finalizacion','tareasRealizadas', 'editar-eliminar'];
  dataSource: MatTableDataSource<Experiencia>;
  exp:Experiencia;
  mensaje: String;

  constructor(
    private dialog: MatDialog,
    private expService: ExperienciaService
  ) { }

  ngOnInit(): void {
    this.expService.expActualizar.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    });

    this.expService.verExperiencia().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(estado=> {
      if(estado){
        this.expService.eliminar(id).subscribe(()=>{
          this.expService.verExperiencia().subscribe(data=>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    })
  }
  openEdit(exp?: Experiencia){
    let exper= exp != null ? exp: new Experiencia();
    this.dialog.open(EditarExpComponent,{
      width: '260px',
      data: exper
    })
  }
  
  
  

}
