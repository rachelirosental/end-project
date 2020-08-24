import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetcounselerComponent } from './meetcounseler.component';

describe('MeetcounselerComponent', () => {
  let component: MeetcounselerComponent;
  let fixture: ComponentFixture<MeetcounselerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetcounselerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetcounselerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
