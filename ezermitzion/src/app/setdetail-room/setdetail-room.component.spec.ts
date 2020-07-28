import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetdetailRoomComponent } from './setdetail-room.component';

describe('SetdetailRoomComponent', () => {
  let component: SetdetailRoomComponent;
  let fixture: ComponentFixture<SetdetailRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetdetailRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetdetailRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
