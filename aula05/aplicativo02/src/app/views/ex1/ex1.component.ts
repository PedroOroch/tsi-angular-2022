import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {
  texto1 = '';
  texto2 = '';

  valor1 = 0;
  valor2 = 0;


  constructor() { }

  ngOnInit(): void {
  }

  limparTexto() {
    this.texto1 = '';
    this.texto2 = '';
  }

  obterTexto () {
    const TEXTOC = Number(this.texto1) * Number(this.texto2);
    return TEXTOC;
  }

}
