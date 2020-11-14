import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alunos } from './services.interface';


@Injectable({
  providedIn: 'root'
})
export class ObterAlunosService {

  constructor( private http: HttpClient ) {  }

  protected url: string = 'https://private-8f2b0b-wandersoncesar.apiary-mock.com/alunos';
  
  obterAlunos(): Observable<Alunos[]>{
    return this.http.get<Alunos[]>(this.url)
  }
}
