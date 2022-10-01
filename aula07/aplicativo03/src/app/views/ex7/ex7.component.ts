import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.css']
})
export class Ex7Component implements OnInit {

  nome = '';

  nomes: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNomes() {
    this.nomes.push(this.nome);
    this.nome = '';
  }

}
