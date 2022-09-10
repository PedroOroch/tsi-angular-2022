import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-extra03',
  templateUrl: './exe-extra03.component.html',
  styleUrls: ['./exe-extra03.component.css']
})
export class ExeExtra03Component implements OnInit {

  classeCss = 'vermelho';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse() {
    if (this.classeCss == 'vermelho') {
      this.classeCss= 'azul';
    } else {
      this.classeCss = 'vermelho';
    }
  }

}
