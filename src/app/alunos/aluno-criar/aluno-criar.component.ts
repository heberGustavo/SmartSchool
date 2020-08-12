import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/server/aluno.service';


@Component({
  selector: 'app-aluno-criar',
  templateUrl: './aluno-criar.component.html',
  styleUrls: ['./aluno-criar.component.css']
})
export class AlunoCriarComponent implements OnInit {

  titulo = 'Cadastro de Aluno';

  id: string;
  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
  }

  criarAluno() {
    this.alunoService.criarProduto(this.aluno).subscribe(res => {
      this.aluno = new Aluno();
      console.log(res);
    });
  }

}
