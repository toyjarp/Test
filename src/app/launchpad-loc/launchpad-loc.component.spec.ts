import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadLocComponent } from './launchpad-loc.component';

describe('LaunchpadLocComponent', () => {
  let component: LaunchpadLocComponent;
  let fixture: ComponentFixture<LaunchpadLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchpadLocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchpadLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
