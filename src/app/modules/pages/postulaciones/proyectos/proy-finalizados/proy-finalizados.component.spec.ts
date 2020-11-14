import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyFinalizadosComponent } from './proy-finalizados.component';

describe('ProyFinalizadosComponent', () => {
  let component: ProyFinalizadosComponent;
  let fixture: ComponentFixture<ProyFinalizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyFinalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyFinalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
