import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-ex2',
  templateUrl: './ng-for-ex2.component.html',
  styleUrls: ['./ng-for-ex2.component.css']
})
export class NgForEx2Component implements OnInit {

  paises = ['Espanha',
          'Bostil',
          'Japão',
          'Grécia'];

  constructor() { }

  ngOnInit(): void {
  }

  alertPais (pais: string) {

      alert(pais);

  }
}
