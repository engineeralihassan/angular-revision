import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCourseComponent } from './service-course.component';

describe('ServiceCourseComponent', () => {
  let component: ServiceCourseComponent;
  let fixture: ComponentFixture<ServiceCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
