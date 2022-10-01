import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.css']
})
export class Ex6Component implements OnInit {

  titulos = ['@joroche_joestar',
             '@padrefestajunina',
             '@ladygaga'];

  conteudos = ['we spend most of our lives living in a digital      paradise',
              'Pula fogueira!',
              'RAH RAH ROH MAH MAH OH GA UH LA LA RAH RAH AH AH'];

  constructor() { }

  ngOnInit(): void {
  }

}
