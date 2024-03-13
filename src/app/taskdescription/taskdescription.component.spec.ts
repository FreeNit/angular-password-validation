import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskdescriptionComponent } from './taskdescription.component';

describe('TaskdescriptionComponent', () => {
  let component: TaskdescriptionComponent;
  let fixture: ComponentFixture<TaskdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskdescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
