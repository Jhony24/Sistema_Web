import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarPracticasComponent } from './aprobar-practicas.component';

describe('AprobarPracticasComponent', () => {
  let component: AprobarPracticasComponent;
  let fixture: ComponentFixture<AprobarPracticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarPracticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarPracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
