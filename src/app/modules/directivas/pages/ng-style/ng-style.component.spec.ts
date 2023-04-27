import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSTYLEComponent } from './ng-style.component';

describe('NgSTYLEComponent', () => {
  let component: NgSTYLEComponent;
  let fixture: ComponentFixture<NgSTYLEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSTYLEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSTYLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
