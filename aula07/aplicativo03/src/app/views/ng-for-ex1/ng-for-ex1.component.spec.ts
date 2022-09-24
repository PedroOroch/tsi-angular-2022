import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForEx1Component } from './ng-for-ex1.component';

describe('NgForEx1Component', () => {
  let component: NgForEx1Component;
  let fixture: ComponentFixture<NgForEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForEx1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
