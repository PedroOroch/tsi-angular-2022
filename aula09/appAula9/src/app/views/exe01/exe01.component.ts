import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/model/jogo';
import { JogoService } from 'src/app/service/jogo.service';

@Component({
  selector: 'app-exe01',
  templateUrl: './exe01.component.html',
  styleUrls: ['./exe01.component.css']
})
export class Exe01Component implements OnInit
{

  jogos: Jogo[] = [];
  jogoSelecionado?: Jogo;
  estaEditando = false;

  constructor(private jogoService: JogoService)
  {


  }

  ngOnInit(): void {
    this.atualizaLista();
  }

 atualizaLista() {
  this.jogos = this.jogoService.listar();
 }

 selecionarJogo(jogo: Jogo)
 {
  this.jogoSelecionado = jogo;
  this.estaEditando = true;
 }

  cancelar() {
    this.jogoSelecionado = undefined;
    this.atualizaLista();
  }

  salvar()
  {
    if(this.estaEditando) {
      this.jogoService.atualizar(this.jogoSelecionado);

    } else {
      this.jogoService.inserir(this.jogoSelecionado)
    }

    this.cancelar();

  }

  novo ()
  {
    this.jogoSelecionado  = new Jogo();
    this.estaEditando = false;
  }

  excluir(id?: number)
  {
    if(!id) {
      return;
    }

    this.jogoService.remover(id);
    this.atualizaLista();
  }

}
