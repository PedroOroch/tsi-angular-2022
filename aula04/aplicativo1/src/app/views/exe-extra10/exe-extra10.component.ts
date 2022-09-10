import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-extra10',
  templateUrl: './exe-extra10.component.html',
  styleUrls: ['./exe-extra10.component.css']
})
export class ExeExtra10Component implements OnInit {

  valor1 = '';
  valor2 = '';
  resultado = 0;
  //limpar = '';

  constructor() { }

  ngOnInit(): void {
  }

  atribuirValor1(valor: string) {
    this.valor1 += valor;
  }

  atribuirValor2(valor: string) {
    this.valor2 += valor;
  }

  somar() {
    this.resultado = Number(this.valor1) + Number(this.valor2);
  }

  subtrair() {
    this.resultado = Number(this.valor1) - Number(this.valor2);
  }

  multiplicar() {
    this.resultado = Number(this.valor1) * Number(this.valor2);
  }

  dividir() {
    this.resultado = Number(this.valor1) / Number(this.valor2);
  }
  /*
    limparValor(limpar: string) {
      this.limpar = limpar
      limpar = this.valor1;
      limpar = this.valor2;
    }
  */
}

/*
  desenvolver um botao de limpar, vc é burro aprenda
*/
