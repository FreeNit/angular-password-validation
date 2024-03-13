import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksolutionComponent } from './tasksolution.component';

describe('TasksolutionComponent', () => {
  let component: TasksolutionComponent;
  let fixture: ComponentFixture<TasksolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
