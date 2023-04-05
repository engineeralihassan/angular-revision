import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databinding02Component } from './databinding02.component';

describe('Databinding02Component', () => {
  let component: Databinding02Component;
  let fixture: ComponentFixture<Databinding02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Databinding02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Databinding02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
