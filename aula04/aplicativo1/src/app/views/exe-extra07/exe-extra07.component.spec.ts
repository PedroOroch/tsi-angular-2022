import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeExtra07Component } from './exe-extra07.component';

describe('ExeExtra07Component', () => {
  let component: ExeExtra07Component;
  let fixture: ComponentFixture<ExeExtra07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeExtra07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeExtra07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
