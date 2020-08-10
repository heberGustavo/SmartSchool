import { Component, OnInit } from '@angular/core';
import { Aluno } from './../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';
  alunoSelecionado: Aluno;
  alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'sobre1', telefone: 324325 },
    { id: 2, nome: 'Maria', sobrenome: 'sobre2', telefone: 223325 },
    { id: 3, nome: 'José', sobrenome: 'sobre3', telefone: 324325 },
    { id: 4, nome: 'João', sobrenome: 'sobre4', telefone: 324325 },
    { id: 5, nome: 'Pedro', sobrenome: 'sobre5', telefone: 324325 },
    { id: 6, nome: 'Silas', sobrenome: 'sobre6', telefone: 324325 }
  ];

  constructor() { }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

  voltarSelecao(){
    this.alunoSelecionado = null;
  }

  ngOnInit(): void {
  }

}
