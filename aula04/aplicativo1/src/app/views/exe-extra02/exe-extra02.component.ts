import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-extra02',
  templateUrl: './exe-extra02.component.html',
  styleUrls: ['./exe-extra02.component.css']
})
export class ExeExtra02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  somar(valor1: number, valor2: number){
    return valor1 + valor2;
  }

}
