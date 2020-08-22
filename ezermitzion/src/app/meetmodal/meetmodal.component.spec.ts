import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetmodalComponent } from './meetmodal.component';

describe('MeetmodalComponent', () => {
  let component: MeetmodalComponent;
  let fixture: ComponentFixture<MeetmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
