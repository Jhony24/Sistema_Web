import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyRechazadosComponent } from './proy-rechazados.component';

describe('ProyRechazadosComponent', () => {
  let component: ProyRechazadosComponent;
  let fixture: ComponentFixture<ProyRechazadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyRechazadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyRechazadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
