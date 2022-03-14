import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueStreamStaticComponent } from './revenue-stream-static.component';

describe('RevenueStreamStaticComponent', () => {
  let component: RevenueStreamStaticComponent;
  let fixture: ComponentFixture<RevenueStreamStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueStreamStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueStreamStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
