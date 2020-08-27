import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  private url = "https://construtoraimperialsp.com.br/teste_api/Aluno";

  //Chama e espera o retorno
  obterProdutos(): Observable<any> {
    return this.http.get<any>(`${this.url}/ListarTodosDados.php`);
  }

  obterUsuarioPorId(id) {
    return this.http.get<any>(`${this.url}/ListarPorId.php?id=${6}`);
  }

  criarProduto(aluno: Aluno): Observable<any> {
    const _url = `${this.url}/Adicionar.php`;
    return this.http.post(_url, aluno);
  }

  atualizarProduto(id: string, request: Aluno): Observable<Aluno> {
    const _url = `${this.url}/Editar.php?id=${id}`;
    console.log(request);
    return this.http.put<Aluno>(_url, request);
  }

  deleteProduto(id: string) {
    try {
      const _url = `${this.url}/Excluir.php?id=${id}`;

      return this.http.put<any>(_url, id);

    } catch (error) {
      console.log(error);
    }
  }
}
