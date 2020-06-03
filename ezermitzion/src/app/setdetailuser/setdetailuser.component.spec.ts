import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetdetailuserComponent } from './setdetailuser.component';

describe('SetdetailuserComponent', () => {
  let component: SetdetailuserComponent;
  let fixture: ComponentFixture<SetdetailuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetdetailuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetdetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
