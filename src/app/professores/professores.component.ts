import { Component, OnInit } from '@angular/core';
import { Professor } from './../models/Professor';
import { ProfessorService } from '../server/professor.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  professorSelecionado: Professor;
  
  id: string;
  professores: Array<any> = new Array();

  constructor(private professorService: ProfessorService) { 

  }

  ngOnInit() {
  }

  listarProduto() {
    this.professorService.obterProfessores().subscribe(professores => {
      this.professorSelecionado = professores;
    }, err => {
      console.log("Erro ao listar alunos", err)
    });
  }

  // deletarAluno(id: string){
  //   console.log(id);
  //   this.alunoService.deleteProduto(id).subscribe(aluno => {
  //     this.mensagemDeSucessoDeExclusao();
  //     this.listarProduto();
  //   }, err => {
  //     console.log("Erro ao excluir aluno", err)
  //   });
  // }

  // mensagemDeSucessoDeExclusao(){
  //   swal.fire({
  //     icon: 'success',
  //     title: 'Sucesso',
  //     text: 'Aluno excluido com sucesso!'
  //   });
  // }

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltarSelecao() {
    this.professorSelecionado = null;
  }

}
