import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCLASSComponent } from './ng-class.component';

describe('NgCLASSComponent', () => {
  let component: NgCLASSComponent;
  let fixture: ComponentFixture<NgCLASSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCLASSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCLASSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
