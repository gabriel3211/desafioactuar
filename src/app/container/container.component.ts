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
  divalunos: boolean = false;
  divcadastro: boolean = true;
  private alunos: Alunos[];
  public alunoslocal: Alunos[];
  public nome: string;
  public email: string;
  public dtnascimento: string;
  public sexo: string;



  constructor( protected http: ObterAlunosService, protected localstorage: LocalStorageService) { }

  obterAlunosLocal(){
    this.alunoslocal = JSON.parse(this.localstorage.get("local"));

  }
  voltar(){
    if(this.divcadastro){
      this.divalunos = true;
      this.divcadastro = false;
    }
 
  }
  excluirItem(event: { target: { value: number; }; }) { 
    let index = event.target.value;
    this.alunoslocal.splice(index, 1);
    this.localstorage.set("local", JSON.stringify(this.alunoslocal));
  }
  inputNome(event: { target: { value: string; }; }){
    this.nome = event.target.value;
  }
  inputEmail(event: { target: { value: string; }; }){
    this.email = event.target.value;
  }
  inputDtNascimento(event: { target: { value: string; }; }){
    this.dtnascimento = event.target.value;
  }
  radioSexo(event: { target: { value: string; }; }){
    this.sexo = event.target.value;
  }
  salvar(){
    this.alunoslocal.push({
    Nome: this.nome,
    Email: this.email,
    DataNascimento: this.dtnascimento,
    Sexo: this.sexo
    });
    this.localstorage.set("local", JSON.stringify(this.alunoslocal));
    this.obterAlunosLocal();
    this.voltar();
  }

  ngOnInit(): void {  

    this.http.obterAlunos().subscribe(response => {     
      this.alunos = response;
      this.localstorage.set("local", JSON.stringify(this.alunos))
      this.obterAlunosLocal();
      this.loading = false;
    });
    
  }

}
