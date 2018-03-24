import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesBuscadorComponent } from './instalaciones-buscador.component';

describe('InstalacionesBuscadorComponent', () => {
  let component: InstalacionesBuscadorComponent;
  let fixture: ComponentFixture<InstalacionesBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionesBuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionesBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
