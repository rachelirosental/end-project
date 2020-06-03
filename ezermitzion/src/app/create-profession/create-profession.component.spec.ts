import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfessionComponent } from './create-profession.component';

describe('CreateProfessionComponent', () => {
  let component: CreateProfessionComponent;
  let fixture: ComponentFixture<CreateProfessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
