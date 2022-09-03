import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component implements OnInit {

  img = '../../assets/Goku.jfif';

  constructor() { }

  ngOnInit(): void {
  }

  // -- DOIS BOTÕES --
  transformarSSJ () {
    this.img = '../../assets/gokuSSJ.png'

  }

  voltarNormal () {
    this.img = '../../assets/Goku.jfif'
  }


  /*
    -- COM UM BOTÃO SÓ --

  transformacao () {
    if (this.img == '../../assets/Goku.jfif') {
      this.img = '../../assets/gokuSSJ.png';
    } else {
      this.img = '../../assets/Goku.jfif';
    }
  }
  */


}
