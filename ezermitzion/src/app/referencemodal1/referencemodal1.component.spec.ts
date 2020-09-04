import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Referencemodal1Component } from './referencemodal1.component';

describe('Referencemodal1Component', () => {
  let component: Referencemodal1Component;
  let fixture: ComponentFixture<Referencemodal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Referencemodal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Referencemodal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
