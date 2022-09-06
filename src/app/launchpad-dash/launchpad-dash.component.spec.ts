import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadDashComponent } from './launchpad-dash.component';

describe('LaunchpadDashComponent', () => {
  let component: LaunchpadDashComponent;
  let fixture: ComponentFixture<LaunchpadDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchpadDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchpadDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
