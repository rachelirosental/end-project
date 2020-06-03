import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionDetialsComponent } from './profession-detials.component';

describe('ProfessionDetialsComponent', () => {
  let component: ProfessionDetialsComponent;
  let fixture: ComponentFixture<ProfessionDetialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionDetialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
