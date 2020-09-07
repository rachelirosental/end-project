import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmodalrefComponent } from './newmodalref.component';

describe('NewmodalrefComponent', () => {
  let component: NewmodalrefComponent;
  let fixture: ComponentFixture<NewmodalrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmodalrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmodalrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
