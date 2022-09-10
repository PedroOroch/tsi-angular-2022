import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-extra05',
  templateUrl: './exe-extra05.component.html',
  styleUrls: ['./exe-extra05.component.css']
})
export class ExeExtra05Component implements OnInit {

    nome = '';
  constructor() { }

  ngOnInit(): void {
  }

  lerNome () {
    this.nome = prompt('Digite seu nome') as string;
  }

}
