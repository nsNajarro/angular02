import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSWITCHComponent } from './ng-switch.component';

describe('NgSWITCHComponent', () => {
  let component: NgSWITCHComponent;
  let fixture: ComponentFixture<NgSWITCHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSWITCHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSWITCHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
