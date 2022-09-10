import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeExtra09Component } from './exe-extra09.component';

describe('ExeExtra09Component', () => {
  let component: ExeExtra09Component;
  let fixture: ComponentFixture<ExeExtra09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExeExtra09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeExtra09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
