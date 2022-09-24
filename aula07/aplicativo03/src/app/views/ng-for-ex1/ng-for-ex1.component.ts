import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-ex1',
  templateUrl: './ng-for-ex1.component.html',
  styleUrls: ['./ng-for-ex1.component.css']
})
export class NgForEx1Component implements OnInit {


  imagens = ['assets/tekken-7.jfif',
             'assets/aoe-iv.jfif',
             'assets/zelda-tok.jfif',
             'assets/gow-ragnarok.jfif'];

  constructor() { }

  ngOnInit(): void {
  }

}
