import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterformComponent } from './filterform.component';

describe('FilterformComponent', () => {
  let component: FilterformComponent;
  let fixture: ComponentFixture<FilterformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
