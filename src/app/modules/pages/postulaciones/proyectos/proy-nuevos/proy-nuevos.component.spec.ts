import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyNuevosComponent } from './proy-nuevos.component';

describe('ProyNuevosComponent', () => {
  let component: ProyNuevosComponent;
  let fixture: ComponentFixture<ProyNuevosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyNuevosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
