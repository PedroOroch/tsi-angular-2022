import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-extra08',
  templateUrl: './exe-extra08.component.html',
  styleUrls: ['./exe-extra08.component.css']
})
export class ExeExtra08Component implements OnInit {

  classeCss = 'mouseOff';

  constructor() { }

  ngOnInit(): void {
  }
  trocarClasse(classe: string) {
    this.classeCss = classe;
  }
}
