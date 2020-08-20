import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionmaodalComponent } from './opinionmaodal.component';

describe('OpinionmaodalComponent', () => {
  let component: OpinionmaodalComponent;
  let fixture: ComponentFixture<OpinionmaodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionmaodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionmaodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
