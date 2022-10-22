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

  constructor(private jogoService: JogoService)
  {

    const JOGO = new Jogo();
    JOGO.nome = 'The Legend of Zelda';
    JOGO.genero = 'Aventura / RPG';
    JOGO.dataLanc = '2017';
    JOGO.empresa = 'Nintendo';
    JOGO.plataforma = 'Nintendo Switch';

    jogoService.inserir(JOGO);

    const JOGO2 = new Jogo();
    JOGO2.nome = 'God of War';
    JOGO2.genero = 'Hack n Slash / RPG / Aventura';
    JOGO2.dataLanc = '2018';
    JOGO2.empresa = 'Santa Monica';
    JOGO2.plataforma = 'PS4';

    jogoService.inserir(JOGO2);
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
 }

}
