import { Component, OnInit } from '@angular/core';
import { ObterAlunosService } from '../services/obter-alunos.service'
import { Alunos } from '../services/services.interface'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  
  
  loading: boolean = true;
  public alunos: Alunos[];
  
  constructor( private http: ObterAlunosService) { }

 

  ngOnInit(): void {  

    this.http.obterAlunos().subscribe(response => {
      
      this.alunos = response;
      this.loading = false;
      console.log(this.alunos)
     
    })

  }

}
