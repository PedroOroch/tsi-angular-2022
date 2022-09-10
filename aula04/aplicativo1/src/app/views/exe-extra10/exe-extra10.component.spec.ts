import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeExtra10Component } from './exe-extra10.component';

describe('ExeExtra10Component', () => {
  let component: ExeExtra10Component;
  let fixture: ComponentFixture<ExeExtra10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeExtra10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeExtra10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
