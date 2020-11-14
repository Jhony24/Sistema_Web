import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyAprobadasComponent } from './proy-aprobadas.component';

describe('ProyAprobadasComponent', () => {
  let component: ProyAprobadasComponent;
  let fixture: ComponentFixture<ProyAprobadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyAprobadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyAprobadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
