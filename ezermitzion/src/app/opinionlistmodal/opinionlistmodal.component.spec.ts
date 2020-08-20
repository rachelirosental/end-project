import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionlistmodalComponent } from './opinionlistmodal.component';

describe('OpinionlistmodalComponent', () => {
  let component: OpinionlistmodalComponent;
  let fixture: ComponentFixture<OpinionlistmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionlistmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionlistmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
