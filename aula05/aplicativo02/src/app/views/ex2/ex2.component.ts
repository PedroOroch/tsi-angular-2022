import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  dogBreed = '';

  pinscher = 'pinscher';
  aBully = 'america bully';
  shibainu = 'shiba inu';

  imagem = '';


  constructor() { }

  ngOnInit(): void {
  }



}
