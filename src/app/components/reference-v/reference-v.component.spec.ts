import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceVComponent } from './reference-v.component';

describe('ReferenceVComponent', () => {
  let component: ReferenceVComponent;
  let fixture: ComponentFixture<ReferenceVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferenceVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
