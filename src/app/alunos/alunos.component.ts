import { Component, OnInit } from '@angular/core';
import { Aluno } from './../models/Aluno';
import { AlunoService } from '../server/aluno.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';
  alunoSelecionado: Aluno;

  id: string;
  alunos: Array<any> = new Array();

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.listarProduto();
  }

  listarProduto() {
    this.alunoService.obterProdutos().subscribe(alunos => {
      this.alunos = alunos;
    }, err => {
      console.log("Erro ao listar alunos", err)
    });
  }

  deletarAluno(id: string){
    console.log(id);
    this.alunoService.deleteProduto(id).subscribe(aluno => {
      this.mensagemDeSucessoDeExclusao();
      this.listarProduto();
    }, err => {
      console.log("Erro ao excluir aluno", err)
    });
  }

  mensagemDeSucessoDeExclusao(){
    swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Aluno excluido com sucesso!'
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

  voltarSelecao(){
    this.alunoSelecionado = null;
  }

}
