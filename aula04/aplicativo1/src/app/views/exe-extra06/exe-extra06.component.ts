import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-extra06',
  templateUrl: './exe-extra06.component.html',
  styleUrls: ['./exe-extra06.component.css']
})
export class ExeExtra06Component implements OnInit {

  textoDiv = '';

  constructor() { }

  ngOnInit(): void {
  }

  trocarTexto() {
    this.textoDiv = 'Isso é uma div';
  }

}
