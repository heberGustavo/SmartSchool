import { Component, OnInit } from '@angular/core';
import { Professor } from './../../models/Professor';
import { ProfessorService } from 'src/app/server/professor.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-professor-criar',
  templateUrl: './professor-criar.component.html',
  styleUrls: ['./professor-criar.component.css']
})
export class ProfessorCriarComponent implements OnInit {

  titulo = 'Cadastro de Professor';

  id: string;
  professor: Professor = new Professor();

  constructor(private professorService: ProfessorService, private router: Router) { }

  ngOnInit(): void {
  }

  criarProfessor() {

    if (!this.professor.nome || !this.professor.disciplina) {
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos!'
      });
      return;
    }

    this.professorService.criarProfessor(this.professor).subscribe(res => {
      this.professor = new Professor();
      console.log(res);

      swal.fire({
        title: 'Sucesso',
        text: 'Professor cadastrado na base de dados',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: 'orange',
        cancelButtonText: 'Voltar',
        confirmButtonText: 'Novo Cadastro'
      }).then((result) => {
        if (!result.value) {
          this.router.navigate(['/professores']);
        }
      })

    }, err => {
      console.log(err);
      swal.fire('Erro', 'Aluno não cadastrado, entre em contato com o suporte', 'warning');
    });
  }

}
