import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeExtra05Component } from './exe-extra05.component';

describe('ExeExtra05Component', () => {
  let component: ExeExtra05Component;
  let fixture: ComponentFixture<ExeExtra05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeExtra05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeExtra05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
