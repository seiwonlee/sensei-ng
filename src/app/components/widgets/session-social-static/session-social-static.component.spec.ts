import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSocialStaticComponent } from './session-social-static.component';

describe('SessionSocialStaticComponent', () => {
  let component: SessionSocialStaticComponent;
  let fixture: ComponentFixture<SessionSocialStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionSocialStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSocialStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
