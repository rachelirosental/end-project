import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetdetailreferenceComponent } from './setdetailreference.component';

describe('SetdetailreferenceComponent', () => {
  let component: SetdetailreferenceComponent;
  let fixture: ComponentFixture<SetdetailreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetdetailreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetdetailreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
