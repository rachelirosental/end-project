import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdairyComponent } from './newdairy.component';

describe('NewdairyComponent', () => {
  let component: NewdairyComponent;
  let fixture: ComponentFixture<NewdairyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdairyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
