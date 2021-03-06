import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBannerComponent } from './overview-banner.component';

describe('OverviewBannerComponent', () => {
  let component: OverviewBannerComponent;
  let fixture: ComponentFixture<OverviewBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
