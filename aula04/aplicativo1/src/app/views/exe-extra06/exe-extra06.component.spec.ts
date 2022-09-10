import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeExtra06Component } from './exe-extra06.component';

describe('ExeExtra06Component', () => {
  let component: ExeExtra06Component;
  let fixture: ComponentFixture<ExeExtra06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeExtra06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeExtra06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
