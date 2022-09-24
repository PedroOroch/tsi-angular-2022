import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForEx2Component } from './ng-for-ex2.component';

describe('NgForEx2Component', () => {
  let component: NgForEx2Component;
  let fixture: ComponentFixture<NgForEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForEx2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
