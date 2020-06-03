import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersbuttonsComponent } from './usersbuttons.component';

describe('UsersbuttonsComponent', () => {
  let component: UsersbuttonsComponent;
  let fixture: ComponentFixture<UsersbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
