import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDialogComponent } from './pages/educacion/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EduEditarComponent } from './pages/educacion/edu-editar/edu-editar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './pages/header/header.component';
import { AboutComponent } from './pages/about/about.component';

import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { EditarExpComponent } from './pages/experiencia/editar-exp/editar-exp.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import { SkillsComponent } from './pages/skills/skills.component';
import { EditarSkillComponent } from './pages/skills/editar-skill/editar-skill.component';



@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    ExperienciaComponent,
    ConfirmDialogComponent,
    EduEditarComponent,
    HeaderComponent,
    AboutComponent,
    ProyectosComponent,
    EditarExpComponent,
    SkillsComponent,
    EditarSkillComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatProgressBarModule,
    MatSliderModule   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
