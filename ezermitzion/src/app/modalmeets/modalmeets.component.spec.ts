import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalmeetsComponent } from './modalmeets.component';

describe('ModalmeetsComponent', () => {
  let component: ModalmeetsComponent;
  let fixture: ComponentFixture<ModalmeetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalmeetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalmeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
