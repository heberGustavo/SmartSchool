import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Para usar o Dropdown
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoCriarComponent } from './alunos/aluno-criar/aluno-criar.component';
import { ProfessoresComponent } from './professores/professores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';

//Server
import { AlunoService } from './server/aluno.service';

@NgModule({
   declarations: [
      AppComponent,
      AlunosComponent,
      AlunoCriarComponent,
      ProfessoresComponent,
      PerfilComponent,
      DashboardComponent,
      NavComponent,
      TituloComponent
   ],
   imports: [
   BrowserModule,
   HttpClientModule,
   AppRoutingModule,
   BsDropdownModule.forRoot(),
   BrowserAnimationsModule,
   FormsModule,
   ReactiveFormsModule
   ],
   providers: [HttpClientModule, AlunoService],
   bootstrap: [AppComponent]
})
export class AppModule { }
