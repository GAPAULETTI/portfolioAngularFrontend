import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Skills } from 'src/app/model/Skills';
import { SkillsService } from 'src/app/service/skills.service';
import { ConfirmDialogComponent } from '../educacion/confirm-dialog/confirm-dialog.component';
import { EditarSkillComponent } from './editar-skill/editar-skill.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  displayedColumns = ['nombre','nivel','descripcion','editar-eliminar'];
  dataSource: MatTableDataSource<Skills>;
  skill:Skills;
  mensaje: String;

  constructor(
    private dialog: MatDialog,
    private skillService: SkillsService
  ) { }

  ngOnInit(): void {
    this.skillService.actualizarSkill.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    });

    this.skillService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  onDelete(id: number){
    let dialogRef = this.dialog.open(ConfirmDialogComponent,{
      disableClose:true
    });
    dialogRef.afterClosed().subscribe(estado=> {
      if(estado){
        this.skillService.eliminar(id).subscribe(()=>{
          this.skillService.listar().subscribe(data=>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    })
  }
  openEdit(skill?: Skills){
    let varSkill= skill != null ? skill: new Skills();
    this.dialog.open(EditarSkillComponent,{
      width: '260px',
      data: varSkill
    })
  }

}
