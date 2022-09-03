import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex06',
  templateUrl: './ex06.component.html',
  styleUrls: ['./ex06.component.css']
})
export class Ex06Component implements OnInit {

  texto = '';

  constructor() { }

  ngOnInit(): void {
  }

  joKenPo (text:string) {
    this.texto = text;

  }




}
