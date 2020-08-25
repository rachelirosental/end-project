import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartbuttonsComponent } from './chartbuttons.component';

describe('ChartbuttonsComponent', () => {
  let component: ChartbuttonsComponent;
  let fixture: ComponentFixture<ChartbuttonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartbuttonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
