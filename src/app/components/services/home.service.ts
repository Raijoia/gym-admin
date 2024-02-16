import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personal } from '../entity/personal';
import { Observable } from 'rxjs';
import { IPersonal } from '../interfaces/personal';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly API = 'http://localhost:3000/personais';

  constructor(private http: HttpClient) {}

  cadastrar(personal: Personal): Observable<IPersonal> {
    return this.http.post<IPersonal>(this.API, {
      nome: personal.nome,
      email: personal.email,
      telefone: personal.telefone,
      data_nasc: personal.date,
      crm: personal.crm,
      cpf: personal.cpf,
      tipo_id: 1,
    });
  }

  listar(): Observable<IPersonal[]> {
    return this.http.get<IPersonal[]>(this.API);
  }
}
