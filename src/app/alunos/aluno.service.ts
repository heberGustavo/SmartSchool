import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Aluno } from './../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  /**
   * NÃO ESTA SENDO USADO MAS É IMPORTANTE
   */

  //Pegando inicio da URL no environment
  baseURL = `${environment.urlPrincipal}/api/aluno`;

  //Adiciona o HttpClient no app.module
  constructor(private http: HttpClient) { }

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.baseURL}`);
  }

  getById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.baseURL}/${id}`);
  }

}
