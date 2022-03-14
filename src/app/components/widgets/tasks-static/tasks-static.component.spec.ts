import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksStaticComponent } from './tasks-static.component';

describe('TasksStaticComponent', () => {
  let component: TasksStaticComponent;
  let fixture: ComponentFixture<TasksStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
