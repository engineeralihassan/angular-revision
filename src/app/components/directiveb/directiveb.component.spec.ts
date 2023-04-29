import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivebComponent } from './directiveb.component';

describe('DirectivebComponent', () => {
  let component: DirectivebComponent;
  let fixture: ComponentFixture<DirectivebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
