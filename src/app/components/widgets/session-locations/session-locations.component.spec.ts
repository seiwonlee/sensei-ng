import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionLocationsComponent } from './session-locations.component';

describe('SessionLocationsComponent', () => {
  let component: SessionLocationsComponent;
  let fixture: ComponentFixture<SessionLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
