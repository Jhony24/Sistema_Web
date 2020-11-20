import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarProyectosComponent } from './aprobar-proyectos.component';

describe('AprobarProyectosComponent', () => {
  let component: AprobarProyectosComponent;
  let fixture: ComponentFixture<AprobarProyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarProyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
