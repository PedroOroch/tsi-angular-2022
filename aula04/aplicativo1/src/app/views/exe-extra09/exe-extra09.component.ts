import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-extra09',
  templateUrl: './exe-extra09.component.html',
  styleUrls: ['./exe-extra09.component.css']
})
export class ExeExtra09Component implements OnInit {

  classeCss = '';

  constructor() { }

  ngOnInit(): void {
  }

    trocarClasse() {
      this.classeCss = 'botaoCor';
    }
}
