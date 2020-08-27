import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/server/aluno.service';

import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-criar',
  templateUrl: './aluno-criar.component.html',
  styleUrls: ['./aluno-criar.component.css']
})
export class AlunoCriarComponent implements OnInit {

  titulo = 'Cadastro de Aluno';

  id: string;
  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService, private router: Router) {
  }

  ngOnInit() {
  }

  criarAluno() {

    if(!this.aluno.nome){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos!'
      });
      return;
    }

    this.alunoService.criarProduto(this.aluno).subscribe(res => {
      this.aluno = new Aluno();
      console.log(res);

      swal.fire({
        title: 'Sucesso',
        text: 'Aluno cadastrado na base de dados',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: 'orange',
        cancelButtonText: 'Voltar',
        confirmButtonText: 'Novo Cadastro'
      }).then((result) => {
        if (!result.value) {
          this.router.navigate(['/alunos']);
        }
      })

    }, err => {
      console.log(err);
      swal.fire('Erro', 'Aluno não cadastrado, entre em contato com o suporte', 'warning');
    });
  }

}
