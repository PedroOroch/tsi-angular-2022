import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-extra07',
  templateUrl: './exe-extra07.component.html',
  styleUrls: ['./exe-extra07.component.css']
})
export class ExeExtra07Component implements OnInit {

  classeCSS = 'vermelho';

  constructor() { }

  ngOnInit(): void {
  }

  trocarClasse(classeCSS: string) {
    this.classeCSS = classeCSS;
  }

}
