import { Component, OnInit } from '@angular/core';
import { Aluno } from './../models/Aluno';
import { AlunoService } from '../server/aluno.service';

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

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

  voltarSelecao(){
    this.alunoSelecionado = null;
  }

}
