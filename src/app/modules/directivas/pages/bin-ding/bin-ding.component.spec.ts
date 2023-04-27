import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinDINGComponent } from './bin-ding.component';

describe('BinDINGComponent', () => {
  let component: BinDINGComponent;
  let fixture: ComponentFixture<BinDINGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinDINGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinDINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
