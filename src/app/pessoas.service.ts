import { Pessoas } from './common/pessoas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  pessoasUrl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  listar(): Observable<Pessoas[]> {
    return this.http.get<GetResponse>(this.pessoasUrl).pipe(
      map(response => response._embedded.pessoas)
    );
  }
}

interface GetResponse {
  _embedded: {
    pessoas: Pessoas[];
  }
}


