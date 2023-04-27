import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMODELComponent } from './ng-model.component';

describe('NgMODELComponent', () => {
  let component: NgMODELComponent;
  let fixture: ComponentFixture<NgMODELComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMODELComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMODELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
