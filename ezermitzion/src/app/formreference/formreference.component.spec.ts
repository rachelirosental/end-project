import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreferenceComponent } from './formreference.component';

describe('FormreferenceComponent', () => {
  let component: FormreferenceComponent;
  let fixture: ComponentFixture<FormreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
