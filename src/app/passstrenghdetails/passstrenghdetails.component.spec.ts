import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassstrenghdetailsComponent } from './passstrenghdetails.component';

describe('PassstrenghdetailsComponent', () => {
  let component: PassstrenghdetailsComponent;
  let fixture: ComponentFixture<PassstrenghdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassstrenghdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassstrenghdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
