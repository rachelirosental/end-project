import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GragchartComponent } from './gragchart.component';

describe('GragchartComponent', () => {
  let component: GragchartComponent;
  let fixture: ComponentFixture<GragchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GragchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GragchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
