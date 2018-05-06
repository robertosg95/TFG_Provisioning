import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedLocalComponent } from './red-local.component';

describe('RedLocalComponent', () => {
  let component: RedLocalComponent;
  let fixture: ComponentFixture<RedLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
