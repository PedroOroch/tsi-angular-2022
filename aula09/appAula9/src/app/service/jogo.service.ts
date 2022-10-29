import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService
{
  //Dados em memória
  private jogos:  Jogo[] = [];

  //id gerado automaticamente
  private idGerado = 1;

  constructor() { }

  inserir(jogo?:  Jogo)
  {
    if (!jogo) {
      return;
    }

    jogo.id = this.idGerado;

    this.jogos.push(jogo);

    this.idGerado++;

    this.salvar();
  }


  listar(): Jogo[]
  {

    this.ler();
    return this.jogos;
  }

  remover(id: number)
  {
    this.jogos = this.jogos.filter(jogo => jogo.id != id);

    this.salvar();
  }

  atualizar(jogo?: Jogo)
  {
    if (!jogo) {
      return;
    }
    const index = this.jogos.findIndex(j => j.id == jogo.id);

    if (index >= 0) {
      this.jogos[index] = jogo;
    }

    this.salvar();
  }

  salvar()
  {
    const DATAJSON = JSON.stringify(this.jogos);
    localStorage.setItem('jogos', DATAJSON);
    localStorage.setItem('idGerado', this.idGerado.toString());
  }

  ler ()
   {
    const DATAJSON = localStorage.getItem('jogos');
    if (DATAJSON) {
      this.jogos = JSON.parse(DATAJSON);
    }

    const IDGERADO = localStorage.getItem('idGerado');
    if(IDGERADO) {
      this.idGerado = Number(IDGERADO);
    }


  }
}
