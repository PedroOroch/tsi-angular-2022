import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  v1 = 0;
  v2 = 0;
  resultado = 0;




  constructor() { }

  ngOnInit(): void {
  }

  somar() {
    this.resultado = this.v1 + this.v2;
  }

  subtrair() {
    this.resultado = this.v1 - this.v2;
  }

  multiplicar() {
    this.resultado = this.v1 * this.v2;
  }


  dividir() {
    this.resultado = this.v1 / this.v2;
  }


}
