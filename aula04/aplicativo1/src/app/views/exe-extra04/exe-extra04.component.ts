import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe-extra04',
  templateUrl: './exe-extra04.component.html',
  styleUrls: ['./exe-extra04.component.css']
})
export class ExeExtra04Component implements OnInit {

  imagem = 'assets/shibainu.jfif';

  constructor() { }

  ngOnInit(): void {
  }

  trocarDog(imagem: string) {
    this.imagem = imagem;
  }

}
