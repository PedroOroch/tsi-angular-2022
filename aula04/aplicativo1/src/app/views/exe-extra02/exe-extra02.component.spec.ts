import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeExtra02Component } from './exe-extra02.component';

describe('ExeExtra02Component', () => {
  let component: ExeExtra02Component;
  let fixture: ComponentFixture<ExeExtra02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeExtra02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeExtra02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
