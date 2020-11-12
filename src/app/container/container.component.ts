import { Component, OnInit } from '@angular/core';
import { ObterAlunosService } from '../services/obter-alunos.service';
import { Alunos } from '../services/services.interface';
import { LocalStorageService } from '../services/local-storage-service.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  
  
  loading: boolean = true;
  private alunos: Alunos[];
  public alunoslocal: Alunos[];
  
  
  constructor( protected http: ObterAlunosService, protected localstorage: LocalStorageService) { }

  obterAlunosLocal(){
    this.alunoslocal = JSON.parse(this.localstorage.get("alunoslocal"))
  }

  ngOnInit(): void {  

    this.http.obterAlunos().subscribe(response => {
      
      this.alunos = response;
      this.localstorage.set("alunoslocal", JSON.stringify(this.alunos))
      this.obterAlunosLocal();
      this.loading = false;
      console.log(this.alunoslocal)
    });
    
  }

}
