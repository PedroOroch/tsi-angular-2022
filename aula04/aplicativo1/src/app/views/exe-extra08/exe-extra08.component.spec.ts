import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeExtra08Component } from './exe-extra08.component';

describe('ExeExtra08Component', () => {
  let component: ExeExtra08Component;
  let fixture: ComponentFixture<ExeExtra08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeExtra08Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeExtra08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
