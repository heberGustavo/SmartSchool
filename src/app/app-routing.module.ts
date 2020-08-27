import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { ProfessorCriarComponent } from './professores/professor-criar/professor-criar.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoCriarComponent } from './alunos/aluno-criar/aluno-criar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'alunos/criar', component: AlunoCriarComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'professores', component: ProfessoresComponent },
  { path: 'professores/criar', component: ProfessorCriarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
