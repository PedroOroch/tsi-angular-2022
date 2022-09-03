import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-evento',
  templateUrl: './ex-evento.component.html',
  styleUrls: ['./ex-evento.component.css']
})
export class ExEventoComponent implements OnInit {

  nome = 'João';

  constructor() { }

  ngOnInit(): void {
  }

  mostrarHelloWorld () {
    alert('Hello World!');
  }

  mudarTexto() {
    this.nome = 'Oroch';


  }

}
