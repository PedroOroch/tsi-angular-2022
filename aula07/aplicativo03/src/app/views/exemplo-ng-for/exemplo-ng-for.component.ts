import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-ng-for',
  templateUrl: './exemplo-ng-for.component.html',
  styleUrls: ['./exemplo-ng-for.component.css']
})
export class ExemploNgForComponent implements OnInit {

  animais = ['gato',
             'cachorro',
             'calopsita',
             'onça',
             'macaco',
             'urso',
             'tubarão',
             'diabo-da-tasmânia',
             'dragão-de-comodo',
             'sucuri'];

  filmes = ['Titanic',
            'A Orfã',
            'Senhor dos Anéis',
            'Doutor Estranho MOM'];
  notas = [9,
           8,
           10,
           3,];

  constructor() { }

  ngOnInit(): void {
  }

}
