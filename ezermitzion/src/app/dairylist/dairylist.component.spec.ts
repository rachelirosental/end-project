import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairylistComponent } from './dairylist.component';

describe('DairylistComponent', () => {
  let component: DairylistComponent;
  let fixture: ComponentFixture<DairylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
