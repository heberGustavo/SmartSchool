import { Component, OnInit } from '@angular/core';
import { Professor } from './../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';
  professorSelecionado: Professor;

  professores = [
    { id: 1, nome: 'Lucio', disciplina: 'Matematica' },
    { id: 2, nome: 'Amaral', disciplina: 'Portugues' },
    { id: 3, nome: 'Ronaldo', disciplina: 'Geografia' },
    { id: 4, nome: 'Zlatan', disciplina: 'História' },
    { id: 5, nome: 'Gatuzzo', disciplina: 'Geometria' },
    { id: 6, nome: 'Robson', disciplina: 'Sociologia' },
  ];

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltarSelecao() {
    this.professorSelecionado = null;
  }

  constructor() { }

  ngOnInit() {
  }


}
