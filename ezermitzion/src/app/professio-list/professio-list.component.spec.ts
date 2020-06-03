import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessioListComponent } from './professio-list.component';

describe('ProfessioListComponent', () => {
  let component: ProfessioListComponent;
  let fixture: ComponentFixture<ProfessioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
