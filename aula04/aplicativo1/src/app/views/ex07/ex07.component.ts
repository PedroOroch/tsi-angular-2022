import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex07',
  templateUrl: './ex07.component.html',
  styleUrls: ['./ex07.component.css']
})
export class Ex07Component implements OnInit {

  div1 = 'divAparece';
  div2 = 'divSome';
  div3 = 'divSome';


  constructor() { }

  ngOnInit(): void {
  }

  abas(classeAba1: string, classeAba2: string, classeAba3: string) {
    this.div1 = classeAba1;
    this.div2 = classeAba2;
    this.div3 = classeAba3;
  }

}
