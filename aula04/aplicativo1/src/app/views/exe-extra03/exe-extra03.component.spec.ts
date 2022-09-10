import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeExtra03Component } from './exe-extra03.component';

describe('ExeExtra03Component', () => {
  let component: ExeExtra03Component;
  let fixture: ComponentFixture<ExeExtra03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeExtra03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeExtra03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
