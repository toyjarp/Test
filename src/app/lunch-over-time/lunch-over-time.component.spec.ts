import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchOverTimeComponent } from './lunch-over-time.component';

describe('LunchOverTimeComponent', () => {
  let component: LunchOverTimeComponent;
  let fixture: ComponentFixture<LunchOverTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchOverTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunchOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
