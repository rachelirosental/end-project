import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencemodalComponent } from './referencemodal.component';

describe('ReferencemodalComponent', () => {
  let component: ReferencemodalComponent;
  let fixture: ComponentFixture<ReferencemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencemodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
