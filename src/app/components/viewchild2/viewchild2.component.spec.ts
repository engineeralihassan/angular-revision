import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewchild2Component } from './viewchild2.component';

describe('Viewchild2Component', () => {
  let component: Viewchild2Component;
  let fixture: ComponentFixture<Viewchild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewchild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
