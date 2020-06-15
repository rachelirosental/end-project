import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencebuttonsComponent } from './referencebuttons.component';

describe('ReferencebuttonsComponent', () => {
  let component: ReferencebuttonsComponent;
  let fixture: ComponentFixture<ReferencebuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencebuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencebuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
