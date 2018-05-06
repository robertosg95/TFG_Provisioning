import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Callback1Component } from './callback1.component';

describe('Callback1Component', () => {
  let component: Callback1Component;
  let fixture: ComponentFixture<Callback1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Callback1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Callback1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
