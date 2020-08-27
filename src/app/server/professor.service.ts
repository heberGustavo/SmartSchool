import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../models/Professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }

  private url = "https://construtoraimperialsp.com.br/teste_api/Professor";

  //Chama e espera o retorno
  obterProfessores(): Observable<any> {
    return this.http.get<any>(`${this.url}/ListarTodosDados.php`);
  }

  criarProfessor(professor: Professor): Observable<any> {
    const _url = `${this.url}/Adicionar.php`;
    return this.http.post(_url, professor);
  }

  deleteProfessor(id: string) {
    try {
      const _url = `${this.url}/Excluir.php?id=${id}`;

      return this.http.put<any>(_url, id);

    } catch (error) {
      console.log(error);
    }
  }
}
