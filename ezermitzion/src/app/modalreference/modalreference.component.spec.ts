import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalreferenceComponent } from './modalreference.component';

describe('ModalreferenceComponent', () => {
  let component: ModalreferenceComponent;
  let fixture: ComponentFixture<ModalreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
