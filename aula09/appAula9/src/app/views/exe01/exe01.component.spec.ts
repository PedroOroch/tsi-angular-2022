import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe01Component } from './exe01.component';

describe('Exe01Component', () => {
  let component: Exe01Component;
  let fixture: ComponentFixture<Exe01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exe01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exe01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
