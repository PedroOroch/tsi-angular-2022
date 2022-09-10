import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeExtra04Component } from './exe-extra04.component';

describe('ExeExtra04Component', () => {
  let component: ExeExtra04Component;
  let fixture: ComponentFixture<ExeExtra04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeExtra04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeExtra04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
