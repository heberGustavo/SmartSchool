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

  constructor(private professorService: ProfessorService) { }

  ngOnInit() {
    this.listarProduto();
  }

  listarProduto() {
    this.professorService.obterProfessores().subscribe(professores => {
      this.professores = professores;
      console.log(professores)
    }, err => {
      console.log("Erro ao listar alunos", err)
    });
  }

  deletarProfessor(id: string){
    console.log(id);
    this.professorService.deleteProfessor(id).subscribe(professor => {
      this.mensagemDeSucessoDeExclusao();
      this.listarProduto();
    }, err => {
      console.log("Erro ao excluir professor", err)
    });
  }

  mensagemDeSucessoDeExclusao(){
    swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Professor excluido com sucesso!'
    });
  }

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltarSelecao() {
    this.professorSelecionado = null;
  }

}
